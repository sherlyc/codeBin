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

// output :
checking client sherly 1
checking client john 0
checking client lewis 1
checking client anna 1
checking client done 1
emailing: sherly
emailing: lewis
emailing: anna
emailing: done
emailing Admin to make phone call to: sherly
emailing Admin to make phone call to: lewis
emailing Admin to make phone call to: anna
emailing Admin to make phone call to: done
