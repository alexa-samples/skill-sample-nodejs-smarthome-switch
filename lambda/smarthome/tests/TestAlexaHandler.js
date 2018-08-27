// -*- coding: utf-8 -*-

// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

// Licensed under the Amazon Software License (the "License"). You may not use this file except in
// compliance with the License. A copy of the License is located at

//    http://aws.amazon.com/asl/

// or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific
// language governing permissions and limitations under the License.

const https = require('https');
const index = require("../index");
let assert = require('assert');

// const sampleUri = "https://raw.githubusercontent.com/alexa/alexa-smarthome/master/sample_messages/";


function getSample(sample_json, callback) {

    let options = {
        hostname: 'raw.githubusercontent.com',
        port: 443,
        path: '/alexa/alexa-smarthome/master/sample_messages/' + sample_json,
        headers: { 'Content-Type': 'application/json' }
    };

    let json_string = "";

    let req = https.request(options, (res) => {

        res.setEncoding('utf8');
        res.on('data', (data) => {
            json_string += data;
        });

        res.on('end', () => {
            callback(JSON.parse(json_string));
        });

        req.on('error', (e) => {
            console.error(e);
        });

    });

    req.end();
}


describe('AlexaHandler', function() {
    describe('TestIndex', function() {

        it('Test the index for Authorization', function() {
            getSample("Authorization/Authorization.AcceptGrant.request.json", function (json_data) {
                index.handler(json_data, undefined).then(function(response) {
                    // fulfillment
                    console.log(response.event.header.namespace);
                    assert.equal(response.event.header.namespace, "Alexa.Authorization");
                    assert.equal(response.event.header.name, "AcceptGrant.Response");
                }, function(reason) {
                    // rejection
                    console.log("rejection value:", reason);
                });
            });
        });

        it('Test the index for Discovery', function() {
            getSample("Discovery/Discovery.request.json", function (json_data) {
                index.handler(json_data, undefined).then(function(response) {
                    // fulfillment
                    console.log(response.event.header.namespace);
                    assert.equal(response.event.header.namespace, "Alexa.Discovery");
                    assert.equal(response.event.header.name, "Discover.Response");
                }, function(reason) {
                    // rejection
                    console.log("rejection value:", reason);
                });
            });
        });

        it('Test the index for PowerController', function() {
            getSample("PowerController/PowerController.TurnOff.request.json", function (json_data) {
                index.handler(json_data, undefined).then(function(response) {
                    // fulfillment
                    console.log(response.event.header.namespace);
                    assert.equal(response.context.properties[0].namespace, "Alexa.PowerController");
                    assert.equal(response.context.properties[0].name, "powerState");
                }, function(reason) {
                    // rejection
                    console.log("rejection value:", reason);
                });
            });
        });
    });
});