// TODO: use ES6
// TODO: check node folder structure

module.exports = {
	// TODO: use list from semantic ui site
	/*
<div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>
  <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>
  <div class="item" data-value="al"><i class="al flag"></i>Albania</div>
  <div class="item" data-value="dz"><i class="dz flag"></i>Algeria</div>
  <div class="item" data-value="as"><i class="as flag"></i>American Samoa</div>
  <div class="item" data-value="ad"><i class="ad flag"></i>Andorra</div>
  <div class="item" data-value="ao"><i class="ao flag"></i>Angola</div>
  <div class="item" data-value="ai"><i class="ai flag"></i>Anguilla</div>
  <div class="item" data-value="ag"><i class="ag flag"></i>Antigua</div>
  <div class="item" data-value="ar"><i class="ar flag"></i>Argentina</div>
  <div class="item" data-value="am"><i class="am flag"></i>Armenia</div>
  <div class="item" data-value="aw"><i class="aw flag"></i>Aruba</div>
  <div class="item" data-value="au"><i class="au flag"></i>Australia</div>
  <div class="item" data-value="at"><i class="at flag"></i>Austria</div>
  <div class="item" data-value="az"><i class="az flag"></i>Azerbaijan</div>
  <div class="item" data-value="bs"><i class="bs flag"></i>Bahamas</div>
  <div class="item" data-value="bh"><i class="bh flag"></i>Bahrain</div>
  <div class="item" data-value="bd"><i class="bd flag"></i>Bangladesh</div>
  <div class="item" data-value="bb"><i class="bb flag"></i>Barbados</div>
  <div class="item" data-value="by"><i class="by flag"></i>Belarus</div>
  <div class="item" data-value="be"><i class="be flag"></i>Belgium</div>
  <div class="item" data-value="bz"><i class="bz flag"></i>Belize</div>
  <div class="item" data-value="bj"><i class="bj flag"></i>Benin</div>
  <div class="item" data-value="bm"><i class="bm flag"></i>Bermuda</div>
  <div class="item" data-value="bt"><i class="bt flag"></i>Bhutan</div>
  <div class="item" data-value="bo"><i class="bo flag"></i>Bolivia</div>
  <div class="item" data-value="ba"><i class="ba flag"></i>Bosnia</div>
  <div class="item" data-value="bw"><i class="bw flag"></i>Botswana</div>
  <div class="item" data-value="bv"><i class="bv flag"></i>Bouvet Island</div>
  <div class="item" data-value="br"><i class="br flag"></i>Brazil</div>
  <div class="item" data-value="vg"><i class="vg flag"></i>British Virgin Islands</div>
  <div class="item" data-value="bn"><i class="bn flag"></i>Brunei</div>
  <div class="item" data-value="bg"><i class="bg flag"></i>Bulgaria</div>
  <div class="item" data-value="bf"><i class="bf flag"></i>Burkina Faso</div>
  <div class="item" data-value="ar"><i class="ar flag"></i>Burma</div>
  <div class="item" data-value="bi"><i class="bi flag"></i>Burundi</div>
  <div class="item" data-value="tc"><i class="tc flag"></i>Caicos Islands</div>
  <div class="item" data-value="kh"><i class="kh flag"></i>Cambodia</div>
  <div class="item" data-value="cm"><i class="cm flag"></i>Cameroon</div>
  <div class="item" data-value="ca"><i class="ca flag"></i>Canada</div>
  <div class="item" data-value="cv"><i class="cv flag"></i>Cape Verde</div>
  <div class="item" data-value="ky"><i class="ky flag"></i>Cayman Islands</div>
  <div class="item" data-value="cf"><i class="cf flag"></i>Central African Republic</div>
  <div class="item" data-value="td"><i class="td flag"></i>Chad</div>
  <div class="item" data-value="cl"><i class="cl flag"></i>Chile</div>
  <div class="item" data-value="cn"><i class="cn flag"></i>China</div>
  <div class="item" data-value="cx"><i class="cx flag"></i>Christmas Island</div>
  <div class="item" data-value="cc"><i class="cc flag"></i>Cocos Islands</div>
  <div class="item" data-value="co"><i class="co flag"></i>Colombia</div>
  <div class="item" data-value="km"><i class="km flag"></i>Comoros</div>
  <div class="item" data-value="cg"><i class="cg flag"></i>Congo Brazzaville</div>
  <div class="item" data-value="cd"><i class="cd flag"></i>Congo</div>
  <div class="item" data-value="ck"><i class="ck flag"></i>Cook Islands</div>
  <div class="item" data-value="cr"><i class="cr flag"></i>Costa Rica</div>
  <div class="item" data-value="ci"><i class="ci flag"></i>Cote Divoire</div>
  <div class="item" data-value="hr"><i class="hr flag"></i>Croatia</div>
  <div class="item" data-value="cu"><i class="cu flag"></i>Cuba</div>
  <div class="item" data-value="cy"><i class="cy flag"></i>Cyprus</div>
  <div class="item" data-value="cz"><i class="cz flag"></i>Czech Republic</div>
  <div class="item" data-value="dk"><i class="dk flag"></i>Denmark</div>
  <div class="item" data-value="dj"><i class="dj flag"></i>Djibouti</div>
  <div class="item" data-value="dm"><i class="dm flag"></i>Dominica</div>
  <div class="item" data-value="do"><i class="do flag"></i>Dominican Republic</div>
  <div class="item" data-value="ec"><i class="ec flag"></i>Ecuador</div>
  <div class="item" data-value="eg"><i class="eg flag"></i>Egypt</div>
  <div class="item" data-value="sv"><i class="sv flag"></i>El Salvador</div>
  <div class="item" data-value="gb"><i class="gb flag"></i>England</div>
  <div class="item" data-value="gq"><i class="gq flag"></i>Equatorial Guinea</div>
  <div class="item" data-value="er"><i class="er flag"></i>Eritrea</div>
  <div class="item" data-value="ee"><i class="ee flag"></i>Estonia</div>
  <div class="item" data-value="et"><i class="et flag"></i>Ethiopia</div>
  <div class="item" data-value="eu"><i class="eu flag"></i>European Union</div>
  <div class="item" data-value="fk"><i class="fk flag"></i>Falkland Islands</div>
  <div class="item" data-value="fo"><i class="fo flag"></i>Faroe Islands</div>
  <div class="item" data-value="fj"><i class="fj flag"></i>Fiji</div>
  <div class="item" data-value="fi"><i class="fi flag"></i>Finland</div>
  <div class="item" data-value="fr"><i class="fr flag"></i>France</div>
  <div class="item" data-value="gf"><i class="gf flag"></i>French Guiana</div>
  <div class="item" data-value="pf"><i class="pf flag"></i>French Polynesia</div>
  <div class="item" data-value="tf"><i class="tf flag"></i>French Territories</div>
  <div class="item" data-value="ga"><i class="ga flag"></i>Gabon</div>
  <div class="item" data-value="gm"><i class="gm flag"></i>Gambia</div>
  <div class="item" data-value="ge"><i class="ge flag"></i>Georgia</div>
  <div class="item" data-value="de"><i class="de flag"></i>Germany</div>
  <div class="item" data-value="gh"><i class="gh flag"></i>Ghana</div>
  <div class="item" data-value="gi"><i class="gi flag"></i>Gibraltar</div>
  <div class="item" data-value="gr"><i class="gr flag"></i>Greece</div>
  <div class="item" data-value="gl"><i class="gl flag"></i>Greenland</div>
  <div class="item" data-value="gd"><i class="gd flag"></i>Grenada</div>
  <div class="item" data-value="gp"><i class="gp flag"></i>Guadeloupe</div>
  <div class="item" data-value="gu"><i class="gu flag"></i>Guam</div>
  <div class="item" data-value="gt"><i class="gt flag"></i>Guatemala</div>
  <div class="item" data-value="gw"><i class="gw flag"></i>Guinea-Bissau</div>
  <div class="item" data-value="gn"><i class="gn flag"></i>Guinea</div>
  <div class="item" data-value="gy"><i class="gy flag"></i>Guyana</div>
  <div class="item" data-value="ht"><i class="ht flag"></i>Haiti</div>
  <div class="item" data-value="hm"><i class="hm flag"></i>Heard Island</div>
  <div class="item" data-value="hn"><i class="hn flag"></i>Honduras</div>
  <div class="item" data-value="hk"><i class="hk flag"></i>Hong Kong</div>
  <div class="item" data-value="hu"><i class="hu flag"></i>Hungary</div>
  <div class="item" data-value="is"><i class="is flag"></i>Iceland</div>
  <div class="item" data-value="in"><i class="in flag"></i>India</div>
  <div class="item" data-value="io"><i class="io flag"></i>Indian Ocean Territory</div>
  <div class="item" data-value="id"><i class="id flag"></i>Indonesia</div>
  <div class="item" data-value="ir"><i class="ir flag"></i>Iran</div>
  <div class="item" data-value="iq"><i class="iq flag"></i>Iraq</div>
  <div class="item" data-value="ie"><i class="ie flag"></i>Ireland</div>
  <div class="item" data-value="il"><i class="il flag"></i>Israel</div>
  <div class="item" data-value="it"><i class="it flag"></i>Italy</div>
  <div class="item" data-value="jm"><i class="jm flag"></i>Jamaica</div>
  <div class="item" data-value="jp"><i class="jp flag"></i>Japan</div>
  <div class="item" data-value="jo"><i class="jo flag"></i>Jordan</div>
  <div class="item" data-value="kz"><i class="kz flag"></i>Kazakhstan</div>
  <div class="item" data-value="ke"><i class="ke flag"></i>Kenya</div>
  <div class="item" data-value="ki"><i class="ki flag"></i>Kiribati</div>
  <div class="item" data-value="kw"><i class="kw flag"></i>Kuwait</div>
  <div class="item" data-value="kg"><i class="kg flag"></i>Kyrgyzstan</div>
  <div class="item" data-value="la"><i class="la flag"></i>Laos</div>
  <div class="item" data-value="lv"><i class="lv flag"></i>Latvia</div>
  <div class="item" data-value="lb"><i class="lb flag"></i>Lebanon</div>
  <div class="item" data-value="ls"><i class="ls flag"></i>Lesotho</div>
  <div class="item" data-value="lr"><i class="lr flag"></i>Liberia</div>
  <div class="item" data-value="ly"><i class="ly flag"></i>Libya</div>
  <div class="item" data-value="li"><i class="li flag"></i>Liechtenstein</div>
  <div class="item" data-value="lt"><i class="lt flag"></i>Lithuania</div>
  <div class="item" data-value="lu"><i class="lu flag"></i>Luxembourg</div>
  <div class="item" data-value="mo"><i class="mo flag"></i>Macau</div>
  <div class="item" data-value="mk"><i class="mk flag"></i>Macedonia</div>
  <div class="item" data-value="mg"><i class="mg flag"></i>Madagascar</div>
  <div class="item" data-value="mw"><i class="mw flag"></i>Malawi</div>
  <div class="item" data-value="my"><i class="my flag"></i>Malaysia</div>
  <div class="item" data-value="mv"><i class="mv flag"></i>Maldives</div>
  <div class="item" data-value="ml"><i class="ml flag"></i>Mali</div>
  <div class="item" data-value="mt"><i class="mt flag"></i>Malta</div>
  <div class="item" data-value="mh"><i class="mh flag"></i>Marshall Islands</div>
  <div class="item" data-value="mq"><i class="mq flag"></i>Martinique</div>
  <div class="item" data-value="mr"><i class="mr flag"></i>Mauritania</div>
  <div class="item" data-value="mu"><i class="mu flag"></i>Mauritius</div>
  <div class="item" data-value="yt"><i class="yt flag"></i>Mayotte</div>
  <div class="item" data-value="mx"><i class="mx flag"></i>Mexico</div>
  <div class="item" data-value="fm"><i class="fm flag"></i>Micronesia</div>
  <div class="item" data-value="md"><i class="md flag"></i>Moldova</div>
  <div class="item" data-value="mc"><i class="mc flag"></i>Monaco</div>
  <div class="item" data-value="mn"><i class="mn flag"></i>Mongolia</div>
  <div class="item" data-value="me"><i class="me flag"></i>Montenegro</div>
  <div class="item" data-value="ms"><i class="ms flag"></i>Montserrat</div>
  <div class="item" data-value="ma"><i class="ma flag"></i>Morocco</div>
  <div class="item" data-value="mz"><i class="mz flag"></i>Mozambique</div>
  <div class="item" data-value="na"><i class="na flag"></i>Namibia</div>
  <div class="item" data-value="nr"><i class="nr flag"></i>Nauru</div>
  <div class="item" data-value="np"><i class="np flag"></i>Nepal</div>
  <div class="item" data-value="an"><i class="an flag"></i>Netherlands Antilles</div>
  <div class="item" data-value="nl"><i class="nl flag"></i>Netherlands</div>
  <div class="item" data-value="nc"><i class="nc flag"></i>New Caledonia</div>
  <div class="item" data-value="pg"><i class="pg flag"></i>New Guinea</div>
  <div class="item" data-value="nz"><i class="nz flag"></i>New Zealand</div>
  <div class="item" data-value="ni"><i class="ni flag"></i>Nicaragua</div>
  <div class="item" data-value="ne"><i class="ne flag"></i>Niger</div>
  <div class="item" data-value="ng"><i class="ng flag"></i>Nigeria</div>
  <div class="item" data-value="nu"><i class="nu flag"></i>Niue</div>
  <div class="item" data-value="nf"><i class="nf flag"></i>Norfolk Island</div>
  <div class="item" data-value="kp"><i class="kp flag"></i>North Korea</div>
  <div class="item" data-value="mp"><i class="mp flag"></i>Northern Mariana Islands</div>
  <div class="item" data-value="no"><i class="no flag"></i>Norway</div>
  <div class="item" data-value="om"><i class="om flag"></i>Oman</div>
  <div class="item" data-value="pk"><i class="pk flag"></i>Pakistan</div>
  <div class="item" data-value="pw"><i class="pw flag"></i>Palau</div>
  <div class="item" data-value="ps"><i class="ps flag"></i>Palestine</div>
  <div class="item" data-value="pa"><i class="pa flag"></i>Panama</div>
  <div class="item" data-value="py"><i class="py flag"></i>Paraguay</div>
  <div class="item" data-value="pe"><i class="pe flag"></i>Peru</div>
  <div class="item" data-value="ph"><i class="ph flag"></i>Philippines</div>
  <div class="item" data-value="pn"><i class="pn flag"></i>Pitcairn Islands</div>
  <div class="item" data-value="pl"><i class="pl flag"></i>Poland</div>
  <div class="item" data-value="pt"><i class="pt flag"></i>Portugal</div>
  <div class="item" data-value="pr"><i class="pr flag"></i>Puerto Rico</div>
  <div class="item" data-value="qa"><i class="qa flag"></i>Qatar</div>
  <div class="item" data-value="re"><i class="re flag"></i>Reunion</div>
  <div class="item" data-value="ro"><i class="ro flag"></i>Romania</div>
  <div class="item" data-value="ru"><i class="ru flag"></i>Russia</div>
  <div class="item" data-value="rw"><i class="rw flag"></i>Rwanda</div>
  <div class="item" data-value="sh"><i class="sh flag"></i>Saint Helena</div>
  <div class="item" data-value="kn"><i class="kn flag"></i>Saint Kitts and Nevis</div>
  <div class="item" data-value="lc"><i class="lc flag"></i>Saint Lucia</div>
  <div class="item" data-value="pm"><i class="pm flag"></i>Saint Pierre</div>
  <div class="item" data-value="vc"><i class="vc flag"></i>Saint Vincent</div>
  <div class="item" data-value="ws"><i class="ws flag"></i>Samoa</div>
  <div class="item" data-value="sm"><i class="sm flag"></i>San Marino</div>
  <div class="item" data-value="gs"><i class="gs flag"></i>Sandwich Islands</div>
  <div class="item" data-value="st"><i class="st flag"></i>Sao Tome</div>
  <div class="item" data-value="sa"><i class="sa flag"></i>Saudi Arabia</div>
  <div class="item" data-value="sn"><i class="sn flag"></i>Senegal</div>
  <div class="item" data-value="cs"><i class="cs flag"></i>Serbia</div>
  <div class="item" data-value="rs"><i class="rs flag"></i>Serbia</div>
  <div class="item" data-value="sc"><i class="sc flag"></i>Seychelles</div>
  <div class="item" data-value="sl"><i class="sl flag"></i>Sierra Leone</div>
  <div class="item" data-value="sg"><i class="sg flag"></i>Singapore</div>
  <div class="item" data-value="sk"><i class="sk flag"></i>Slovakia</div>
  <div class="item" data-value="si"><i class="si flag"></i>Slovenia</div>
  <div class="item" data-value="sb"><i class="sb flag"></i>Solomon Islands</div>
  <div class="item" data-value="so"><i class="so flag"></i>Somalia</div>
  <div class="item" data-value="za"><i class="za flag"></i>South Africa</div>
  <div class="item" data-value="kr"><i class="kr flag"></i>South Korea</div>
  <div class="item" data-value="es"><i class="es flag"></i>Spain</div>
  <div class="item" data-value="lk"><i class="lk flag"></i>Sri Lanka</div>
  <div class="item" data-value="sd"><i class="sd flag"></i>Sudan</div>
  <div class="item" data-value="sr"><i class="sr flag"></i>Suriname</div>
  <div class="item" data-value="sj"><i class="sj flag"></i>Svalbard</div>
  <div class="item" data-value="sz"><i class="sz flag"></i>Swaziland</div>
  <div class="item" data-value="se"><i class="se flag"></i>Sweden</div>
  <div class="item" data-value="ch"><i class="ch flag"></i>Switzerland</div>
  <div class="item" data-value="sy"><i class="sy flag"></i>Syria</div>
  <div class="item" data-value="tw"><i class="tw flag"></i>Taiwan</div>
  <div class="item" data-value="tj"><i class="tj flag"></i>Tajikistan</div>
  <div class="item" data-value="tz"><i class="tz flag"></i>Tanzania</div>
  <div class="item" data-value="th"><i class="th flag"></i>Thailand</div>
  <div class="item" data-value="tl"><i class="tl flag"></i>Timorleste</div>
  <div class="item" data-value="tg"><i class="tg flag"></i>Togo</div>
  <div class="item" data-value="tk"><i class="tk flag"></i>Tokelau</div>
  <div class="item" data-value="to"><i class="to flag"></i>Tonga</div>
  <div class="item" data-value="tt"><i class="tt flag"></i>Trinidad</div>
  <div class="item" data-value="tn"><i class="tn flag"></i>Tunisia</div>
  <div class="item" data-value="tr"><i class="tr flag"></i>Turkey</div>
  <div class="item" data-value="tm"><i class="tm flag"></i>Turkmenistan</div>
  <div class="item" data-value="tv"><i class="tv flag"></i>Tuvalu</div>
  <div class="item" data-value="ug"><i class="ug flag"></i>Uganda</div>
  <div class="item" data-value="ua"><i class="ua flag"></i>Ukraine</div>
  <div class="item" data-value="ae"><i class="ae flag"></i>United Arab Emirates</div>
  <div class="item" data-value="us"><i class="us flag"></i>United States</div>
  <div class="item" data-value="uy"><i class="uy flag"></i>Uruguay</div>
  <div class="item" data-value="um"><i class="um flag"></i>Us Minor Islands</div>
  <div class="item" data-value="vi"><i class="vi flag"></i>Us Virgin Islands</div>
  <div class="item" data-value="uz"><i class="uz flag"></i>Uzbekistan</div>
  <div class="item" data-value="vu"><i class="vu flag"></i>Vanuatu</div>
  <div class="item" data-value="va"><i class="va flag"></i>Vatican City</div>
  <div class="item" data-value="ve"><i class="ve flag"></i>Venezuela</div>
  <div class="item" data-value="vn"><i class="vn flag"></i>Vietnam</div>
  <div class="item" data-value="wf"><i class="wf flag"></i>Wallis and Futuna</div>
  <div class="item" data-value="eh"><i class="eh flag"></i>Western Sahara</div>
  <div class="item" data-value="ye"><i class="ye flag"></i>Yemen</div>
  <div class="item" data-value="zm"><i class="zm flag"></i>Zambia</div>
  <div class="item" data-value="zw"><i class="zw flag"></i>Zimbabwe</div>
	*/
	// List is taken from https://github.com/umpirsky/country-list/blob/master/data/ru/country.json
	getAll: function () {
		let countries = {"AU":"\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u044f","AT":"\u0410\u0432\u0441\u0442\u0440\u0438\u044f","AZ":"\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d","AX":"\u0410\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","AL":"\u0410\u043b\u0431\u0430\u043d\u0438\u044f","DZ":"\u0410\u043b\u0436\u0438\u0440","AS":"\u0410\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u0421\u0430\u043c\u043e\u0430","AI":"\u0410\u043d\u0433\u0438\u043b\u044c\u044f","AO":"\u0410\u043d\u0433\u043e\u043b\u0430","AD":"\u0410\u043d\u0434\u043e\u0440\u0440\u0430","AQ":"\u0410\u043d\u0442\u0430\u0440\u043a\u0442\u0438\u0434\u0430","AG":"\u0410\u043d\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430","AR":"\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0430","AM":"\u0410\u0440\u043c\u0435\u043d\u0438\u044f","AW":"\u0410\u0440\u0443\u0431\u0430","AF":"\u0410\u0444\u0433\u0430\u043d\u0438\u0441\u0442\u0430\u043d","BS":"\u0411\u0430\u0433\u0430\u043c\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","BD":"\u0411\u0430\u043d\u0433\u043b\u0430\u0434\u0435\u0448","BB":"\u0411\u0430\u0440\u0431\u0430\u0434\u043e\u0441","BH":"\u0411\u0430\u0445\u0440\u0435\u0439\u043d","BY":"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c","BZ":"\u0411\u0435\u043b\u0438\u0437","BE":"\u0411\u0435\u043b\u044c\u0433\u0438\u044f","BJ":"\u0411\u0435\u043d\u0438\u043d","BM":"\u0411\u0435\u0440\u043c\u0443\u0434\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","BG":"\u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f","BO":"\u0411\u043e\u043b\u0438\u0432\u0438\u044f","BQ":"\u0411\u043e\u043d\u044d\u0439\u0440, \u0421\u0438\u043d\u0442-\u042d\u0441\u0442\u0430\u0442\u0438\u0443\u0441 \u0438 \u0421\u0430\u0431\u0430","BA":"\u0411\u043e\u0441\u043d\u0438\u044f \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430","BW":"\u0411\u043e\u0442\u0441\u0432\u0430\u043d\u0430","BR":"\u0411\u0440\u0430\u0437\u0438\u043b\u0438\u044f","IO":"\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u0432 \u0418\u043d\u0434\u0438\u0439\u0441\u043a\u043e\u043c \u043e\u043a\u0435\u0430\u043d\u0435","BN":"\u0411\u0440\u0443\u043d\u0435\u0439-\u0414\u0430\u0440\u0443\u0441\u0441\u0430\u043b\u0430\u043c","BF":"\u0411\u0443\u0440\u043a\u0438\u043d\u0430-\u0424\u0430\u0441\u043e","BI":"\u0411\u0443\u0440\u0443\u043d\u0434\u0438","BT":"\u0411\u0443\u0442\u0430\u043d","VU":"\u0412\u0430\u043d\u0443\u0430\u0442\u0443","VA":"\u0412\u0430\u0442\u0438\u043a\u0430\u043d","GB":"\u0412\u0435\u043b\u0438\u043a\u043e\u0431\u0440\u0438\u0442\u0430\u043d\u0438\u044f","HU":"\u0412\u0435\u043d\u0433\u0440\u0438\u044f","VE":"\u0412\u0435\u043d\u0435\u0441\u0443\u044d\u043b\u0430","VG":"\u0412\u0438\u0440\u0433\u0438\u043d\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430 (\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0438\u0435)","VI":"\u0412\u0438\u0440\u0433\u0438\u043d\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430 (\u0421\u0428\u0410)","UM":"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u043c\u0430\u043b\u044b\u0435 \u043e-\u0432\u0430 (\u0421\u0428\u0410)","TL":"\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0422\u0438\u043c\u043e\u0440","VN":"\u0412\u044c\u0435\u0442\u043d\u0430\u043c","GA":"\u0413\u0430\u0431\u043e\u043d","HT":"\u0413\u0430\u0438\u0442\u0438","GY":"\u0413\u0430\u0439\u0430\u043d\u0430","GM":"\u0413\u0430\u043c\u0431\u0438\u044f","GH":"\u0413\u0430\u043d\u0430","GP":"\u0413\u0432\u0430\u0434\u0435\u043b\u0443\u043f\u0430","GT":"\u0413\u0432\u0430\u0442\u0435\u043c\u0430\u043b\u0430","GN":"\u0413\u0432\u0438\u043d\u0435\u044f","GW":"\u0413\u0432\u0438\u043d\u0435\u044f-\u0411\u0438\u0441\u0430\u0443","DE":"\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f","GG":"\u0413\u0435\u0440\u043d\u0441\u0438","GI":"\u0413\u0438\u0431\u0440\u0430\u043b\u0442\u0430\u0440","HN":"\u0413\u043e\u043d\u0434\u0443\u0440\u0430\u0441","HK":"\u0413\u043e\u043d\u043a\u043e\u043d\u0433 (\u043e\u0441\u043e\u0431\u044b\u0439 \u0440\u0430\u0439\u043e\u043d)","GD":"\u0413\u0440\u0435\u043d\u0430\u0434\u0430","GL":"\u0413\u0440\u0435\u043d\u043b\u0430\u043d\u0434\u0438\u044f","GR":"\u0413\u0440\u0435\u0446\u0438\u044f","GE":"\u0413\u0440\u0443\u0437\u0438\u044f","GU":"\u0413\u0443\u0430\u043c","DK":"\u0414\u0430\u043d\u0438\u044f","JE":"\u0414\u0436\u0435\u0440\u0441\u0438","DJ":"\u0414\u0436\u0438\u0431\u0443\u0442\u0438","DG":"\u0414\u0438\u0435\u0433\u043e-\u0413\u0430\u0440\u0441\u0438\u044f","DM":"\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430","DO":"\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430","EG":"\u0415\u0433\u0438\u043f\u0435\u0442","ZM":"\u0417\u0430\u043c\u0431\u0438\u044f","EH":"\u0417\u0430\u043f\u0430\u0434\u043d\u0430\u044f \u0421\u0430\u0445\u0430\u0440\u0430","ZW":"\u0417\u0438\u043c\u0431\u0430\u0431\u0432\u0435","IL":"\u0418\u0437\u0440\u0430\u0438\u043b\u044c","IN":"\u0418\u043d\u0434\u0438\u044f","ID":"\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f","JO":"\u0418\u043e\u0440\u0434\u0430\u043d\u0438\u044f","IQ":"\u0418\u0440\u0430\u043a","IR":"\u0418\u0440\u0430\u043d","IE":"\u0418\u0440\u043b\u0430\u043d\u0434\u0438\u044f","IS":"\u0418\u0441\u043b\u0430\u043d\u0434\u0438\u044f","ES":"\u0418\u0441\u043f\u0430\u043d\u0438\u044f","IT":"\u0418\u0442\u0430\u043b\u0438\u044f","YE":"\u0419\u0435\u043c\u0435\u043d","CV":"\u041a\u0430\u0431\u043e-\u0412\u0435\u0440\u0434\u0435","KZ":"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d","KY":"\u041a\u0430\u0439\u043c\u0430\u043d\u043e\u0432\u044b \u043e-\u0432\u0430","KH":"\u041a\u0430\u043c\u0431\u043e\u0434\u0436\u0430","CM":"\u041a\u0430\u043c\u0435\u0440\u0443\u043d","CA":"\u041a\u0430\u043d\u0430\u0434\u0430","IC":"\u041a\u0430\u043d\u0430\u0440\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","QA":"\u041a\u0430\u0442\u0430\u0440","KE":"\u041a\u0435\u043d\u0438\u044f","CY":"\u041a\u0438\u043f\u0440","KG":"\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f","KI":"\u041a\u0438\u0440\u0438\u0431\u0430\u0442\u0438","CN":"\u041a\u0438\u0442\u0430\u0439","KP":"\u041a\u041d\u0414\u0420","CC":"\u041a\u043e\u043a\u043e\u0441\u043e\u0432\u044b\u0435 \u043e-\u0432\u0430","CO":"\u041a\u043e\u043b\u0443\u043c\u0431\u0438\u044f","KM":"\u041a\u043e\u043c\u043e\u0440\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","CG":"\u041a\u043e\u043d\u0433\u043e - \u0411\u0440\u0430\u0437\u0437\u0430\u0432\u0438\u043b\u044c","CD":"\u041a\u043e\u043d\u0433\u043e - \u041a\u0438\u043d\u0448\u0430\u0441\u0430","XK":"\u041a\u043e\u0441\u043e\u0432\u043e","CR":"\u041a\u043e\u0441\u0442\u0430-\u0420\u0438\u043a\u0430","CI":"\u041a\u043e\u0442-\u0434\u2019\u0418\u0432\u0443\u0430\u0440","CU":"\u041a\u0443\u0431\u0430","KW":"\u041a\u0443\u0432\u0435\u0439\u0442","CW":"\u041a\u044e\u0440\u0430\u0441\u0430\u043e","LA":"\u041b\u0430\u043e\u0441","LV":"\u041b\u0430\u0442\u0432\u0438\u044f","LS":"\u041b\u0435\u0441\u043e\u0442\u043e","LR":"\u041b\u0438\u0431\u0435\u0440\u0438\u044f","LB":"\u041b\u0438\u0432\u0430\u043d","LY":"\u041b\u0438\u0432\u0438\u044f","LT":"\u041b\u0438\u0442\u0432\u0430","LI":"\u041b\u0438\u0445\u0442\u0435\u043d\u0448\u0442\u0435\u0439\u043d","LU":"\u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433","MU":"\u041c\u0430\u0432\u0440\u0438\u043a\u0438\u0439","MR":"\u041c\u0430\u0432\u0440\u0438\u0442\u0430\u043d\u0438\u044f","MG":"\u041c\u0430\u0434\u0430\u0433\u0430\u0441\u043a\u0430\u0440","YT":"\u041c\u0430\u0439\u043e\u0442\u0442\u0430","MO":"\u041c\u0430\u043a\u0430\u043e (\u043e\u0441\u043e\u0431\u044b\u0439 \u0440\u0430\u0439\u043e\u043d)","MK":"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u044f","MW":"\u041c\u0430\u043b\u0430\u0432\u0438","MY":"\u041c\u0430\u043b\u0430\u0439\u0437\u0438\u044f","ML":"\u041c\u0430\u043b\u0438","MV":"\u041c\u0430\u043b\u044c\u0434\u0438\u0432\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","MT":"\u041c\u0430\u043b\u044c\u0442\u0430","MA":"\u041c\u0430\u0440\u043e\u043a\u043a\u043e","MQ":"\u041c\u0430\u0440\u0442\u0438\u043d\u0438\u043a\u0430","MH":"\u041c\u0430\u0440\u0448\u0430\u043b\u043b\u043e\u0432\u044b \u043e-\u0432\u0430","MX":"\u041c\u0435\u043a\u0441\u0438\u043a\u0430","MZ":"\u041c\u043e\u0437\u0430\u043c\u0431\u0438\u043a","MD":"\u041c\u043e\u043b\u0434\u043e\u0432\u0430","MC":"\u041c\u043e\u043d\u0430\u043a\u043e","MN":"\u041c\u043e\u043d\u0433\u043e\u043b\u0438\u044f","MS":"\u041c\u043e\u043d\u0442\u0441\u0435\u0440\u0440\u0430\u0442","MM":"\u041c\u044c\u044f\u043d\u043c\u0430 (\u0411\u0438\u0440\u043c\u0430)","NA":"\u041d\u0430\u043c\u0438\u0431\u0438\u044f","NR":"\u041d\u0430\u0443\u0440\u0443","NP":"\u041d\u0435\u043f\u0430\u043b","NE":"\u041d\u0438\u0433\u0435\u0440","NG":"\u041d\u0438\u0433\u0435\u0440\u0438\u044f","NL":"\u041d\u0438\u0434\u0435\u0440\u043b\u0430\u043d\u0434\u044b","NI":"\u041d\u0438\u043a\u0430\u0440\u0430\u0433\u0443\u0430","NU":"\u041d\u0438\u0443\u044d","NZ":"\u041d\u043e\u0432\u0430\u044f \u0417\u0435\u043b\u0430\u043d\u0434\u0438\u044f","NC":"\u041d\u043e\u0432\u0430\u044f \u041a\u0430\u043b\u0435\u0434\u043e\u043d\u0438\u044f","NO":"\u041d\u043e\u0440\u0432\u0435\u0433\u0438\u044f","AC":"\u043e-\u0432 \u0412\u043e\u0437\u043d\u0435\u0441\u0435\u043d\u0438\u044f","IM":"\u041e-\u0432 \u041c\u044d\u043d","NF":"\u043e-\u0432 \u041d\u043e\u0440\u0444\u043e\u043b\u043a","CX":"\u043e-\u0432 \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430","SH":"\u041e-\u0432 \u0421\u0432. \u0415\u043b\u0435\u043d\u044b","CK":"\u043e-\u0432\u0430 \u041a\u0443\u043a\u0430","TC":"\u041e-\u0432\u0430 \u0422\u0451\u0440\u043a\u0441 \u0438 \u041a\u0430\u0439\u043a\u043e\u0441","AE":"\u041e\u0410\u042d","OM":"\u041e\u043c\u0430\u043d","PK":"\u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d","PW":"\u041f\u0430\u043b\u0430\u0443","PS":"\u041f\u0430\u043b\u0435\u0441\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438","PA":"\u041f\u0430\u043d\u0430\u043c\u0430","PG":"\u041f\u0430\u043f\u0443\u0430 \u2013 \u041d\u043e\u0432\u0430\u044f \u0413\u0432\u0438\u043d\u0435\u044f","PY":"\u041f\u0430\u0440\u0430\u0433\u0432\u0430\u0439","PE":"\u041f\u0435\u0440\u0443","PN":"\u041f\u0438\u0442\u043a\u044d\u0440\u043d","PL":"\u041f\u043e\u043b\u044c\u0448\u0430","PT":"\u041f\u043e\u0440\u0442\u0443\u0433\u0430\u043b\u0438\u044f","PR":"\u041f\u0443\u044d\u0440\u0442\u043e-\u0420\u0438\u043a\u043e","KR":"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u0440\u0435\u044f","RE":"\u0420\u0435\u044e\u043d\u044c\u043e\u043d","RU":"\u0420\u043e\u0441\u0441\u0438\u044f","RW":"\u0420\u0443\u0430\u043d\u0434\u0430","RO":"\u0420\u0443\u043c\u044b\u043d\u0438\u044f","SV":"\u0421\u0430\u043b\u044c\u0432\u0430\u0434\u043e\u0440","WS":"\u0421\u0430\u043c\u043e\u0430","SM":"\u0421\u0430\u043d-\u041c\u0430\u0440\u0438\u043d\u043e","ST":"\u0421\u0430\u043d-\u0422\u043e\u043c\u0435 \u0438 \u041f\u0440\u0438\u043d\u0441\u0438\u043f\u0438","SA":"\u0421\u0430\u0443\u0434\u043e\u0432\u0441\u043a\u0430\u044f \u0410\u0440\u0430\u0432\u0438\u044f","SZ":"\u0421\u0432\u0430\u0437\u0438\u043b\u0435\u043d\u0434","MP":"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u041c\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","SC":"\u0421\u0435\u0439\u0448\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","BL":"\u0421\u0435\u043d-\u0411\u0430\u0440\u0442\u0435\u043b\u044c\u043c\u0438","MF":"\u0421\u0435\u043d-\u041c\u0430\u0440\u0442\u0435\u043d","PM":"\u0421\u0435\u043d-\u041f\u044c\u0435\u0440 \u0438 \u041c\u0438\u043a\u0435\u043b\u043e\u043d","SN":"\u0421\u0435\u043d\u0435\u0433\u0430\u043b","VC":"\u0421\u0435\u043d\u0442-\u0412\u0438\u043d\u0441\u0435\u043d\u0442 \u0438 \u0413\u0440\u0435\u043d\u0430\u0434\u0438\u043d\u044b","KN":"\u0421\u0435\u043d\u0442-\u041a\u0438\u0442\u0441 \u0438 \u041d\u0435\u0432\u0438\u0441","LC":"\u0421\u0435\u043d\u0442-\u041b\u044e\u0441\u0438\u044f","RS":"\u0421\u0435\u0440\u0431\u0438\u044f","EA":"\u0421\u0435\u0443\u0442\u0430 \u0438 \u041c\u0435\u043b\u0438\u043b\u044c\u044f","SG":"\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440","SX":"\u0421\u0438\u043d\u0442-\u041c\u0430\u0440\u0442\u0435\u043d","SY":"\u0421\u0438\u0440\u0438\u044f","SK":"\u0421\u043b\u043e\u0432\u0430\u043a\u0438\u044f","SI":"\u0421\u043b\u043e\u0432\u0435\u043d\u0438\u044f","US":"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b","SB":"\u0421\u043e\u043b\u043e\u043c\u043e\u043d\u043e\u0432\u044b \u043e-\u0432\u0430","SO":"\u0421\u043e\u043c\u0430\u043b\u0438","SD":"\u0421\u0443\u0434\u0430\u043d","SR":"\u0421\u0443\u0440\u0438\u043d\u0430\u043c","SL":"\u0421\u044c\u0435\u0440\u0440\u0430-\u041b\u0435\u043e\u043d\u0435","TJ":"\u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d","TH":"\u0422\u0430\u0438\u043b\u0430\u043d\u0434","TW":"\u0422\u0430\u0439\u0432\u0430\u043d\u044c","TZ":"\u0422\u0430\u043d\u0437\u0430\u043d\u0438\u044f","TG":"\u0422\u043e\u0433\u043e","TK":"\u0422\u043e\u043a\u0435\u043b\u0430\u0443","TO":"\u0422\u043e\u043d\u0433\u0430","TT":"\u0422\u0440\u0438\u043d\u0438\u0434\u0430\u0434 \u0438 \u0422\u043e\u0431\u0430\u0433\u043e","TA":"\u0422\u0440\u0438\u0441\u0442\u0430\u043d-\u0434\u0430-\u041a\u0443\u043d\u044c\u044f","TV":"\u0422\u0443\u0432\u0430\u043b\u0443","TN":"\u0422\u0443\u043d\u0438\u0441","TM":"\u0422\u0443\u0440\u043a\u043c\u0435\u043d\u0438\u0441\u0442\u0430\u043d","TR":"\u0422\u0443\u0440\u0446\u0438\u044f","UG":"\u0423\u0433\u0430\u043d\u0434\u0430","UZ":"\u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d","UA":"\u0423\u043a\u0440\u0430\u0438\u043d\u0430","WF":"\u0423\u043e\u043b\u043b\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043d\u0430","UY":"\u0423\u0440\u0443\u0433\u0432\u0430\u0439","FO":"\u0424\u0430\u0440\u0435\u0440\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","FM":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b \u041c\u0438\u043a\u0440\u043e\u043d\u0435\u0437\u0438\u0438","FJ":"\u0424\u0438\u0434\u0436\u0438","PH":"\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u044b","FI":"\u0424\u0438\u043d\u043b\u044f\u043d\u0434\u0438\u044f","FK":"\u0424\u043e\u043b\u043a\u043b\u0435\u043d\u0434\u0441\u043a\u0438\u0435 \u043e-\u0432\u0430","FR":"\u0424\u0440\u0430\u043d\u0446\u0438\u044f","GF":"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0430\u044f \u0413\u0432\u0438\u0430\u043d\u0430","PF":"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0430\u044f \u041f\u043e\u043b\u0438\u043d\u0435\u0437\u0438\u044f","TF":"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0435 \u042e\u0436\u043d\u044b\u0435 \u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438","HR":"\u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044f","CF":"\u0426\u0410\u0420","TD":"\u0427\u0430\u0434","ME":"\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0438\u044f","CZ":"\u0427\u0435\u0445\u0438\u044f","CL":"\u0427\u0438\u043b\u0438","CH":"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044f","SE":"\u0428\u0432\u0435\u0446\u0438\u044f","SJ":"\u0428\u043f\u0438\u0446\u0431\u0435\u0440\u0433\u0435\u043d \u0438 \u042f\u043d-\u041c\u0430\u0439\u0435\u043d","LK":"\u0428\u0440\u0438-\u041b\u0430\u043d\u043a\u0430","EC":"\u042d\u043a\u0432\u0430\u0434\u043e\u0440","GQ":"\u042d\u043a\u0432\u0430\u0442\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0413\u0432\u0438\u043d\u0435\u044f","ER":"\u042d\u0440\u0438\u0442\u0440\u0435\u044f","EE":"\u042d\u0441\u0442\u043e\u043d\u0438\u044f","ET":"\u042d\u0444\u0438\u043e\u043f\u0438\u044f","ZA":"\u042e\u0410\u0420","GS":"\u042e\u0436\u043d\u0430\u044f \u0413\u0435\u043e\u0440\u0433\u0438\u044f \u0438 \u042e\u0436\u043d\u044b\u0435 \u0421\u0430\u043d\u0434\u0432\u0438\u0447\u0435\u0432\u044b \u043e-\u0432\u0430","SS":"\u042e\u0436\u043d\u044b\u0439 \u0421\u0443\u0434\u0430\u043d","JM":"\u042f\u043c\u0430\u0439\u043a\u0430","JP":"\u042f\u043f\u043e\u043d\u0438\u044f"},
			result = [];

		// Show result as array
		for (i in countries) {
			result.push({
				code: i,
				name: countries[i]
			});
		}

		return {data: result};
	},

	getByIp: function (req) {
		let geoip = require('geoip-lite');

		let ip = '93.126.83.249', // Only for testing, TODO: use req.ip instead
			geo = geoip.lookup(ip),
			result = {country: geo ? geo.country : ''};

		return result;
	}
};