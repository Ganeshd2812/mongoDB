use population
'switched to db population'
db.zipcodes.find({city:"ATLANTA",state:"GA"})
{ _id: '30303',
  city: 'ATLANTA',
  loc: [ -84.388846, 33.752504 ],
  pop: 1845,
  state: 'GA' }
{ _id: '30308',
  city: 'ATLANTA',
  loc: [ -84.375744, 33.771839 ],
  pop: 8549,
  state: 'GA' }
{ _id: '30315',
  city: 'ATLANTA',
  loc: [ -84.380771, 33.705062 ],
  pop: 41061,
  state: 'GA' }
{ _id: '30331',
  city: 'ATLANTA',
  loc: [ -84.520468, 33.72241 ],
  pop: 38185,
  state: 'GA' }
{ _id: '30334',
  city: 'ATLANTA',
  loc: [ -84.388188, 33.74715 ],
  pop: 0,
  state: 'GA' }
{ _id: '30342',
  city: 'ATLANTA',
  loc: [ -84.376091, 33.884245 ],
  pop: 19057,
  state: 'GA' }
{ _id: '30309',
  city: 'ATLANTA',
  loc: [ -84.388338, 33.798407 ],
  pop: 14766,
  state: 'GA' }
{ _id: '30336',
  city: 'ATLANTA',
  loc: [ -84.510028, 33.78534 ],
  pop: 1228,
  state: 'GA' }
{ _id: '30350',
  city: 'ATLANTA',
  loc: [ -84.341146, 33.979471 ],
  pop: 24573,
  state: 'GA' }
{ _id: '30310',
  city: 'ATLANTA',
  loc: [ -84.423173, 33.727849 ],
  pop: 34017,
  state: 'GA' }
{ _id: '30317',
  city: 'ATLANTA',
  loc: [ -84.31685, 33.749788 ],
  pop: 16395,
  state: 'GA' }
{ _id: '30329',
  city: 'ATLANTA',
  loc: [ -84.321402, 33.823555 ],
  pop: 17013,
  state: 'GA' }
{ _id: '30330',
  city: 'ATLANTA',
  loc: [ -84.434735, 33.70645 ],
  pop: 643,
  state: 'GA' }
{ _id: '30346',
  city: 'ATLANTA',
  loc: [ -84.333354, 33.926717 ],
  pop: 18,
  state: 'GA' }
{ _id: '30349',
  city: 'ATLANTA',
  loc: [ -84.481258, 33.605331 ],
  pop: 48116,
  state: 'GA' }
{ _id: '30305',
  city: 'ATLANTA',
  loc: [ -84.385145, 33.831963 ],
  pop: 19122,
  state: 'GA' }
{ _id: '30307',
  city: 'ATLANTA',
  loc: [ -84.335957, 33.769138 ],
  pop: 16330,
  state: 'GA' }
{ _id: '30339',
  city: 'ATLANTA',
  loc: [ -84.462879, 33.87125 ],
  pop: 11158,
  state: 'GA' }
{ _id: '30319',
  city: 'ATLANTA',
  loc: [ -84.335091, 33.868728 ],
  pop: 32138,
  state: 'GA' }
{ _id: '30324',
  city: 'ATLANTA',
  loc: [ -84.354867, 33.820609 ],
  pop: 15044,
  state: 'GA' }

db.zipcodes.aggregate([{$match:{city:"ATLANTA",state:"GA"}}])
{ _id: '30303',
  city: 'ATLANTA',
  loc: [ -84.388846, 33.752504 ],
  pop: 1845,
  state: 'GA' }
{ _id: '30308',
  city: 'ATLANTA',
  loc: [ -84.375744, 33.771839 ],
  pop: 8549,
  state: 'GA' }
{ _id: '30315',
  city: 'ATLANTA',
  loc: [ -84.380771, 33.705062 ],
  pop: 41061,
  state: 'GA' }
{ _id: '30331',
  city: 'ATLANTA',
  loc: [ -84.520468, 33.72241 ],
  pop: 38185,
  state: 'GA' }
{ _id: '30334',
  city: 'ATLANTA',
  loc: [ -84.388188, 33.74715 ],
  pop: 0,
  state: 'GA' }
{ _id: '30342',
  city: 'ATLANTA',
  loc: [ -84.376091, 33.884245 ],
  pop: 19057,
  state: 'GA' }
{ _id: '30309',
  city: 'ATLANTA',
  loc: [ -84.388338, 33.798407 ],
  pop: 14766,
  state: 'GA' }
{ _id: '30336',
  city: 'ATLANTA',
  loc: [ -84.510028, 33.78534 ],
  pop: 1228,
  state: 'GA' }
{ _id: '30350',
  city: 'ATLANTA',
  loc: [ -84.341146, 33.979471 ],
  pop: 24573,
  state: 'GA' }
{ _id: '30310',
  city: 'ATLANTA',
  loc: [ -84.423173, 33.727849 ],
  pop: 34017,
  state: 'GA' }
{ _id: '30317',
  city: 'ATLANTA',
  loc: [ -84.31685, 33.749788 ],
  pop: 16395,
  state: 'GA' }
{ _id: '30329',
  city: 'ATLANTA',
  loc: [ -84.321402, 33.823555 ],
  pop: 17013,
  state: 'GA' }
{ _id: '30330',
  city: 'ATLANTA',
  loc: [ -84.434735, 33.70645 ],
  pop: 643,
  state: 'GA' }
{ _id: '30346',
  city: 'ATLANTA',
  loc: [ -84.333354, 33.926717 ],
  pop: 18,
  state: 'GA' }
{ _id: '30349',
  city: 'ATLANTA',
  loc: [ -84.481258, 33.605331 ],
  pop: 48116,
  state: 'GA' }
{ _id: '30305',
  city: 'ATLANTA',
  loc: [ -84.385145, 33.831963 ],
  pop: 19122,
  state: 'GA' }
{ _id: '30307',
  city: 'ATLANTA',
  loc: [ -84.335957, 33.769138 ],
  pop: 16330,
  state: 'GA' }
{ _id: '30339',
  city: 'ATLANTA',
  loc: [ -84.462879, 33.87125 ],
  pop: 11158,
  state: 'GA' }
{ _id: '30319',
  city: 'ATLANTA',
  loc: [ -84.335091, 33.868728 ],
  pop: 32138,
  state: 'GA' }
{ _id: '30324',
  city: 'ATLANTA',
  loc: [ -84.354867, 33.820609 ],
  pop: 15044,
  state: 'GA' }

db.zipcodes.aggregate({$group:{_id:"$city"}},{$count:"ATLANTA"})
{ ATLANTA: 16584 }
    
db.zipcodes.aggregate({$match:{city:"ATLANTA"}},{$group:{_id:"$city",total:{$sum:"pop"}}})
{ _id: 'ATLANTA', total: 0 }



 #POPULATION BY STATE

 db.zipcodes.aggregate({$group: {_id: "$state", total: {$sum: "$pop"}}})
{ _id: 'VA', total: 6181479 }
{ _id: 'AZ', total: 3665228 }
{ _id: 'DC', total: 606900 }
{ _id: 'MI', total: 9295297 }
{ _id: 'OK', total: 3145585 }
{ _id: 'KY', total: 3675484 }
{ _id: 'TN', total: 4876457 }
{ _id: 'IN', total: 5544136 }
{ _id: 'NV', total: 1201833 }
{ _id: 'CA', total: 29754890 }
{ _id: 'UT', total: 1722850 }
{ _id: 'NY', total: 17990402 }
{ _id: 'CT', total: 3287116 }
{ _id: 'WI', total: 4891769 }
{ _id: 'MD', total: 4781379 }
{ _id: 'KS', total: 2475285 }
{ _id: 'NJ', total: 7730188 }
{ _id: 'WY', total: 453528 }
{ _id: 'GA', total: 6478216 }
{ _id: 'AL', total: 4040587 }

db.zipcodes.aggregate([{$group:{_id: "$state", total: {$sum: "$pop"}}},{$sort : {total: -1}}])
{ _id: 'CA', total: 29754890 }
{ _id: 'NY', total: 17990402 }
{ _id: 'TX', total: 16984601 }
{ _id: 'FL', total: 12686644 }
{ _id: 'PA', total: 11881643 }
{ _id: 'IL', total: 11427576 }
{ _id: 'OH', total: 10846517 }
{ _id: 'MI', total: 9295297 }
{ _id: 'NJ', total: 7730188 }
{ _id: 'NC', total: 6628637 }
{ _id: 'GA', total: 6478216 }
{ _id: 'VA', total: 6181479 }
{ _id: 'MA', total: 6016425 }
{ _id: 'IN', total: 5544136 }
{ _id: 'MO', total: 5110648 }
{ _id: 'WI', total: 4891769 }
{ _id: 'TN', total: 4876457 }
{ _id: 'WA', total: 4866692 }
{ _id: 'MD', total: 4781379 }
{ _id: 'MN', total: 4372982 }

db.zipcodes.aggregate([{$group:{_id: "$state",total:{$sum: "$pop"}}},{$sort :{total: -1}},{$limit: 3}])
{ _id: 'CA', total: 29754890 }
{ _id: 'NY', total: 17990402 }
{ _id: 'TX', total: 16984601 }


#POPULATIONS BY CITY

db.zipcodes.aggregate([{$group: {_id: { city: '$city', state: '$state' } , total: {$sum: "$pop"}}}])
{ _id: { city: 'SAINT BERNARD', state: 'OH' }, total: 8838 }
{ _id: { city: 'CRUM', state: 'WV' }, total: 763 }
{ _id: { city: 'EGAN', state: 'SD' }, total: 658 }
{ _id: { city: 'BEVIER', state: 'MO' }, total: 1273 }
{ _id: { city: 'SMITHFIELD', state: 'WV' }, total: 775 }
{ _id: { city: 'MILTON', state: 'IA' }, total: 851 }
{ _id: { city: 'BUCHANAN', state: 'TN' }, total: 3352 }
{ _id: { city: 'CERRILLOS', state: 'NM' }, total: 788 }
{ _id: { city: 'PLACENTIA', state: 'CA' }, total: 47174 }
{ _id: { city: 'COSMOPOLIS', state: 'WA' }, total: 1424 }
{ _id: { city: 'CLEM', state: 'WV' }, total: 1276 }
{ _id: { city: 'ADELANTO', state: 'CA' }, total: 7176 }
{ _id: { city: 'CHANDLER', state: 'AZ' }, total: 91211 }
{ _id: { city: 'DUKEDOM', state: 'TN' }, total: 933 }
{ _id: { city: 'UXBRIDGE', state: 'MA' }, total: 10364 }
{ _id: { city: 'WEST CALDWELL', state: 'NJ' }, total: 24946 }
{ _id: { city: 'BLOOMER', state: 'WI' }, total: 6410 }
{ _id: { city: 'ANGOLA', state: 'LA' }, total: 5382 }
{ _id: { city: 'PORT WASHINGTON', state: 'NY' }, total: 28264 }
{ _id: { city: 'FRENCHTOWN', state: 'NJ' }, total: 4383 }


db.zipcodes.aggregate([{$group:{_id:{city: '$city', state:'$state' } , total:{$sum: "$pop"}}},{$sort : {total: -1}}])
{ _id: { city: 'CHICAGO', state: 'IL' }, total: 2452177 }
{ _id: { city: 'BROOKLYN', state: 'NY' }, total: 2300504 }
{ _id: { city: 'LOS ANGELES', state: 'CA' }, total: 2102295 }
{ _id: { city: 'HOUSTON', state: 'TX' }, total: 2095918 }
{ _id: { city: 'PHILADELPHIA', state: 'PA' }, total: 1610956 }
{ _id: { city: 'NEW YORK', state: 'NY' }, total: 1476790 }
{ _id: { city: 'BRONX', state: 'NY' }, total: 1209548 }
{ _id: { city: 'SAN DIEGO', state: 'CA' }, total: 1049298 }
{ _id: { city: 'DETROIT', state: 'MI' }, total: 963243 }
{ _id: { city: 'DALLAS', state: 'TX' }, total: 940191 }
{ _id: { city: 'PHOENIX', state: 'AZ' }, total: 890853 }
{ _id: { city: 'MIAMI', state: 'FL' }, total: 825232 }
{ _id: { city: 'SAN JOSE', state: 'CA' }, total: 816653 }
{ _id: { city: 'SAN ANTONIO', state: 'TX' }, total: 811792 }
{ _id: { city: 'BALTIMORE', state: 'MD' }, total: 733081 }
{ _id: { city: 'SAN FRANCISCO', state: 'CA' }, total: 723993 }
{ _id: { city: 'MEMPHIS', state: 'TN' }, total: 632837 }
{ _id: { city: 'SACRAMENTO', state: 'CA' }, total: 628279 }
{ _id: { city: 'JACKSONVILLE', state: 'FL' }, total: 610160 }
{ _id: { city: 'ATLANTA', state: 'GA' }, total: 609591 }


db.zipcodes.aggregate([{$group: {_id: { city: '$city', state: '$state' } , total: {$sum: "$pop"}}},{$sort : {total: -1}}, {$limit: 3}])
{ _id: { city: 'CHICAGO', state: 'IL' }, total: 2452177 }
{ _id: { city: 'BROOKLYN', state: 'NY' }, total: 2300504 }
{ _id: { city: 'LOS ANGELES', state: 'CA' }, total: 2102295 }

db.zipcodes.aggregate([{$match: {state: "TX"}},{$group: {_id: { city: '$city', state: '$state' } , total: {$sum: "$pop"}}},{$sort : {total: -1}}, {$limit: 3}])
{ _id: { city: 'HOUSTON', state: 'TX' }, total: 2095918 }
{ _id: { city: 'DALLAS', state: 'TX' }, total: 940191 }
{ _id: { city: 'SAN ANTONIO', state: 'TX' }, total: 811792 }


#BONUS

db.zipcodes.aggregate([{$group: {_id: {state: '$state' } , total: {$avg: "$pop"}}}])
{ _id: { state: 'IA' }, total: 3011.301518438178 }
{ _id: { state: 'TX' }, total: 10164.333333333334 }
{ _id: { state: 'VT' }, total: 2315.8765432098767 }
{ _id: { state: 'MS' }, total: 7088.749311294766 }
{ _id: { state: 'DE' }, total: 12569.207547169812 }
{ _id: { state: 'LA' }, total: 9089.644396551725 }
{ _id: { state: 'SD' }, total: 1810.9296875 }
{ _id: { state: 'ID' }, total: 4126.020491803279 }
{ _id: { state: 'OR' }, total: 7401.877604166667 }
{ _id: { state: 'VA' }, total: 7575.341911764706 }
{ _id: { state: 'PA' }, total: 8149.275034293552 }
{ _id: { state: 'NE' }, total: 2749.3710801393727 }
{ _id: { state: 'NC' }, total: 9402.321985815603 }
{ _id: { state: 'NH' }, total: 5088.311926605505 }
{ _id: { state: 'SC' }, total: 9962.00857142857 }
{ _id: { state: 'OH' }, total: 10771.119165839125 }
{ _id: { state: 'FL' }, total: 15779.407960199005 }
{ _id: { state: 'ME' }, total: 2991.8243902439026 }
{ _id: { state: 'MA' }, total: 12692.879746835442 }
{ _id: { state: 'MN' }, total: 4958.02947845805 }



db.zipcodes.aggregate([ {$group: {_id: {state: '$state' } , total: {$avg: "$pop"}}}, {$sort : {total: -1}},{$limit: 3}])
{ _id: { state: 'DC' }, total: 25287.5 }
{ _id: { state: 'CA' }, total: 19627.236147757256 }
{ _id: { state: 'FL' }, total: 15779.407960199005 }