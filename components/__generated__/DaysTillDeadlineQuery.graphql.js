/**
 * @flow
 * @relayHash 289640aeb115f1c015552433a7623192
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
  room(id: 1) {
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
    "value": 1,
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
  "text": "query DaysTillDeadlineQuery {\n  room(id: 1) {\n    sprint {\n      deadline\n      id\n    }\n    id\n  }\n}\n",
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
        "storageKey": "room(id:1)",
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
        "storageKey": "room(id:1)",
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
(node/*: any*/).hash = 'd2991a4f4ab0db61982fcc5ca25739a0';
module.exports = node;
