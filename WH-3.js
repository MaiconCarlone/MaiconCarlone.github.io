console.log('WH-3.js-Start');

const data= {Exe:
                 {"Type"  : "Feher",
                  "Ct"    : [4.2, 6433.0],
                  "P"     : [1.84, 90.0, 1.0, 0.91],
                  "lb"    : [1.83,0.0,0.0,0.9],
                  "ub"    : [1.84,400.0,100.0,0.99],
                  "Scale" : [3300,3700,-1.2],
                  "X"     : [2802.8,2806.3,2809.8,2813.3,2816.8,2820.3,2823.8,2827.3,2830.8,2834.3,2837.8,2841.3,2844.8,2848.3,2851.8,2855.3,2858.8,2862.3,2865.8,2869.3,2872.8,2876.3,2879.8,2883.3,2886.8,2890.3,2893.8,2897.3,2900.8,2904.3,2907.8,2911.3,2914.8,2918.3,2921.8,2925.3,2928.8,2932.3,2935.8,2939.3,2942.8,2946.3,2949.8,2953.3,2956.8,2960.3,2963.8,2967.3,2970.8,2974.3,2977.8,2981.3,2984.8,2988.3,2991.8,2995.3,2998.8,3002.3,3005.8,3009.3,3012.8,3016.3,3019.8,3023.3,3026.8,3030.3,3033.8,3037.3,3040.8,3044.3,3047.8,3051.3,3054.8,3058.3,3061.8,3065.3,3068.8,3072.3,3075.8,3079.3,3082.8,3086.3,3089.8,3093.3,3096.8,3100.3,3103.8,3107.3,3110.8,3114.3,3117.8,3121.3,3124.8,3128.3,3131.8,3135.3,3138.8,3142.3,3145.8,3149.3,3152.8,3156.3,3159.8,3163.3,3166.8,3170.3,3173.8,3177.3,3180.8,3184.3,3187.8,3191.3,3194.8,3198.3,3201.8,3205.3,3208.8,3212.3,3215.8,3219.3,3222.8,3226.3,3229.8,3233.3,3236.8,3240.3,3243.8,3247.3,3250.8,3254.3,3257.8,3261.3,3264.8,3268.3,3271.8,3275.3,3278.8,3282.3,3285.8,3289.3,3292.8,3296.3,3299.8,3303.3,3306.8,3310.3,3313.8,3317.3,3320.8,3324.3,3327.8,3331.3,3334.8,3338.3,3341.8,3345.3,3348.8,3352.3,3355.8,3359.3,3362.8,3366.3,3369.8,3373.3,3376.8,3380.3,3383.8,3387.3,3390.8,3394.3,3397.8,3401.3,3404.8,3408.3,3411.8,3415.3,3418.8,3422.3,3425.8,3429.3,3432.8,3436.3,3439.8,3443.3,3446.8,3450.3,3453.8,3457.3,3460.8,3464.3,3467.8,3471.3,3474.8,3478.3,3481.8,3485.3,3488.8,3492.3,3495.8,3499.3,3502.8,3506.3,3509.8,3513.3,3516.8,3520.3,3523.8,3527.3,3530.8,3534.3,3537.8,3541.3,3544.8,3548.3,3551.8,3555.3,3558.8,3562.3,3565.8,3569.3,3572.8,3576.3,3579.8,3583.3,3586.8,3590.3,3593.8,3597.3,3600.8,3604.3,3607.8,3611.3,3614.8,3618.3,3621.8,3625.3,3628.8,3632.3,3635.8,3639.3,3642.8,3646.3,3649.8,3653.3,3656.8,3660.3,3663.8,3667.3,3670.8,3674.3,3677.8,3681.3,3684.8,3688.3,3691.8,3695.3,3698.8,3702.3,3705.8,3709.3,3712.8,3716.3,3719.8,3723.3,3726.8,3730.3,3733.8,3737.3,3740.8,3744.3,3747.8,3751.3,3754.8,3758.3,3761.8,3765.3,3768.8,3772.3,3775.8,3779.3,3782.8,3786.3,3789.8,3793.3,3796.8,3800.3,3803.8,3807.3,3810.8,3814.3,3817.8,3821.3,3824.8,3828.3,3831.8,3835.3,3838.8,3842.3,3845.8,3849.3,3852.8,3856.3,3859.8,3863.3,3866.8,3870.3,3873.8,3877.3,3880.8,3884.3,3887.8,3891.3,3894.8,3898.3,3901.8,3905.3,3908.8,3912.3,3915.8,3919.3,3922.8,3926.3,3929.8,3933.3,3936.8,3940.3,3943.8,3947.3,3950.8,3954.3,3957.8,3961.3,3964.8,3968.3,3971.8,3975.3,3978.8,3982.3,3985.8,3989.3,3992.8,3996.3,3999.8,4003.3,4006.8,4010.3,4013.8,4017.3,4020.8,4024.3,4027.8,4031.3,4034.8,4038.3,4041.8,4045.3,4048.8,4052.3,4055.8,4059.3,4062.8,4066.3,4069.8,4073.3,4076.8,4080.3,4083.8,4087.3,4090.8,4094.3,4097.8,4101.3,4104.8,4108.3,4111.8,4115.3,4118.8,4122.3,4125.8,4129.3,4132.8,4136.3,4139.8,4143.3,4146.8,4150.3,4153.8,4157.3,4160.8,4164.3,4167.8,4171.3,4174.8,4178.3,4181.8,4185.3,4188.8,4192.3,4195.8,4199.3],
                  "Y"     : [-8.043989304698455e-5,-8.077457707968274e-5,-8.110696724478861e-5,-8.143686361282635e-5,-8.176405706356519e-5,-8.208832904457111e-5,-8.24094510115338e-5,-8.272718403657749e-5,-8.304127829457629e-5,-8.335147267111954e-5,-8.365749411532273e-5,-8.395905724562552e-5,-8.425586364985257e-5,-8.454760138651147e-5,-8.483394430258825e-5,-8.511455138793076e-5,-8.538906617983374e-5,-8.565711590970253e-5,-8.5918310776589e-5,-8.617224329631833e-5,-8.641848721576842e-5,-8.665659691094674e-5,-8.688610622049808e-5,-8.710652764996409e-5,-8.731735128414579e-5,-8.751804371856326e-5,-8.770804695006395e-5,-8.788677717674666e-5,-8.805362356079e-5,-8.820794688564599e-5,-8.834907829719848e-5,-8.847631763015063e-5,-8.858893208557029e-5,-8.868615450945185e-5,-8.876718171874918e-5,-8.883117269788438e-5,-8.887724669490899e-5,-8.890448128632156e-5,-8.891191015490608e-5,-8.889852099356094e-5,-8.886325310315332e-5,-8.8804994921817e-5,-8.872258133241626e-5,-8.861479106982143e-5,-8.848034364437555e-5,-8.831789629022833e-5,-8.812604075466527e-5,-8.790329974562708e-5,-8.764812341167092e-5,-8.7358885287693e-5,-8.703387835377076e-5,-8.667131058949657e-5,-8.626930048054833e-5,-8.58258719914198e-5,-8.533894954009949e-5,-8.48063523927909e-5,-8.422578891866128e-5,-8.359485034148192e-5,-8.291100432505512e-5,-8.217158779321781e-5,-8.137379966119794e-5,-8.0514692918792e-5,-7.95911662954833e-5,-7.859995529678757e-5,-7.753762270701674e-5,-7.640054861654026e-5,-7.51849194473995e-5,-7.388671674594174e-5,-7.250170478176186e-5,-7.102541755399448e-5,-6.945314495747593e-5,-6.777991789584428e-5,-6.600049230298125e-5,-6.41093324355345e-5,-6.210059260064913e-5,-5.996809784133612e-5,-5.770532319377878e-5,-5.53053715071645e-5,-5.276094976778977e-5,-5.006434339503031e-5,-4.720738925378988e-5,-4.418144617938723e-5,-4.097736344896754e-5,-3.758544729879474e-5,-3.399542442044568e-5,-3.019640299216823e-5,-2.617683087186388e-5,-2.192445019851841e-5,-1.742624898840363e-5,-1.266840846331611e-5,-7.636246875578219e-6,-2.314158104691291e-6,3.314453830358577e-6,9.267246194183078e-6,1.556301419434457e-5,2.222177450116257e-5,2.92648550742946e-5,3.671499296775278e-5,4.459644003125815e-5,5.29350778013002e-5,6.175854213446175e-5,7.109635865953713e-5,8.098009020750533e-5,9.144349696673394e-5,0.0001025227113228991,0.0001142564279958691,0.0001266861120346705,0.0001398562252876315,0.0001538144746781211,0.0001686120830540266,0.0001843040863556608,0.0002009496589677936,0.0002186124708132545,0.0002373610792344294,0.0002572693602052736,0.0002784169824106676,0.000300889929596035,0.0003247810768024572,0.0003501908261572024,0.0003772278096070141,0.0004060096668976165,0.0004366639067457858,0.0004693288627101041,0.0005041547542522419,0.0005413048668026568,0.0005809568656341367,0.000623304261007718,0.0006685580434598097,0.0007169485130289314,0.0007687273263188806,0.0008241697937518557,0.0008835774578264919,0.0009472809947967792,0.001015643484050819,0.001089064097486413,0.001167982271685197,0.001252882432708049,0.00134429935803384,0.001442824272042688,0.00154911178946985,0.001663887840814,0.001787958736619603,0.001922221557531005,0.002067676090271774,0.002225438569411485,0.002396757538932801,0.002583032200815292,0.002785833699778031,0.003006929873698982,0.003248314115913795,0.00351223912547833,0.003801256489528862,0.004118263244958178,0.004466556824291253,0.004849900105231225,0.005272598685053951,0.005739593000130593,0.006256568545609614,0.006830088257358593,0.007467752140784702,0.008178390556805092,0.008972299265997194,0.009861526541031056,0.01086022552351744,0.01198508876226228,0.013255886826855,0.01469613945984847,0.01633395649635114,0.01820309752164505,0.02034431512152644,0.02280706808873783,0.02565172036002561,0.02895238177150856,0.03280060230514757,0.0373102083211095,0.04262367565148922,0.04892058145351532,0.05642887872868035,0.06544001093877119,0.07632924423226162,0.08958304223816194,0.105835797416232,0.125918590176735,0.150922379512225,0.182275885991774,0.221831440470387,0.271933608970914,0.335401841050683,0.4152658782145,0.513924974513279,0.631191192746471,0.760719724718688,0.885512169616063,0.9764095811944,1.0,0.935861431294805,0.78969418283343,0.587751866473354,0.352870553440583,0.08676987839629345,-0.214590434951261,-0.526452175158635,-0.787210702929273,-0.939251122686673,-0.970695745120149,-0.911664158799771,-0.805133435921596,-0.685447721306534,-0.572393090165184,-0.474228854870449,-0.392581616122336,-0.326078424680453,-0.27236647896138,-0.22904196543796,-0.193998506340666,-0.165509168194847,-0.142202317972042,-0.123004424787326,-0.107079885369961,-0.09377846283560098,-0.08259274722738387,-0.0731249609663059,-0.06506151610624107,-0.05815366873654599,-0.05220284360191026,-0.04704948959397408,-0.0425645898591712,-0.03864316548565877,-0.03519927875171618,-0.03216216805296441,-0.02947324065634572,-0.02708371895054991,-0.02495278725990453,-0.0230461242395179,-0.0213347339605232,-0.01979400972268117,-0.01840298020462837,-0.01714369926832455,-0.01600074955211207,-0.01496083667804303,-0.01401245597290504,-0.01314561751619389,-0.01235161832755995,-0.01162285281915221,-0.01095265445848683,-0.01033516299097679,-0.009765212681739448,-0.009238237915248092,-0.008750193181390427,-0.008297485029228134,-0.007876914019126638,-0.00748562504357616,-0.00712106469113696,-0.006780944546445514,-0.006463209513293064,-0.006166010400231604,-0.005887680134808922,-0.005626713072574037,-0.0053817469568166,-0.005151547152298768,-0.004934992833938232,-0.004731064862756375,-0.004538835121152222,-0.004357457109930284,-0.004186157644520114,-0.004024229504748975,-0.003871024918958786,-0.003725949775954684,-0.003588458473174872,-0.003458049327214077,-0.003334260474145232,-0.003216666203098731,-0.003104873673622504,-0.002998519969588437,-0.002897269453263067,-0.002800811383481048,-0.002708857771456259,-0.002621141443988727,-0.002537414295391379,-0.002457445705331371,-0.002381021105500338,-0.002307940680382859,-0.002238018186485434,-0.002171079880369881,-0.002106963541052212,-0.002045517580793379,-0.001986600233227026,-0.001930078812122673,-0.001875829033593815,-0.001823734396239794,-0.001773685612702416,-0.001725580089208206,-0.001679321447159252,-0.001634819084028822,-0.001591987769641848,-0.001550747274087951,-0.001511022025792764,-0.001472740795211724,-0.001435836404185176,-0.001400245456240957,-0.001365908088295465,-0.00133276774031813,-0.0013007709426782,-0.001269867118487198,-0.001240008400897312,-0.001211149463164016,-0.001183247361219879,-0.001156261386815615,-0.001130152932011348,-0.001104885361742176,-0.001080423896217731,-0.001056735500784588,-0.001033788783626067,-0.001011553900092481,-0.0009900024631389458,-0.000969107460170917,-0.0009488431753463721,-0.0009291851161931154,-0.00091010994575474,-0.0008915954185481165,-0.0008736203208606139,-0.0008561644145190751,-0.0008392083844457822,-0.0008227337891335731,-0.0008067230145955538,-0.0007911592305214274,-0.0007760263494955347,-0.0007613089886021941,-0.0007469924332195741,-0.0007330626028188999,-0.0007195060189425381,-0.000706309775193801,-0.0006934615085159784,-0.0006809493723646389,-0.0006687620114659749,-0.0006568885379358636,-0.0006453185083066409,-0.0006340419028229329,-0.0006230491048038563,-0.0006123308818218725,-0.000601878367477161,-0.0005916830444547078,-0.0005817367284294643,-0.0005720315526239573,-0.0005625599534157667,-0.0005533146567127772,-0.0005442886646114223,-0.0005354752434460403,-0.0005268679116963914,-0.0005184604292711991,-0.0005102467863975328,-0.0005022211943387878,-0.0004943780751055305,-0.0004867120528221276,-0.0004792179452296169,-0.0004718907550860187,-0.0004647256626629066,-0.0004577180183727239,-0.0004508633354414644,-0.0004441572834019257,-0.0004375956815731144,-0.0004311744931880388,-0.0004248898191352432,-0.0004187378929063797,-0.0004127150749281374,-0.0004068178476443141,-0.0004010428108552606,-0.0003953866767163894,-0.000389846265864499,-0.0003844185028246732,-0.0003791004120594474,-0.0003738891143044889,-0.000368781822803677,-0.0003637758397552912,-0.0003588685530684238,-0.0003540574330172558,-0.0003493400294111782,-0.0003447139683371049,-0.0003401769495609112,-0.0003357267438497102,-0.0003313611902828279,-0.0003270781938678147,-0.0003228757230534172,-0.00031875180761848,-0.0003147045363361408,-0.0003107320549490594,-0.0003068325642886315,-0.00030300431814711,-0.0002992456215260302,-0.0002955548288465609,-0.0002919303423277636,-0.0002883706102319539,-0.0002848741253595761,-0.0002814394235654211,-0.0002780650821248916,-0.0002747497187479098,-0.0002714919897866412,-0.0002682905891907841,-0.0002651442472273582,-0.0002620517292516421]
             }};

const Mockdata = {"Type"  : "Feher",
                  "P"     : [1.8386173549970422,26.565085263378887,0.3053775222161633,0.9411118753065328],
                  "Y3"    : [0.007165549686467499,0.007567514002471782,0.007999411524953542,0.008464041513495562,0.008964519642044746,0.009504320057511914,0.010087323877189977,0.010717875241698618,0.011400846256577774,0.012141712418368563,0.012946640440853238,0.013822590787615349,0.014777437695224405,0.015820110058538797,0.016960757272846815,0.01821094502095729,0.01958388710016041,0.02109472075910582,0.022760834727886228,0.024602261264773894,0.026642146223152544,0.028907314505943492,0.031428952504662336,0.034243434446822166,0.037393326288570394,0.040928609249836975,0.0449081757386459,0.04940166377754932,0.05449171273401785,0.06027674381340327,0.0668743939852856,0.07442576209820204,0.08310066050799621,0.09310410267475597,0.10468429181938832,0.11814239674414218,0.13384438569135715,0.1522350936968049,0.17385444037325462,0.19935514035300703,0.2295200805133272,0.2652752851796174,0.30769020576924927,0.35794955646826676,0.41726792880004726,0.4866971266652932,0.5667441624775998,0.6566773586426388,0.7533674695063656,0.8495502494407852,0.9316464315166483,0.9779610409597359,0.9593277231065104,0.845416632140578,0.6186792229421528,0.29146101139539327,-0.08701197278871176,-0.4457775745527168,-0.7230701644003807,-0.8901456401417553,-0.9529343243401378,-0.937512956246362,-0.8740132329745319,-0.7872174166078227,-0.6938930764817527,-0.603787547677367,-0.5217057257947879,-0.4494105553724104,-0.3869853018188459,-0.3336918896261741,-0.28846600781632115,-0.2501812387452789,-0.2177772848103036,-0.19031285560021974,-0.16697917264081524,-0.14709441504095339,-0.13009011611081667,-0.1154952033698338,-0.10292043714846044,-0.09204443193108769,-0.08260163651961618,-0.0743722571093977,-0.06717393648287029,-0.060854945173119686,-0.05528863836091844,-0.05036895456717154,-0.04600676302600642,-0.04212689821910543,-0.03866574896138345,-0.03556929440395727,-0.0327915001997205,-0.030293005185461925,-0.028040042778998988,-0.02600355240609398,-0.0241584451561337,-0.022482994948064876,-0.02095833212863735,-0.0195680209175854,-0.018297705695766584,-0.01713481399145744,-0.016068306306927897,-0.015088464760648214,-0.014186713993605531,-0.013355468975033109,-0.012588005301619696,-0.011878348360953717,-0.01122117836092923,-0.010611748740901504,-0.010045815900392113,-0.009519578525292696,-0.009029625074306073,-0.00857288822138564,-0.00814660524247956,-0.007748283494422001],
                  "Y5"    : [0.029688923136560765,0.03116370570694477,0.03273868746941616,0.03442243099760752,0.03622437232455432,0.03815492308688953,0.040225585815770855,0.04244908415732298,0.04483951000577192,0.0474124897878004,0.05018537235751795,0.053177441237394846,0.05641015413661162,0.05990741287748487,0.0636958669385171,0.06780525372956546,0.07226877841983308,0.0771235353069037,0.08241097137153428,0.08817739017170763,0.09447449030052431,0.1013599263496176,0.10889787054437915,0.11715953821666719,0.12622361737083734,0.1361765080260626,0.14711222438942098,0.1591317339886756,0.1723413883308943,0.18684991965674383,0.2027632064223436,0.22017559995624938,0.23915598585738906,0.2597258227391017,0.2818250068221513,0.30525934482166417,0.3296204086859244,0.35416430628127654,0.37763029051300534,0.39797364790155637,0.4119824173970597,0.41475184521194114,0.39902440293907576,0.3545153866443671,0.26763939651672947,0.12271977243959536,0.09299419248598759,0.37666528670555943,0.6865535957438557,0.9158779894829819,0.8996770053224903,0.5082609479271555,0.18935652954527946,0.8446626341950998,0.9940393950366233,0.44664898548944243,0.4422437295578971,1.0,0.8328006428226866,0.16279615592565502,0.4846947641823795,0.7833156073475804,0.7306797785773063,0.48312169672092425,0.19199170422794784,0.05724539326845533,0.2366765856043442,0.34954922671526767,0.41028382531303176,0.43431501175123066,0.43435857761431207,0.4197459683018967,0.39689011932507684,0.3700058833365167,0.34176217313029755,0.31378380398562034,0.2870095788563714,0.26193742828322125,0.23878804978022364,0.2176122922842669,0.1983606883899029,0.180927913364937,0.16518080775134375,0.15097571045979183,0.13816888976903516,0.1266225531126677,0.11620805398845095,0.10680734721981305,0.09831337304544227,0.09062980770808744,0.08367045998830387,0.07735849022136784,0.07162556104719005,0.0664109860200132,0.06166091426190185,0.05732757159865541,0.05336856739201136,0.04974626959039389,0.04642724632129804,0.04338177009532334,0.04058337964332696,0.03800849385408392,0.035636072356657784,0.03344731752622739,0.03142541303795343,0.02955529456759723,0.02782344868910532,0.02621773639225048,0.02472723819554942,0.023342118045455884,0.022053503654021783,0.020853381178617462,0.019734502426203945,0.018690302992033177],
                  "X"     : [3303.3,3306.8,3310.3,3313.8,3317.3,3320.8,3324.3,3327.8,3331.3,3334.8,3338.3,3341.8,3345.3,3348.8,3352.3,3355.8,3359.3,3362.8,3366.3,3369.8,3373.3,3376.8,3380.3,3383.8,3387.3,3390.8,3394.3,3397.8,3401.3,3404.8,3408.3,3411.8,3415.3,3418.8,3422.3,3425.8,3429.3,3432.8,3436.3,3439.8,3443.3,3446.8,3450.3,3453.8,3457.3,3460.8,3464.3,3467.8,3471.3,3474.8,3478.3,3481.8,3485.3,3488.8,3492.3,3495.8,3499.3,3502.8,3506.3,3509.8,3513.3,3516.8,3520.3,3523.8,3527.3,3530.8,3534.3,3537.8,3541.3,3544.8,3548.3,3551.8,3555.3,3558.8,3562.3,3565.8,3569.3,3572.8,3576.3,3579.8,3583.3,3586.8,3590.3,3593.8,3597.3,3600.8,3604.3,3607.8,3611.3,3614.8,3618.3,3621.8,3625.3,3628.8,3632.3,3635.8,3639.3,3642.8,3646.3,3649.8,3653.3,3656.8,3660.3,3663.8,3667.3,3670.8,3674.3,3677.8,3681.3,3684.8,3688.3,3691.8,3695.3,3698.8],
                  "Y2"    : [0.003685328687794175,0.003931313256323206,0.0041970271159034464,0.004484395081789391,0.004795565856429721,0.005132942450333154,0.005499217348561218,0.00589741326061622,0.00633093045682102,0.006803601895699536,0.007319757592989726,0.007884299984616282,0.008502792406943464,0.00918156327531126,0.009927829108342782,0.010749840248995128,0.011657054009878607,0.01266034106625962,0.013772232294910817,0.015007214987336544,0.016382089551092317,0.017916400581391857,0.019632959703490896,0.0215584820704486,0.023724364130765955,0.0261676376182115,0.028932144128270828,0.03206998672841578,0.03564333055609263,0.039726644222272664,0.04440949917925473,0.049800076298669387,0.056029569026338544,0.06325772160732808,0.07167979893283419,0.08153534891295455,0.09311918069857987,0.10679502284223698,0.12301230207262162,0.14232630903061713,0.16542152133039673,0.19313670928455345,0.2264880430904035,0.2666816389833172,0.31509788415855344,0.3732133039943358,0.4423971767026224,0.5234750812246064,0.6158919305072604,0.7162600144510162,0.8161394002020282,0.8992993369584281,0.939805671225431,0.9041260977848814,0.7615222944475456,0.5032074487215209,0.15969376526542947,-0.2024280435611225,-0.5098722382118788,-0.7166047329668198,-0.8160336292263342,-0.8294032891583496,-0.7870518556395272,-0.7157094940849456,-0.6340329331788882,-0.5530856709070766,-0.4784709352752085,-0.4124135515706064,-0.3552703223464077,-0.30647871013936434,-0.26509964822530635,-0.2301047092140833,-0.2005148619280342,-0.17545811421484972,-0.15418532157364961,-0.13606598115030633,-0.12057563346102974,-0.10728078336183246,-0.09582415570994363,-0.08591147494247865,-0.07730013648687602,-0.06978974730359006,-0.0632143468483227,-0.05743606680472961,-0.052339988799510614,-0.047829983157467164,-0.04382534308527863,-0.04025806010633476,-0.037070614936447234,-0.03421418224399513,-0.03164716784233863,-0.029334013217398886,-0.027244215445107477,-0.025351521054950518,-0.023633260747106855,-0.022069798498618214,-0.020644073851244362,-0.019341220345551132,-0.018148246380413863,-0.017053767415269264,-0.016047780536698957,-0.015121474093425546,-0.014267066452642991,-0.013477669014976122,-0.012747169499646532,-0.012070132218399442,-0.011441712630143264,-0.0108575839347047,-0.0103138738446911,-0.009807109985907338,-0.009334172632406856,-0.008892253692681514,-0.008478821037205191,-0.008091587401351815],
                  "ME"    : [0.000331553876322987,0.629504563815741,0.01677243721815787,0.036611820841763856],
                  "Y1"    : [0.005333053613292926,0.0056530221055818616,0.00599756763582033,0.0063690311725636195,0.006770021695754355,0.007203452181613271,0.007672581145371055,0.008181060714007421,0.008732992391253826,0.009332991908285777,0.009986264835488244,0.010698694975616093,0.011476947981947596,0.012328593166040555,0.013262247103019023,0.014287743439153032,0.015416334296589227,0.016660929904180864,0.01803638462635699,0.019559839497043346,0.021251133799550948,0.023133301303172312,0.02523317064900159,0.02758209429696152,0.03021683669181319,0.03318066024517217,0.03652465782622002,0.04030939328173562,0.044606927766957294,0.049503330184793415,0.055101795706529996,0.06152652805449405,0.06892757953923219,0.07748688747342053,0.08742579426075853,0.0990143847443782,0.11258300354516167,0.12853629628068053,0.1473699903871651,0.16969027561763098,0.1962348389591498,0.22789294481055028,0.2657186946661999,0.310925477075692,0.3648385324941812,0.4287633831496334,0.5036968788521973,0.5897631370620932,0.6852081721581784,0.784778054507502,0.8774573538722419,0.9440982124020879,0.9566880726846037,0.8825955779951821,0.6970826725325645,0.40199586361733936,0.038129086423038694,-0.3245768264414921,-0.6180489126934471,-0.8051160646680168,-0.8859412946000446,-0.8845416880700099,-0.831299326619172,-0.7519966238486238,-0.6643312465624422,-0.5786893044002206,-0.5002600584712996,-0.431027274216949,-0.3712040621134417,-0.3201352198739352,-0.27681549800258765,-0.24016485073676455,-0.20916168023753945,-0.1828979299103809,-0.16059361295778704,-0.14159183367841738,-0.1253456107371442,-0.11140229976048657,-0.09938839689262237,-0.08899590687850505,-0.07997064506606959,-0.07210245191277684,-0.06521713058198597,-0.05916986345531764,-0.053839863087566456,-0.049126036449858634,-0.04494347257325609,-0.04122059536169712,-0.037896852087051056,-0.0349208327711706,-0.032248736207959205,-0.02984311515110378,-0.02767184672072486,-0.025707284912277806,-0.02392556072397966,-0.022306002285146037,-0.020830652824493572,-0.01948386865525268,-0.018251982805901568,-0.017123022676803382,-0.016086472300599845,-0.015133071543476146,-0.014254645996370356,-0.013443962441477162,-0.01269460569638265,-0.012000873380311276,-0.011357685749356429,-0.010760508237952379,-0.010205284744224054,-0.009688380024695659,-0.009206529833067996,-0.0087567976594995,-0.008336537109944987,-0.00794335911676172],
                  "Y"     : [0.002067676090271774,0.002225438569411485,0.002396757538932801,0.002583032200815292,0.002785833699778031,0.003006929873698982,0.003248314115913795,0.00351223912547833,0.003801256489528862,0.004118263244958178,0.004466556824291253,0.004849900105231225,0.005272598685053951,0.005739593000130593,0.006256568545609614,0.006830088257358593,0.007467752140784702,0.008178390556805092,0.008972299265997194,0.009861526541031056,0.01086022552351744,0.01198508876226228,0.013255886826855,0.01469613945984847,0.01633395649635114,0.01820309752164505,0.02034431512152644,0.02280706808873783,0.02565172036002561,0.02895238177150856,0.03280060230514757,0.0373102083211095,0.04262367565148922,0.04892058145351532,0.05642887872868035,0.06544001093877119,0.07632924423226162,0.08958304223816194,0.105835797416232,0.125918590176735,0.150922379512225,0.182275885991774,0.221831440470387,0.271933608970914,0.335401841050683,0.4152658782145,0.513924974513279,0.631191192746471,0.760719724718688,0.885512169616063,0.9764095811944,1.0,0.935861431294805,0.78969418283343,0.587751866473354,0.352870553440583,0.08676987839629345,-0.214590434951261,-0.526452175158635,-0.787210702929273,-0.939251122686673,-0.970695745120149,-0.911664158799771,-0.805133435921596,-0.685447721306534,-0.572393090165184,-0.474228854870449,-0.392581616122336,-0.326078424680453,-0.27236647896138,-0.22904196543796,-0.193998506340666,-0.165509168194847,-0.142202317972042,-0.123004424787326,-0.107079885369961,-0.09377846283560098,-0.08259274722738387,-0.0731249609663059,-0.06506151610624107,-0.05815366873654599,-0.05220284360191026,-0.04704948959397408,-0.0425645898591712,-0.03864316548565877,-0.03519927875171618,-0.03216216805296441,-0.02947324065634572,-0.02708371895054991,-0.02495278725990453,-0.0230461242395179,-0.0213347339605232,-0.01979400972268117,-0.01840298020462837,-0.01714369926832455,-0.01600074955211207,-0.01496083667804303,-0.01401245597290504,-0.01314561751619389,-0.01235161832755995,-0.01162285281915221,-0.01095265445848683,-0.01033516299097679,-0.009765212681739448,-0.009238237915248092,-0.008750193181390427,-0.008297485029228134,-0.007876914019126638,-0.00748562504357616,-0.00712106469113696,-0.006780944546445514,-0.006463209513293064,-0.006166010400231604,-0.005887680134808922],
                  "Cb"    : [1.8382858011207193,25.935580699563147,0.28860508499800547,0.904500054464769],
                  "Y4"    : [0.014301326098686982,0.014942296092915735,0.015625197194982208,0.01635362277251989,0.017131546416495978,0.017963369764331924,0.018853977280881794,0.019808799143520454,0.020833883587521182,0.021935980319819946,0.023122636912161845,0.02440231044950806,0.02578449714989456,0.027279883204117797,0.02890052072772214,0.03066003349815324,0.03257385809613748,0.03465952721781715,0.036937003315144636,0.039429072406014946,0.04216180992933422,0.04516513296642137,0.048473456074089954,0.05212647143672418,0.05617007808524023,0.06065748954385839,0.06565055434985372,0.07122132916595679,0.07745394906298904,0.08444684280834072,0.09231534046723451,0.10119471239245273,0.11124365586960076,0.12264819638571167,0.13562587423969252,0.15042990911888007,0.1673527161808419,0.1867275875544527,0.2089263870510158,0.23434946058868616,0.26340120287778385,0.29644016818571856,0.3336853058560061,0.3750486681155843,0.4198489482399,0.4663408316775319,0.5109809962168063,0.5473701834364061,0.5649303634937096,0.5477316288494226,0.4746548343198156,0.3232457596313382,0.0802222704170886,0.2412557172601712,0.5869872480269,0.8701329173033898,0.2986724165054103,1.0,0.8760975429858797,0.7131343400079531,0.5625681486048659,0.4442567308327653,0.3573517359193453,0.2938486145072833,0.24598421479979,0.20835000817010693,0.17766539488860902,0.15203236123385822,0.1303268567776022,0.11182754031175726,0.0960197436822753,0.08250079401997738,0.07093674194451464,0.06104281904649787,0.05257397051489509,0.04531931434471513,0.039098011042049505,0.0337556434751669,0.02916085931869716,0.02520225522366377,0.02178553626603571,0.018830978581035065,0.016271203065044596,0.014049249877157844,0.012116931351347782,0.010433434571904212,0.008964142777834822,0.007679645426706103,0.0065549089757288926,0.005568583405278669,0.0047024226951207565,0.003940800560228587,0.003270305599721907,0.0026794025387539564,0.0021581484331892374,0.0016979545748988273,0.0012913864107831107,0.000931995106422048,0.0006141754814307955,0.0003330459518780594,8.434686578314816e-5,0.00013564576287789285,0.0003301936055107299,0.0005021585184285173,0.0006540559062443144,0.0007881003783498118,0.0009062448911054281,0.0010102143727233526,0.0011015346658229054,0.0011815574882886226,0.0012514820014643984,0.0013123734818576887,0.0013651795151275897,0.0014107440664912275],
                  "Scale" : [3300,3700,-1.2],
                  "Ct"    : [4.2,6433.0],
                  "CU"    : [1.838948908873365,27.194589827194626,0.3221499594343212,0.9777236961482967]
                 };

const Set       = ['Name','lb','ub','P'];
const ParsName  = ['g-Value','LineWidth','m-Value','xi-Value'];

const Set1      = ['Name','X-Lb','X-Ub','Y-Lb'];
const Set15     = ['Name','Scale','Scale','Scale'];
const ParsName1 = ['XY-Scale'];

const Set2      = ['Name','Exp. Temp. Index - Try: Exe'];
const ParsName2 = ['Data'];

const CtesName  = ['Temperature','Field-H0'];

const Alert = {
    OK      : 'white',
    Error   : 'rgba(153, 51, 51,0.2)',
};

const Conf = {
    L       : '127.0.0.1',
    S       : '144.22.136.159',
    B       : '144.22.218.188',
    E       : 'NaN',
    P       : '8000'
};

const NoTes = {
    N1       : 'Input - Variables',
    N2       : 'Input - Constants',
    N3       : 'Output - Obtained Parameters (Pn)',
    N4       : 'Output - Obtained Fit (Raw Data)',
};

const HeaderContent = {
    Title    : 'Single Lorentzian/Dysonian Fit.',
    ServerS1 : 'Server: Up',
    ServerS2 : 'Server: Down',
    Status1  : 'Data: NaN',
    Status5  : 'Status: NaN',
    Status2  : 'Status: Success',
    Status4  : 'Status: Failure',
    Status3  : 'Data: Loaded',
    Tasks1   : 'Tasks: Idle',
    Tasks2   : 'Tasks: Runing'
    };

const Label = {
    B1      : 'Run The Simulation',
    B2      : 'Export Result (.Json)',
    B3      : 'Export Result (.csv)',
    B4      : 'Choose the Temperature'
};

const Table = {
    L1      : ['Parameter','Pn','Stan. Devi.','C.I. - (Lb)','C.I. - (Ub)'],
    C1      : ParsName,
    L2      : ['X Exp.','Y Exp.','Y(P)','Y(C.I.-Ub)','Y(C.I.-Ul)'],
};

// Server Link
   var UrlPath      = Conf.B + ":" + Conf.P;
   var JsonPayload  = "http://" + UrlPath + "/JsonPayload";
   var Greeting     = "http://" + UrlPath + "/Greeting";
   var GET          = "http://" + UrlPath + "/GET";

// Acumuladores:
   var DataHolder   = {};
   var ResultHolder = {};
   var Dl3          = '';
