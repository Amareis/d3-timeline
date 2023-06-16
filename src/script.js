const data = [
  {name: "MyBitcoin", date: "2011-06-21", amount: "68300", amounttext: "$68.3k", group: "hack"},
  {name: "Ubitex", date: "2011-07-01", amount: "18100", amounttext: "$18.1k", group: "scam"},
  {name: "Bitomat", date: "2011-07-26", amount: "236000", amounttext: "$236k", group: "scam"},
  {name: "MyBitcoin", date: "2011-08-08", amount: "619000", amounttext: "$619k", group: "hack"},
  {name: "Moonco.in", date: "2011-09-01", amount: "32800", amounttext: "$32.8k", group: "scam"},
  {name: "Bitcoin7", date: "2011-10-05", amount: "53100", amounttext: "$53.1k", group: "hack"},
  {name: "Mt. Gox", date: "2011-10-28", amount: "8020", amounttext: "$8.02k", group: "scam"},
  {name: "Linode", date: "2012-03-01", amount: "228000", amounttext: "$228k", group: "scam"},
  {name: "Bitscalper", date: "2012-03-01", amount: "6440", amounttext: "$6.44k", group: "hack"},
  {name: "Betcoin", date: "2012-04-11", amount: "15300", amounttext: "$15.3k", group: "hack"},
  {name: "BitCoinica", date: "2012-05-12", amount: "91300", amounttext: "$91.3k", group: "hack"},
  {name: "Bitcoin Savings and Trust", date: "2012-07-02", amount: "4630000", amounttext: "$4.63M", group: "scam"},
  {name: "Bitcoin Syndicate", date: "2012-07-04", amount: "12000", amounttext: "$12k", group: "hack"},
  {name: "BitCoinica", date: "2012-07-13", amount: "303000", amounttext: "$303k", group: "hack"},
  {name: "BTC-e", date: "2012-07-31", amount: "42000", amounttext: "$42k", group: "hack"},
  {name: "kronos.io", date: "2012-08-01", amount: "9300", amounttext: "$9.3k", group: "hack"},
  {name: "BitFloor", date: "2012-09-05", amount: "251000", amounttext: "$251k", group: "hack"},
  {name: "Cdecker", date: "2012-09-28", amount: "113000", amounttext: "$113k", group: "hack"},
  {name: "50BTC", date: "2012-10-13", amount: "14000", amounttext: "$14k", group: "hack"},
  {name: "Trojan Wallet", date: "2012-11-16", amount: "39200", amounttext: "$39.2k", group: "hack"},
  {name: "BitMarket.eu", date: "2012-12-21", amount: "8270", amounttext: "$8.27k", group: "hack"},
  {name: "Bit LC Inc.", date: "2013-02-13", amount: "50800", amounttext: "$50.8k", group: "hack"},
  {name: "BTC Guild", date: "2013-03-10", amount: "58000", amounttext: "$58k", group: "hack"},
  {name: "Bitcoin Rain", date: "2013-03-28", amount: "370000", amounttext: "$370k", group: "scam"},
  {name: "ZigGap", date: "2013-04-01", amount: "169000", amounttext: "$169k", group: "scam"},
  {name: "OzCoin", date: "2013-04-19", amount: "135000", amounttext: "$135k", group: "hack"},
  {name: "Bitmit", date: "2013-04-26", amount: "2020", amounttext: "$2.02k", group: "hack"},
  {name: "PicoStocks", date: "2013-06-01", amount: "167000", amounttext: "$167k", group: "hack"},
  {name: "Bitfunder and WeExchange", date: "2013-07-01", amount: "545000", amounttext: "$545k", group: "hack"},
  {name: "Just-Dice", date: "2013-07-15", amount: "123000", amounttext: "$123k", group: "scam"},
  {name: "BASIC-MINING", date: "2013-10-01", amount: "277000", amounttext: "$277k", group: "scam"},
  {name: "inputs.io", date: "2013-10-23", amount: "809000", amounttext: "$809k", group: "hack"},
  {name: "GBL", date: "2013-10-26", amount: "4000000", amounttext: "$4M", group: "scam"},
  {name: "Bitcash.cz", date: "2013-11-11", amount: "161000", amounttext: "$161k", group: "hack"},
  {name: "BIPS", date: "2013-11-17", amount: "600000", amounttext: "$600k", group: "hack"},
  {name: "PicoStocks", date: "2013-11-29", amount: "6420000", amounttext: "$6.42M", group: "hack"},
  {name: "Mt. Gox", date: "2014-02-07", amount: "615000000", amounttext: "$615M", group: "hack"},
  {name: "Flexcoin", date: "2014-03-02", amount: "606000", amounttext: "$606k", group: "hack"},
  {name: "Poloniex", date: "2014-03-04", amount: "65600", amounttext: "$65.6k", group: "hack"},
  {name: "Cryptorush", date: "2014-03-15", amount: "659000", amounttext: "$659k", group: "hack"},
  {name: "Bitcurex", date: "2014-03-16", amount: "108000", amounttext: "$108k", group: "hack"},
  {name: "DogeVault", date: "2014-05-13", amount: "51100", amounttext: "$51.1k", group: "hack"},
  {name: "MintPal", date: "2014-07-13", amount: "1910000", amounttext: "$1.91M", group: "hack"},
  {name: "Cryptsy", date: "2014-07-29", amount: "9890000", amounttext: "$9.89M", group: "hack"},
  {name: "Bter", date: "2014-08-15", amount: "1910000", amounttext: "$1.91M", group: "hack"},
  {name: "Bitpay", date: "2014-09-12", amount: "2370000", amounttext: "$2.37M", group: "hack"},
  {name: "MintPal", date: "2014-10-15", amount: "1500000", amounttext: "$1.5M", group: "hack"},
  {name: "Bitstamp", date: "2015-01-09", amount: "5510000", amounttext: "$5.51M", group: "hack"},
  {name: "EgoPay", date: "2015-01-23", amount: "1100000", amounttext: "$1.1M", group: "hack"},
  {name: "LocalBitcoins", date: "2015-01-27", amount: "4440", amounttext: "$4.44k", group: "hack"},
  {name: "796.com", date: "2015-01-28", amount: "253000", amounttext: "$253k", group: "hack"},
  {name: "MyCoin", date: "2015-02-09", amount: "387000000", amounttext: "$387M", group: "scam"},
  {name: "exco.in", date: "2015-02-10", amount: "460000", amounttext: "$460k", group: "hack"},
  {name: "Bter", date: "2015-02-15", amount: "1790000", amounttext: "$1.79M", group: "hack"},
  {name: "KipCoin", date: "2015-02-18", amount: "721000", amounttext: "$721k", group: "hack"},
  {name: "Bitfinex", date: "2015-05-22", amount: "332000", amounttext: "$332k", group: "hack"},
  {name: "Purse", date: "2015-10-11", amount: "2510000", amounttext: "$2.51M", group: "hack"},
  {name: "Shapeshift", date: "2016-04-01", amount: "269000", amounttext: "$269k", group: "hack"},
  {name: "Gatecoin.com", date: "2016-05-10", amount: "2140000", amounttext: "$2.14M", group: "hack"},
  {name: "DAO", date: "2016-06-16", amount: "70600000", amounttext: "$70.6M", group: "hack"},
  {name: "Bitfinex", date: "2016-08-03", amount: "72000000", amounttext: "$72M", group: "hack"},
  {name: "Bitcurex", date: "2016-10-15", amount: "1500000", amounttext: "$1.5M", group: "hack"},
  {name: "Yapizon.com", date: "2017-04-22", amount: "4980000", amounttext: "$4.98M", group: "hack"},
  {name: "Bithumb", date: "2017-06-03", amount: "1040000", amounttext: "$1.04M", group: "hack"},
  {name: "CoinDash", date: "2017-07-01", amount: "12200000", amounttext: "$12.2M", group: "hack"},
  {name: "Parity", date: "2017-07-19", amount: "34000000", amounttext: "$34M", group: "hack"},
  {name: "BTC-e", date: "2017-07-26", amount: "181000000", amounttext: "$181M", group: "hack"},
  {name: "Enigma", date: "2017-08-21", amount: "500000", amounttext: "$500k", group: "hack"},
  {name: "Control Finance", date: "2017-09-10", amount: "147000000", amounttext: "$147M", group: "scam"},
  {name: "Coinis", date: "2017-09-21", amount: "1930000", amounttext: "$1.93M", group: "hack"},
  {name: "OKEx", date: "2017-10-02", amount: "3000000", amounttext: "$3M", group: "hack"},
  {name: "Parity", date: "2017-11-08", amount: "155000000", amounttext: "$155M", group: "hack"},
  {name: "Tether", date: "2017-11-19", amount: "31000000", amounttext: "$31M", group: "hack"},
  {name: "NiceHash", date: "2017-12-06", amount: "64000000", amounttext: "$64M", group: "hack"},
  {name: "Youbit", date: "2017-12-19", amount: "10000000", amounttext: "$10M", group: "hack"},
  {name: "EtherDelta", date: "2017-12-20", amount: "251000", amounttext: "$251k", group: "hack"},
  {name: "BlackWallet", date: "2018-01-13", amount: "400000", amounttext: "$400k", group: "hack"},
  {name: "Coincheck", date: "2018-01-26", amount: "535000000", amounttext: "$535M", group: "hack"},
  {name: "BitGrail", date: "2018-02-11", amount: "195000000", amounttext: "$195M", group: "hack"},
  {name: "Blockchain.info", date: "2018-02-19", amount: "50000000", amounttext: "$50M", group: "hack"},
  {name: "Coinsecure", date: "2018-04-12", amount: "3200000", amounttext: "$3.2M", group: "hack"},
  {name: "MyEtherWallet", date: "2018-04-24", amount: "13000000", amounttext: "$13M", group: "hack"},
  {name: "TAYLOR", date: "2018-05-21", amount: "1580000", amounttext: "$1.58M", group: "hack"},
  {name: "Coinrail", date: "2018-06-10", amount: "40000000", amounttext: "$40M", group: "hack"},
  {name: "Bithumb", date: "2018-06-19", amount: "30000000", amounttext: "$30M", group: "hack"},
  {name: "Bancor", date: "2018-07-10", amount: "23000000", amounttext: "$23M", group: "hack"},
  {name: "kickico.co", date: "2018-07-26", amount: "7700000", amounttext: "$7.7M", group: "hack"},
  {name: "ZAIF", date: "2018-09-14", amount: "59000000", amounttext: "$59M", group: "hack"},
  {name: "Trade.io", date: "2018-10-20", amount: "9000000", amounttext: "$9M", group: "hack"},
  {name: "MapleChange", date: "2018-10-28", amount: "5880000", amounttext: "$5.88M", group: "hack"},
  {name: "Electrum", date: "2018-12-27", amount: "949000", amounttext: "$949k", group: "hack"},
  {name: "Cryptopia", date: "2019-01-14", amount: "12000000", amounttext: "$12M", group: "hack"},
  {name: "LocalBitcoins", date: "2019-01-26", amount: "27000", amounttext: "$27k", group: "hack"},
  {name: "QuadrigaCX", date: "2019-02-04", amount: "147000000", amounttext: "$147M", group: "scam"},
  {name: "Coinbin", date: "2019-02-20", amount: "26000000", amounttext: "$26M", group: "scam"},
  {name: "DragonEx", date: "2019-03-24", amount: "6030000", amounttext: "$6.03M", group: "hack"},
  {name: "Etbox", date: "2019-03-24", amount: "132000", amounttext: "$132k", group: "hack"},
  {name: "BiKi", date: "2019-03-25", amount: "123000", amounttext: "$123k", group: "hack"},
  {name: "CoinBene", date: "2019-03-26", amount: "45000000", amounttext: "$45M", group: "hack"},
  {name: "Bithumb", date: "2019-03-29", amount: "19200000", amounttext: "$19.2M", group: "hack"},
  {name: "BitoPro", date: "2019-05-02", amount: "2170000", amounttext: "$2.17M", group: "hack"},
  {name: "Binance", date: "2019-05-07", amount: "41700000", amounttext: "$41.7M", group: "hack"},
  {name: "Coinbase", date: "2019-05-22", amount: "100000", amounttext: "$100k", group: "hack"},
  {name: "Kraken", date: "2019-06-02", amount: "10500000", amounttext: "$10.5M", group: "hack"},
  {name: "Coinroom", date: "2019-06-03", amount: "4000", amounttext: "$4k", group: "scam"},
  {name: "GateHub", date: "2019-06-06", amount: "10000000", amounttext: "$10M", group: "hack"},
  {name: "TokenStore", date: "2019-06-11", amount: "160000000", amounttext: "$160M", group: "scam"},
  {name: "Bitsane", date: "2019-06-17", amount: "570000", amounttext: "$570k", group: "scam"},
  {name: "Bitrue", date: "2019-06-26", amount: "5000000", amounttext: "$5M", group: "hack"},
  {name: "BitcoinsNorway", date: "2019-07-04", amount: "1000000", amounttext: "$1M", group: "hack"},
  {name: "Soxex", date: "2019-07-04", amount: "1000000", amounttext: "$1M", group: "hack"},
  {name: "BitMarket.pl", date: "2019-07-08", amount: "27100000", amounttext: "$27.1M", group: "scam"},
  {name: "Bitpoint", date: "2019-07-12", amount: "32000000", amounttext: "$32M", group: "hack"},
  {name: "CoinTiger", date: "2019-08-17", amount: "1800000", amounttext: "$1.8M", group: "hack"},
  {name: "VinDAX", date: "2019-11-08", amount: "500000", amounttext: "$500k", group: "hack"},
  {name: "Upbit", date: "2019-11-27", amount: "51200000", amounttext: "$51.2M", group: "hack"},
  {name: "Plus Token Ponzi", date: "2019-12-16", amount: "2900000000", amounttext: "$2.9B", group: "scam"},
  {name: "Electrum", date: "2020-01-19", amount: "17700000", amounttext: "$17.7M", group: "hack"},
  {name: "Altsbit", date: "2020-02-05", amount: "303000", amounttext: "$303k", group: "hack"},
  {name: "IOTA wallet", date: "2020-02-12", amount: "2910000", amounttext: "$2.91M", group: "hack"},
  {name: "Ledger", date: "2020-03-25", amount: "224000", amounttext: "$224k", group: "hack"},
  {name: "Bisq", date: "2020-04-08", amount: "250000", amounttext: "$250k", group: "hack"},
  {name: "Uniswap", date: "2020-04-18", amount: "1400000", amounttext: "$1.4M", group: "defi-hack"},
  {name: "dForce (Lendf.me)", date: "2020-04-19", amount: "25000000", amounttext: "$25M", group: "defi-hack"},
  {name: "Wotoken", date: "2020-05-14", amount: "1000000000", amounttext: "$1B", group: "scam"},
  {name: "Balancer", date: "2020-06-28", amount: "500000", amounttext: "$500k", group: "hack"},
  {name: "Cashaa", date: "2020-07-11", amount: "3090000", amounttext: "$3.09M", group: "hack"},
  {name: "Twitter", date: "2020-07-15", amount: "120000", amounttext: "$120k", group: "scam"},
  {name: "2gether", date: "2020-07-31", amount: "1400000", amounttext: "$1.4M", group: "hack"},
  {name: "Opyn", date: "2020-08-05", amount: "371000", amounttext: "$371k", group: "defi-hack"},
  {name: "Electrum", date: "2020-08-30", amount: "15000000", amounttext: "$15M", group: "hack"},
  {name: "Chainlink", date: "2020-09-05", amount: "245000", amounttext: "$245k", group: "hack"},
  {name: "ETERBASE", date: "2020-09-08", amount: "5320000", amounttext: "$5.32M", group: "hack"},
  {name: "bZx", date: "2020-09-14", amount: "15000000", amounttext: "$15M", group: "defi-hack"},
  {name: "Kucoin", date: "2020-09-26", amount: "281000000", amounttext: "$281M", group: "hack"},
  {name: "Eminence", date: "2020-09-29", amount: "15000000", amounttext: "$15M", group: "defi-hack"},
  {name: "Ledger", date: "2020-10-24", amount: "1800000", amounttext: "$1.8M", group: "scam"},
  {name: "Harvest Finance", date: "2020-10-26", amount: "34000000", amounttext: "$34M", group: "defi-hack"},
  {name: "Value", date: "2020-11-14", amount: "7400000", amounttext: "$7.4M", group: "defi-hack"},
  {name: "Cheese Bank", date: "2020-11-16", amount: "3300000", amounttext: "$3.3M", group: "defi-hack"},
  {name: "OUSD", date: "2020-11-17", amount: "7000000", amounttext: "$7M", group: "defi-hack"},
  {name: "Pickle Finance", date: "2020-11-22", amount: "19700000", amounttext: "$19.7M", group: "defi-hack"},
  {name: "Maker", date: "2020-12-03", amount: "8300000.", amounttext: "$8.3M", group: "defi-hack"},
  {name: "Akropolis", date: "2020-12-11", amount: "2000000", amounttext: "$2M", group: "defi-hack"},
  {name: "Warp Finance", date: "2020-12-17", amount: "7700000", amounttext: "$7.7M", group: "defi-hack"},
  {name: "EXMO", date: "2020-12-21", amount: "11700000", amounttext: "$11.7M", group: "hack"},
  {name: "Attily", date: "2020-12-26", amount: "750000", amounttext: "$750k", group: "hack"},
  {name: "Cover Protocol", date: "2020-12-28", amount: "4000000", amounttext: "$4M", group: "defi-hack"},
  {name: "Cryptopia", date: "2021-01-01", amount: "45000", amounttext: "$45k", group: "hack"},
  {name: "Yearn Finance", date: "2021-02-05", amount: "11000000", amounttext: "$11M", group: "defi-hack"},
  {name: "Alpha Homora", date: "2021-02-13", amount: "35000000", amounttext: "$35M", group: "defi-hack"},
  {name: "Furucombo", date: "2021-02-28", amount: "14000000", amounttext: "$14M", group: "defi-hack"},
  {name: "Meerkat Finance", date: "2021-03-05", amount: "31000000", amounttext: "$31M", group: "defi-hack"},
  {name: "DODO", date: "2021-03-09", amount: "3800000", amounttext: "$3.8M", group: "defi-hack"},
  {name: "Turtle.dex", date: "2021-03-20", amount: "2000000", amounttext: "$2M", group: "scam"},
  {name: "Polkatrain", date: "2021-04-05", amount: "3000000", amounttext: "$3M", group: "defi-hack"},
  {name: "EasyFi", date: "2021-04-19", amount: "80000000", amounttext: "$80M", group: "defi-hack"},
  {name: "Thodex", date: "2021-04-22", amount: "2000000000", amounttext: "$2B", group: "scam"},
  {name: "Uranium Finance", date: "2021-04-28", amount: "57000000", amounttext: "$57M", group: "defi-hack"},
  {name: "Spartan Protocol", date: "2021-05-02", amount: "30000000", amounttext: "$30M", group: "defi-hack"},
  {name: "Value", date: "2021-05-06", amount: "10000000", amounttext: "$10M", group: "defi-hack"},
  {name: "Value", date: "2021-05-08", amount: "11000000", amounttext: "$11M", group: "defi-hack"},
  {name: "Rari Capital", date: "2021-05-08", amount: "10000000", amounttext: "$10M", group: "defi-hack"},
  {name: "X Token", date: "2021-05-12", amount: "24500000", amounttext: "$24.5M", group: "defi-hack"},
  {name: "Bearn.Fi", date: "2021-05-17", amount: "11000000", amounttext: "$11M", group: "defi-hack"},
  {name: "PancakeBunny", date: "2021-05-20", amount: "45000000", amounttext: "$45M", group: "defi-hack"},
  {name: "DeFi100", date: "2021-05-24", amount: "32000000", amounttext: "$32M", group: "scam"},
  {name: "AutoShark", date: "2021-05-25", amount: "750000", amounttext: "$750k", group: "defi-hack"},
  {name: "MerlinLabs", date: "2021-05-26", amount: "680000", amounttext: "$680k", group: "defi-hack"},
  {name: "MerlinLabs", date: "2021-05-27", amount: "550000", amounttext: "$550k", group: "defi-hack"},
  {name: "BurgerSwap", date: "2021-05-28", amount: "7200000", amounttext: "$7.2M", group: "defi-hack"},
  {name: "Belt", date: "2021-05-29", amount: "6300000", amounttext: "$6.3M", group: "defi-hack"},
  {name: "Alchemist", date: "2021-06-18", amount: "6500000", amounttext: "$6.5M", group: "defi-hack"},
  {name: "Eleven Finance", date: "2021-06-23", amount: "4500000", amounttext: "$4.5M", group: "defi-hack"},
  {name: "StableMagnet", date: "2021-06-24", amount: "27000000", amounttext: "$27M", group: "scam"},
  {name: "SafeDollar", date: "2021-06-28", amount: "245000", amounttext: "$245k", group: "defi-hack"},
  {name: "MerlinLabs", date: "2021-06-29", amount: "330000", amounttext: "$330k", group: "defi-hack"},
  {name: "AnySwap", date: "2021-07-13", amount: "7900000", amounttext: "$7.9M", group: "defi-hack"},
  {name: "ChainSwap", date: "2021-07-13", amount: "4400000", amounttext: "$4.4M", group: "defi-hack"},
  {name: "Bondly", date: "2021-07-15", amount: "5900000", amounttext: "$5.9M", group: "defi-hack"},
  {name: "ThorChain", date: "2021-07-16", amount: "8000000", amounttext: "$8M", group: "defi-hack"},
  {name: "PancakeBunny", date: "2021-07-18", amount: "2400000", amounttext: "$2.4M", group: "defi-hack"},
  {name: "Array Finance", date: "2021-07-19", amount: "515000", amounttext: "$515k", group: "defi-hack"},
  {name: "Sanshu Inu", date: "2021-07-21", amount: "112000", amounttext: "$112k", group: "defi-hack"},
  {name: "ThorChain", date: "2021-07-23", amount: "8000000", amounttext: "$8M", group: "defi-hack"},
  {name: "PolyYeld Finance", date: "2021-07-28", amount: "250000", amounttext: "$250k", group: "defi-hack"},
  {name: "Levyathan Finance", date: "2021-07-31", amount: "1500000", amounttext: "$1.5M", group: "defi-hack"},
  {name: "Stazie", date: "2021-07-31", amount: "1000000", amounttext: "$1M", group: "scam"},
  {name: "Popsicle Finance", date: "2021-08-04", amount: "20700000", amounttext: "$20.7M", group: "defi-hack"},
  {name: "Wault Finance", date: "2021-08-04", amount: "888000", amounttext: "$888k", group: "defi-hack"},
  {name: "Zerogoki", date: "2021-08-08", amount: "670000", amounttext: "$670k", group: "defi-hack"},
  {name: "PolyNetwork", date: "2021-08-10", amount: "614000000", amounttext: "$614M", group: "defi-hack"},
  {name: "Punk Protocol", date: "2021-08-11", amount: "8900000", amounttext: "$8.9M", group: "defi-hack"},
  {name: "DAO Maker", date: "2021-08-12", amount: "7000000", amounttext: "$7M", group: "defi-hack"},
  {name: "Neko Network", date: "2021-08-13", amount: "4000000", amounttext: "$4M", group: "defi-hack"},
  {name: "Ref Finance", date: "2021-08-14", amount: "3300000", amounttext: "$3.3M", group: "defi-hack"},
  {name: "Fetch.ai", date: "2021-08-15", amount: "2600000", amounttext: "$2.6M", group: "hack"},
  {name: "XSURGE", date: "2021-08-17", amount: "5000000", amounttext: "$5M", group: "defi-hack"},
  {name: "Liquid", date: "2021-08-19", amount: "97000000", amounttext: "$97M", group: "hack"},
  {name: "Finiko", date: "2021-08-20", amount: "200000000", amounttext: "$200M", group: "scam"},
  {name: "HitBTC", date: "2021-08-21", amount: "1000000", amounttext: "$1M", group: "hack"},
  {name: "Luna Yield", date: "2021-08-22", amount: "6700000", amounttext: "$6.7M", group: "scam"},
  {name: "Dot.Finance", date: "2021-08-25", amount: "429000", amounttext: "$429k", group: "defi-hack"},
  {name: "Bilaxy", date: "2021-08-29", amount: "22000000", amounttext: "$22M", group: "hack"},
  {name: "X Token", date: "2021-08-29", amount: "4500000", amounttext: "$4.5M", group: "defi-hack"},
  {name: "Cream Finance", date: "2021-09-01", amount: "18800000", amounttext: "$18.8M", group: "defi-hack"},
  {name: "DAO Maker", date: "2021-09-04", amount: "4000000", amounttext: "$4M", group: "defi-hack"},
  {name: "Afksystem.finance", date: "2021-09-10", amount: "13000000", amounttext: "$13M", group: "scam"},
  {name: "Zabu Finance", date: "2021-09-13", amount: "3200000", amounttext: "$3.2M", group: "defi-hack"},
  {name: "Miso", date: "2021-09-17", amount: "3000000", amounttext: "$3M", group: "defi-hack"},
  {name: "NowSwap", date: "2021-09-17", amount: "1000000", amounttext: "$1M", group: "defi-hack"},
  {name: "pNetwork", date: "2021-09-19", amount: "13000000", amounttext: "$13M", group: "defi-hack"},
  {name: "Vee Finance", date: "2021-09-20", amount: "35000000", amounttext: "$35M", group: "defi-hack"},
  {name: "Auto Shark Finance", date: "2021-10-02", amount: "580000", amounttext: "$580k", group: "defi-hack"},
  {name: "Evolved Apes", date: "2021-10-07", amount: "2700000", amounttext: "$2.7M", group: "scam"},
  {name: "Indexed Finance", date: "2021-10-14", amount: "16000000", amounttext: "$16M", group: "defi-hack"},
  {name: "CryptoRoom", date: "2021-10-14", amount: "1400000", amounttext: "$1.4M", group: "scam"},
  {name: "PancakeHunny", date: "2021-10-20", amount: "1700000", amounttext: "$1.7M", group: "defi-hack"},
  {name: "Glide Finance", date: "2021-10-23", amount: "300000", amounttext: "$300k", group: "defi-hack"},
  {name: "Cream Finance", date: "2021-10-27", amount: "130000000", amounttext: "$130M", group: "defi-hack"},
  {name: "BXH", date: "2021-11-01", amount: "140000000", amounttext: "$140M", group: "defi-hack"},
  {name: "AnubisDAO", date: "2021-11-01", amount: "60000000", amounttext: "$60M", group: "scam"},
  {name: "SQUID", date: "2021-11-02", amount: "17000000", amounttext: "$17M", group: "scam"},
  {name: "Vesper Finance", date: "2021-11-03", amount: "3000000", amounttext: "$3M", group: "defi-hack"},
  {name: "bZx", date: "2021-11-05", amount: "55000000", amounttext: "$55M", group: "defi-hack"},
  {name: "MonoX.finance", date: "2021-11-30", amount: "31000000", amounttext: "$31M", group: "defi-hack"},
  {name: "Badger DAO", date: "2021-12-02", amount: "120000000", amounttext: "$120M", group: "defi-hack"},
  {name: "Bitmart", date: "2021-12-05", amount: "196000000", amounttext: "$196M", group: "hack"},
  {name: "Pizza.Finance", date: "2021-12-08", amount: "5000000", amounttext: "$5M", group: "defi-hack"},
  {name: "Sorbet Finance", date: "2021-12-11", amount: "744000", amounttext: "$744k", group: "defi-hack"},
  {name: "Vulcan Forged", date: "2021-12-13", amount: "140000000", amounttext: "$140M", group: "defi-hack"},
  {name: "AscendEX", date: "2021-12-13", amount: "78000000", amounttext: "$78M", group: "defi-hack"},
  {name: "WePiggy", date: "2021-12-15", amount: "400000", amounttext: "$400k", group: "defi-hack"},
  {name: "Grim Finance", date: "2021-12-19", amount: "30000000", amounttext: "$30M", group: "defi-hack"},
  {name: "8ight Finance", date: "2021-12-21", amount: "1750000", amounttext: "$1.75M", group: "defi-hack"},
  {name: "VISR", date: "2021-12-21", amount: "444000", amounttext: "$444k", group: "defi-hack"},
  {name: "Monkey Kingdom", date: "2021-12-23", amount: "1300000", amounttext: "$1.3M", group: "defi-hack"},
  {name: "MetaDAO", date: "2021-12-27", amount: "3200000", amounttext: "$3.2M", group: "scam"},
  {name: "META", date: "2021-12-27", amount: "1000000", amounttext: "$1M", group: "scam"},
  {name: "MetaSwap", date: "2021-12-27", amount: "602000", amounttext: "$602k", group: "scam"},
  {name: "SashimiSwap", date: "2021-12-30", amount: "200000", amounttext: "$200k", group: "defi-hack"},
  {name: "Vesper Finance", date: "2021-12-31", amount: "1000000", amounttext: "$1M", group: "defi-hack"},
  {name: "Tinyman", date: "2022-01-01", amount: "2000000", amounttext: "$2M", group: "defi-hack"},
  {name: "Arbix Finance", date: "2022-01-04", amount: "10000000", amounttext: "$10M", group: "scam"},
  {name: "Bored Bunny", date: "2022-01-06", amount: "21000000", amounttext: "$21M", group: "scam"},
  {name: "DaoMetaland", date: "2022-01-07", amount: "280000", amounttext: "$280k", group: "scam"},
  {name: "LCX", date: "2022-01-09", amount: "7940000", amounttext: "$7.94M", group: "hack"},
  {name: "Frosties", date: "2022-01-09", amount: "1300000", amounttext: "$1.3M", group: "scam"},
  {name: "Lympo", date: "2022-01-10", amount: "18700000", amounttext: "$18.7M", group: "defi-hack"},
  {name: "IDO", date: "2022-01-12", amount: "2600000", amounttext: "$2.6M", group: "scam"},
  {name: "Rari Capital", date: "2022-01-15", amount: "450000", amounttext: "$450k", group: "defi-hack"},
  {name: "CityDAO", date: "2022-01-15", amount: "95000", amounttext: "$95k", group: "hack"},
  {name: "Crypto.com", date: "2022-01-17", amount: "33000000", amounttext: "$33M", group: "hack"},
  {name: "Crypto Burger", date: "2022-01-17", amount: "770000", amounttext: "$770k", group: "defi-hack"},
  {name: "Multichain", date: "2022-01-18", amount: "1930000", amounttext: "$1.93M", group: "defi-hack"},
  {name: "Crosswise", date: "2022-01-18", amount: "879000", amounttext: "$879k", group: "defi-hack"},
  {name: "Kingfund Finance", date: "2022-01-19", amount: "147000", amounttext: "$147k", group: "scam"},
  {name: "Blockverse", date: "2022-01-24", amount: "1200000", amounttext: "$1.2M", group: "scam"},
  {name: "Solfire", date: "2022-01-25", amount: "10000000", amounttext: "$10M", group: "scam"},
  {name: "OpenSea", date: "2022-01-25", amount: "784000", amounttext: "$784k", group: "defi-hack"},
  {name: "Mercenary", date: "2022-01-26", amount: "760000", amounttext: "$760k", group: "scam"},
  {name: "InfinityToken", date: "2022-01-26", amount: "612000", amounttext: "$612k", group: "scam"},
  {name: "Wegrocoin", date: "2022-01-27", amount: "440000", amounttext: "$440k", group: "scam"},
  {name: "Qubit", date: "2022-01-28", amount: "80000000", amounttext: "$80M", group: "defi-hack"},
  {name: "Wormhole", date: "2022-02-02", amount: "326000000", amounttext: "$326M", group: "defi-hack"},
  {name: "KLAYswap", date: "2022-02-03", amount: "1830000", amounttext: "$1.83M", group: "defi-hack"},
  {name: "Meter.io", date: "2022-02-06", amount: "4300000", amounttext: "$4.3M", group: "defi-hack"},
  {name: "Superfluid", date: "2022-02-08", amount: "13000000", amounttext: "$13M", group: "defi-hack"},
  {name: "Dego", date: "2022-02-10", amount: "10000000", amounttext: "$10M", group: "defi-hack"},
  {name: "BabyMuskCoin", date: "2022-02-10", amount: "660000", amounttext: "$660k", group: "scam"},
  {name: "IRA Financial", date: "2022-02-12", amount: "36000000", amounttext: "$36M", group: "hack"},
  {name: "Titano Finance", date: "2022-02-14", amount: "1900000", amounttext: "$1.9M", group: "defi-hack"},
  {name: "Build Finance", date: "2022-02-15", amount: "470000", amounttext: "$470k", group: "defi-hack"},
  {name: "TopGoal", date: "2022-02-17", amount: "1800000", amounttext: "$1.8M", group: "defi-hack"},
  {name: "Gold Mine Finance", date: "2022-02-19", amount: "800000", amounttext: "$800k", group: "scam"},
  {name: "OpenSea", date: "2022-02-20", amount: "3400000", amounttext: "$3.4M", group: "defi-hack"},
  {name: "Flurry Finance", date: "2022-02-23", amount: "293000", amounttext: "$293k", group: "defi-hack"},
  {name: "Pirate X", date: "2022-03-09", amount: "75300", amounttext: "$75.3k", group: "defi-hack"},
  {name: "Fantasm Finance", date: "2022-03-10", amount: "2730000", amounttext: "$2.73M", group: "defi-hack"},
  {name: "Paraluni", date: "2022-03-13", amount: "1700000", amounttext: "$1.7M", group: "defi-hack"},
  {name: "NFTflow", date: "2022-03-14", amount: "230000", amounttext: "$230k", group: "scam"},
  {name: "Agave", date: "2022-03-15", amount: "5500000", amounttext: "$5.5M", group: "defi-hack"},
  {name: "Deus Finance", date: "2022-03-15", amount: "3000000", amounttext: "$3M", group: "defi-hack"},
  {name: "Hundred Finance", date: "2022-03-16", amount: "6000000", amounttext: "$6M", group: "defi-hack"},
  {name: "Umbrella Network", date: "2022-03-20", amount: "700000", amounttext: "$700k", group: "defi-hack"},
  {name: "Li.finance", date: "2022-03-20", amount: "600000", amounttext: "$600k", group: "defi-hack"},
  {name: "OneRing Finance", date: "2022-03-21", amount: "1450000", amounttext: "$1.45M", group: "defi-hack"},
  {name: "Arthur", date: "2022-03-22", amount: "897000", amounttext: "$897k", group: "defi-hack"},
  {name: "REALSWAK", date: "2022-03-22", amount: "537000", amounttext: "$537k", group: "scam"},
  {name: "Cashio", date: "2022-03-26", amount: "52000000", amounttext: "$52M", group: "defi-hack"},
  {name: "InuSaitama", date: "2022-03-26", amount: "1330000", amounttext: "$1.33M", group: "defi-hack"},
  {name: "Revest Finance", date: "2022-03-27", amount: "2000000", amounttext: "$2M", group: "defi-hack"},
  {name: "BuccaneerFi", date: "2022-03-28", amount: "360000", amounttext: "$360k", group: "scam"},
  {name: "Ronin", date: "2022-03-29", amount: "650000000", amounttext: "$650M", group: "defi-hack"},
  {name: "BNBDEFI", date: "2022-03-29", amount: "111000", amounttext: "$111k", group: "scam"},
  {name: "BMIZapper", date: "2022-03-30", amount: "1200000", amounttext: "$1.2M", group: "defi-hack"},
  {name: "Ola Finance", date: "2022-03-31", amount: "4670000", amounttext: "$4.67M", group: "defi-hack"},
  {name: "Inverse Finance", date: "2022-04-02", amount: "15600000", amounttext: "$15.6M", group: "defi-hack"},
  {name: "Agora (StarStream)", date: "2022-04-08", amount: "8200000.", amounttext: "$8.2M", group: "defi-hack"},
  {name: "CF", date: "2022-04-11", amount: "1900000", amounttext: "$1.9M", group: "defi-hack"},
  {name: "Marvin Inu", date: "2022-04-11", amount: "352000", amounttext: "$352k", group: "defi-hack"},
  {name: "Elephant Money", date: "2022-04-13", amount: "11200000", amounttext: "$11.2M", group: "defi-hack"},
  {name: "Rikkei Finance", date: "2022-04-15", amount: "1100000", amounttext: "$1.1M", group: "defi-hack"},
  {name: "Beanstalk", date: "2022-04-17", amount: "182000000", amounttext: "$182M", group: "defi-hack"},
  {name: "Zeed", date: "2022-04-20", amount: "1000000", amounttext: "$1M", group: "defi-hack"},
  {name: "MaxAPYFinance", date: "2022-04-20", amount: "440000", amounttext: "$440k", group: "scam"},
  {name: "Akutars", date: "2022-04-23", amount: "34000000", amounttext: "$34M", group: "defi-hack"},
  {name: "Deus Finance", date: "2022-04-28", amount: "13500000", amounttext: "$13.5M", group: "defi-hack"},
  {name: "Rari Capital", date: "2022-04-30", amount: "80300000", amounttext: "$80.3M", group: "defi-hack"},
  {name: "Saddle Finance", date: "2022-04-30", amount: "10300000", amounttext: "$10.3M", group: "defi-hack"},
  {name: "MM.finance", date: "2022-05-04", amount: "2000000", amounttext: "$2M", group: "defi-hack"},
  {name: "Mining Capital Coin", date: "2022-05-06", amount: "62000000", amounttext: "$62M", group: "scam"},
  {name: "Pragma Money", date: "2022-05-06", amount: "1500000", amounttext: "$1.5M", group: "scam"},
  {name: "Day of Defeat", date: "2022-05-06", amount: "1350000", amounttext: "$1.35M", group: "scam"},
  {name: "Fury of the Fur", date: "2022-05-07", amount: "300000", amounttext: "$300k", group: "scam"},
  {name: "Hunter", date: "2022-05-08", amount: "1200000", amounttext: "$1.2M", group: "scam"},
  {name: "Fortress", date: "2022-05-09", amount: "3050000", amounttext: "$3.05M", group: "defi-hack"},
  {name: "GOAT", date: "2022-05-09", amount: "260000", amounttext: "$260k", group: "scam"},
  {name: "Cashera", date: "2022-05-09", amount: "90000", amounttext: "$90k", group: "scam"},
  {name: "ownlyio", date: "2022-05-10", amount: "36000", amounttext: "$36k", group: "defi-hack"},
  {name: "x2y2", date: "2022-05-11", amount: "200000", amounttext: "$200k", group: "scam"},
  {name: "Quickswap", date: "2022-05-14", amount: "107000", amounttext: "$107k", group: "defi-hack"},
  {name: "FEG", date: "2022-05-16", amount: "1300000", amounttext: "$1.3M", group: "defi-hack"},
  {name: "FEG", date: "2022-05-17", amount: "590000", amounttext: "$590k", group: "defi-hack"},
  {name: "Feminist Metaverse", date: "2022-05-18", amount: "540000", amounttext: "$540k", group: "defi-hack"},
  {name: "QANplatform", date: "2022-05-19", amount: "634000", amounttext: "$634k", group: "defi-hack"},
  {name: "Llamascape", date: "2022-05-20", amount: "100000", amounttext: "$100k", group: "defi-hack"},
  {name: "bDollar", date: "2022-05-21", amount: "730000", amounttext: "$730k", group: "defi-hack"},
  {name: "DecentraWorld", date: "2022-05-25", amount: "1000000", amounttext: "$1M", group: "scam"},
  {name: "Mirror Protocol", date: "2022-05-28", amount: "90000000", amounttext: "$90M", group: "defi-hack"},
  {name: "PokeMoney", date: "2022-05-28", amount: "3500000", amounttext: "$3.5M", group: "scam"},
  {name: "Anchor Protocol", date: "2022-05-29", amount: "800000", amounttext: "$800k", group: "defi-hack"},
  {name: "Novo", date: "2022-05-30", amount: "90000", amounttext: "$90k", group: "defi-hack"},
  {name: "Mirror Protocol", date: "2022-05-31", amount: "2000000", amounttext: "$2M", group: "defi-hack"},
  {name: "Armadillo Coin", date: "2022-06-01", amount: "265000", amounttext: "$265k", group: "scam"},
  {name: "Animoon", date: "2022-06-02", amount: "6300000", amounttext: "$6.3M", group: "scam"},
  {name: "CoFiXProtocol", date: "2022-06-02", amount: "145000", amounttext: "$145k", group: "defi-hack"},
  {name: "BAYC&Otherside", date: "2022-06-04", amount: "256000", amounttext: "$256k", group: "defi-hack"},
  {name: "fomo-dao", date: "2022-06-04", amount: "110000", amounttext: "$110k", group: "defi-hack"},
  {name: "Maiar Exchange (Elrond)", date: "2022-06-05", amount: "113000000", amounttext: "$113M", group: "defi-hack"},
  {name: "Osmosis", date: "2022-06-08", amount: "5000000", amounttext: "$5M", group: "defi-hack"},
  {name: "Gym Network", date: "2022-06-08", amount: "2100000", amounttext: "$2.1M", group: "defi-hack"},
  {name: "ApolloX", date: "2022-06-08", amount: "1800000", amounttext: "$1.8M", group: "defi-hack"},
  {name: "BabyElon", date: "2022-06-08", amount: "180000", amounttext: "$180k", group: "scam"},
  {name: "Optimism", date: "2022-06-09", amount: "27600000", amounttext: "$27.6M", group: "defi-hack"},
  {name: "Treasure Swap", date: "2022-06-11", amount: "1200000", amounttext: "$1.2M", group: "defi-hack"},
  {name: "SHELL", date: "2022-06-11", amount: "180000", amounttext: "$180k", group: "scam"},
  {name: "Hege Token", date: "2022-06-12", amount: "429000", amounttext: "$429k", group: "scam"},
  {name: "Fswap", date: "2022-06-13", amount: "500000", amounttext: "$500k", group: "defi-hack"},
  {name: "ElonMVP", date: "2022-06-13", amount: "130000", amounttext: "$130k", group: "scam"},
  {name: "Inverse Finance", date: "2022-06-16", amount: "1260000", amounttext: "$1.26M", group: "defi-hack"},
  {name: "LV PLUS", date: "2022-06-21", amount: "1500000", amounttext: "$1.5M", group: "scam"},
  {name: "DHE", date: "2022-06-21", amount: "142000", amounttext: "$142k", group: "scam"},
  {name: "Harmony", date: "2022-06-24", amount: "100000000", amounttext: "$100M", group: "defi-hack"},
  {name: "Ribbon Finance", date: "2022-06-24", amount: "330000", amounttext: "$330k", group: "defi-hack"},
  {name: "ConvexFinance", date: "2022-06-24", amount: "230000", amounttext: "$230k", group: "defi-hack"},
  {name: "xCarnival", date: "2022-06-26", amount: "3800000", amounttext: "$3.8M", group: "defi-hack"},
  {name: "Quint", date: "2022-06-30", amount: "130000", amounttext: "$130k", group: "defi-hack"},
  {name: "Mad", date: "2022-06-30", amount: "115000", amounttext: "$115k", group: "defi-hack"},
  {name: "Crema Finance", date: "2022-07-03", amount: "8700000", amounttext: "$8.7M", group: "defi-hack"},
  {name: "BiFi", date: "2022-07-10", amount: "2000000", amounttext: "$2M", group: "defi-hack"},
  {name: "Omni X", date: "2022-07-10", amount: "1400000", amounttext: "$1.4M", group: "defi-hack"},
  {name: "Nirvana Finance", date: "2022-07-28", amount: "3500000", amounttext: "$3.5M", group: "defi-hack"},
  {name: "Nomad", date: "2022-08-01", amount: "190000000", amounttext: "$190M", group: "defi-hack"},
  {name: "Slope Wallet", date: "2022-08-02", amount: "5300000", amounttext: "$5.3M", group: "defi-hack"},
  {name: "Dragoma", date: "2022-08-08", amount: "3500000", amounttext: "$3.5M", group: "defi-hack"},
  {name: "Curve Finance", date: "2022-08-09", amount: "575000", amounttext: "$575k", group: "defi-hack"},
  {name: "Blur Finance", date: "2022-08-10", amount: "600000", amounttext: "$600k", group: "defi-hack"},
  {name: "SudoRare", date: "2022-08-23", amount: "800000", amounttext: "$800k", group: "defi-hack"},
  {name: "GMX", date: "2022-09-18", amount: "565000", amounttext: "$565k", group: "defi-hack"},
  {name: "Wintermute", date: "2022-09-20", amount: "160000000", amounttext: "$160M", group: "defi-hack"},
  {name: "Binance Bridge", date: "2022-10-06", amount: "570000000", amounttext: "$570M", group: "defi-hack"},
  {name: "Mango Market", date: "2022-10-11", amount: "115000000", amounttext: "$115M", group: "defi-hack"},
  {name: "TempleDAO", date: "2022-10-11", amount: "2300000", amounttext: "$2.3M", group: "defi-hack"},
  {name: "Moola Market", date: "2022-10-18", amount: "8400000", amounttext: "$8.4M", group: "defi-hack"},
  {name: "Bond Protocol", date: "2022-10-21", amount: "300000", amounttext: "$300k", group: "defi-hack"},
  {name: "Team Finance", date: "2022-10-27", amount: "15800000", amounttext: "$15.8M", group: "defi-hack"},
  {name: "Deribit", date: "2022-11-01", amount: "28000000", amounttext: "$28M", group: "defi-hack"},
  {name: "Skyward Finance", date: "2022-11-02", amount: "3000000", amounttext: "$3M", group: "defi-hack"},
  {name: "Solend", date: "2022-11-02", amount: "1260000", amounttext: "$1.26M", group: "defi-hack"},
  {name: "pGALA *white hack", date: "2022-11-03", amount: "4589449", amounttext: "$4.59M", group: "defi-hack"},
  {name: "Pando Rings", date: "2022-11-06", amount: "22000000", amounttext: "$22M", group: "defi-hack"},
  {name: "DFX", date: "2022-11-10", amount: "4000000", amounttext: "$4M", group: "defi-hack"},
  {name: "FTX", date: "2022-11-12", amount: "450000000", amounttext: "$450M", group: "defi-hack"},
  {name: "Ankr", date: "2022-12-02", amount: "5000000", amounttext: "$5M", group: "defi-hack"},
  {name: "Lodestar Finance", date: "2022-12-10", amount: "6900000", amounttext: "$6.9M", group: "defi-hack"},
  {name: "ElasticSwap", date: "2022-12-13", amount: "854000", amounttext: "$854k", group: "defi-hack"},
  {name: "Raydium", date: "2022-12-16", amount: "4400000", amounttext: "$4.4M", group: "defi-hack"},
  {name: "Rubic", date: "2022-12-25", amount: "1410000", amounttext: "$1.41M", group: "defi-hack"},
  {name: "ROE Finance", date: "2023-01-11", amount: "80000", amounttext: "$80k", group: "defi-hack"},
  {name: "Midas Capital", date: "2023-01-17", amount: "660000", amounttext: "$660k", group: "defi-hack"},
  {name: "BonqDAO", date: "2023-02-01", amount: "120000000", amounttext: "$120M", group: "defi-hack"},
  {name: "Orion", date: "2023-02-02", amount: "3000000", amounttext: "$3M", group: "defi-hack"},
];


const parseDate = d3.timeParse("%Y-%m-%d");
data.forEach(d => {
  d.date = parseDate(d.date);
  d.amount = +d.amount;
});


let CircleMaxSizeSettings = 600;
let ChartHeightSettings = 1000;
let PaddingSettings = 10;
let forceYMinStrengthSettings = 20.0;
let forceYMaxStrengthSettings = 180;
let forceYRangeSettings = 1.0;
let forceXSettings = 2;
let forceCollideMultiplierSettings = 1;
let forceManyBodySettings = -1600;
let borderForceSettings = 0.01;
let forceXClampSettings = 8;
let constrainPositionSettings = 1000;
let simulationForceXStrengthSettings = 1;
let simulationForceYStrengthSettings = 0.1;
let simulationAlphaDecaySettings = 0.005;
let tickedForceXClampSettings = 0.1;
let tickedBorderForceSettings = 0.1;


function setInputValues() {
  document.getElementById("CircleMaxSize").value = CircleMaxSizeSettings;
  document.getElementById("ChartHeight").value = ChartHeightSettings;
  document.getElementById("Padding").value = PaddingSettings;
  document.getElementById("forceYMinStrength").value = forceYMinStrengthSettings;
  document.getElementById("forceYMaxStrength").value = forceYMaxStrengthSettings;
  document.getElementById("forceYRange").value = forceYRangeSettings;
  document.getElementById("forceX").value = forceXSettings;
  document.getElementById("forceCollideMultiplier").value = forceCollideMultiplierSettings;
  document.getElementById("forceManyBody").value = forceManyBodySettings;
  document.getElementById("borderForce").value = borderForceSettings;
  document.getElementById("forceXClamp").value = forceXClampSettings;
  document.getElementById("constrainPosition").value = constrainPositionSettings;
  document.getElementById("simulationForceXStrength").value = simulationForceXStrengthSettings;
  document.getElementById("simulationForceYStrength").value = simulationForceYStrengthSettings;
  document.getElementById("simulationAlphaDecay").value = simulationAlphaDecaySettings;
  document.getElementById("tickedForceXClamp").value = tickedForceXClampSettings;
  document.getElementById("tickedBorderForce").value = tickedBorderForceSettings;
}

setInputValues();



document.getElementById("CircleMaxSize").addEventListener("input", updateParameters);
document.getElementById("ChartHeight").addEventListener("input", updateParameters);
document.getElementById("Padding").addEventListener("input", updateParameters);
document.getElementById("forceYMinStrength").addEventListener("input", updateParameters);
document.getElementById("forceYMaxStrength").addEventListener("input", updateParameters);
document.getElementById("forceYRange").addEventListener("input", updateParameters);
document.getElementById("forceX").addEventListener("input", updateParameters);
document.getElementById("forceCollideMultiplier").addEventListener("input", updateParameters);
document.getElementById("forceManyBody").addEventListener("input", updateParameters);
document.getElementById("borderForce").addEventListener("input", updateParameters);
document.getElementById("forceXClamp").addEventListener("input", updateParameters);
document.getElementById("constrainPosition").addEventListener("input", updateParameters);
document.getElementById("simulationForceXStrength").addEventListener("input", updateParameters);
document.getElementById("simulationForceYStrength").addEventListener("input", updateParameters);
document.getElementById("simulationAlphaDecay").addEventListener("input", updateParameters);
document.getElementById("tickedForceXClamp").addEventListener("input", updateParameters);
document.getElementById("tickedBorderForce").addEventListener("input", updateParameters);


function createChart() {
  data.forEach(d => {
    d.date = new Date(d.date);
    d.amount = +d.amount;
  });
  d3.select("#chart svg").remove();

  const xScale = d3.scaleTime()
    .domain([new Date(2011, 0, 1), new Date(2023, 11, 31)])
    .range([0, 23740]);

  const sizeScale = d3.scaleSqrt()
    .domain([2000, 2900000000])
    .range([2, CircleMaxSizeSettings]);

  const width = xScale(new Date(2023, 11, 31));
  const height = ChartHeightSettings;

  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const padding = PaddingSettings;
  data.forEach(d => {
    d.r = sizeScale(d.amount) / 2;
  });


  function eventsInRange(data, event, range) {
    const start = d3.timeMonth.offset(event.date, -range);
    const end = d3.timeMonth.offset(event.date, range);
    return data.filter(d => d.date >= start && d.date <= end).length;
  }

// V2 Вычисляет силу отталкивания на основе количества событий
  function forceStrength(event, range, minStrength, maxStrength) {
    const eventsCount = eventsInRange(data, event, range);
    return eventsCount > 10 ? minStrength : maxStrength - (eventsCount / 10) * (maxStrength - minStrength);
  }


  const minStrength = forceYMinStrengthSettings;
  const maxStrength = forceYMaxStrengthSettings;
  const range = forceYRangeSettings;

  const forceY = d3.forceY(height / 2).strength(d => forceStrength(d, range, minStrength, maxStrength));

  const forceX = d3.forceX(d => xScale(d.date)).strength(forceXSettings);

  const forceCollide = d3.forceCollide(d => sizeScale(d.amount) / 2 + forceCollideMultiplierSettings * forceStrength(d, range, minStrength, maxStrength));

  const forceManyBody = d3.forceManyBody().strength(d => forceManyBodySettings * sizeScale(d.amount) / 300);


  function borderForce(alpha) {
    data.forEach(d => {
      const forceStrength = borderForceSettings * sizeScale(d.amount);
      if (d.x < d.r + padding) {
        d.vx += (d.r + padding - d.x) * alpha * forceStrength;
      } else if (d.x > width - d.r - padding) {
        d.vx -= (d.x - (width - d.r - padding)) * alpha * forceStrength;
      }
      if (d.y < d.r + padding) {
        d.vy += (d.r + padding - d.y) * alpha * forceStrength;
      } else if (d.y > height - d.r - padding) {
        d.vy -= (d.y - (height - d.r - padding)) * alpha * forceStrength;
      }
    });
  }

  function forceXClamp(alpha) {
    data.forEach(d => {
      const targetX = xScale(d.date);
      d.vx += (targetX - d.x) * alpha * forceXClampSettings;
    });
  }

  function constrainPosition(node) {
    const radius = sizeScale(node.amount);
    const minY = radius;
    const maxY = constrainPositionSettings - radius;


    node.y = Math.max(minY, Math.min(maxY, node.y));
  }


  const simulation = d3.forceSimulation(data)
    .force("x", d3.forceX(d => xScale(d.date)).strength(simulationForceXStrengthSettings))
    .force("y", d3.forceY(d => height / 2).strength(simulationForceYStrengthSettings))
    .force("collide", forceCollide)
    .force("manyBody", forceManyBody)
    .alphaDecay(simulationAlphaDecaySettings)
    .on("tick", ticked);






// функции для подписей на кружках
  function getFontSizeFirstLine(diameter) {
    const size = diameter / 6.25;
    return size < 6 ? 6 : size;
  }

  function getFontSizeSecondLine(diameter) {
    const size = diameter / 12.5;
    return size < 4 ? 4 : size;
  }



  const xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.timeFormat("%Y-%m"))
    .ticks(d3.timeMonth.every(1));

  svg.append("g")
    .attr("transform", `translate(0,${1000 - 20})`)
    .call(xAxis);

  const colorScale = d3.scaleOrdinal()
    .domain(["hack", "scam", "defi-hack"])
    .range(["#00FFF0", "#29313D", "#7E8BFF"]);

  const formatDate = d3.timeFormat("%b %d, %Y");

  const circles = svg.selectAll(false) // const circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("id", d => `${d.name}, ${d.amounttext}, ${formatDate(d.date)}`)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", d => sizeScale(d.amount) / 2)
    .attr("fill", d => colorScale(d.group))
    .attr("stroke", "#fff")
    .attr("stroke-width", 0);


  const texts = svg.selectAll(false) // часть настроек текста работает тут, но часть в ticked()
    .data(data)
    .enter()
    .append("text")
    .each(function(d) {
      const diameter = sizeScale(d.amount);
      const fontSizeFirstLine = Math.max(diameter / 5.25, 6); // 6.25, 6
      const fontSizeSecondLine = Math.max(diameter / 12.5, 4);

      let colorFirstLine = "#000000";
      let colorSecondLine = "rgba(0, 0, 0, 0.5)";
      // let yFirstLine = d.y + fontSizeFirstLine / 3;
      // let ySecondLine = d.y + fontSizeSecondLine / 2 - fontSizeFirstLine;
      // let yFirstLine = d.y - fontSizeFirstLine / 4;
      // let ySecondLine = d.y + fontSizeFirstLine / 2 - fontSizeFirstLine / 4;
      let yFirstLine = d.y - fontSizeFirstLine * 0.2;
      let ySecondLine = d.y + fontSizeFirstLine / 2 - fontSizeFirstLine * 0.2;

      if (diameter < 50) {
        colorSecondLine = d3.color(colorScale(d.group)).copy({opacity: 0.5});  // colorScale(d.group);
        yFirstLine = d.y;
        ySecondLine = d.y + d.r + 3;
      }

      if (diameter < 20) {
        colorFirstLine = colorScale(d.group);
        colorSecondLine = d3.color(colorScale(d.group)).copy({opacity: 0.5});  // colorScale(d.group);
        yFirstLine = d.y - d.r - 40;
        ySecondLine = d.y + d.r + 30;
      }

      d3.select(this).append("tspan")
        .attr("x", d.x)
        .attr("y", yFirstLine + fontSizeFirstLine / 2) // добавляем половину размера шрифта
        .attr("font-family", "Inter")
        .attr("font-weight", "800")
        .attr("font-size", fontSizeFirstLine + "px")
        .attr("fill", colorFirstLine)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "baseline") // заменяем dominant-baseline на alignment-baseline
        .text(d.amounttext);

      d3.select(this).append("tspan")
        .attr("x", d.x)
        .attr("y", ySecondLine + fontSizeSecondLine / 2) // добавляем половину размера шрифта
        .attr("font-family", "Inter")
        .attr("font-weight", "500")
        .attr("font-size", fontSizeSecondLine + "px")
        .attr("fill", colorSecondLine)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "baseline") // заменяем dominant-baseline на alignment-baseline
        .text(d.name);
    });



  const lines = svg.selectAll("line")
    .data(data)
    .enter()
    .append("line")
    .attr("x1", d => d.x)
    .attr("y1", d => d.y)
    .attr("x2", d => xScale(d.date))
    .attr("y2", d => d.y)
    .attr("stroke", "#fff")
    .attr("stroke-width", 1);



  function ticked() {
    forceXClamp(tickedForceXClampSettings);
    borderForce(tickedBorderForceSettings);

    circles
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    texts.selectAll('tspan')
      .attr("x", d => d.x)
      .each(function(d, i) {
        const diameter = sizeScale(d.amount);
        const fontSizeFirstLine = Math.max(diameter / 6.25, 6);
        const fontSizeSecondLine = Math.max(diameter / 12.5, 4);

//  let yFirstLine = d.y;
//  let ySecondLine = d.y + fontSizeFirstLine;
//  let yFirstLine = d.y - fontSizeFirstLine / 4;
//  let ySecondLine = d.y + fontSizeFirstLine - fontSizeFirstLine / 4;
        let yFirstLine = d.y - fontSizeFirstLine * 0.2;
        let ySecondLine = d.y + fontSizeFirstLine - fontSizeFirstLine * 0.2;

        if (diameter < 50) {
          yFirstLine = d.y;
          ySecondLine = d.y + d.r + 6;
        }

        if (diameter < 20) {
          yFirstLine = d.y - d.r - 8;
          ySecondLine = d.y + d.r + 6;
        }

        const yPos = i == 0 ? yFirstLine + fontSizeFirstLine / 2 : ySecondLine + fontSizeSecondLine / 2; // добавляем половину размера шрифта
        d3.select(this).attr("y", yPos);
      });



    lines
      .attr("x1", d => d.x)
      .attr("y1", d => d.y)
      .attr("x2", d => xScale(d.date))
      .attr("y2", d => d.y);
  }



  const formatAmount = d3.format(",.0f");




  function saveSvg(svgElement, fileName) {
    const serializer = new XMLSerializer();
    const source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(svgElement.node());
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  document.getElementById("save-svg").addEventListener("click", () => {
    saveSvg(svg, "chart.svg");
  });



}




function updateParameters() {
  CircleMaxSizeSettings = parseFloat(document.getElementById("CircleMaxSize").value);
  ChartHeightSettings = parseFloat(document.getElementById("ChartHeight").value);
  PaddingSettings = parseFloat(document.getElementById("Padding").value);
  forceYMinStrengthSettings = parseFloat(document.getElementById("forceYMinStrength").value);
  forceYMaxStrengthSettings = parseFloat(document.getElementById("forceYMaxStrength").value);
  forceYRangeSettings = parseFloat(document.getElementById("forceYRange").value);
  forceXSettings = parseFloat(document.getElementById("forceX").value);
  forceCollideMultiplierSettings = parseFloat(document.getElementById("forceCollideMultiplier").value);
  forceManyBodySettings = parseFloat(document.getElementById("forceManyBody").value);
  borderForceSettings = parseFloat(document.getElementById("borderForce").value);
  forceXClampSettings = parseFloat(document.getElementById("forceXClamp").value);
  constrainPositionSettings = parseFloat(document.getElementById("constrainPosition").value);
  simulationForceXStrengthSettings = parseFloat(document.getElementById("simulationForceXStrength").value);
  simulationForceYStrengthSettings = parseFloat(document.getElementById("simulationForceYStrength").value);
  simulationAlphaDecaySettings = parseFloat(document.getElementById("simulationAlphaDecay").value);
  tickedForceXClampSettings = parseFloat(document.getElementById("tickedForceXClamp").value);
  tickedBorderForceSettings = parseFloat(document.getElementById("tickedBorderForce").value);

  createChart();
}

createChart();







