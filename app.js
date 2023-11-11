for (var i = 0; i <= 50; ++i) {
  console.log(i)
  if( i % 10 === 0 ) console.log('今' + i + '回ループしました。');
  if( i % 4 === 0 ) console.log('4で割れる数です。' + i)
  if( i === 50) console.log('50回カウントが終わりました。')
}