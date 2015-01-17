var client = {
  builder: {},
  entity: {},
  gateway: {}
};

client.entity.KeyEntity = require('./key-entity');
client.entity.PublicKeyEntity = require('./public-key-entity');
client.entity.PrivateKeyEntity = require('./private-key-entity');
client.entity.UserEntity = require('./user-entity');
client.entity.MessageEntity = require('./message-entity');
client.entity.EncryptedMessageEntity = require('./encrypted-message-entity');
client.entity.DecryptedMessageEntity = require('./decrypted-message-entity');

client.gateway.message = require('./message-gateway');

client.crypto = require('./crypto');

client.createMessage = require('./create-message');

module.exports = client;