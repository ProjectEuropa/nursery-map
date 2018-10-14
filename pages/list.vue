<template>
<div>
    <section>
    <h2 class="container">MAPのある都道府県・市区町村一覧</h2>
        <div class="pricing_table_wdg container">
            <ul>
                <li>埼玉県</li>
                <li><a href="/nursery/saitama/yashio">八潮市・保育園</a><a href="/preschool/saitama/yashio">八潮市・幼稚園</a></li>
                <li><a href="/nursery//saitama/misato">三郷市</a></li>
                <li><a href="/nursery//saitama/souka">草加市</a></li>
            </ul>
        </div>
    </section>
  </div>
</template>


<style lang="css" scoped>
.pricing_table_wdg {  
	border:1px solid #c4cbcc;
	border-radius:4px;
	-moz-border-radius:4px;
	-webkit-border-radius:4px;
	margin-top: 25px;
}
.pricing_table_wdg ul { 
	list-style:none; 
	width:147px; 
	margin:0; 
	border:1px solid #f2f3f3;
	padding:5px;
	text-align:center;
	background-color:#FFF;
}
.pricing_table_wdg ul:hover { 
	-webkit-transform: scale(1.1);
  	-moz-transform: scale(1.1);
  	-o-transform: scale(1.1);
  	-moz-box-shadow:3px 5px 7px rgba(0,0,0,.7);
  	-webkit-box-shadow: 3px 5px 7px rgba(0,0,0,.7);
  	box-shadow:3px 5px 7px rgba(0,0,0,.7);
	cursor:pointer;
	background:#d8e9f9;
}
.pricing_table_wdg ul li {  
	border-bottom:1px dashed #cfd2d2;
	padding:10px 0;
}
.pricing_table_wdg ul li:first-child { 
	color:#FFFFFF;
	font-size:18px;
	font-weight:bold;
	background:#2e818f;
}
li a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
}
li a:hover {
  color: #0090aa;
}

</style>
