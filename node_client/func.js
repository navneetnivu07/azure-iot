context.bindings.outputTable = {
    "partitionKey": IoTHubMessages.Hostname,
    "rowKey": IoTHubMessages.Timestamp,
    "humidity": hum,
    "pressure": pres,
    "temperature": temp
}

context.bindings.outputTable = {
    "partitionKey": IoTHubMessages.Hostname,
    "rowKey": IoTHubMessages.Timestamp,
    "humidity": hum,
    "pressure": pres,
    "temperature": temp
}


module.exports = function (context, IoTHubMessages) {
    context.log(`JavaScript eventhub trigger function called for message array: ${IoTHubMessages}`);

    var temp = 10;
    var hum = 10;
    var pres = 10;
    var deviceId = "";
    const date = new Date();

    IoTHubMessages.forEach(message => {
        context.log(`Processed message: ${message.deviceId}`);
        deviceId = message.deviceId;
        temp = message.temperature;
        hum = message.temperature;
        pres = message.pressure;

    });

    context.bindings.outputTable = {
        "partitionKey": deviceId,
        "rowKey": date.getTime(),
        "Timestamp": date.getTime(),
        "humidity": hum,
        "pressure": pres,
        "temperature": temp
    }

    context.done();
};

module.exports = function (context, IoTHubMessages) {
    context.log(`JS eventhub trigger func for message array: ${JSON.stringify(IoTHubMessages)}`);

    var temp = 100000;
    var hum = 100000;
    var pres = 100000;
    var deviceId = "fn";
    const date = new Date();

    IoTHubMessages.forEach(message => {
        context.log(`Processed message: ${message}`);
        /*deviceId = message.deviceId;
        temp = message.temperature;
        hum = message.humidity;
        pres = message.humidity;*/

    });

    if (deviceId != null) {
        context.bindings.outputTable = {
            "partitionKey": deviceId,
            "rowKey": date.getTime(),
            "Timestamp": date.getTime(),
            "humidity": hum,
            "pressure": pres,
            "temperature": temp
        }

    }

    context.done();

};