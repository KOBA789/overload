//***************************************************
//*
//*  "/* */"のコメントアウトを解除してお楽しみください
//*
//***************************************************

var overload = require('./overload');

//TCP かなんかで接続する関数だとする
//Node でこういうのあったよね
var connect = function (host, port) {
  //ここで引数を預ける
  overload(arguments).
  //引数の型で指定
  /*
  def('number', function () {
    //TODO: この辺で入れ替えのコードを書かなきゃいけないのはまだ不便
    port = host;
    host = 'localhost';
  }).
  */
  //配列にすれば型の条件は複数設定できる(もちろん OR)
  /*
  def(['string', 'number'], function () {
    port = host;
    host = 'localhost';
  }).
  */
  //引数の個数で指定
  /*
  def(1, function () {
    port = host;
    host = 'localhost';
  }).
  */
  //else的なアレ(もちろん省略可)
  /*
  def(function () {
    
  });
  */
  
  console.log(host, port);
}

//呼び出すときは普通
connect(8124);
connect('koba789.com', 8124);
