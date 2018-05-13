/**
 * @flow
 * @relayHash e6053a5fe457d25502629639118192f7
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
  user(id: "5af7008b127169039af67b5f") {
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
    "value": "5af7008b127169039af67b5f",
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
  "text": "query SelfPointsQuery {\n  user(id: \"5af7008b127169039af67b5f\") {\n    points\n    id\n  }\n}\n",
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
        "storageKey": "user(id:\"5af7008b127169039af67b5f\")",
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
        "storageKey": "user(id:\"5af7008b127169039af67b5f\")",
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
(node/*: any*/).hash = 'b60d96a90e1ba33362d0b1b5bef348f4';
module.exports = node;
