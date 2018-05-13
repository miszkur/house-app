/**
 * @flow
 * @relayHash 2e43da952674fbb0b2fef189f448d527
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DaysTillDeadlineQueryVariables = {||};
export type DaysTillDeadlineQueryResponse = {|
  +room: ?{|
    +sprint: ?{|
      +deadline: ?string
    |}
  |}
|};
*/


/*
query DaysTillDeadlineQuery {
  room(id: "5af73569ca392b2b8fd60a39") {
    sprint {
      deadline
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "5af73569ca392b2b8fd60a39",
    "type": "ID"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deadline",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DaysTillDeadlineQuery",
  "id": null,
  "text": "query DaysTillDeadlineQuery {\n  room(id: \"5af73569ca392b2b8fd60a39\") {\n    sprint {\n      deadline\n      id\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DaysTillDeadlineQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "room",
        "storageKey": "room(id:\"5af73569ca392b2b8fd60a39\")",
        "args": v0,
        "concreteType": "Room",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sprint",
            "storageKey": null,
            "args": null,
            "concreteType": "Sprint",
            "plural": false,
            "selections": [
              v1
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DaysTillDeadlineQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "room",
        "storageKey": "room(id:\"5af73569ca392b2b8fd60a39\")",
        "args": v0,
        "concreteType": "Room",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sprint",
            "storageKey": null,
            "args": null,
            "concreteType": "Sprint",
            "plural": false,
            "selections": [
              v1,
              v2
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0df2a367615caf82ac1c41d3c13d9e4b';
module.exports = node;
