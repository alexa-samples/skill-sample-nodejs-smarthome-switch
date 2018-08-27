// -*- coding: utf-8 -*-

// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

// Licensed under the Amazon Software License (the "License"). You may not use this file except in
// compliance with the License. A copy of the License is located at

//    http://aws.amazon.com/asl/

// or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific
// language governing permissions and limitations under the License.

const AlexaResponse = require("../alexa/skills/smarthome/AlexaResponse");
var assert = require('assert');

describe('AlexaResponse', function() {
    describe('TestResponse', function() {

        it('Test Response instantiation with defaults', function() {
            let response = new AlexaResponse();

            assert.equal(response.event.header.namespace, "Alexa", "Namespace!");
            assert.equal(response.event.header.name, "Response", "Name!");
        });

        it('Test ErrorResponse instantiation', function() {
            let response = new AlexaResponse({"namespace":"Alexa", "name": "ErrorResponse"});
            response.event.payload = {"type": "INVALID_SOMETHING", "message": "ERROR_MESSAGE"};

            assert.equal(response.event.header.namespace, "Alexa", "Namespace!");
            assert.equal(response.event.header.name, "ErrorResponse", "Name!");
            assert.equal(response.event.payload.type, "INVALID_SOMETHING", "Type!");
            assert.equal(response.event.payload.message, "ERROR_MESSAGE", "Message!");
        });

        it('Test Discover.Response instantiation', function() {
            let response = new AlexaResponse({"namespace":"Alexa.Discovery", "name": "Discover.Response"});
            response.addPayloadEndpoint();
            let capability_alexa = response.createPayloadEndpointCapability();
            let capability_alexa_powercontroller = response.createPayloadEndpointCapability({"interface": "Alexa.PowerController", "supported": [{"name": "powerState"}]});
            response.addPayloadEndpoint({"endpointId": "switch_sample", "capabilities": [capability_alexa, capability_alexa_powercontroller]});

            assert.equal(response.event.header.namespace, "Alexa.Discovery", "Namespace!");
            assert.equal(response.event.header.name, "Discover.Response", "Name!");
            assert.equal(response.event.payload.endpoints[0].friendlyName, "Sample Endpoint", "Friendly Name!");
            assert.equal(response.event.payload.endpoints[1].capabilities[0].type, "AlexaInterface");
            assert.equal(response.event.payload.endpoints[1].capabilities[0].interface, "Alexa");
            assert.equal(response.event.payload.endpoints[1].capabilities[1].interface, "Alexa.PowerController");
        });

        it('Test full instantiation', function(){
            let opts = {
                "context": {
                    "properties": [
                        {
                            "namespace": "Alexa.ThermostatController",
                            "name": "targetSetpoint",
                            "value": {
                                "value": 25,
                                "scale": "CELSIUS"
                            },
                            "timeOfSample": "2017-02-03T16:20:50.52Z",
                            "uncertaintyInMilliseconds": 500
                        },
                        {
                            "namespace": "Alexa.ThermostatController",
                            "name": "thermostatMode",
                            "value": "HEAT",
                            "timeOfSample": "2017-02-03T16:20:50.52Z",
                            "uncertaintyInMilliseconds": 500
                        }
                    ]
                },
                "event": {
                    "header": {
                        "namespace": "Alexa",
                        "name": "Response",
                        "payloadVersion": "3",
                        "messageId": "5f8a426e-01e4-4cc9-8b79-65f8bd0fd8a4",
                        "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
                    },
                    "endpoint": {
                        "endpointId": "appliance-001"
                    },
                    "payload": {}
                }
            };
            let response = new AlexaResponse(opts);

            assert.equal(response.event.header.namespace, "Alexa", "Namespace!");
            assert.equal(response.event.header.messageId, "5f8a426e-01e4-4cc9-8b79-65f8bd0fd8a4", "Message ID!");
            assert.equal(response.context.properties[0].namespace, "Alexa.ThermostatController", "Property Namespace!");
            assert.equal(response.context.properties[0].name, "targetSetpoint", "Property Name!");
            assert.equal(response.context.properties[1].name, "thermostatMode", "Property Name!");
            assert.equal(response.context.properties[1].uncertaintyInMilliseconds, 500);
        })

    });
});