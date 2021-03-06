/**
 * @file changelog command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const CHANGES = require('../../changes.json');

exports.run = (Bastion, message) => {
  let changes = [];
  if (CHANGES.fixed.length !== 0) {
    changes.push({
      name: 'Fixed:',
      value: `- ${CHANGES.fixed.join('\n- ')}`
    });
  }
  if (CHANGES.improved.length !== 0) {
    changes.push({
      name: 'Improved:',
      value: `- ${CHANGES.improved.join('\n- ')}`
    });
  }
  if (CHANGES.added.length !== 0) {
    changes.push({
      name: 'Added:',
      value: `- ${CHANGES.added.join('\n- ')}`
    });
  }
  if (CHANGES.removed.length !== 0) {
    changes.push({
      name: 'Removed:',
      value: `- ${CHANGES.removed.join('\n- ')}`
    });
  }

  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      title: `Bastion Bot v${Bastion.package.version} Changelog`,
      url: 'https://github.com/TheBastionBot/Bastion/releases',
      description: 'Missed an update? [Check out our previous change logs](https://github.com/TheBastionBot/Bastion/releases)',
      fields: changes,
      thumbnail: {
        url: Bastion.user.displayAvatarURL
      },
      footer: {
        text: CHANGES.date
      }
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'clog', 'changes' ],
  enabled: true
};

exports.help = {
  name: 'changelog',
  botPermission: '',
  userPermission: '',
  usage: 'changelog',
  example: []
};
