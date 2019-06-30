$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/FlightRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "Mercury page -\u003e Testing Register link functionlaity",
  "description": "",
  "id": "mercury-page--\u003e-testing-register-link-functionlaity",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6907775055,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Check Register link on page",
  "description": "",
  "id": "mercury-page--\u003e-testing-register-link-functionlaity;check-register-link-on-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Click on the Register link in the Home page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Register page should displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "FlightRegistration.navigatetotheflightapplication()"
});
formatter.result({
  "duration": 1154305389,
  "status": "passed"
});
formatter.match({
  "location": "FlightRegistration.clickonregisterlink()"
});
formatter.result({
  "duration": 3036130378,
  "status": "passed"
});
formatter.match({
  "location": "FlightRegistration.verifyregisterpagedispay()"
});
formatter.result({
  "duration": 11410673,
  "status": "passed"
});
formatter.match({
  "location": "FlightRegistration.closethebrowser()"
});
formatter.result({
  "duration": 935812503,
  "status": "passed"
});
formatter.after({
  "duration": 138132,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Testing the user Registration",
  "description": "",
  "id": "mercury-page--\u003e-testing-register-link-functionlaity;testing-the-user-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click on the Register link in the Home page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter \"\u003cusername\u003e\" ,\"\u003cpassword\u003e\" and \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the \"\u003cusername\u003e\" created sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "mercury-page--\u003e-testing-register-link-functionlaity;testing-the-user-registration;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "confirmPassword"
      ],
      "line": 16,
      "id": "mercury-page--\u003e-testing-register-link-functionlaity;testing-the-user-registration;;1"
    },
    {
      "cells": [
        "test123",
        "test",
        "test"
      ],
      "line": 17,
      "id": "mercury-page--\u003e-testing-register-link-functionlaity;testing-the-user-registration;;2"
    },
    {
      "cells": [
        "test789",
        "cucumber",
        "cucumber"
      ],
      "line": 18,
      "id": "mercury-page--\u003e-testing-register-link-functionlaity;testing-the-user-registration;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4454878831,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Testing the user Registration",
  "description": "",
  "id": "mercury-page--\u003e-testing-register-link-functionlaity;testing-the-user-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click on the Register link in the Home page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter \"test123\" ,\"test\" and \"test\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the \"test123\" created sucessfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "FlightRegistration.navigatetotheflightapplication()"
});
formatter.result({
  "duration": 1001288523,
  "status": "passed"
});
formatter.match({
  "location": "FlightRegistration.clickonregisterlink()"
});
formatter.result({
  "duration": 2691729208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 7
    },
    {
      "val": "test",
      "offset": 18
    },
    {
      "val": "test",
      "offset": 29
    }
  ],
  "location": "FlightRegistration.entervalues(String,String,String)"
});
formatter.result({
  "duration": 3542660019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 14
    }
  ],
  "location": "FlightRegistration.verifyusercreation(String)"
});
formatter.result({
  "duration": 180677550,
  "status": "passed"
});
formatter.match({
  "location": "FlightRegistration.closethebrowser()"
});
formatter.result({
  "duration": 928857987,
  "status": "passed"
});
formatter.after({
  "duration": 35495,
  "status": "passed"
});
formatter.before({
  "duration": 4490493458,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Testing the user Registration",
  "description": "",
  "id": "mercury-page--\u003e-testing-register-link-functionlaity;testing-the-user-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click on the Register link in the Home page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter \"test789\" ,\"cucumber\" and \"cucumber\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the \"test789\" created sucessfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "FlightRegistration.navigatetotheflightapplication()"
});
formatter.result({
  "duration": 791394055,
  "status": "passed"
});
formatter.match({
  "location": "FlightRegistration.clickonregisterlink()"
});
formatter.result({
  "duration": 2682120670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test789",
      "offset": 7
    },
    {
      "val": "cucumber",
      "offset": 18
    },
    {
      "val": "cucumber",
      "offset": 33
    }
  ],
  "location": "FlightRegistration.entervalues(String,String,String)"
});
formatter.result({
  "duration": 3596070198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test789",
      "offset": 14
    }
  ],
  "location": "FlightRegistration.verifyusercreation(String)"
});
formatter.result({
  "duration": 423713947,
  "status": "passed"
});
formatter.match({
  "location": "FlightRegistration.closethebrowser()"
});
formatter.result({
  "duration": 1070139163,
  "status": "passed"
});
formatter.after({
  "duration": 39344,
  "status": "passed"
});
});