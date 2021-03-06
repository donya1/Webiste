$(document).ready(function(){
    $('.biblioExpand').click(function() {
      $('.bibliography').toggle("slide");
      $(this).find('i').toggleClass('.fa fa-caret-square-o-up')
    });
  });

  $('#backgroundLaws').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#aboutLaws").offset().top 
  }, 500);
});

$('#offenseTypeDescriptions').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#aboutOffenses").offset().top 
  }, 500);
});


 $(document).ready(function(){
    $('.menuFilter').click(function() {
      $('#menu').toggle("slide");
    });
  });

$(document).ready(function(){
    $('.mobileLegend').click(function() {
      $('#legend').toggle("slide");
    });
  }); 


$('.lang a').click(function(event){
 event.preventDefault();
});


const langEl = document.querySelector('.lang');
const langLink = document.querySelector('.lang').querySelectorAll('a');
const par1El = document.querySelector('#par1');
const sub1El = document.querySelector('#sub1');
const par2El = document.querySelector('#par2');
const sub2El = document.querySelector('#sub2');
// const imageEl = document.querySelector('#image');
const par3El = document.querySelector('#par3');
const par4El = document.querySelector('#par4');
const par5El = document.querySelector('#par5');
const aboutOffensesEl = document.querySelector('#aboutOffenses');
const par6El = document.querySelector('#par6');
const sub3El = document.querySelector('#sub3');
const par7El = document.querySelector('#par7');
const par8El = document.querySelector('#par8');
const sub4El = document.querySelector('#sub4');
const par9El = document.querySelector('#par9');
const sub5El = document.querySelector('#sub5');
const par10El = document.querySelector('#par10');
const sub6El = document.querySelector('#sub6');
const par11El = document.querySelector('#par11');
const sub7El = document.querySelector('#sub7');
const par12El = document.querySelector('#par12');
const sub8El = document.querySelector('#sub8');
const par13El = document.querySelector('#par13');
const par14El = document.querySelector('#par14');
const sub9El = document.querySelector('#sub9');
const par15El = document.querySelector('#par15');
const par16El = document.querySelector('#par16');
const aboutLawsEl = document.querySelector('#aboutLaws');
const par17El = document.querySelector('#par17');
const par18El = document.querySelector('#par18');
const par19El = document.querySelector('#par19');
const par20El = document.querySelector('#par20');
const par21El = document.querySelector('#par21');
const par22El = document.querySelector('#par22');
const autEl = document.querySelector('.authors');
const datEl = document.querySelector('.date');
const not1El = document.querySelector('#notes1');
const not2El = document.querySelector('#notes2');
const not3El = document.querySelector('#notes3');


// //active class is added to the link that is clicked
langLink.forEach(el => {
 el.addEventListener('click', () => {
   langEl.querySelector('.active').classList.remove('active');
   el.classList.add('active');

   

   const attr = el.getAttribute('language');

// //change the text content of html elements   

     par1El.textContent = data[attr].par1;
     sub1El.textContent = data[attr].sub1;
     par2El.textContent = data[attr].par2;
     sub2El.textContent = data[attr].sub2;
     par3El.textContent = data[attr].par3;
     par4El.textContent = data[attr].par4;
     par5El.textContent = data[attr].par5;
     aboutOffensesEl.textContent = data[attr].aboutOffenses;
     par6El.textContent = data[attr].par6;
     sub3El.textContent = data[attr].sub3;
     par7El.textContent = data[attr].par7;
     par8El.textContent = data[attr].par8;
     sub4El.textContent = data[attr].sub4;
     par9El.textContent = data[attr].par9;
     sub5El.textContent = data[attr].sub5;
     par10El.textContent = data[attr].par10;
     sub6El.textContent = data[attr].sub6;
     par11El.textContent = data[attr].par11;
     sub7El.textContent = data[attr].sub7;
     par12El.textContent = data[attr].par12;
     sub8El.textContent = data[attr].sub8;
     par13El.textContent = data[attr].par13;
     par14El.textContent = data[attr].par14;
     sub9El.textContent = data[attr].sub9;
     par15El.textContent = data[attr].par15;
     par16El.textContent = data[attr].par16;
     aboutLawsEl.textContent = data[attr].aboutLaws;
     par17El.textContent = data[attr].par17;
     par18El.textContent = data[attr].par18;
     par19El.textContent = data[attr].par19;
     par20El.textContent = data[attr].par20;
     par21El.textContent = data[attr].par21;
     par22El.textContent = data[attr].par22;
     autEl.textContent = data[attr].authors;
     datEl.textContent = data[attr].date;
     not1El.textContent = data[attr].notes1;
     not2El.textContent = data[attr].notes2;
     not3El.textContent = data[attr].notes3;
     

  $("#par1:contains('learn more below')").html(function(_, html){
      return html.replace(/(learn more below)/g, '<a id="backgroundLaws" href="#">$1</a>');
  });

  $("#par1:contains('descriptions of each offense')").html(function(_, html){
      return html.replace(/(descriptions of each offense)/g, '<a id="offenseTypeDescriptions" href="#">$1</a>');
  });

  $("#par2:contains('During the pandemic, enforcement of these laws continues to be a legal mechanism for displacing people experiencing homelessness from public spaces.')").html(function(_, html){
      return html.replace(/(During the pandemic, enforcement of these laws continues to be a legal mechanism for displacing people experiencing homelessness from public spaces)/g, '<a href="https://theconversation.com/policing-and-evicting-people-living-in-encampments-will-not-solve-homelessness-in-canada-158861">$1</a>');
  });

  // $("#par7:contains('nous contacter')").html(function(_, html){
  //   return html.replace(/(nous contacter)/g, '<a href="Contact.html">$1</a>');
  // });

  $("#sub3:contains('soliciting')").html(function(i, h){
      return h.replace(/(\(.+\))/g, '<span class="span">$1</span>');
  });

  $("#sub6:contains('scavenging')").html(function(i, h){
    return h.replace(/(\(.+\))/g, '<span class="span">$1</span>');
  });

  $('#backgroundLaws').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#aboutLaws").offset().top 
  }, 500);
});

$('#offenseTypeDescriptions').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#aboutOffenses").offset().top 
  }, 500);
});

 });
});

// //variable content of html elements to change language
var data = {
 "english":
   {

     "par1":"Anti-homeless laws pose a very real threat to people experiencing homelessness. One widespread form of anti-homeless legislation is what we have documented as neo-vagrancy law (learn more below). These anti-homeless laws punish people who are visibly poor and have no choice but to spend their time in public spaces. These anti-homeless laws include the following 7 offense types: panhandling, loitering, obstructing, salvaging, resting/sleeping, sheltering, and disorder. More info and descriptions of each offense can be found below.",
     "sub1":"77% OF CANADIANS LIVE IN A JURISDICTION WITH A NEO-VAGRANCY OFFENCE.",
     "par2":"During the pandemic, enforcement of these laws continues to be a legal mechanism for displacing people experiencing homelessness from public spaces. Criminalisation of people who are homeless is in conflict with ensuring their health and safety and threatens their civil and human rights.",
     "sub2":"OUR DATA",
     "par3":"The map and index on this page document neo-vagrancy offenses across Canada in municipalities with a population of over 5000. Use the map and index to look up neo-vagrancy offenses in your town.",
     "par4":"Our mapping of neo-vagrancy laws in Canada is drawn primarily from the by-laws of municipalities. Current by-laws are posted on municipality websites for ???research??? or ???convenience??? purposes, with the limitation that they may contain errors or may not be up to date. Please contact us to report additions or corrections.",
     "par5":"In addition, Ontario and British Columbia both have province-wide Safe Streets Act legislation that targets panhandling. Both of these provincial laws are included/counted as one point on the map, under the offence type of ???panhandling???.", 
     "aboutOffenses":"Neo-Vagrancy Offense Types",
     "par6":"We have adhered to the following criteria in developing each neo-vagrancy offence type.",
     "sub3":"Panhandling ('soliciting')",
     "par7":"The map includes anti-panhandling and anti-begging laws. These laws prohibit soliciting money or something of value from pedestrians. Some of the laws completely prohibit panhandling, while others partially restrict it during certain times (e.g. after 5pm), in certain places (e.g. in a park), or along with certain behaviours (e.g. while sitting). Regardless of how narrowly they are written, we consider all panhandling by-laws to be discriminatory for two reasons: 1) they directly target an activity associated with homelessness and poverty, 2) pedestrians often give money to people perceived as being visibly needy in public space, even if that person is not actively soliciting donations.",
     "par8":"Also, while they are sometimes used against homeless people, we do not include laws whose purpose is to regulate activities that have a commercial aspect such as touting, trading, hawking, vending, peddling or busking. As well, we do not include soliciting carried out on a roadway, or a permitted or registered charity.",
     "sub4":"Loitering",
     "par9":"All by-laws that explicitly prohibit loitering are included in the map. The prohibition on loitering is sometimes specifically against ???lingering??? or standing around somewhere ???without an apparent purpose???; in other cases, loitering is restricted to certain times and places (i.e. after sunset, inside parks). We have included all loitering prohibitions not just because they are very subjective, but also because any homeless person surviving in public space would automatically be a target of the law.",
     "sub5":"Obstructing",
     "par10":"Obstructing by-laws are a close cousin of loitering by-laws. They are very generally defined as bothering a pedestrian???s right to passage. While they are more specific than loitering by-laws, sometimes these laws are written in a way that is so vague and subjective that they could target homeless people who live in and survive in public space. We included these by-laws on the map. Obstructing offences can also be used to indirectly target people who are homeless by claiming that their personal possessions (such as a sleeping bag) pose a hazard to the public.",
     "sub6":"Salvaging ('scavenging')",
     "par11":"Salvaging by-laws prohibit homeless people from ???picking-over??? and collecting from recycling and refuse containers for personal use ??? to find edible food or to collect bottles and cans that have recycling value. We do not include by-laws that prohibit scavenging as an organized commercial activity, or those that interfere with waste disposal sites.",
     "sub7":"Resting and Sleeping",
     "par12":"This category overlaps with both loitering and obstructing by-laws, but these laws are distinct because they specifically target the bodies of homeless people that are resting (sitting, reclining or sleeping) in public spaces. These by-laws can be general anti-sleeping prohibitions in all public spaces or can restrict sitting and sleeping in specific places (on street furniture or grassy areas). Along with loitering and obstruction by-laws, they can work to exclude the very simple presence of homeless people altogether from public spaces.",
     "sub8":"Sheltering",
     "par13":"By-laws regulating camping or erecting materials like tents, tarps or other covers in public space are categorized as sheltering by-laws. They emphasize some sort of shelter or place-making. Some of these by-laws allow narrow exceptions for homeless people, but still restrict times and places where people can set up shelters, effectively banning building shelter for more than a very short period of time (usually from sunset to sunrise).",
     "par14":"We do not include by-laws that regulate recreational camping in municipal parks that have organized campgrounds with permitted sites. Nor do we include general prohibitions involving entry into park spaces.",
     "sub9":"Disorder",
     "par15":"These by-laws prohibit vaguely-defined behaviours that provide a means to target anyone that a member of the public may find to be undesirable. Often these by-laws characterize certain kinds of conduct as a form of ???nuisance???, using extremely general language about ???annoying???, ???offending??? or ???being objectionable to??? others. They are so general and vague that they provide a legal means to anyone to complain about street-involved people in public spaces.",
     "par16":"We do not include general anti-nuisance by-laws that specifically prohibit harassment or violent behaviour in public spaces.",
     "aboutLaws":"ABOUT NEO-VAGRANCY LAWS",
     "par17":"Vagrancy prohibitions have a 700 year-old history in English criminal law. Vagrancy offences were designed to target anyone whose simple presence was perceived as a threat to the prevailing social and economic order. In particular, people who were visibly poor and could not give a ???good account??? of themselves were arrested as criminals.",
     "par18":"Vagrancy law has been complicit with some of the most violent expressions of racism. Racial profiling and ???stop and search??? practices were a central feature of vagrancy law enforcement. Black and Asian Canadians, Indigenous Peoples, queer and trans individuals, and sex workers - all were major targets of vagrancy law before most of the offences were repealed from Canada???s Criminal Code by the early 1970???s.",
     "par19":"In the last 30 years, there has been a revival of vagrancy type laws directed at people who are homeless and street involved. New or revised laws have been enacted across Canada targeting the presence and survival activities of homeless people in public spaces.",
     "par20":"We call these laws neo-vagrancy laws because they revive a key purpose of archaic vagrancy law: to punish people who are visibly poor and have no choice but to spend their time in public spaces.",
     "par21":"These laws are profoundly prejudicial given how minority communities (such as Indigenous Peoples) are over-represented in homeless populations.",
     "par22":"We conclude on an important point: neo-vagrancy laws are a specific set of anti-homeless laws that reproduce aspects of repealed vagrancy law. They do not include a wide range of other laws that are often used against people experiencing homelessness such as alcohol or trespass laws. Indeed, as we will explore in upcoming research, they are only one feature of a legal landscape that punishes people who are homeless and attempts to drive them out of public spaces.",
     "authors":"Joe Hermer and Elliot Fonarev",
     "date":"August 25, 2021",
     "notes1":"This work is protected under a Creative Commons license that allows you to share, copy, distribute, and transmit the work for non-commercial purposes, provided you attribute it to the original source.",
     "notes2":"This essay may be cited as:",
     "notes3":"Hermer, J., & Fonarev, E. (2021, August 25). Neo-Vagrancy Laws in Canada. Retrieved from: http://covid19-phi.ca/",

  },

 "french":
    {

     "par1":"Les lois contre le ph??nom??ne des personnes en situation d'itin??rance repr??sentent une menace bien r??elle pour les personnes qui n'ont pas o?? se loger pendant la pand??mie. Nous avons qualifi?? de l??gislation sur le n??o-vagabondage une forme r??pandue de l??gislation contre les personnes en situation d'itin??rance.",
     "sub1":"77% DES CANADIENS VIVENT DANS UNE JURIDICTION O?? IL EXISTE UNE INFRACTION RELATIVE AU n??o-vagabondage.",
     "par2":"",
     "sub2":"",
     "par3":"",
     "par4":"Notre cartographie des lois sur le n??o-vagabondage au Canada est principalement bas??e sur les r??glements des municipalit??s. Les r??glements actuels sont publi??s sur les sites web des municipalit??s ?? des fins de ?? recherche ?? ou de ?? commodit?? ??, au risque, toutefois, qu'ils puissent contenir des erreurs ou ne pas ??tre ?? jour. Veuillez nous contacter pour sugg??rer des ajouts ou des corrections.",
     "par5":"En outre, les provinces de l'Ontario et de la Colombie-Britannique ont toutes deux adopt?? une loi provinciale sur la s??curit?? dans les rues (Safe Streets Act) qui cible la mendicit??. Chacune de ces lois provinciales est repr??sent??e par un point sur la carte, et chacune d'entre elles contient le type d'infraction de 'mendicit??'.",
     "aboutOffenses":"",
     "par6":"Nous avons respect?? les crit??res suivants lors de l'??laboration de chaque type d'infraction de n??o-vagabondage.",
     "sub3":"Mendier",
     "par7":"La carte comprend des lois contre la mendicit?? et le racolage. Ces derni??res interdisent de demander de l'argent ou un objet de valeur aux pi??tons. Certaines lois interdisent totalement la mendicit??, tandis que d'autres la restreignent partiellement ?? certaines heures (c'est-??-dire apr??s 17 heures), ?? certains endroits (c'est-??-dire dans un parc) ou avec certains comportements (c'est-??-dire en ??tant assis). Quelle que soit la rigueur de leur r??daction, nous consid??rons que tous les r??glements sur la mendicit?? sont discriminatoires pour deux raisons : 1) ils visent directement une activit?? associ??e ?? une situation d'itin??rance et ?? la pauvret??; 2) les pi??tons donnent souvent de l'argent ?? des personnes per??ues comme ??tant visiblement dans le besoin dans l'espace public, m??me si ces personnes n'en demandent pas de mani??re active.",
     "par8":"De plus, bien qu'elles soient parfois utilis??es contre les personnes en situation d???itin??rance, nous n'incluons pas les lois dont le but est de r??glementer les activit??s qui ont un aspect commercial comme le racolage, le commerce, le colportage, la vente ambulante, le d??marchage ou l???art de rue ?? des fins lucratives. De m??me, nous n'incluons pas le racolage effectu?? sur la voie publique, ni les organisations caritatives autoris??es ou enregistr??es.",
     "sub4":"Fl??ner",
     "par9":"Tous les r??glements qui interdisent explicitement le fl??nage sont inclus dans la carte. L'interdiction du fl??nage ne concerne parfois que le fait de ?? s'attarder ?? ou de se tenir quelque part ?? sans but apparent ?? ; dans d'autres cas, le fl??nage est limit?? ?? certaines heures et ?? certains endroits (par exemple, apr??s le coucher du soleil, ?? l'int??rieur des parcs). Nous avons inclus toutes les interdictions de fl??ner non seulement parce qu'elles sont tr??s subjectives, mais aussi parce que toute personne en situation d'itin??rance et de survie dans l'espace public serait automatiquement une cible de la loi.",
     "sub5":"Provoquer des obstructions",
     "par10":"Les r??glements relatifs ?? l'obstruction ressemblent beaucoup aux r??glements relatifs au fl??nage. Ils sont tr??s g??n??ralement d??finis comme le fait de g??ner le droit de passage d'un pi??ton. Bien qu'elles soient plus sp??cifiques que les r??glements relatifs au vagabondage, ces lois sont parfois r??dig??es d'une mani??re si vague et subjective qu'elles pourraient viser les personnes en situation d'itin??rance qui vivent et survivent dans l'espace public. Nous avons inclus ces r??glements dans la carte. Ces r??glements peuvent ??galement ??tre utilis??s pour cibler indirectement les personnes en situation d'itin??rance en pr??tendant que leurs biens personnels (comme un sac de couchage) constituent un danger pour le public.",
     "sub6":"R??cup??rer et r??utiliser des d??chets ",
     "par11":"Les r??glements en mati??re de r??cup??ration interdisent aux personnes en situation d'itin??rance de ?? ramasser ?? et de collecter des conteneurs de recyclage et de d??chets pour leur usage personnel, pour trouver des aliments comestibles ou pour r??cup??rer des bouteilles et des canettes pouvant ??tre recycl??es. Nous n'incluons pas les r??glements qui interdisent la r??cup??ration en tant qu'activit?? commerciale organis??e, ni ceux qui interf??rent avec les sites d'??limination des d??chets.",
     "sub7":"Se reposer et s'allonger au sol",
     "par12":"Cette cat??gorie recouvre ?? la fois les r??glements sur le fl??nage et l'obstruction, mais elle reste distincte car les lois qu???elle contient visent sp??cifiquement les corps des personnes en situation d'itin??rance qui se reposent, assises, couch??es, ou dormant simplement dans les espaces publics. Ces r??glements peuvent constituer des interdictions g??n??rales de dormir dans tous les espaces publics ou restreindre la possibilit?? de s'asseoir et de dormir dans des endroits sp??cifiques (sur le mobilier urbain ou les zones gazonn??es). Outre les r??glements relatifs au fl??nage et ?? l'obstruction, ils peuvent viser ?? exclure totalement de l'espace public la simple pr??sence de personnes en situation d'itin??rance.",
     "sub8":"Construire un abri de fortune",
     "par13":"Les r??glements r??gissant le camping ou l'installation de mat??riel tels que les tentes, les b??ches ou autres couvertures dans l'espace public sont class??s dans la cat??gorie des r??glements relatifs aux abris de fortune. Ils mettent l'accent sur un type de construction d'abris ou de lieux. Certains de ces r??glements pr??voient des exceptions limit??es pour les personnes en situation d'itin??rance, mais limitent les heures et les lieux o?? les gens peuvent installer des abris, interdisant de fait la construction d'abris pendant une longue p??riode (g??n??ralement du coucher au lever du soleil).",
     "par14":"Nous n'incluons pas les r??glements qui r??glementent le camping r??cr??atif dans les parcs municipaux qui ont organis?? des terrains de camping avec des sites autoris??s. Nous n'incluons pas non plus d'interdictions g??n??rales impliquant l'entr??e dans les espaces de parc.",
     "sub9":"Occasionner des troubles",
     "par15":"Ces r??glements interdisent les comportements vaguement d??finis qui constituent un moyen de cibler toute personne qu'un membre du public pourrait juger ind??sirable. Souvent, ces r??glements qualifient certains types de comportement de ?? nuisance ??, en utilisant des termes extr??mement g??n??raux tels que ?? ennuyeux ??, ?? offensant ?? ou ?? r??pr??hensible. ?? Ils sont si g??n??raux et vagues qu'ils fournissent un moyen l??gal ?? quiconque de se plaindre des personnes qui vivent dans la rue dans les espaces publics.",
     "par16":"Nous n'incluons pas les r??glements g??n??raux anti-nuisance qui interdisent sp??cifiquement le harc??lement ou les comportements violents dans les espaces publics.",
     "aboutLaws":"",
     "par17":"Les interdictions de vagabondage sont vieilles de 700 ans dans le droit p??nal anglais. Les d??lits de vagabondage ??taient con??us pour cibler toute personne dont la simple pr??sence ??tait per??ue comme une menace ?? l'ordre social et ??conomique en vigueur. En particulier, les personnes dont la pauvret?? ??tait manifeste et qui ??taient incapables de montrer une ?? bonne image ?? d'elles-m??mes ??taient arr??t??es comme des criminels.",
     "par18":"La l??gislation sur le vagabondage a ??t?? complice de certaines des expressions les plus violentes du racisme. Le profilage racial et les pratiques d'interpellation et de fouille sont au c??ur de l'application de cette l??gislation. Les Canadiens noirs et asiatiques, les peuples autochtones, les personnes homosexuelles et transgenres et les travailleurs du sexe en ??taient tous des cibles importantes avant que la plupart des infractions ne soient supprim??es du Code criminel du Canada au d??but des ann??es 1970.",
     "par19":"Au cours des trente derni??res ann??es, on a assist?? ?? une renaissance des lois concernant le vagabondage visant les personnes en situation d???itin??rance et les personnes vivant dans la rue. Des lois nouvelles ou r??vis??es ont ??t?? promulgu??es dans tout le Canada, ciblant la pr??sence et les activit??s de survie de ces personnes dans les espaces publics.",
     "par20":"Nous qualifions ces lois de l??gislation relative au n??o-vagabondage, et nous les r??pertorions, en raison du fait qu???elles font r??appara??tre un objectif cl?? de la loi archa??que sur le vagabondage : punir les personnes dont la pauvret?? est manifeste, et qui n'ont d'autre choix que de passer leur temps dans les espaces publics.",
     "par21":"Ces lois sont profond??ment pr??judiciables ??tant donn?? la surrepr??sentation des communaut??s minoritaires (comme les peuples autochtones) dans les populations en situation d'itin??rance.",
     "par22":"Voici un point important pour conclure : la l??gislation sur le n??o-vagabondage constitue un ensemble sp??cifique de lois contre la situation d???itin??rance qui reprend des aspects de l???ancienne l??gislation abrog??e sur le vagabondage. Elle n???inclut pas un large ??ventail d'autres lois qui sont souvent utilis??es contre les personnes en situation d???itin??rance, comme les lois sur l'alcool ou sur l'intrusion. En effet, comme nous l'explorerons dans de prochaines recherches, ces lois ne sont qu'une des caract??ristiques d'un paysage juridique qui punit les personnes en situation d'itin??rance et tente de les chasser des espaces publics.",
     "authors":"Joe Hermer et Elliot Fonarev",
     "date":"25 ao??t 2021",
     "notes1":"Ce travail est prot??g?? par une licence Creative Commons qui vous permet de partager, copier, distribuer et transmettre le travail ?? des fins non commerciales, ?? condition que vous l'attribuiez ?? la source originale.",
     "notes2":"Cet essai peut ??tre cit?? comme suit:",
     "notes3":"J. Hermer, et E.Fonarev (2021, ao??t 25). La l??gislation sur le n??o-vagabondage au Canada. Consult?? ?? l'adresse suivante : http://covid19-phi.ca/",

    }
 }