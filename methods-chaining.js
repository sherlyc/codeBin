// this code was about methods chaining, callback and array handling.

function emailActiveClients(clients) {
  clients
    .filter(isActiveClient)
    .map(sendEmail)
    .forEach(emailAdmin)
}

function sendEmail(client) {
  console.log('emailing:', client.name)
  return client.name
}

function emailAdmin(name) {
  console.log("emailing Admin to make phone call to:", name)
  return makePhoneCall
}

function makePhoneCall() {
  console.log("makePhoneCall called")
}

function isActiveClient(client) {
  console.log('checking client', client.name, client.status)
  return client.status
}

const clients = [{
    name: 'sherly',
    status: 1
  },
  {
    name: 'john',
    status: 0
  },
  {
    name: 'lewis',
    status: 1
  },
  {
    name: 'anna',
    status: 1
  },
  {
    name: 'done',
    status: 1
  },
]

emailActiveClients(clients)
