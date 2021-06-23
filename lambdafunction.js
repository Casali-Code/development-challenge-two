const AWS = require("aws-sdk");

AWS.config.update({
	region: "us-east-2",
});

const ddb = new AWS.DynamoDB.DocumentClient();
const ddbTableName = "Patient";
const patientsPath = "/patients";
const patientPath = "/patient";

exports.handler = async function (event) {
	console.log("Request event: ", event);
	let response;
	switch (true) {
		case event.httpMethod === "GET" && event.path === patientsPath:
			response = await getPatients();
			break;
		case event.httpMethod === "GET" && event.path === patientPath:
			response = await getPatient(event.queryStringParameters.patientId);
			break;
		case event.httpMethod === "POST" && event.path === patientPath:
			response = await savePatient(JSON.parse(event.body));
			break;
		case event.httpMethod === "PATCH" && event.path === patientPath:
			const requestBody = JSON.parse(event.body);
			response = await modifyPatient(
				requestBody.patientId,
				requestBody.updateKey,
				requestBody.updateValue
			);
			break;
		case event.httpMethod === "DELETE" && event.path === patientPath:
			response = await deletePatient(JSON.parse(event.body).patientId);
			break;
	}
	return response;
};

async function getPatient(patientId) {
	const params = {
		TableName: ddbTableName,
		Key: {
			patientId: patientId,
		},
	};
	return await ddb
		.get(params)
		.promise()
		.then(
			(response) => {
				return buildResponse(200, response.Item);
			},
			(error) => {
				console.error("Sorry, there was an error: ", error);
			}
		);
}

async function getPatients() {
	const params = {
		TableName: ddbTableName,
	};
	const allPatients = await scanDynamoRecords(params, []);
	const body = {
		patients: allPatients,
	};
	return buildResponse(200, body);
}

async function scanDynamoRecords(scanParams, itemArray) {
	try {
		const dynamoData = await ddb.scan(scanParams).promise();
		itemArray = itemArray.concat(dynamoData.Items);
		if (dynamoData.LastEvaluatedKey) {
			scanParams.ExclusiveStartkey = dynamoData.LastEvaluatedKey;
			return await scanDynamoRecords(scanParams, itemArray);
		}
		return itemArray;
	} catch (error) {
		console.error("Sorry, there was an error: ", error);
	}
}

async function savePatient(requestBody) {
	const params = {
		TableName: ddbTableName,
		Item: requestBody,
	};
	return await ddb
		.put(params)
		.promise()
		.then(
			() => {
				const body = {
					Operation: "SAVE",
					Message: "SUCCESS",
					Item: requestBody,
				};
				return buildResponse(200, body);
			},
			(error) => {
				console.error("Sorry, there was an error: ", error);
			}
		);
}

async function modifyPatient(patientId, updateKey, updateValue) {
	const params = {
		TableName: ddbTableName,
		Key: {
			patientId: patientId,
		},
		UpdateExpression: `set ${updateKey} = :value`,
		ExpressionAttributeValues: {
			":value": updateValue,
		},
		ReturnValues: "UPDATED_NEW",
	};
	return await ddb
		.update(params)
		.promise()
		.then(
			(response) => {
				const body = {
					Operation: "UPDATE",
					Message: "SUCCESS",
					UpdatedAttributes: response,
				};
				return buildResponse(200, body);
			},
			(error) => {
				console.error("Sorry, there was an error: ", error);
			}
		);
}

async function deletePatient(patientId) {
	const params = {
		TableName: ddbTableName,
		Key: {
			patientId: patientId,
		},
		ReturnValues: "ALL_OLD",
	};
	return await ddb
		.delete(params)
		.promise()
		.then(
			(response) => {
				const body = {
					Operation: "DELETE",
					Message: "SUCCESS",
					Item: response,
				};
				return buildResponse(200, body);
			},
			(error) => {
				console.error("Sorry, there was an error: ", error);
			}
		);
}

function buildResponse(statusCode, body) {
	return {
		statusCode: statusCode,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,DELETE",
		},
		body: JSON.stringify(body),
	};
}
