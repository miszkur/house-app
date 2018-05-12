/**
 * @flow
 * @relayHash 6447d8e779160907e81d5f09952af36a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SelfPointsQueryVariables = {||};
export type SelfPointsQueryResponse = {|
  +user: ?{|
    +points: ?number
  |}
|};
*/


/*
query SelfPointsQuery {
  user(id: 1) {
    points
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
  "name": "points",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SelfPointsQuery",
  "id": null,
  "text": "query SelfPointsQuery {\n  user(id: 1) {\n    points\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SelfPointsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(id:1)",
        "args": v0,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SelfPointsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(id:1)",
        "args": v0,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d4481b216816b32c3859743c0a91ce2';
module.exports = node;
