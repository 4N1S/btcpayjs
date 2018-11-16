import './scss/main.scss';

import btcpay from 'btcpay';



// Aae3kBiFjfHYiMfvh6yFC4drw2i6HjzMT9WRUTHSe2nY

//Ir7WiIEPpDpZYbOUR7QrP07kLi10HRilYWLdobMGhdk

// const keypair = btcpay.crypto.load_keypair(new Buffer.from("Aae3kBiFjfHYiMfvh6yFC4drw2i6HjzMT9WRUTHSe2nY", 'hex'))
// const client = new btcpay.BTCPayClient("https://mainnet.demo.btcpayserver.org/apps/2G7Z7TFyozudWHjdqpWXeS5TfqW8/pos", keypair)
// alert(keypair);
// console.log(keypair);
// // Pair client to server
// client
//   .pair_client("wGyfWXF")
//   .then(res => console.log(res))
//   .catch(err => console.log(err))



const keypair = btcpay.crypto.load_keypair(new Buffer.from("Aae3kBiFjfHYiMfvh6yFC4drw2i6HjzMT9WRUTHSe2nY", 'hex'))

// Recreate client
const client = new btcpay.BTCPayClient("https://mainnet.demo.btcpayserver.org", keypair, {merchant:"merchant"})

console.log(client);
client.get_rates('BTC_USD', "Aae3kBiFjfHYiMfvh6yFC4drw2i6HjzMT9WRUTHSe2nY")
  .then(rates => console.log(rates))
  .catch(err => console.log(err))

// client.create_invoice({price: 20, currency: 'USD'})
//   .then(invoice => console.log(invoice.url))
//   .catch(err => console.log(err))