# BlockChain
This is a simple blockchain application for testing.

### Install, build and run
```shell
# Install packages
npm install

# Build application
npm run build

# Start application
npm run start
```

### Example result
```shell
Mined! > 420bb1a357e8fb055fecef141d6bac39114115eabf176cf2d93c560393da14f0 with nonce 1505
Mined! > 420c1560ff31e85264ca6e1fb8ca1cca4c3c9c68e69f3f705eb8a3553b6d9b9d with nonce 270
Mined! > 42052c34ed5118aab3553a1a41628d91ffeec42819cafa6044104a0a8a1196b4 with nonce 5542
Mined! > 42081e2b8cd9c55998d66cab1528a7463ae57a078ec1b6ab4a43b9e08821d181 with nonce 20672
Mined! > 420d14b0beadcd91001870e19bc4d317b5104a179f85fe1efbedc70769753ae6 with nonce 5703

Blocks mined array:
[
  {
    "index": 0,
    "data": "First block! YAY!",
    "date": "2021-08-11T21:03:45.201Z",
    "previousHash": "",
    "hash": "cc114bac031e1f62dd9ec7e26f806baeed926ec3f4c9988fdbc43eafcd723ae5",
    "nonce": 0
  },
  {
    "index": 1,
    "data": "One more block",
    "date": "2021-08-11T21:03:45.204Z",
    "previousHash": "cc114bac031e1f62dd9ec7e26f806baeed926ec3f4c9988fdbc43eafcd723ae5",
    "hash": "420bb1a357e8fb055fecef141d6bac39114115eabf176cf2d93c560393da14f0",
    "nonce": 1505
  },
  {
    "index": 2,
    "data": "One more block",
    "date": "2021-08-11T21:03:45.277Z",
    "previousHash": "420bb1a357e8fb055fecef141d6bac39114115eabf176cf2d93c560393da14f0",
    "hash": "420c1560ff31e85264ca6e1fb8ca1cca4c3c9c68e69f3f705eb8a3553b6d9b9d",
    "nonce": 270
  },
  {
    "index": 3,
    "data": "One more block",
    "date": "2021-08-11T21:03:45.289Z",
    "previousHash": "420c1560ff31e85264ca6e1fb8ca1cca4c3c9c68e69f3f705eb8a3553b6d9b9d",
    "hash": "42052c34ed5118aab3553a1a41628d91ffeec42819cafa6044104a0a8a1196b4",
    "nonce": 5542
  },
  {
    "index": 4,
    "data": "One more block",
    "date": "2021-08-11T21:03:45.446Z",
    "previousHash": "42052c34ed5118aab3553a1a41628d91ffeec42819cafa6044104a0a8a1196b4",
    "hash": "42081e2b8cd9c55998d66cab1528a7463ae57a078ec1b6ab4a43b9e08821d181",
    "nonce": 20672
  },
  {
    "index": 5,
    "data": "One more block",
    "date": "2021-08-11T21:03:45.896Z",
    "previousHash": "42081e2b8cd9c55998d66cab1528a7463ae57a078ec1b6ab4a43b9e08821d181",
    "hash": "420d14b0beadcd91001870e19bc4d317b5104a179f85fe1efbedc70769753ae6",
    "nonce": 5703
  }
]
```

### 📚 Libs used
- [crypto-js](https://github.com/brix/crypto-js)