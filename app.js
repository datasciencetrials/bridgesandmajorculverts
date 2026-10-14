// ===========================================
//  EMBEDDED DATASETS
// ===========================================
const ATC_SITES = {"value":[{"id":"U0001","road":"Luwero - Nakasongola","lat":0.818018,"lng":32.503798},{"id":"U0002","road":"Kampala - Mukono","lat":0.3687,"lng":32.73805},{"id":"U0003","road":"Iganga - Nakalama","lat":0.62756,"lng":33.5143},{"id":"U0004","road":"Buwama - Lukaya","lat":0.01665,"lng":32.05515},{"id":"U0005","road":"Ishaka - Kizinda - Rugazi","lat":-0.52679,"lng":30.1236},{"id":"U0006","road":"Kayunga - Kangulumira","lat":0.68051,"lng":32.92356},{"id":"U0007","road":"Kamdini - Minakulu","lat":2.25441,"lng":32.34248},{"id":"U0008","road":"Pakwachi - Nebbi","lat":2.42511,"lng":31.24403},{"id":"U0009","road":"Kampala - Mityana","lat":0.38527,"lng":32.10109},{"id":"U00010","road":"Zana - Kisubi (Entebbe Road)","lat":0.1189,"lng":32.52938}],"Count":10};
const ATC_FLOW = {"aadt":[{"id":"U0001","aadt":16281,"light_pct":88.5,"heavy_pct":11.5,"days":227},{"id":"U0002","aadt":30401,"light_pct":80.8,"heavy_pct":19.2,"days":185},{"id":"U0003","aadt":15962,"light_pct":73.1,"heavy_pct":26.9,"days":169},{"id":"U0004","aadt":12749,"light_pct":76.8,"heavy_pct":23.2,"days":149},{"id":"U0005","aadt":8471,"light_pct":95.1,"heavy_pct":4.9,"days":131},{"id":"U0006","aadt":10403,"light_pct":95.1,"heavy_pct":4.9,"days":109},{"id":"U0007","aadt":4760,"light_pct":81.7,"heavy_pct":18.3,"days":91},{"id":"U0008","aadt":2049,"light_pct":67.3,"heavy_pct":32.7,"days":92},{"id":"U0009","aadt":9473,"light_pct":87.9,"heavy_pct":12.1,"days":124},{"id":"U0010","aadt":23174,"light_pct":96.6,"heavy_pct":3.4,"days":89}],"hourly":[{"id":"U0001","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0002","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0003","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0004","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0005","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0006","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0007","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0008","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0009","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":"U0010","profile":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}],"monthly":[{"id":"U0001","month":"2025-07","total":299317,"light":264956,"heavy":34361},{"id":"U0001","month":"2025-08","total":499150,"light":441209,"heavy":57941},{"id":"U0001","month":"2025-09","total":457163,"light":403609,"heavy":53554},{"id":"U0001","month":"2025-10","total":497828,"light":440550,"heavy":57278},{"id":"U0001","month":"2025-11","total":501181,"light":446340,"heavy":54841},{"id":"U0001","month":"2025-12","total":556926,"light":492668,"heavy":64258},{"id":"U0001","month":"2026-01","total":479376,"light":423592,"heavy":55784},{"id":"U0001","month":"2026-02","total":404740,"light":356325,"heavy":48415},{"id":"U0002","month":"2025-08","total":225024,"light":179468,"heavy":45556},{"id":"U0002","month":"2025-09","total":938232,"light":756798,"heavy":181434},{"id":"U0002","month":"2025-10","total":928135,"light":754659,"heavy":173476},{"id":"U0002","month":"2025-11","total":871637,"light":700633,"heavy":171004},{"id":"U0002","month":"2025-12","total":943212,"light":756992,"heavy":186220},{"id":"U0002","month":"2026-01","total":1002293,"light":822983,"heavy":179310},{"id":"U0002","month":"2026-02","total":715738,"light":571752,"heavy":143986},{"id":"U0003","month":"2025-08","total":217141,"light":158521,"heavy":58620},{"id":"U0003","month":"2025-09","total":472670,"light":342886,"heavy":129784},{"id":"U0003","month":"2025-10","total":477484,"light":344875,"heavy":132609},{"id":"U0003","month":"2025-11","total":121105,"light":90464,"heavy":30641},{"id":"U0003","month":"2025-12","total":543308,"light":403022,"heavy":140286},{"id":"U0003","month":"2026-01","total":478827,"light":351759,"heavy":127068},{"id":"U0003","month":"2026-02","total":387099,"light":281164,"heavy":105935},{"id":"U0004","month":"2025-08","total":154521,"light":118933,"heavy":35588},{"id":"U0004","month":"2025-09","total":262735,"light":197669,"heavy":65066},{"id":"U0004","month":"2025-10","total":17455,"light":13363,"heavy":4092},{"id":"U0004","month":"2025-11","total":329650,"light":250172,"heavy":79478},{"id":"U0004","month":"2025-12","total":459370,"light":364485,"heavy":94885},{"id":"U0004","month":"2026-01","total":382212,"light":293209,"heavy":89003},{"id":"U0004","month":"2026-02","total":293676,"light":220379,"heavy":73297},{"id":"U0005","month":"2025-08","total":84417,"light":79948,"heavy":4469},{"id":"U0005","month":"2025-09","total":71632,"light":67858,"heavy":3774},{"id":"U0005","month":"2025-10","total":9374,"light":8899,"heavy":475},{"id":"U0005","month":"2025-11","total":234536,"light":222649,"heavy":11887},{"id":"U0005","month":"2025-12","total":281669,"light":268607,"heavy":13062},{"id":"U0005","month":"2026-01","total":262783,"light":250525,"heavy":12258},{"id":"U0005","month":"2026-02","total":165331,"light":157231,"heavy":8100},{"id":"U0006","month":"2025-09","total":104902,"light":100468,"heavy":4434},{"id":"U0006","month":"2025-10","total":147219,"light":140412,"heavy":6807},{"id":"U0006","month":"2025-12","total":317399,"light":302922,"heavy":14477},{"id":"U0006","month":"2026-01","total":306568,"light":290421,"heavy":16147},{"id":"U0006","month":"2026-02","total":257820,"light":243570,"heavy":14250},{"id":"U0007","month":"2025-11","total":18805,"light":14841,"heavy":3964},{"id":"U0007","month":"2025-12","total":152064,"light":123573,"heavy":28491},{"id":"U0007","month":"2026-01","total":147290,"light":120872,"heavy":26418},{"id":"U0007","month":"2026-02","total":115008,"light":94683,"heavy":20325},{"id":"U0008","month":"2025-10","total":16633,"light":10826,"heavy":5807},{"id":"U0008","month":"2025-12","total":58801,"light":40251,"heavy":18550},{"id":"U0008","month":"2026-01","total":61071,"light":41116,"heavy":19955},{"id":"U0008","month":"2026-02","total":51994,"light":34744,"heavy":17250},{"id":"U0009","month":"2025-10","total":63126,"light":55956,"heavy":7170},{"id":"U0009","month":"2025-11","total":277765,"light":244434,"heavy":33331},{"id":"U0009","month":"2025-12","total":316752,"light":281940,"heavy":34812},{"id":"U0009","month":"2026-01","total":284062,"light":248111,"heavy":35951},{"id":"U0009","month":"2026-02","total":232973,"light":202491,"heavy":30482},{"id":"U0010","month":"2025-11","total":71479,"light":69194,"heavy":2285},{"id":"U0010","month":"2025-12","total":718508,"light":694497,"heavy":24011},{"id":"U0010","month":"2026-01","total":697432,"light":673498,"heavy":23934},{"id":"U0010","month":"2026-02","total":575054,"light":555094,"heavy":19960}]};
const ATC_CLASS = {"value":[{"id":"U0001","classes":[{"cls":0,"label":"Unknown","count":2392},{"cls":1,"label":"Motorcycle","count":1667707},{"cls":2,"label":"Light Motor","count":1571004},{"cls":3,"label":"LMV Towing","count":30538},{"cls":4,"label":"2-Axle Bus","count":18486},{"cls":5,"label":"3-Axle Bus","count":214829},{"cls":6,"label":"2-Axle Rigid","count":5634},{"cls":7,"label":"3-Axle Rigid","count":2134},{"cls":8,"label":"4-Axle Rigid","count":50210},{"cls":9,"label":"2-Axle Semi","count":46465},{"cls":10,"label":"3-Axle Semi","count":9},{"cls":11,"label":"4-Axle Semi","count":7},{"cls":12,"label":"5-Axle Semi","count":20043},{"cls":13,"label":"6-Axle Semi","count":56538},{"cls":14,"label":"7-Axle Semi","count":114},{"cls":15,"label":"2+2 Double","count":433},{"cls":16,"label":"3+2 Double","count":8679},{"cls":17,"label":"3+3 Double","count":459}]},{"id":"U0002","classes":[{"cls":0,"label":"Unknown","count":41458},{"cls":1,"label":"Motorcycle","count":2092733},{"cls":2,"label":"Light Motor","count":2271798},{"cls":3,"label":"LMV Towing","count":178754},{"cls":4,"label":"2-Axle Bus","count":21481},{"cls":5,"label":"3-Axle Bus","count":359227},{"cls":6,"label":"2-Axle Rigid","count":5769},{"cls":7,"label":"3-Axle Rigid","count":16170},{"cls":8,"label":"4-Axle Rigid","count":86078},{"cls":9,"label":"2-Axle Semi","count":107975},{"cls":10,"label":"3-Axle Semi","count":159},{"cls":11,"label":"4-Axle Semi","count":352},{"cls":12,"label":"5-Axle Semi","count":81743},{"cls":13,"label":"6-Axle Semi","count":321899},{"cls":14,"label":"7-Axle Semi","count":3088},{"cls":15,"label":"2+2 Double","count":5635},{"cls":16,"label":"3+2 Double","count":19131},{"cls":17,"label":"3+3 Double","count":10821}]},{"id":"U0003","classes":[{"cls":0,"label":"Unknown","count":1027},{"cls":1,"label":"Motorcycle","count":764845},{"cls":2,"label":"Light Motor","count":1199558},{"cls":3,"label":"LMV Towing","count":8288},{"cls":4,"label":"2-Axle Bus","count":14038},{"cls":5,"label":"3-Axle Bus","count":170757},{"cls":6,"label":"2-Axle Rigid","count":4371},{"cls":7,"label":"3-Axle Rigid","count":1088},{"cls":8,"label":"4-Axle Rigid","count":43406},{"cls":9,"label":"2-Axle Semi","count":51162},{"cls":10,"label":"3-Axle Semi","count":21},{"cls":11,"label":"4-Axle Semi","count":8},{"cls":12,"label":"5-Axle Semi","count":75582},{"cls":13,"label":"6-Axle Semi","count":355671},{"cls":14,"label":"7-Axle Semi","count":146},{"cls":15,"label":"2+2 Double","count":936},{"cls":16,"label":"3+2 Double","count":4945},{"cls":17,"label":"3+3 Double","count":1785}]},{"id":"U0004","classes":[{"cls":0,"label":"Unknown","count":412},{"cls":1,"label":"Motorcycle","count":328464},{"cls":2,"label":"Light Motor","count":1126475},{"cls":3,"label":"LMV Towing","count":3271},{"cls":4,"label":"2-Axle Bus","count":26140},{"cls":5,"label":"3-Axle Bus","count":154926},{"cls":6,"label":"2-Axle Rigid","count":7107},{"cls":7,"label":"3-Axle Rigid","count":729},{"cls":8,"label":"4-Axle Rigid","count":37803},{"cls":9,"label":"2-Axle Semi","count":86603},{"cls":10,"label":"3-Axle Semi","count":12},{"cls":11,"label":"4-Axle Semi","count":3},{"cls":12,"label":"5-Axle Semi","count":22584},{"cls":13,"label":"6-Axle Semi","count":99792},{"cls":14,"label":"7-Axle Semi","count":64},{"cls":15,"label":"2+2 Double","count":315},{"cls":16,"label":"3+2 Double","count":4673},{"cls":17,"label":"3+3 Double","count":246}]},{"id":"U0005","classes":[{"cls":0,"label":"Unknown","count":268},{"cls":1,"label":"Motorcycle","count":791513},{"cls":2,"label":"Light Motor","count":262390},{"cls":3,"label":"LMV Towing","count":1814},{"cls":4,"label":"2-Axle Bus","count":1696},{"cls":5,"label":"3-Axle Bus","count":24219},{"cls":6,"label":"2-Axle Rigid","count":234},{"cls":7,"label":"3-Axle Rigid","count":241},{"cls":8,"label":"4-Axle Rigid","count":4455},{"cls":9,"label":"2-Axle Semi","count":3425},{"cls":11,"label":"4-Axle Semi","count":4},{"cls":12,"label":"5-Axle Semi","count":3541},{"cls":13,"label":"6-Axle Semi","count":14573},{"cls":14,"label":"7-Axle Semi","count":13},{"cls":15,"label":"2+2 Double","count":30},{"cls":16,"label":"3+2 Double","count":1276},{"cls":17,"label":"3+3 Double","count":50}]},{"id":"U0006","classes":[{"cls":0,"label":"Unknown","count":288},{"cls":1,"label":"Motorcycle","count":731061},{"cls":2,"label":"Light Motor","count":340729},{"cls":3,"label":"LMV Towing","count":6003},{"cls":4,"label":"2-Axle Bus","count":659},{"cls":5,"label":"3-Axle Bus","count":26365},{"cls":6,"label":"2-Axle Rigid","count":462},{"cls":7,"label":"3-Axle Rigid","count":840},{"cls":8,"label":"4-Axle Rigid","count":20069},{"cls":9,"label":"2-Axle Semi","count":2275},{"cls":10,"label":"3-Axle Semi","count":2},{"cls":11,"label":"4-Axle Semi","count":1},{"cls":12,"label":"5-Axle Semi","count":2050},{"cls":13,"label":"6-Axle Semi","count":2631},{"cls":14,"label":"7-Axle Semi","count":41},{"cls":15,"label":"2+2 Double","count":75},{"cls":16,"label":"3+2 Double","count":243},{"cls":17,"label":"3+3 Double","count":114}]},{"id":"U0007","classes":[{"cls":0,"label":"Unknown","count":76},{"cls":1,"label":"Motorcycle","count":237477},{"cls":2,"label":"Light Motor","count":115948},{"cls":3,"label":"LMV Towing","count":544},{"cls":4,"label":"2-Axle Bus","count":3885},{"cls":5,"label":"3-Axle Bus","count":21157},{"cls":6,"label":"2-Axle Rigid","count":1114},{"cls":7,"label":"3-Axle Rigid","count":111},{"cls":8,"label":"4-Axle Rigid","count":3775},{"cls":9,"label":"2-Axle Semi","count":3077},{"cls":10,"label":"3-Axle Semi","count":8},{"cls":12,"label":"5-Axle Semi","count":12136},{"cls":13,"label":"6-Axle Semi","count":31188},{"cls":14,"label":"7-Axle Semi","count":2},{"cls":15,"label":"2+2 Double","count":300},{"cls":16,"label":"3+2 Double","count":2190},{"cls":17,"label":"3+3 Double","count":179}]},{"id":"U0008","classes":[{"cls":0,"label":"Unknown","count":16},{"cls":1,"label":"Motorcycle","count":72958},{"cls":2,"label":"Light Motor","count":53801},{"cls":3,"label":"LMV Towing","count":178},{"cls":4,"label":"2-Axle Bus","count":4047},{"cls":5,"label":"3-Axle Bus","count":15955},{"cls":6,"label":"2-Axle Rigid","count":1047},{"cls":7,"label":"3-Axle Rigid","count":32},{"cls":8,"label":"4-Axle Rigid","count":4133},{"cls":9,"label":"2-Axle Semi","count":4958},{"cls":10,"label":"3-Axle Semi","count":2},{"cls":11,"label":"4-Axle Semi","count":2},{"cls":12,"label":"5-Axle Semi","count":4374},{"cls":13,"label":"6-Axle Semi","count":23451},{"cls":14,"label":"7-Axle Semi","count":21},{"cls":15,"label":"2+2 Double","count":57},{"cls":16,"label":"3+2 Double","count":3005},{"cls":17,"label":"3+3 Double","count":462}]},{"id":"U0009","classes":[{"cls":0,"label":"Unknown","count":328},{"cls":1,"label":"Motorcycle","count":444799},{"cls":2,"label":"Light Motor","count":584576},{"cls":3,"label":"LMV Towing","count":3557},{"cls":4,"label":"2-Axle Bus","count":4377},{"cls":5,"label":"3-Axle Bus","count":81577},{"cls":6,"label":"2-Axle Rigid","count":630},{"cls":7,"label":"3-Axle Rigid","count":469},{"cls":8,"label":"4-Axle Rigid","count":12468},{"cls":9,"label":"2-Axle Semi","count":10366},{"cls":10,"label":"3-Axle Semi","count":1},{"cls":12,"label":"5-Axle Semi","count":6614},{"cls":13,"label":"6-Axle Semi","count":23329},{"cls":14,"label":"7-Axle Semi","count":16},{"cls":15,"label":"2+2 Double","count":42},{"cls":16,"label":"3+2 Double","count":1420},{"cls":17,"label":"3+3 Double","count":109}]},{"id":"U0010","classes":[{"cls":0,"label":"Unknown","count":1906},{"cls":1,"label":"Motorcycle","count":675100},{"cls":2,"label":"Light Motor","count":1299803},{"cls":3,"label":"LMV Towing","count":17380},{"cls":4,"label":"2-Axle Bus","count":4452},{"cls":5,"label":"3-Axle Bus","count":44626},{"cls":6,"label":"2-Axle Rigid","count":295},{"cls":7,"label":"3-Axle Rigid","count":1177},{"cls":8,"label":"4-Axle Rigid","count":5235},{"cls":9,"label":"2-Axle Semi","count":7763},{"cls":10,"label":"3-Axle Semi","count":3},{"cls":11,"label":"4-Axle Semi","count":3},{"cls":12,"label":"5-Axle Semi","count":1046},{"cls":13,"label":"6-Axle Semi","count":3446},{"cls":14,"label":"7-Axle Semi","count":50},{"cls":15,"label":"2+2 Double","count":49},{"cls":16,"label":"3+2 Double","count":92},{"cls":17,"label":"3+3 Double","count":47}]}],"Count":10};
const ATC_SPEED = {"value":[{"id":"U0001","avg_speed":52.1,"p85_speed":67.8},{"id":"U0002","avg_speed":43.6,"p85_speed":54.8},{"id":"U0003","avg_speed":47.0,"p85_speed":61.4},{"id":"U0004","avg_speed":55.1,"p85_speed":70.8},{"id":"U0005","avg_speed":47.4,"p85_speed":60.4},{"id":"U0006","avg_speed":56.3,"p85_speed":77.1},{"id":"U0007","avg_speed":56.1,"p85_speed":76.9},{"id":"U0008","avg_speed":60.0,"p85_speed":82.5},{"id":"U0009","avg_speed":60.4,"p85_speed":80.6},{"id":"U0010","avg_speed":55.7,"p85_speed":68.1}],"Count":10};

// ===========================================
//  HELPERS & CONSTANTS
// ===========================================
const asArray = data => Array.isArray(data) ? data : (Array.isArray(data?.value) ? data.value : []);
const ATC_SITE_ITEMS = asArray(ATC_SITES);
const ATC_CLASS_ITEMS = asArray(ATC_CLASS);
const ATC_SPEED_ITEMS = asArray(ATC_SPEED);
const LEGACY_ATC_STATIONS = [{"id":"L01","name":"Kasangati - Kyaliwajala","sheet":"Kasangati - Kyaliwajala","observations":222,"avg_adt":804.2,"max_adt":2742,"class_totals":{"Buses / medium - large unit Trucks":3045,"Medium buses / Light single unit truck":12001,"Minibuses/matatus / Pickups / Vans / 4WD":53215,"Mortocycles / bicycles":47955,"Saloon cars":62004,"Trailers":305,"Grand Total":178525}},{"id":"L02","name":"Kalagi - Bukoloto-Kayunga","sheet":"Kalagi - Bukoloto-Kayunga","observations":276,"avg_adt":818.3,"max_adt":3629,"class_totals":{"Buses / medium - large unit Trucks":7234,"Medium buses / Light single unit truck":18280,"Minibuses/matatus / Pickups / Vans / 4WD":49405,"Mortocycles / bicycles":77701,"Saloon cars":71700,"Trailers":1539,"Grand Total":225859}},{"id":"L03","name":"Njeru - Bukoloto","sheet":"Njeru - Bukoloto","observations":216,"avg_adt":674.6,"max_adt":2608,"class_totals":{"Buses / medium - large unit Trucks":4553.5,"Medium buses / Light single unit truck":10485.5,"Minibuses/matatus / Pickups / Vans / 4WD":21899,"Mortocycles / bicycles":61849.5,"Saloon cars":45647.5,"Trailers":1283.5,"Grand Total":145718.5}},{"id":"L04","name":"Kampala - Mukono","sheet":"Kampala - Mukono","observations":240,"avg_adt":5228.1,"max_adt":18100,"class_totals":{"Buses / medium - large unit Trucks":51702,"Medium buses / Light single unit truck":111868,"Minibuses/matatus / Pickups / Vans / 4WD":229040.67,"Mortocycles / bicycles":480531.67,"Saloon cars":336610.33,"Trailers":44980.67,"Grand Total":1254733.33}},{"id":"L05","name":"Buwama - Nyendo","sheet":"Buwama - Nyendo","observations":234,"avg_adt":969.9,"max_adt":2564,"class_totals":{"Buses / medium - large unit Trucks":28326,"Medium buses / Light single unit truck":28222.67,"Minibuses/matatus / Pickups / Vans / 4WD":40090.17,"Mortocycles / bicycles":41910.67,"Saloon cars":63544.33,"Trailers":24864.17,"Grand Total":226958}},{"id":"L06","name":"Lyantonde - Ntusi","sheet":"Lyantonde - Ntusi","observations":294,"avg_adt":109.8,"max_adt":573,"class_totals":{"Buses / medium - large unit Trucks":604.5,"Medium buses / Light single unit truck":1851.5,"Minibuses/matatus / Pickups / Vans / 4WD":4739.5,"Mortocycles / bicycles":11628.5,"Saloon cars":13295.5,"Trailers":153,"Grand Total":32272.5}},{"id":"L07","name":"Ishaka - Katunguru","sheet":"Ishaka - Katunguru","observations":204,"avg_adt":262.7,"max_adt":903,"class_totals":{"Buses / medium - large unit Trucks":3296,"Medium buses / Light single unit truck":4827,"Minibuses/matatus / Pickups / Vans / 4WD":10805,"Mortocycles / bicycles":15823,"Saloon cars":15943,"Trailers":2892,"Grand Total":53586}},{"id":"L08","name":"Kyenjojo - Fortportal","sheet":"Kyenjojo - Fortportal","observations":204,"avg_adt":389.5,"max_adt":1223,"class_totals":{"Buses / medium - large unit Trucks":5663,"Medium buses / Light single unit truck":7979,"Minibuses/matatus / Pickups / Vans / 4WD":20000,"Mortocycles / bicycles":17713,"Saloon cars":25206,"Trailers":2904,"Grand Total":79465}},{"id":"L09","name":"Ibanda - Kamwenge","sheet":"Ibanda - Kamwenge","observations":318,"avg_adt":403.9,"max_adt":2010,"class_totals":{"Buses / medium - large unit Trucks":2271,"Medium buses / Light single unit truck":6382,"Minibuses/matatus / Pickups / Vans / 4WD":14900,"Mortocycles / bicycles":66126,"Saloon cars":37897,"Trailers":860,"Grand Total":128436}},{"id":"L10","name":"Tirinyi - Budaka - Kamonkoli","sheet":"Tirinyi - Budaka - Kamonkoli","observations":198,"avg_adt":782.4,"max_adt":3790,"class_totals":{"Buses / medium - large unit Trucks":7771,"Medium buses / Light single unit truck":14604,"Minibuses/matatus / Pickups / Vans / 4WD":22641,"Mortocycles / bicycles":62067,"Saloon cars":45357,"Trailers":2469,"Grand Total":154909}},{"id":"L11","name":"Pallisa - Kanyago Bridge","sheet":"Pallisa - Kanyago Bridge","observations":132,"avg_adt":315.9,"max_adt":1873,"class_totals":{"Buses / medium - large unit Trucks":302,"Medium buses / Light single unit truck":1288,"Minibuses/matatus / Pickups / Vans / 4WD":1895,"Mortocycles / bicycles":22133,"Saloon cars":15998,"Trailers":82,"Grand Total":41698}},{"id":"L12","name":"Kumi - Brooks corner","sheet":"Kumi - Brooks corner","observations":265,"avg_adt":377.1,"max_adt":1969,"class_totals":{"Buses / medium - large unit Trucks":927,"Medium buses / Light single unit truck":3485,"Minibuses/matatus / Pickups / Vans / 4WD":6288,"Mortocycles / bicycles":57074,"Saloon cars":31899,"Trailers":250,"Grand Total":99923}},{"id":"L13","name":"Lira - Corner Kilak","sheet":"Lira - Corner Kilak","observations":275,"avg_adt":266.5,"max_adt":1672,"class_totals":{"Buses / medium - large unit Trucks":1099,"Medium buses / Light single unit truck":3707,"Minibuses/matatus / Pickups / Vans / 4WD":3593,"Mortocycles / bicycles":46319,"Saloon cars":18369,"Trailers":187,"Grand Total":73274}},{"id":"L14","name":"Lamogi - Amuru Junction","sheet":"Lamogi - Amuru Junction","observations":288,"avg_adt":176.6,"max_adt":1186,"class_totals":{"Buses / medium - large unit Trucks":1204,"Medium buses / Light single unit truck":2532,"Minibuses/matatus / Pickups / Vans / 4WD":3948,"Mortocycles / bicycles":29705,"Saloon cars":13041,"Trailers":442,"Grand Total":50872}},{"id":"L15","name":"Nebbi - Olevu","sheet":"Nebbi - Olevu","observations":264,"avg_adt":179,"max_adt":1624,"class_totals":{"Buses / medium - large unit Trucks":5988.5,"Medium buses / Light single unit truck":3967.5,"Minibuses/matatus / Pickups / Vans / 4WD":7807.5,"Mortocycles / bicycles":14097.5,"Saloon cars":10730.5,"Trailers":4670,"Grand Total":47261.5}}];
const fmt = (n, d=0) => n != null && n !== '' ? Number(n).toLocaleString(undefined, {maximumFractionDigits: d}) : 'N/A';
const fmtB = n => n != null ? (n / 1e9).toFixed(2) : 'N/A';

const LEGACY_ATC_ACCURACY_DATA = {"Kasangati - Kyaliwajala":{"name":"Kasangati - Kyaliwajala","link_id":"C194_Link02","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":37,"avg_adt_2016_2022":4825.0,"median_adt_2016_2022":4866.0,"max_adt_2016_2022":6786.0,"latest_year":2020,"latest_year_avg_adt":5898.67,"monthly_avg_adt":{"1":4081.0,"2":5238.33,"3":3952.33,"4":1989.0,"5":4337.0,"6":5294.5,"7":4827.0,"8":5081.25,"9":5210.0,"10":5326.0,"11":5572.2,"12":4658.0},"seasonal_factors":[0.8458,1.0857,0.8191,0.4122,0.8989,1.0973,1.0004,1.0531,1.0798,1.1038,1.1549,0.9654],"class_totals":{"Buses / medium - large unit Trucks":3045.0,"Medium buses / Light single unit truck":12001.0,"Minibuses/matatus / Pickups / Vans / 4WD":53215.0,"Mortocycles / bicycles":47955.0,"Saloon cars":62004.0,"Trailers":305.0},"class_shares":{"Buses / medium - large unit Trucks":0.017056,"Medium buses / Light single unit truck":0.067223,"Minibuses/matatus / Pickups / Vans / 4WD":0.298082,"Mortocycles / bicycles":0.268618,"Saloon cars":0.347313,"Trailers":0.001708}},"Kalagi - Bukoloto-Kayunga":{"name":"Kalagi - Bukoloto-Kayunga","link_id":"B101_Link02","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":46,"avg_adt_2016_2022":4909.98,"median_adt_2016_2022":4849.5,"max_adt_2016_2022":8546.0,"latest_year":2022,"latest_year_avg_adt":3161.5,"monthly_avg_adt":{"1":5009.5,"2":4834.75,"3":5157.0,"4":4022.5,"5":5683.0,"6":6860.0,"7":4860.0,"8":5135.5,"9":4903.8,"10":5091.33,"11":4371.75,"12":4372.4},"seasonal_factors":[1.0203,0.9847,1.0503,0.8193,1.1574,1.3972,0.9898,1.0459,0.9987,1.0369,0.8904,0.8905],"class_totals":{"Buses / medium - large unit Trucks":7234.0,"Medium buses / Light single unit truck":18280.0,"Minibuses/matatus / Pickups / Vans / 4WD":49405.0,"Mortocycles / bicycles":77701.0,"Saloon cars":71700.0,"Trailers":1539.0},"class_shares":{"Buses / medium - large unit Trucks":0.032029,"Medium buses / Light single unit truck":0.080935,"Minibuses/matatus / Pickups / Vans / 4WD":0.218743,"Mortocycles / bicycles":0.344024,"Saloon cars":0.317455,"Trailers":0.006814}},"Njeru - Bukoloto":{"name":"Njeru - Bukoloto","link_id":"B102_Link01","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":36,"avg_adt_2016_2022":4047.74,"median_adt_2016_2022":3950.0,"max_adt_2016_2022":5405.0,"latest_year":2021,"latest_year_avg_adt":4213.29,"monthly_avg_adt":{"1":3936.33,"2":4542.33,"3":2741.17,"4":4137.5,"5":4317.33,"6":3863.5,"7":4253.0,"8":4253.0,"9":3789.5,"10":4011.6,"11":4070.0,"12":4408.2},"seasonal_factors":[0.9725,1.1222,0.6772,1.0222,1.0666,0.9545,1.0507,1.0507,0.9362,0.9911,1.0055,1.0891],"class_totals":{"Buses / medium - large unit Trucks":4553.5,"Medium buses / Light single unit truck":10485.5,"Minibuses/matatus / Pickups / Vans / 4WD":21899.0,"Mortocycles / bicycles":61849.5,"Saloon cars":45647.5,"Trailers":1283.5},"class_shares":{"Buses / medium - large unit Trucks":0.031249,"Medium buses / Light single unit truck":0.071957,"Minibuses/matatus / Pickups / Vans / 4WD":0.150283,"Mortocycles / bicycles":0.424445,"Saloon cars":0.313258,"Trailers":0.008808}},"Kampala - Mukono":{"name":"Kampala - Mukono","link_id":"A001_Link01","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":40,"avg_adt_2016_2022":31368.33,"median_adt_2016_2022":30868.5,"max_adt_2016_2022":41484.0,"latest_year":2020,"latest_year_avg_adt":35029.0,"monthly_avg_adt":{"1":31948.67,"2":32329.5,"3":31499.11,"4":30843.0,"5":29879.33,"6":34389.33,"7":30721.33,"8":30089.25,"9":30568.33,"10":30496.0,"11":31066.5,"12":32439.25},"seasonal_factors":[1.0185,1.0306,1.0042,0.9833,0.9525,1.0963,0.9794,0.9592,0.9745,0.9722,0.9904,1.0341],"class_totals":{"Buses / medium - large unit Trucks":51702.0,"Medium buses / Light single unit truck":111868.0,"Minibuses/matatus / Pickups / Vans / 4WD":229040.67,"Mortocycles / bicycles":480531.67,"Saloon cars":336610.33,"Trailers":44980.67},"class_shares":{"Buses / medium - large unit Trucks":0.041206,"Medium buses / Light single unit truck":0.089157,"Minibuses/matatus / Pickups / Vans / 4WD":0.182541,"Mortocycles / bicycles":0.382975,"Saloon cars":0.268272,"Trailers":0.035849}},"Buwama - Nyendo":{"name":"Buwama - Nyendo","link_id":"A002_Link04","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":39,"avg_adt_2016_2022":5819.44,"median_adt_2016_2022":6651.0,"max_adt_2016_2022":8336.0,"latest_year":2020,"latest_year_avg_adt":2236.5,"monthly_avg_adt":{"2":5533.67,"3":7026.0,"4":7165.67,"5":7150.33,"6":6996.67,"7":7691.5,"8":5509.0,"9":5085.6,"10":5203.2,"11":4953.8,"12":5152.2},"seasonal_factors":[1.0,0.9509,1.2073,1.2313,1.2287,1.2023,1.3217,0.9467,0.8739,0.8941,0.8513,0.8853],"class_totals":{"Buses / medium - large unit Trucks":28326.0,"Medium buses / Light single unit truck":28222.67,"Minibuses/matatus / Pickups / Vans / 4WD":40090.17,"Mortocycles / bicycles":41910.67,"Saloon cars":63544.33,"Trailers":24864.17},"class_shares":{"Buses / medium - large unit Trucks":0.124807,"Medium buses / Light single unit truck":0.124352,"Minibuses/matatus / Pickups / Vans / 4WD":0.176641,"Mortocycles / bicycles":0.184663,"Saloon cars":0.279983,"Trailers":0.109554}},"Lyantonde - Ntusi":{"name":"Lyantonde - Ntusi","link_id":"C227_Link01","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":50,"avg_adt_2016_2022":645.45,"median_adt_2016_2022":620.0,"max_adt_2016_2022":1342.0,"latest_year":2021,"latest_year_avg_adt":685.0,"monthly_avg_adt":{"1":596.75,"2":655.75,"3":604.67,"4":531.33,"5":633.33,"6":659.25,"7":600.33,"8":649.67,"9":771.8,"10":622.33,"11":643.08,"12":686.0},"seasonal_factors":[0.9245,1.016,0.9368,0.8232,0.9812,1.0214,0.9301,1.0065,1.1958,0.9642,0.9963,1.0628],"class_totals":{"Buses / medium - large unit Trucks":604.5,"Medium buses / Light single unit truck":1851.5,"Minibuses/matatus / Pickups / Vans / 4WD":4739.5,"Mortocycles / bicycles":11628.5,"Saloon cars":13295.5,"Trailers":153.0},"class_shares":{"Buses / medium - large unit Trucks":0.018731,"Medium buses / Light single unit truck":0.057371,"Minibuses/matatus / Pickups / Vans / 4WD":0.146859,"Mortocycles / bicycles":0.360322,"Saloon cars":0.411976,"Trailers":0.004741}},"Ishaka - Katunguru":{"name":"Ishaka - Katunguru","link_id":"B152_Link03","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":34,"avg_adt_2016_2022":1576.06,"median_adt_2016_2022":1565.0,"max_adt_2016_2022":1833.0,"latest_year":2022,"latest_year_avg_adt":1627.0,"monthly_avg_adt":{"1":1568.0,"2":1546.0,"3":1528.0,"4":1523.67,"5":1454.5,"6":1600.0,"7":1612.0,"8":1657.67,"9":1532.33,"10":1599.5,"11":1640.0,"12":1622.67},"seasonal_factors":[0.9949,0.9809,0.9695,0.9668,0.9229,1.0152,1.0228,1.0518,0.9723,1.0149,1.0406,1.0296],"class_totals":{"Buses / medium - large unit Trucks":3296.0,"Medium buses / Light single unit truck":4827.0,"Minibuses/matatus / Pickups / Vans / 4WD":10805.0,"Mortocycles / bicycles":15823.0,"Saloon cars":15943.0,"Trailers":2892.0},"class_shares":{"Buses / medium - large unit Trucks":0.061509,"Medium buses / Light single unit truck":0.090079,"Minibuses/matatus / Pickups / Vans / 4WD":0.201638,"Mortocycles / bicycles":0.295282,"Saloon cars":0.297522,"Trailers":0.053969}},"Kyenjojo - Fortportal":{"name":"Kyenjojo - Fortportal","link_id":"A005_Link10","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":34,"avg_adt_2016_2022":2337.21,"median_adt_2016_2022":2308.5,"max_adt_2016_2022":3049.0,"latest_year":2022,"latest_year_avg_adt":1758.0,"monthly_avg_adt":{"1":2316.0,"2":2621.33,"3":2079.5,"4":2191.33,"5":2508.0,"6":2203.5,"7":2246.0,"8":1986.0,"9":2060.67,"10":2443.67,"11":2450.67,"12":2703.0},"seasonal_factors":[0.9909,1.1216,0.8897,0.9376,1.0731,0.9428,0.961,0.8497,0.8817,1.0456,1.0485,1.1565],"class_totals":{"Buses / medium - large unit Trucks":5663.0,"Medium buses / Light single unit truck":7979.0,"Minibuses/matatus / Pickups / Vans / 4WD":20000.0,"Mortocycles / bicycles":17713.0,"Saloon cars":25206.0,"Trailers":2904.0},"class_shares":{"Buses / medium - large unit Trucks":0.071264,"Medium buses / Light single unit truck":0.100409,"Minibuses/matatus / Pickups / Vans / 4WD":0.251683,"Mortocycles / bicycles":0.222903,"Saloon cars":0.317196,"Trailers":0.036544}},"Ibanda - Kamwenge":{"name":"Ibanda - Kamwenge","link_id":"B150_Link03","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":53,"avg_adt_2016_2022":2423.32,"median_adt_2016_2022":2438.0,"max_adt_2016_2022":3044.0,"latest_year":2022,"latest_year_avg_adt":656.0,"monthly_avg_adt":{"1":2414.2,"2":2632.5,"3":2400.67,"4":2081.0,"5":2570.5,"6":2481.5,"7":2024.0,"8":2171.75,"9":2395.4,"10":2386.6,"11":2382.67,"12":2846.5},"seasonal_factors":[0.9962,1.0863,0.9907,0.8587,1.0607,1.024,0.8352,0.8962,0.9885,0.9848,0.9832,1.1746],"class_totals":{"Buses / medium - large unit Trucks":2271.0,"Medium buses / Light single unit truck":6382.0,"Minibuses/matatus / Pickups / Vans / 4WD":14900.0,"Mortocycles / bicycles":66126.0,"Saloon cars":37897.0,"Trailers":860.0},"class_shares":{"Buses / medium - large unit Trucks":0.017682,"Medium buses / Light single unit truck":0.04969,"Minibuses/matatus / Pickups / Vans / 4WD":0.116011,"Mortocycles / bicycles":0.514856,"Saloon cars":0.295065,"Trailers":0.006696}},"Tirinyi - Budaka - Kamonkoli":{"name":"Tirinyi - Budaka - Kamonkoli","link_id":"A012_Link03","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":33,"avg_adt_2016_2022":4694.21,"median_adt_2016_2022":4593.0,"max_adt_2016_2022":6780.0,"latest_year":2021,"latest_year_avg_adt":4956.62,"monthly_avg_adt":{"1":4470.67,"2":4932.0,"3":4409.0,"4":4651.67,"5":5147.0,"6":4103.0,"7":4676.0,"8":4435.67,"9":3396.5,"10":4406.0,"11":4916.67,"12":5435.2},"seasonal_factors":[0.9524,1.0507,0.9392,0.9909,1.0965,0.8741,0.9961,0.9449,0.7236,0.9386,1.0474,1.1579],"class_totals":{"Buses / medium - large unit Trucks":7771.0,"Medium buses / Light single unit truck":14604.0,"Minibuses/matatus / Pickups / Vans / 4WD":22641.0,"Mortocycles / bicycles":62067.0,"Saloon cars":45357.0,"Trailers":2469.0},"class_shares":{"Buses / medium - large unit Trucks":0.050165,"Medium buses / Light single unit truck":0.094275,"Minibuses/matatus / Pickups / Vans / 4WD":0.146157,"Mortocycles / bicycles":0.400667,"Saloon cars":0.292798,"Trailers":0.015938}},"Pallisa - Kanyago Bridge":{"name":"Pallisa - Kanyago Bridge","link_id":"B305_Link02","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":22,"avg_adt_2016_2022":1895.36,"median_adt_2016_2022":1803.0,"max_adt_2016_2022":3100.0,"latest_year":2018,"latest_year_avg_adt":1706.5,"monthly_avg_adt":{"1":1988.0,"2":1641.5,"3":1538.5,"4":2343.5,"5":2097.0,"6":1885.5,"7":1716.0,"8":2156.0,"9":1905.5,"10":1931.0,"11":1707.5,"12":1762.5},"seasonal_factors":[1.0489,0.8661,0.8117,1.2364,1.1064,0.9948,0.9054,1.1375,1.0053,1.0188,0.9009,0.9299],"class_totals":{"Buses / medium - large unit Trucks":302.0,"Medium buses / Light single unit truck":1288.0,"Minibuses/matatus / Pickups / Vans / 4WD":1895.0,"Mortocycles / bicycles":22133.0,"Saloon cars":15998.0,"Trailers":82.0},"class_shares":{"Buses / medium - large unit Trucks":0.007243,"Medium buses / Light single unit truck":0.030889,"Minibuses/matatus / Pickups / Vans / 4WD":0.045446,"Mortocycles / bicycles":0.530793,"Saloon cars":0.383663,"Trailers":0.001967}},"Kumi - Brooks corner":{"name":"Kumi - Brooks corner","link_id":"C920_Link01","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":45,"avg_adt_2016_2022":2220.51,"median_adt_2016_2022":2383.0,"max_adt_2016_2022":3125.0,"latest_year":2022,"latest_year_avg_adt":450.0,"monthly_avg_adt":{"1":1845.25,"2":2429.75,"3":2415.33,"4":2295.5,"5":2439.5,"6":2371.5,"7":2472.67,"8":2158.0,"9":2529.67,"10":2170.8,"11":2396.8,"12":1668.0},"seasonal_factors":[0.831,1.0942,1.0877,1.0338,1.0986,1.068,1.1136,0.9718,1.1392,0.9776,1.0794,0.7512],"class_totals":{"Buses / medium - large unit Trucks":927.0,"Medium buses / Light single unit truck":3485.0,"Minibuses/matatus / Pickups / Vans / 4WD":6288.0,"Mortocycles / bicycles":57074.0,"Saloon cars":31899.0,"Trailers":250.0},"class_shares":{"Buses / medium - large unit Trucks":0.009277,"Medium buses / Light single unit truck":0.034877,"Minibuses/matatus / Pickups / Vans / 4WD":0.062928,"Mortocycles / bicycles":0.57118,"Saloon cars":0.319236,"Trailers":0.002502}},"Lira - Corner Kilak":{"name":"Lira - Corner Kilak","link_id":"B252_Link01","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":46,"avg_adt_2016_2022":1592.91,"median_adt_2016_2022":1644.5,"max_adt_2016_2022":2636.0,"latest_year":2022,"latest_year_avg_adt":1590.67,"monthly_avg_adt":{"1":1669.0,"2":1769.33,"3":1630.4,"4":1575.5,"5":1694.33,"6":835.5,"7":1684.0,"8":1621.0,"9":1859.75,"10":1428.67,"11":1513.2,"12":1519.33},"seasonal_factors":[1.0478,1.1108,1.0235,0.9891,1.0637,0.5245,1.0572,1.0176,1.1675,0.8969,0.95,0.9538],"class_totals":{"Buses / medium - large unit Trucks":1099.0,"Medium buses / Light single unit truck":3707.0,"Minibuses/matatus / Pickups / Vans / 4WD":3593.0,"Mortocycles / bicycles":46319.0,"Saloon cars":18369.0,"Trailers":187.0},"class_shares":{"Buses / medium - large unit Trucks":0.014998,"Medium buses / Light single unit truck":0.050591,"Minibuses/matatus / Pickups / Vans / 4WD":0.049035,"Mortocycles / bicycles":0.632134,"Saloon cars":0.250689,"Trailers":0.002552}},"Lamogi - Amuru Junction":{"name":"Lamogi - Amuru Junction","link_id":"C686_Link01","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":48,"avg_adt_2016_2022":1059.83,"median_adt_2016_2022":1030.5,"max_adt_2016_2022":2300.0,"latest_year":2022,"latest_year_avg_adt":964.0,"monthly_avg_adt":{"1":1123.75,"2":1150.33,"3":1074.33,"4":1063.33,"5":1192.8,"6":906.75,"7":920.0,"8":1231.75,"9":959.67,"10":1004.6,"11":1124.0,"12":947.6},"seasonal_factors":[1.0603,1.0854,1.0137,1.0033,1.1255,0.8556,0.8681,1.1622,0.9055,0.9479,1.0605,0.8941],"class_totals":{"Buses / medium - large unit Trucks":1204.0,"Medium buses / Light single unit truck":2532.0,"Minibuses/matatus / Pickups / Vans / 4WD":3948.0,"Mortocycles / bicycles":29705.0,"Saloon cars":13041.0,"Trailers":442.0},"class_shares":{"Buses / medium - large unit Trucks":0.023667,"Medium buses / Light single unit truck":0.049772,"Minibuses/matatus / Pickups / Vans / 4WD":0.077607,"Mortocycles / bicycles":0.583916,"Saloon cars":0.256349,"Trailers":0.008688}},"Nebbi - Olevu":{"name":"Nebbi - Olevu","link_id":"A008_Link04","source":"ATC DATA SUMMARY 2016-2022.xlsx","observation_count":44,"avg_adt_2016_2022":1074.12,"median_adt_2016_2022":1011.0,"max_adt_2016_2022":2206.0,"latest_year":2021,"latest_year_avg_adt":1258.88,"monthly_avg_adt":{"1":1293.33,"2":1380.5,"3":738.88,"4":1119.0,"5":1148.0,"6":1060.0,"7":949.0,"8":1063.25,"9":1008.0,"10":1038.5,"11":1007.67,"12":1171.6},"seasonal_factors":[1.2041,1.2852,0.6879,1.0418,1.0688,0.9868,0.8835,0.9899,0.9384,0.9668,0.9381,1.0907],"class_totals":{"Buses / medium - large unit Trucks":5988.5,"Medium buses / Light single unit truck":3967.5,"Minibuses/matatus / Pickups / Vans / 4WD":7807.5,"Mortocycles / bicycles":14097.5,"Saloon cars":10730.5,"Trailers":4670.0},"class_shares":{"Buses / medium - large unit Trucks":0.12671,"Medium buses / Light single unit truck":0.083948,"Minibuses/matatus / Pickups / Vans / 4WD":0.165198,"Mortocycles / bicycles":0.298287,"Saloon cars":0.227045,"Trailers":0.098812}}};

const COLORS = {
  green: 'rgba(34, 197, 94, 0.85)',
  lime: 'rgba(132, 204, 22, 0.85)',
  orange: 'rgba(249, 115, 22, 0.85)',
  red: 'rgba(239, 68, 68, 0.85)',
  violet: 'rgba(139, 92, 246, 0.85)',
  blue: 'rgba(84, 116, 255, 0.85)',
  cyan: 'rgba(0, 229, 255, 0.85)',
  purple: 'rgba(181, 95, 230, 0.85)',
  emerald: 'rgba(16, 185, 129, 0.85)',
  amber: 'rgba(245, 158, 11, 0.85)',
  rose: 'rgba(244, 63, 94, 0.85)',
  indigo: 'rgba(129, 140, 248, 0.85)',
  teal: 'rgba(20, 184, 166, 0.85)',
  pink: 'rgba(236, 72, 153, 0.85)',
  sky: 'rgba(56, 189, 248, 0.85)',
  lime: 'rgba(132, 204, 22, 0.85)',
  orange: 'rgba(251, 146, 60, 0.85)'
};
COLORS.slate = 'rgba(100, 116, 139, 0.85)';
COLORS.fuchsia = 'rgba(217, 70, 239, 0.85)';
const PALETTE = Object.values(COLORS);

function compactAxisValue(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  const abs = Math.abs(n);
  if (abs >= 1e9) return (n / 1e9).toFixed(abs >= 10e9 ? 0 : 1) + 'B';
  if (abs >= 1e6) return (n / 1e6).toFixed(abs >= 10e6 ? 0 : 1) + 'M';
  if (abs >= 1e3) return (n / 1e3).toFixed(abs >= 10e3 ? 0 : 1) + 'K';
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

const chartDefaults = () => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#9aa5c4', font: { family: 'Plus Jakarta Sans', size: 11, weight: 500 }, padding: 14 } },
    tooltip: {
      backgroundColor: 'rgba(6, 9, 19, 0.96)',
      titleFont: { family: 'Plus Jakarta Sans', size: 12, weight: 700 },
      bodyFont: { family: 'Plus Jakarta Sans', size: 11, weight: 500 },
      borderColor: 'rgba(84, 116, 255, 0.25)',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 12
    }
  },
  scales: {
    x: { ticks: { color: '#5a668a', font: { family: 'Plus Jakarta Sans', size: 10, weight: 600 } }, grid: { color: 'rgba(84, 116, 255, 0.05)' } },
    y: { ticks: { color: '#5a668a', font: { family: 'Plus Jakarta Sans', size: 10, weight: 600 }, callback: compactAxisValue }, grid: { color: 'rgba(84, 116, 255, 0.05)' } }
  }
});

// ===========================================
//  CONTROLLER & STATE
// ===========================================
let selectedMapBridge = null;
let chartInstances = {};
let sortDir = {};
let bridgeInventorySort = null;
let bridgeTrafficSort = null;
let bridgeInventoryPage = 1;
const BRIDGE_INVENTORY_PAGE_SIZE = 40;
let bridgeTrafficPage = 1;
const BRIDGE_TRAFFIC_PAGE_SIZE = 50;
let bridgeTrafficRowsCache = { key: null, rows: null };
let bridgeTrafficCompanionBuildToken = 0;
let bridgeTrafficEvidenceCache = new Map();
let bridgeManualStationCache = new Map();
let bridgeAtcStationCache = new Map();
let roadLinkAadtEvidenceCache = new Map();
let atcClassProfileCache = new Map();
let bridgeSearchIndex = [];
let bridgeSearchIndexById = new Map();
let bridgeSearchIndexReady = false;
let searchViewRefreshTimer = null;
const SQLBOT_TRAFFIC_BACKEND_URL = 'bridge_traffic_sqlbot_payload.json';
let sqlBotTrafficBackendSnapshot = null;
let sqlBotTrafficBackendStatus = 'embedded';
let sqlBotTrafficBackendPromise = null;
let bridgeIntegrityPassScheduled = false;
let bridgeIntegrityPassComplete = false;

function normalizedLinkKey(value) {
  return String(value ?? '')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '')
    .replace(/-/g, '_');
}

function sqlBotLinkKey(value) {
  return normalizedLinkKey(value);
}

function recordStartupError(step, error) {
  const detail = error?.stack || error?.message || String(error);
  window.__BRIDGE_APP_ERRORS__ = window.__BRIDGE_APP_ERRORS__ || [];
  window.__BRIDGE_APP_ERRORS__.push({ step, detail });
  console.error(`[bridge traffic] ${step}`, error);
}

function safeStartupStep(step, fn) {
  try {
    return fn();
  } catch (error) {
    recordStartupError(step, error);
    return null;
  }
}

function bindBridgeRowSelectionHandlers() {
  document.getElementById('bridgeTableBody')?.addEventListener('click', e => {
    const tr = e.target.closest('tr');
    if (tr && tr.dataset.bridgeId) {
      selectBridgeRow(tr.dataset.bridgeId);
    }
  });
  document.getElementById('bridgeTrafficBody')?.addEventListener('click', e => {
    const tr = e.target.closest('tr');
    if (tr && tr.dataset.bridgeId) {
      selectBridgeRow(tr.dataset.bridgeId);
    }
  });
  document.getElementById('culvertTableBody')?.addEventListener('click', e => {
    const tr = e.target.closest('tr');
    if (tr && tr.dataset.culvertId) {
      selectBridgeRow(tr.dataset.culvertId);
    }
  });
  document.getElementById('bridgeVehicleClassBody')?.addEventListener('click', e => {
    const tr = e.target.closest('tr');
    if (tr && tr.dataset.bridgeId) {
      selectBridgeRow(tr.dataset.bridgeId);
    }
  });
  ['bridgeSummaryBody', 'bridgeLoadingBody', 'bridgeOdBody', 'bridgeSeasonalFactorsBody'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', e => {
      const tr = e.target.closest('tr');
      if (tr && tr.dataset.bridgeId) {
        selectBridgeRow(tr.dataset.bridgeId);
      }
    });
  });

  window.selectBridgeRow = function(bridgeId) {
    selectBridgeById(bridgeId, { switchToMap: true, scrollToMap: true, centerMap: true });
  };
}

function startBridgeTrafficApp() {
  if (window.__bridgeTrafficAppStarted) return;
  window.__bridgeTrafficAppStarted = true;

  safeStartupStep('normalizeBridgeRiverNames', normalizeBridgeRiverNames);
  safeStartupStep('initSpatialMap', initSpatialMap);

  requestAnimationFrame(() => {
    safeStartupStep('buildKPIs', buildKPIs);
    safeStartupStep('populateFilters', populateFilters);
    safeStartupStep('initTabs', initTabs);
    safeStartupStep('initODMatrixControls', () => {
      if (typeof initODMatrixControls === 'function') initODMatrixControls();
    });
    safeStartupStep('bindBridgeRowSelectionHandlers', bindBridgeRowSelectionHandlers);
    safeStartupStep('bindExport', bindExport);
    safeStartupStep('deferSearchIndex', () => setTimeout(buildBridgeSearchIndex, 150));
    safeStartupStep('ensureMapAnimation', () => setTimeout(ensureMapAnimation, 4000));
    safeStartupStep('deferTrafficBackend', () => setTimeout(() => {
      safeStartupStep('loadSqlBotTrafficBackend', loadSqlBotTrafficBackend);
      safeStartupStep('scheduleDeferredBridgeIntegrityPass', scheduleDeferredBridgeIntegrityPass);
    }, 1200));
  });
}

// Trigger moved to bottom of file

// KPIs
function quickBridgeAssignedAdt(bridge) {
  const linkKey = normalizedLinkKey(bridge?.location_corrected_link_id || bridge?.link_no);
  const originalKey = normalizedLinkKey(bridge?.link_no);
  const linkEvidence = ROAD_LINK_AADT_DATA[linkKey] || ROAD_LINK_AADT_DATA[originalKey] || null;
  const candidates = [
    bridge?.aadt_rebuilt_2026,
    bridge?.aadt_2025,
    linkEvidence?.aadt_2026,
    linkEvidence?.latest_aadt,
    linkEvidence?.adt_incl_motorcycles
  ];
  for (const value of candidates) {
    const n = Number(value);
    if (Number.isFinite(n) && n > 0) return n;
  }
  return 0;
}

function quickBridgeGrowthRate(bridge) {
  const linkKey = normalizedLinkKey(bridge?.location_corrected_link_id || bridge?.link_no);
  const originalKey = normalizedLinkKey(bridge?.link_no);
  const linkEvidence = ROAD_LINK_AADT_DATA[linkKey] || ROAD_LINK_AADT_DATA[originalKey] || null;
  return normalizedAnnualGrowthRate(linkEvidence?.growth_rate) ??
    normalizedAnnualGrowthRate(bridge?.annual_weighted_growth_rate) ??
    (ROAD_CLASS_ANNUAL_GROWTH_RATES[canonicalRoadClass(bridge?.road_class)] ?? 0.035);
}

function buildKPIs(options = {}) {
  const row = document.getElementById('kpiRow');
  if (!row) return;
  const activeBridges = getFilteredBridges();
  document.querySelectorAll(".dynamic-bridge-count").forEach(el => el.textContent = activeBridges.length);
  const totalLength = activeBridges.reduce((s, b) => s + (Number(b.bridge_len) || 0), 0);
  const bridgeLinks = new Set(activeBridges.map(b => b.link_no).filter(Boolean));
  const trafficRows = Array.isArray(options.trafficRows) ? options.trafficRows : null;
  let avgAssignedAdt = 0;
  let avgGrowth = 0;
  let highTraffic = 0;
  if (trafficRows && trafficRows.length) {
    const totalAdt = trafficRows.reduce((s, r) => s + Number(r.assigned_adt_incl_motorcycles || 0), 0);
    avgAssignedAdt = totalAdt / trafficRows.length;
    avgGrowth = weightedAnnualTrafficGrowthRate(trafficRows) || 0;
    highTraffic = trafficRows.filter(r => Number(r.assigned_adt_incl_motorcycles || 0) >= 10000).length;
  } else {
    let totalAdt = 0;
    let totalWeightedGrowth = 0;
    let totalGrowthWeight = 0;
    activeBridges.forEach(bridge => {
      const adt = quickBridgeAssignedAdt(bridge);
      const growth = quickBridgeGrowthRate(bridge);
      totalAdt += adt;
      if (adt >= 10000) highTraffic++;
      const weight = Math.max(1, adt || 1);
      totalWeightedGrowth += growth * weight;
      totalGrowthWeight += weight;
    });
    avgAssignedAdt = activeBridges.length ? totalAdt / activeBridges.length : 0;
    avgGrowth = totalGrowthWeight ? totalWeightedGrowth / totalGrowthWeight : 0;
  }

  const kpis = [
    { value: activeBridges.length, label: 'Bridge Crossings' },
    { value: fmt(bridgeLinks.size), label: 'Host Road Links' },
    { value: fmt(totalLength, 0) + ' m', label: 'Total Bridge Length' },
    { value: fmt(avgAssignedAdt, 0), label: 'Avg Assigned ADT' },
    { value: highTraffic, label: 'High Traffic Bridges' },
    { value: formatGrowthPercent(avgGrowth), label: 'Annual Weighted Growth' }
  ];
  row.innerHTML = kpis.map(k => `<div class="kpi-card"><div class="kpi-value">${k.value}</div><div class="kpi-label">${k.label}</div></div>`).join('');
}

function refreshSearchDrivenViews() {
  if (searchViewRefreshTimer) {
    clearTimeout(searchViewRefreshTimer);
    searchViewRefreshTimer = null;
  }
  bridgeInventoryPage = 1;
  bridgeTrafficPage = 1;
  clearBridgeTrafficRowsCache();
  buildKPIs();
  const activePanelId = document.querySelector('.panel.active')?.id || 'panel-spatial-map';
  if (activePanelId === 'panel-bridge-table') {
    buildBridgeTable();
  } else if (activePanelId === 'panel-bridge-traffic') {
    buildBridgeTrafficTab();
  }
  refreshMapSelectionForFilters();
  if (activePanelId === 'panel-spatial-map') {
    drawMap();
  }
}

function buildBridgeInventoryTab() {
  buildBridgeTable();
}

function buildBridgeTrafficTab() {
  if (document.querySelector('.panel.active')?.id !== 'panel-bridge-traffic') return [];
  const rows = buildBridgeTrafficAnalytics() || [];
  scheduleBridgeTrafficCompanionTables(rows);
  buildKPIs();
}

function clearBridgeTrafficRowsCache() {
  bridgeTrafficRowsCache = { key: null, rows: null };
  bridgeTrafficCompanionBuildToken++;
}

function clearBridgeTrafficEvidenceCache() {
  clearBridgeTrafficRowsCache();
  bridgeTrafficEvidenceCache.clear();
  roadLinkAadtEvidenceCache.clear();
  atcClassProfileCache.clear();
  (BRIDGES || []).forEach(bridge => {
    if (bridge && Object.prototype.hasOwnProperty.call(bridge, '_annual_weighted_growth_model_cache')) {
      delete bridge._annual_weighted_growth_model_cache;
    }
  });
}

function clearBridgeSpatialEvidenceCache() {
  clearBridgeTrafficEvidenceCache();
  bridgeManualStationCache.clear();
  bridgeAtcStationCache.clear();
}

function bridgeSpatialCacheKey(b, limit = '') {
  const lat = Number(bridgeMapLat(b) ?? b?.y_new ?? 0);
  const lng = Number(bridgeMapLon(b) ?? b?.x_new ?? 0);
  return [
    b?._id || b?.bridge_no || b?.bridge_nam || '',
    normalizedLinkKey(b?.location_corrected_link_id || b?.link_no),
    normalizedLinkKey(b?.road_no || String(b?.link_no || '').split('_')[0]),
    Number.isFinite(lat) ? lat.toFixed(5) : '',
    Number.isFinite(lng) ? lng.toFixed(5) : '',
    limit
  ].join('|');
}

function bridgeEvidenceCacheKey(b) {
  return [
    bridgeSpatialCacheKey(b, 'traffic-evidence'),
    normalizeTrafficRegion(b?.region),
    timelineMonth,
    sqlBotTrafficBackendStatus
  ].join('|');
}

function bridgeTrafficRowsCacheKey() {
  const controls = bridgeTrafficControlFilters();
  return JSON.stringify({
    selected: selectedMapBridge?._id || null,
    region: document.getElementById('regionFilter')?.value || 'all',
    roadClass: document.getElementById('roadClassFilter')?.value || 'all',
    search: normalizeSearchText(document.getElementById('bridgeSearch')?.value || ''),
    sort: bridgeSortSelection(),
    controls,
    timelineYear,
    timelineMonth,
    sql: sqlBotTrafficBackendStatus
  });
}

function runWhenIdle(fn, delay = 80) {
  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(fn, { timeout: Math.max(250, delay + 250) });
  } else {
    setTimeout(fn, delay);
  }
}

function setBridgeTrafficCompanionLoadingState() {
  [
    ['bridgeVehicleClassBody', 21],
    ['bridgeLoadingBody', 15],
    ['bridgeOdBody', 18],
    ['bridgeSeasonalFactorsBody', 22]
  ].forEach(([id, colspan]) => {
    const tbody = document.getElementById(id);
    if (tbody) {
      tbody.innerHTML = `<tr><td colspan="${colspan}">Preparing bridge traffic records...</td></tr>`;
    }
  });
}

function scheduleBridgeTrafficCompanionTables(rows) {
  const tableRows = Array.isArray(rows) ? rows : [];
  const token = ++bridgeTrafficCompanionBuildToken;
  const isTrafficPanelActive = () => document.querySelector('.panel.active')?.id === 'panel-bridge-traffic';
  let fullRows = null;
  const resolveCompanionRows = () => {
    if (fullRows) return fullRows;
    const expectedCount = getBridgeTrafficSourceBridges().length;
    fullRows = tableRows.length === expectedCount ? tableRows : buildBridgeTrafficRows();
    return fullRows;
  };
  if (!isTrafficPanelActive()) return;
  setBridgeTrafficCompanionLoadingState();
  runWhenIdle(() => {
    if (token !== bridgeTrafficCompanionBuildToken || !isTrafficPanelActive()) return;
    buildBridgeVehicleClassFocus(resolveCompanionRows());
  }, 80);
  runWhenIdle(() => {
    if (token !== bridgeTrafficCompanionBuildToken || !isTrafficPanelActive()) return;
    buildBridgeLoadingTableOnly(resolveCompanionRows());
  }, 140);
  runWhenIdle(() => {
    if (token !== bridgeTrafficCompanionBuildToken || !isTrafficPanelActive()) return;
    buildBridgeOdFlowTable(resolveCompanionRows());
  }, 200);
  runWhenIdle(() => {
    if (token !== bridgeTrafficCompanionBuildToken || !isTrafficPanelActive()) return;
    buildBridgeSeasonalFactorsTable(resolveCompanionRows());
  }, 260);
}

function scheduleSearchDrivenViews(delay = 360) {
  selectedMapBridge = null;
  hoveredBridge = null;
  mapInfluenceCache = { key: null, links: [] };
  if (searchViewRefreshTimer) clearTimeout(searchViewRefreshTimer);
  searchViewRefreshTimer = setTimeout(() => {
    requestAnimationFrame(refreshSearchDrivenViews);
  }, delay);
}

function normalizeSearchText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[_/\\|,;:()[\]{}]+/g, ' ')
    .replace(/[-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function htmlEscape(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

const escapeHTML = htmlEscape;

const TABLE_CASE_SMALL_WORDS = new Set(['a', 'an', 'and', 'as', 'at', 'by', 'for', 'from', 'in', 'into', 'of', 'on', 'or', 'the', 'to', 'with']);
const TABLE_CASE_ACRONYMS = {
  'adt': 'ADT',
  'aadt': 'AADT',
  'atc': 'ATC',
  'bms': 'BMS',
  'csv': 'CSV',
  'gps': 'GPS',
  'id': 'ID',
  'kml': 'KML',
  'lhs': 'LHS',
  'mc': 'MC',
  'mowt': 'MoWT',
  'ndp': 'NDP',
  'pdf': 'PDF',
  'png': 'PNG',
  'ptfe': 'PTFE',
  'rc': 'RC',
  'rhs': 'RHS',
  'sqlbot': 'SQLBot',
  'unra': 'UNRA',
  '4wd': '4WD'
};

function preserveTableCase(key, text) {
  const k = String(key || '').toLowerCase();
  const t = String(text || '').trim();
  if (!t || t === 'N/A') return true;
  if (/(^|_)(id|no|number|lon|lng|lat|coordinate|chainage|km|year|aadt|adt|count|volume|speed|rate|factor|score|pct|percent)($|_)/.test(k)) return true;
  if (['road_class', 'class_code'].includes(k)) return true;
  if (/^(?:A|B|C|M)$/i.test(t)) return true;
  if (/^[A-Z]{1,4}\d{1,5}(?:[_-]?LINK\d+)?$/i.test(t)) return true;
  if (/^[A-Z]{1,4}\d{1,5}$/i.test(t)) return true;
  if (/^-?\d+(?:\.\d+)?(?:\s*(?:km|m|x|%))?$/i.test(t)) return true;
  return false;
}

function properCaseCategory(value) {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (!text || text === 'N/A') return text || 'N/A';
  return text.toLocaleLowerCase('en-UG').replace(/\b[a-z0-9][a-z0-9']*\b/g, (word, idx, full) => {
    const acronym = TABLE_CASE_ACRONYMS[word];
    if (acronym) return acronym;
    const isBoundaryWord = idx === 0 || idx + word.length === full.length;
    if (!isBoundaryWord && TABLE_CASE_SMALL_WORDS.has(word)) return word;
    return word.charAt(0).toLocaleUpperCase('en-UG') + word.slice(1);
  });
}

function tableDisplayText(value, key = '') {
  if (value === undefined || value === null || value === '') return 'N/A';
  if (typeof value === 'number') return Number.isInteger(value) ? String(value) : fmt(value, 3);
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const text = String(value);
  return preserveTableCase(key, text) ? text.trim() : properCaseCategory(text);
}

function tableCellHtml(value, key = '') {
  return htmlEscape(tableDisplayText(value, key));
}

function tableMultilineHtml(value, key = '') {
  return String(value ?? '')
    .split(/\r?\n/)
    .map(line => tableCellHtml(line, key))
    .join('<br>');
}

function searchTokens(value) {
  return normalizeSearchText(value).split(' ').filter(Boolean);
}

function textMatchesSearch(text, q, tokens = searchTokens(q)) {
  const normalized = normalizeSearchText(text);
  if (!q) return true;
  if (normalized.includes(q)) return true;
  return tokens.length > 0 && tokens.every(token => normalized.includes(token));
}

function bridgeSearchFieldGroups(b) {
  return [
    { label: 'Bridge name', values: [b.bridge_nam, b.official_name, b.known_as] },
    { label: 'Bridge number', values: [b.bridge_no, b.original_bridge_no, b.new_bridge_no] }
  ].map(group => ({
    ...group,
    text: normalizeSearchText(group.values.filter(v => v !== undefined && v !== null && String(v).trim() !== '').join(' '))
  }));
}

function buildBridgeSearchEntry(b) {
  const groups = bridgeSearchFieldGroups(b);
  const all = groups.map(group => group.text).filter(Boolean).join(' ');
  return {
    bridge: b,
    groups,
    all,
    name: groups.find(group => group.label === 'Bridge name')?.text || '',
    no: groups.find(group => group.label === 'Bridge number')?.text || '',
    aadt: Number(b.aadt_2025 || b.aadt_rebuilt_2026 || 0)
  };
}

function buildBridgeSearchIndex() {
  bridgeSearchIndex = BRIDGES.map(buildBridgeSearchEntry);
  bridgeSearchIndexById = new Map(bridgeSearchIndex.map(entry => [String(entry.bridge._id), entry]));
  bridgeSearchIndexReady = true;
}

function bridgeSearchEntry(b) {
  if (!bridgeSearchIndexReady) buildBridgeSearchIndex();
  return bridgeSearchIndexById.get(String(b?._id)) || buildBridgeSearchEntry(b || {});
}

function bridgeMatchesSearchQuery(b, q) {
  if (!q) return true;
  const entry = bridgeSearchEntry(b);
  return textMatchesSearch(entry.all, q);
}

function bridgeSearchFields(b) {
  return bridgeSearchFieldGroups(b).flatMap(group => group.values).filter(v => v !== undefined && v !== null && String(v).trim() !== '');
}

function bridgeSearchText(b) {
  return bridgeSearchEntry(b).all;
}

function bridgeSearchReason(b, q) {
  const entry = bridgeSearchEntry(b);
  const tokens = searchTokens(q);
  for (const group of entry.groups) {
    if (textMatchesSearch(group.text, q, tokens)) return group.label;
  }
  return 'Bridge record';
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightSuggestionText(value, q) {
  const text = String(value || '');
  const terms = searchTokens(q).sort((a, b) => b.length - a.length).slice(0, 6);
  if (!terms.length) return htmlEscape(text);
  const re = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'ig');
  let last = 0;
  let out = '';
  text.replace(re, (match, _term, offset) => {
    out += htmlEscape(text.slice(last, offset));
    out += `<mark>${htmlEscape(match)}</mark>`;
    last = offset + match.length;
    return match;
  });
  out += htmlEscape(text.slice(last));
  return out || htmlEscape(text);
}

function bridgeSearchSuggestions(query, limit = 14) {
  const q = normalizeSearchText(query);
  if (!q) return [];
  if (!bridgeSearchIndexReady) buildBridgeSearchIndex();
  const tokens = searchTokens(q);
  return bridgeSearchIndex.map(entry => {
    if (!textMatchesSearch(entry.all, q, tokens)) return null;
    let score = 20;
    if (entry.no === q) score += 180;
    if (entry.name === q) score += 150;
    if (entry.no.startsWith(q)) score += 100;
    if (entry.name.startsWith(q)) score += 88;
    if (entry.name.includes(q)) score += 42;
    if (entry.no.includes(q)) score += 38;
    tokens.forEach(token => {
      if (entry.no.split(' ').some(part => part.startsWith(token))) score += 22;
      if (entry.name.split(' ').some(part => part.startsWith(token))) score += 18;
    });
    score += Math.min(20, Math.log10((entry.aadt || 1) + 1) * 3);
    return { bridge: entry.bridge, score, reason: bridgeSearchReason(entry.bridge, q) };
  }).filter(Boolean)
    .sort((a, b) => b.score - a.score || String(a.bridge.bridge_nam || '').localeCompare(String(b.bridge.bridge_nam || '')))
    .slice(0, limit);
}

function renderBridgeSearchSuggestions(matches, query, activeIndex = -1) {
  const box = document.getElementById('searchSuggestions');
  if (!box) return;
  const input = document.getElementById('bridgeSearch');
  if (!normalizeSearchText(query)) {
    box.style.display = 'none';
    box.innerHTML = '';
    if (input) input.setAttribute('aria-expanded', 'false');
    return;
  }
  if (!matches.length) {
    box.innerHTML = '<div class="search-suggestion-item"><div class="search-suggestion-title" style="color:var(--text-muted)">No matching bridge records</div><div class="search-suggestion-sub">Try a bridge name or bridge number.</div></div>';
    box.style.display = 'block';
    if (input) input.setAttribute('aria-expanded', 'true');
    return;
  }
  box.innerHTML = matches.map((m, idx) => {
    const b = m.bridge;
    const title = b.bridge_nam || b.bridge_no || b._id || 'Bridge';
    const sub = [
      b.bridge_no || 'No number',
      b.link_name || b.location_corrected_road_name || 'No road name',
      b.region || 'No region'
    ].join(' | ');
    return `
      <div class="search-suggestion-item${idx === activeIndex ? ' active' : ''}" data-bridge-id="${htmlEscape(b._id)}" role="option" aria-selected="${idx === activeIndex ? 'true' : 'false'}">
        <div class="search-suggestion-title">${highlightSuggestionText(title, query)}<span class="search-suggestion-type">${htmlEscape(m.reason)}</span></div>
        <div class="search-suggestion-sub">${htmlEscape(sub)}</div>
      </div>`;
  }).join('');
  box.style.display = 'block';
  if (input) input.setAttribute('aria-expanded', 'true');
}

function selectBridgeFromSuggestion(bridgeId) {
  const bridge = BRIDGES.find(b => String(b._id) === String(bridgeId));
  if (!bridge) return;
  const searchInput = document.getElementById('bridgeSearch');
  const suggestionsBox = document.getElementById('searchSuggestions');
  if (searchInput) searchInput.value = bridge.bridge_nam || bridge.bridge_no || '';
  if (suggestionsBox) {
    suggestionsBox.style.display = 'none';
    searchInput?.setAttribute('aria-expanded', 'false');
  }
  selectBridgeById(bridge._id, { switchToMap: false, centerMap: true });
}

function initBridgeSearchSuggest() {
  const searchInput = document.getElementById('bridgeSearch');
  const suggestionsBox = document.getElementById('searchSuggestions');
  if (!searchInput || !suggestionsBox || searchInput.dataset.suggestReady === '1') return;
  searchInput.dataset.suggestReady = '1';
  let activeIndex = -1;
  let matches = [];
  let debounce = null;

  const refresh = () => {
    const q = searchInput.value;
    matches = bridgeSearchSuggestions(q);
    activeIndex = matches.length ? 0 : -1;
    renderBridgeSearchSuggestions(matches, q, activeIndex);
  };

  searchInput.addEventListener('input', () => {
    clearTimeout(debounce);
    const delay = normalizeSearchText(searchInput.value).length <= 2 ? 45 : 75;
    debounce = setTimeout(refresh, delay);
  });

  searchInput.addEventListener('focus', () => {
    if (normalizeSearchText(searchInput.value)) refresh();
  });

  searchInput.addEventListener('keydown', e => {
    if (suggestionsBox.style.display === 'none' && ['ArrowDown', 'ArrowUp'].includes(e.key)) refresh();
    if (!matches.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % matches.length;
      renderBridgeSearchSuggestions(matches, searchInput.value, activeIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + matches.length) % matches.length;
      renderBridgeSearchSuggestions(matches, searchInput.value, activeIndex);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      selectBridgeFromSuggestion(matches[activeIndex].bridge._id);
    } else if (e.key === 'Escape') {
      suggestionsBox.style.display = 'none';
      searchInput.setAttribute('aria-expanded', 'false');
    }
  });

  suggestionsBox.addEventListener('mousedown', e => {
    const item = e.target.closest('.search-suggestion-item[data-bridge-id]');
    if (!item) return;
    e.preventDefault();
    selectBridgeFromSuggestion(item.dataset.bridgeId);
  });

  document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.style.display = 'none';
      searchInput.setAttribute('aria-expanded', 'false');
    }
  });
}

// FILTERS
function populateFilters() {
  const regions = [...new Set(BRIDGES.map(b => b.region))].filter(Boolean).sort();
  const sel = document.getElementById('regionFilter');
  if (sel && sel.options.length <= 1) {
    regions.forEach(r => { const o = document.createElement('option'); o.value = r; o.textContent = r; sel.appendChild(o); });
  }

  const atcSel = document.getElementById('atcSiteSelect');
  if (atcSel) {
    ATC_SITE_ITEMS.forEach(s => { const o = document.createElement('option'); o.value = normalizeAtcId(s.id); o.textContent = `${normalizeAtcId(s.id)} - ${s.road}`; atcSel.appendChild(o); });
  }
  populateBridgeTrafficControls();

  // Hook change listeners
  sel?.addEventListener('change', () => {
    refreshSearchDrivenViews();
  });
  document.getElementById('roadClassFilter')?.addEventListener('change', () => {
    refreshSearchDrivenViews();
  });
  document.getElementById('bridgeSortSelect')?.addEventListener('change', () => {
    bridgeInventoryPage = 1;
    bridgeTrafficPage = 1;
    document.querySelectorAll('th.sorted-asc, th.sorted-desc').forEach(th => {
      th.classList.remove('sorted-asc', 'sorted-desc');
    });
    refreshSearchDrivenViews();
  });
  document.getElementById('bridgeSearch')?.addEventListener('input', () => scheduleSearchDrivenViews());
  initBridgeSearchSuggest();

  document.getElementById('btnClearFiltersSort')?.addEventListener('click', () => {
    clearFiltersAndSort();
  });
  atcSel?.addEventListener('change', () => updateATCClassChart());
}

function clearFiltersAndSort() {
  bridgeInventoryPage = 1;
  bridgeTrafficPage = 1;
  clearBridgeTrafficRowsCache();
  sortDir = {};
  bridgeInventorySort = null;
  bridgeTrafficSort = null;
  selectedMapBridge = null;
  hoveredBridge = null;
  mapInfluenceCache = { key: null, links: [] };

  const search = document.getElementById('bridgeSearch');
  if (search) search.value = '';

  const suggestions = document.getElementById('searchSuggestions');
  if (suggestions) {
    suggestions.innerHTML = '';
    suggestions.style.display = 'none';
    search?.setAttribute('aria-expanded', 'false');
  }

  [
    'regionFilter',
    'roadClassFilter',
    'bridgeTrafficNameSelect',
    'bridgeTrafficNoSelect',
    'culvertNoSelect',
    'bridgeTrafficStationSelect',
    'bridgeTrafficLinkSelect',
    'bridgeSortSelect',
    'atcSiteSelect'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = 'all';
  });

  document.querySelectorAll('th.sorted-asc, th.sorted-desc').forEach(th => {
    th.classList.remove('sorted-asc', 'sorted-desc');
  });

  document.querySelectorAll('.bridge-inventory-scroll, .analytics-grid-scroll, #panel-bridge-traffic .table-wrap').forEach(el => {
    el.scrollTop = 0;
    el.scrollLeft = 0;
  });

  buildKPIs();
  const activePanelId = document.querySelector('.panel.active')?.id || 'panel-spatial-map';
  if (activePanelId === 'panel-bridge-table') {
    buildBridgeInventoryTab();
  } else if (activePanelId === 'panel-bridge-traffic') {
    buildBridgeTrafficTab();
  }
  updateBridgeAnalyticsPane(null);
  updateATCClassChart();
  applyActiveBridgeSelectionToTables();
  drawMap();
}

function fillSelect(selectId, items, allLabel) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.innerHTML = `<option value="all">${allLabel}</option>`;
  items.filter(Boolean).forEach(value => {
    const o = document.createElement('option');
    o.value = value;
    o.textContent = value;
    sel.appendChild(o);
  });
}

function populateBridgeTrafficControls() {
  fillSelect('bridgeTrafficNameSelect', [...new Set(BRIDGES.map(b => b.bridge_nam).filter(Boolean))].sort(), 'All bridge names');
  fillSelect('bridgeTrafficNoSelect', [...new Set(BRIDGES.map(b => b.bridge_no).filter(Boolean))].sort(), 'All bridge numbers');
  const culvertNos = [...new Set((typeof MAJOR_CULVERTS !== 'undefined' ? MAJOR_CULVERTS : []).map(c => c.culvert_no).filter(Boolean))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  fillSelect('culvertNoSelect', culvertNos, 'All major culvert numbers');
  fillSelect('bridgeTrafficStationSelect', [...new Set(BRIDGES.map(b => b.station).filter(Boolean))].sort(), 'All stations');
  fillSelect('bridgeTrafficLinkSelect', [...new Set(BRIDGES.map(b => b.link_name).filter(Boolean))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })), 'All road link names');
  ['bridgeTrafficNameSelect', 'bridgeTrafficNoSelect', 'culvertNoSelect', 'bridgeTrafficStationSelect', 'bridgeTrafficLinkSelect'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', () => {
      clearBridgeTrafficRowsCache();
      syncSelectedBridgeFromTrafficControls(id);
      if (selectedMapBridge) {
        setBridgeTrafficControlsForBridge(selectedMapBridge);
        focusBridgeInventoryPageForBridge(selectedMapBridge);
        focusBridgeTrafficPageForBridge(selectedMapBridge);
      } else {
        bridgeTrafficPage = 1;
      }
      buildKPIs();
      const activePanelId = document.querySelector('.panel.active')?.id || 'panel-spatial-map';
      if (activePanelId === 'panel-bridge-table') {
        buildBridgeInventoryTab();
      } else if (activePanelId === 'panel-bridge-traffic') {
        buildBridgeTrafficTab();
      }
      updateBridgeAnalyticsPane(selectedMapBridge);
      applyActiveBridgeSelectionToTables();
      drawMap();
    });
  });
}

function syncSelectedBridgeFromTrafficControls(changedId) {
  const controls = bridgeTrafficControlFilters();
  if (changedId === 'culvertNoSelect') {
    if (controls.culvertNo !== 'all' && typeof MAJOR_CULVERTS !== 'undefined') {
      const foundCulvert = MAJOR_CULVERTS.find(c => c.culvert_no === controls.culvertNo);
      if (foundCulvert) {
        selectedMapBridge = foundCulvert;
        const nameSel = document.getElementById('bridgeTrafficNameSelect');
        const noSel = document.getElementById('bridgeTrafficNoSelect');
        if (nameSel) nameSel.value = 'all';
        if (noSel) noSel.value = 'all';
        return;
      }
    }
  }
  if (controls.culvertNo !== 'all' && changedId !== 'culvertNoSelect') {
    const culvertSel = document.getElementById('culvertNoSelect');
    if (culvertSel) culvertSel.value = 'all';
  }
  const hasBridgePick = controls.bridgeName !== 'all' || controls.bridgeNo !== 'all';
  if (!hasBridgePick) {
    selectedMapBridge = null;
    return;
  }
  const found = BRIDGES.find(b =>
    (controls.bridgeName === 'all' || b.bridge_nam === controls.bridgeName) &&
    (controls.bridgeNo === 'all' || b.bridge_no === controls.bridgeNo) &&
    (controls.station === 'all' || b.station === controls.station) &&
    (controls.linkName === 'all' || b.link_name === controls.linkName)
  );
  selectedMapBridge = found || null;
}

function setBridgeTrafficControlsForBridge(bridge) {
  const nameSel = document.getElementById('bridgeTrafficNameSelect');
  const noSel = document.getElementById('bridgeTrafficNoSelect');
  const culvertSel = document.getElementById('culvertNoSelect');
  const stationSel = document.getElementById('bridgeTrafficStationSelect');
  const linkSel = document.getElementById('bridgeTrafficLinkSelect');
  if (bridge?.culvert_no) {
    if (nameSel) nameSel.value = 'all';
    if (noSel) noSel.value = 'all';
    if (culvertSel) culvertSel.value = bridge.culvert_no;
  } else {
    if (nameSel) nameSel.value = bridge?.bridge_nam || 'all';
    if (noSel) noSel.value = bridge?.bridge_no || 'all';
    if (culvertSel) culvertSel.value = 'all';
  }
  if (stationSel) stationSel.value = bridge?.station || 'all';
  if (linkSel) linkSel.value = bridge?.link_name || 'all';
}

function bridgeTrafficControlFilters() {
  const val = id => document.getElementById(id)?.value || 'all';
  return {
    bridgeName: val('bridgeTrafficNameSelect'),
    bridgeNo: val('bridgeTrafficNoSelect'),
    culvertNo: val('culvertNoSelect'),
    station: val('bridgeTrafficStationSelect'),
    linkName: val('bridgeTrafficLinkSelect')
  };
}

function bridgePassesTrafficControls(b, controls = bridgeTrafficControlFilters()) {
  if (controls.bridgeName !== 'all' && b.bridge_nam !== controls.bridgeName) return false;
  if (controls.bridgeNo !== 'all' && b.bridge_no !== controls.bridgeNo) return false;
  if (controls.culvertNo !== 'all' && b.culvert_no !== controls.culvertNo) return false;
  if (controls.station !== 'all' && b.station !== controls.station) return false;
  if (controls.linkName !== 'all' && b.link_name !== controls.linkName) return false;
  return true;
}

function getBridgeTrafficSourceBridges(source = getFilteredBridges()) {
  const controls = bridgeTrafficControlFilters();
  return sortBridgeRecords((source || []).filter(b => bridgePassesTrafficControls(b, controls)));
}

function bridgeSortSelection() {
  return document.getElementById('bridgeSortSelect')?.value || 'all';
}

function bridgeSortText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function compareBridgeText(a, b, key) {
  return bridgeSortText(a?.[key]).localeCompare(bridgeSortText(b?.[key]), undefined, {
    numeric: true,
    sensitivity: 'base'
  });
}

function sortBridgeRecords(rows) {
  const sortValue = bridgeSortSelection();
  if (!Array.isArray(rows) || sortValue === 'all') return rows;
  if (sortValue !== 'link_name_asc' && sortValue !== 'link_name_desc') return rows;
  const direction = sortValue === 'link_name_desc' ? -1 : 1;
  return [...rows].sort((a, b) => {
    const result =
      compareBridgeText(a, b, 'link_name') ||
      compareBridgeText(a, b, 'road_no') ||
      compareBridgeText(a, b, 'bridge_nam') ||
      compareBridgeText(a, b, 'bridge_no');
    return result * direction;
  });
}

function getFilteredBridges() {
  if (selectedMapBridge) {
    const bridge = resolveBridgeById(selectedMapBridge._id) || selectedMapBridge;
    return bridge ? [bridge] : [];
  }
  return sortBridgeRecords(BRIDGES.filter(bridgeMatchesDashboardFilters));
}

function bridgeMatchesDashboardFilters(b) {
  const region = document.getElementById('regionFilter')?.value || 'all';
  const rc = document.getElementById('roadClassFilter')?.value || 'all';
  const q = normalizeSearchText(document.getElementById('bridgeSearch')?.value || '');
  const controls = bridgeTrafficControlFilters();

  if (region !== 'all' && b.region !== region) return false;
  if (rc !== 'all' && canonicalRoadClass(b.road_class) !== rc) return false;
  if (controls.bridgeName !== 'all' && b.bridge_nam !== controls.bridgeName) return false;
  if (controls.bridgeNo !== 'all' && b.bridge_no !== controls.bridgeNo) return false;
  if (controls.region !== 'all' && b.region !== controls.region) return false;
  if (controls.station !== 'all' && b.station !== controls.station) return false;
  if (controls.linkName !== 'all' && b.link_name !== controls.linkName) return false;
  if (q && !bridgeMatchesSearchQuery(b, q)) return false;
  return true;
}

function refreshMapSelectionForFilters() {
  const filtered = getFilteredBridges();
  if (!selectedMapBridge || !filtered.some(b => b._id === selectedMapBridge._id)) {
    selectedMapBridge = null;
  }
  updateBridgeAnalyticsPane(selectedMapBridge);
  applyActiveBridgeSelectionToTables();
}

function resolveBridgeById(bridgeId) {
  if (typeof MAJOR_CULVERTS !== 'undefined') {
    const culv = MAJOR_CULVERTS.find(b => String(b._id) === String(bridgeId)) || MAJOR_CULVERTS.find(b => String(b.culvert_no) === String(bridgeId));
    if (culv) return culv;
  }
  return BRIDGES.find(b => String(b._id) === String(bridgeId))
    || BRIDGES.find(b => String(b.bridge_no) === String(bridgeId))
    || BRIDGES.find(b => String(b.bridge_nam) === String(bridgeId))
    || null;
}

function bridgeRowActiveClass(bridgeId) {
  return selectedMapBridge && String(selectedMapBridge._id) === String(bridgeId) ? 'active-bridge-row' : '';
}

function applyActiveBridgeSelectionToTables() {
  const activeId = selectedMapBridge ? String(selectedMapBridge._id) : '';
  document.querySelectorAll('tr[data-bridge-id]').forEach(row => {
    row.classList.toggle('active-bridge-row', Boolean(activeId) && String(row.dataset.bridgeId) === activeId);
  });
}

function focusBridgeInventoryPageForBridge(bridge) {
  if (!bridge) return;
  const rows = getFilteredBridges();
  const idx = rows.findIndex(b => b._id === bridge._id);
  if (idx >= 0) {
    bridgeInventoryPage = Math.floor(idx / BRIDGE_INVENTORY_PAGE_SIZE) + 1;
  }
}

function focusBridgeTrafficPageForBridge(bridge) {
  if (!bridge) return;
  const rows = getBridgeTrafficSourceBridges();
  const idx = rows.findIndex(b => b._id === bridge._id);
  bridgeTrafficPage = idx >= 0 ? Math.floor(idx / BRIDGE_TRAFFIC_PAGE_SIZE) + 1 : 1;
}

function centerMapOnBridge(bridge) {
  const canvas = document.getElementById('mapCanvas');
  const lon = bridgeMapLon(bridge);
  const lat = bridgeMapLat(bridge);
  if (!canvas || lon == null || lat == null || !canvas.width || !canvas.height) return;
  const pt = getProjection(lon, lat, canvas.width, canvas.height);
  mapScale = Math.max(mapScale, 2.6);
  mapOffsetX = canvas.width / 2 - pt.x * mapScale;
  mapOffsetY = canvas.height / 2 - pt.y * mapScale;
}

function selectBridgeById(bridgeId, options = {}) {
  const bridge = resolveBridgeById(bridgeId);
  if (!bridge) return;

  selectedMapBridge = bridge;
  hoveredBridge = bridge;
  mapInfluenceCache = { key: null, links: [] };
  setBridgeTrafficControlsForBridge(bridge);
  focusBridgeInventoryPageForBridge(bridge);
  focusBridgeTrafficPageForBridge(bridge);

  buildKPIs();
  const activePanelId = document.querySelector('.panel.active')?.id || 'panel-spatial-map';
  if (activePanelId === 'panel-bridge-table') {
    buildBridgeInventoryTab();
  } else if (activePanelId === 'panel-bridge-traffic') {
    buildBridgeTrafficTab();
  } else if (activePanelId === 'panel-od-matrix') {
    buildODMatrixTab();
  }
  updateBridgeAnalyticsPane(bridge);
  applyActiveBridgeSelectionToTables();

  const moveMap = () => {
    if (options.centerMap) centerMapOnBridge(bridge);
    drawMap();
  };

  if (options.switchToMap) {
    document.querySelector('.tab[data-tab="spatial-map"]')?.click();
    const panel = document.getElementById('panel-spatial-map');
    if (options.scrollToMap && panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(moveMap, 140);
  } else {
    moveMap();
  }
}

// TABS CONTROLLER
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) return;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panelId = 'panel-' + tab.dataset.tab;
      const panel = document.getElementById(panelId);
      if (!panel) return;
      panel.classList.add('active');

      // Draw map if switching to spatial-map tab
      if (tab.dataset.tab === 'spatial-map') {
        setTimeout(() => {
          const canvas = document.getElementById('mapCanvas');
          if (canvas) {
            const rect = canvas.parentNode.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            drawMap();
            ensureMapAnimation();
          }
        }, 120);
      }
      if (tab.dataset.tab === 'photos') {
        if (typeof initPhotosTab === 'function') setTimeout(initPhotosTab, 60);
      }
      if (tab.dataset.tab === 'statistics') {
        if (typeof initStatisticsTab === 'function') setTimeout(initStatisticsTab, 60);
      }
      if (tab.dataset.tab === 'bridge-traffic') {
        setTimeout(buildBridgeTrafficTab, 60);
      }
      if (tab.dataset.tab === 'od-matrix') {
        setTimeout(buildODMatrixTab, 60);
      }
      if (tab.dataset.tab === 'major-culverts') {
        setTimeout(buildMajorCulvertsTab, 60);
      }
      if (tab.dataset.tab === 'bridge-table') {
        setTimeout(buildBridgeInventoryTab, 60);
      }
    });
  });
}

// SORTABLE TABLE HELPER
function sortTable(tableId, th) {
  const key = th.dataset.sort;
  if (!key) return;
  sortDir[key] = !sortDir[key];

  const tbody = document.querySelector(`#${tableId} tbody`);
  const rows = [...tbody.querySelectorAll('tr')];
  const idx = [...th.parentNode.children].indexOf(th);

  rows.sort((a, b) => {
    let va = a.children[idx].textContent.replace(/[%$,m-]/g, '').trim();
    let vb = b.children[idx].textContent.replace(/[%$,m-]/g, '').trim();

    // Treat empty or dash values as very small/large depending on sort direction
    const na = va === '' ? -Infinity : parseFloat(va);
    const nb = vb === '' ? -Infinity : parseFloat(vb);

    const isNumA = !isNaN(na);
    const isNumB = !isNaN(nb);

    if (isNumA && isNumB) {
      return sortDir[key] ? na - nb : nb - na;
    } else if (isNumA) {
      return sortDir[key] ? 1 : -1;
    } else if (isNumB) {
      return sortDir[key] ? -1 : 1;
    }
    return sortDir[key] ? va.localeCompare(vb) : vb.localeCompare(va);
  });

  // Re-attach sorted rows
  rows.forEach(r => tbody.appendChild(r));

  // Toggle UI arrows
  [...th.parentNode.children].forEach(c => c.classList.remove('sorted-asc', 'sorted-desc'));
  th.classList.add(sortDir[key] ? 'sorted-asc' : 'sorted-desc');
}

function bindTableSortHandlers(tableId) {
  document.querySelectorAll(`#${tableId} thead th[data-sort]`).forEach(th => {
    th.onclick = () => sortTable(tableId, th);
  });
}

function sortableNumber(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  const text = String(value ?? '').trim();
  if (!text || text === 'N/A') return null;
  if (!/^[+-]?[\d,]+(?:\.\d+)?(?:\s*(?:%|x|km|m))?$/i.test(text)) return null;
  const n = Number(text.replace(/,/g, '').replace(/(?:%|x|km|m)$/i, '').trim());
  return Number.isFinite(n) ? n : null;
}

function compareSortableValues(a, b, ascending = true) {
  const na = sortableNumber(a);
  const nb = sortableNumber(b);
  let result = 0;
  if (na != null && nb != null) {
    result = na - nb;
  } else if (na != null) {
    result = -1;
  } else if (nb != null) {
    result = 1;
  } else {
    result = String(a ?? '').localeCompare(String(b ?? ''), undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }
  return ascending ? result : -result;
}

function updatePagedSortIndicators(tableId, sortState) {
  document.querySelectorAll(`#${tableId} thead th`).forEach(th => {
    th.classList.remove('sorted-asc', 'sorted-desc');
    if (sortState && th.dataset.sort === sortState.key) {
      th.classList.add(sortState.ascending ? 'sorted-asc' : 'sorted-desc');
    }
  });
}

function bindPagedTableSortHandlers(tableId, scope) {
  const state = scope === 'inventory' ? bridgeInventorySort : bridgeTrafficSort;
  document.querySelectorAll(`#${tableId} thead th[data-sort]`).forEach(th => {
    th.onclick = () => {
      const key = th.dataset.sort;
      if (!key) return;
      const current = scope === 'inventory' ? bridgeInventorySort : bridgeTrafficSort;
      const next = { key, ascending: current?.key === key ? !current.ascending : true };
      if (scope === 'inventory') {
        bridgeInventorySort = next;
        bridgeInventoryPage = 1;
        buildBridgeTable();
      } else {
        bridgeTrafficSort = next;
        bridgeTrafficPage = 1;
        const rows = buildBridgeTrafficAnalytics();
        scheduleBridgeTrafficCompanionTables(rows);
      }
    };
  });
  updatePagedSortIndicators(tableId, state);
}

function sortRowsByState(rows, sortState, valueForRow) {
  if (!Array.isArray(rows) || !sortState?.key) return rows;
  return [...rows].sort((a, b) => compareSortableValues(
    valueForRow(a, sortState.key),
    valueForRow(b, sortState.key),
    sortState.ascending
  ));
}

// TAB 1: OVERVIEW CHARTS
// TAB 2: BRIDGE INVENTORY TABLE
const BMS_CODE_LOOKUPS = {
  type_crossing: {
    '01': 'Road over river', '02': 'Road over rail', '03': 'Road over road', '04': 'Road over canal',
    '05': 'Rail over road', '06': 'Canal/Pipe over road', '07': 'Pedestrian over road', '08': 'Road over pedestrian',
    '09': 'Agricultural underpass', '10': 'Road over water pipes', '11': 'Road over conveyer belt',
    '12': 'Conveyer belt over road', '13': 'Other', '?': 'Unknown'
  },
  owner: { '01': 'Ministry of Works and Transport - Department of National Roads', '06': 'Municipal / Local Government', '07': 'Private', '08': 'Other', '?': 'Unknown' },
  type_bridge: {
    '01': 'Simply supported span', '02': 'Continuous span', '03': 'Double cantilevered span', '04': 'Single cantilevered span',
    '05': 'Single suspended simply supported span', '06': 'Suspended span', '07': 'Portal frame', '08': 'Cantilevered construction',
    '09': 'Strut frame', '10': 'Supported cantilevered construction', '11': 'Suspension bridge', '12': 'Three hinged arch rib',
    '13': 'Three hinged arch slab', '14': 'Two hinged arch rib', '15': 'Two hinged arch slab', '16': 'Bowstring',
    '17': 'Fixed arch slab', '18': 'Fixed arch - deck at crown', '19': 'Fixed arch - deck at intermediate level',
    '20': 'Lattice girder truss', '21': 'Vierendeel truss', '22': 'Girdled frame', '23': 'Cable stayed bridge',
    '24': 'Box culvert (in-situ concrete)', '25': 'Box culvert (precast concrete)', '26': 'Concrete pipe culvert',
    '27': 'Corrugated metal pipe culvert', '28': 'Corrugated metal arch (Armco) culvert', '29': 'Concrete arch culvert',
    '98': 'Other', '?': 'Unknown'
  },
  type_deck: {
    '01': 'Solid slab', '02': 'Voided slab', '03': 'Inverted T-beams with infill', '04': 'Inverted T-beams (pseudo box)',
    '05': 'Box beams', '06': 'Beam and slab deck', '07': 'Monolithic beam and slab deck', '08': 'Rib deck',
    '09': 'Voided spine beam', '10': 'Solid spine beam', '11': 'Twin beam and slab', '12': 'Box girder / box beam',
    '13': 'Multiple box girder box beam', '14': 'Twin box and slab', '15': 'Multiple box and slab',
    '16': 'Steel I-beams encased in concrete', '17': 'Steel I-beam ribs (jacked arch)', '18': 'Composite steel and concrete',
    '19': 'Non-composite steel and concrete', '20': 'Steel with any other material', '21': 'Solid slab with balustrade beam',
    '22': 'Cell structure', '98': 'Other', '?': 'Unknown'
  },
  type_deck_material: {
    '01': 'Pre/post-stressed concrete', '02': 'Precast units (cell structures)', '03': 'Reinforced concrete',
    '04': 'Precast beams', '05': 'Structural steel', '06': 'Steel and concrete', '07': 'Timber', '98': 'Other', '?': 'Unknown'
  },
  type_abutment: {
    '01': 'Mass concrete gravity type', '02': 'Reinforced concrete', '03': 'RC wall with RC wingwalls', '04': 'Spill through',
    '05': 'Seating beam/stub column', '06': 'Frame', '07': 'Buttressed concrete wall', '08': 'Masonry wall',
    '09': 'Integral pile cap', '10': 'Reinforced earth', '11': 'Counterfort RC', '12': 'Cell structure',
    '13': 'Multiple V-type', '14': 'Perched abutment', '22': 'Solid RC cantilever/wingwall',
    '23': 'Solid RC cantilever/returnwall', '97': 'None', '98': 'Other', '?': 'Unknown'
  },
  type_piers: {
    '20': 'Solid RC wall', '21': 'Cellular RC wall', '22': 'Single RC solid column', '23': 'Single RC hollow column',
    '24': 'Multiple RC solid columns', '25': 'Multiple RC solid columns with beam on top', '26': 'Masonry wall',
    '27': 'Mass concrete wall', '28': 'Steel lattice', '29': 'Single RC splayed pier', '30': 'Multiple RC splayed piers',
    '31': 'Single RC V-shape', '32': 'Multiple RC V-shape', '97': 'None', '98': 'Other', '?': 'Unknown'
  },
  type_para_rail: {
    '00': 'Unknown', '01': 'Guard blocks / guide blocks', '02': 'Steel stanchion and railing', '03': 'Steel stanchion and railing',
    '04': 'RC stanchion / steel railing', '05': 'RC stanchion / aluminium railing', '06': 'RC wall less than 300 mm',
    '07': 'RC New Jersey balustrade', '08': 'RC New Jersey plus steel rail', '09': 'RC solid balustrade',
    '10': 'RC New Jersey plus guardrail', '11': 'Guardrail only', '12': 'Steel stanchion and grid',
    '13': 'RC wall more than 300 mm high', '14': 'RC wall less than 300 mm high plus balustrade',
    '15': 'RC wall more than 300 mm high plus balustrade', '16': 'RC wall less than 300 mm high plus guardrail',
    '17': 'RC wall more than 300 mm high plus guardrail', '97': 'None', '98': 'Other', '?': 'Unknown'
  },
  type_wearing_surface: { '01': 'Premixed asphalt', '02': 'Chip-and-spray', '03': 'Concrete', '04': 'Gravel', '98': 'Other', '?': 'Unknown' },
  type_exp_joints: {
    '01': 'Concrete nosing with compression seal', '02': 'Concrete nosing with steel edge and compression seal',
    '03': 'Concrete nosing with gland in metal/steel runner', '04': 'Concrete nosing with joint filler',
    '05': 'Concrete nosing with silicone sealant', '06': 'Elastomeric concrete nosing with compression seal',
    '07': 'Epoxy nosing with compression seal', '08': 'Epoxy nosing with steel edge and compression seal',
    '09': 'Open joint with steel edge', '10': 'Open joint with concrete nosing and steel edge',
    '11': 'Open joint with concrete nosing only', '12': 'Open joint with no steel edge or special nosing',
    '13': 'Bolt down joint', '14': 'Metal finger joint', '15': 'Sliding steel plates', '16': 'Modular joint',
    '17': 'Custom built', '18': 'Buried under surfacing', '19': 'Steel plate buried under surfacing',
    '20': 'Asphaltic plug-type joint (Thorma)', '21': 'Hot-poured bitumen rubber sealant',
    '97': 'None', '98': 'Other', '?': 'Unknown'
  },
  type_bearings: {
    '01': 'Pot-bearings/PTFE-type/Teflon', '02': 'Elastomeric rubber pads', '03': 'Roofing felt / Malthoid slip membrane',
    '04': 'Concrete rocker type', '05': 'Steel roller', '06': 'Steel hinge', '07': 'Concrete hinge',
    '08': 'Steel/copper plates', '97': 'None', '98': 'Other', '?': 'Unknown'
  },
  scour_protection: {
    '01': 'Gabion boxes', '02': 'Gabion mattresses', '03': 'Gabion boxes and mattresses', '04': 'Stone pitching',
    '05': 'Dolos or tripods', '06': 'Riprap', '07': 'Precast pile curtain', '10': 'None', '98': 'Other', '?': 'Unknown'
  },
  yes_no_unknown: { '1': 'Yes', '2': 'No', '3': 'Unknown', 'Y': 'Yes', 'N': 'No', 'U': 'Unknown', '?': 'Unknown' },
  traffic_flow_directions: { '1': 'One-way traffic', '2': 'Two-way traffic', '?': 'Unknown' }
};

function normalizedBmsCode(value) {
  if (value === undefined || value === null || value === '') return '';
  const s = String(value).trim();
  if (s === '?') return '?';
  if (/^\d+(\.0+)?$/.test(s)) return String(parseInt(s, 10)).padStart(2, '0');
  return s.toUpperCase();
}

function cleanBmsDescription(description) {
  const text = String(description ?? '').trim();
  if (!text) return 'N/A';
  return text
    .replace(/\s*\((?:code\s*)?\d+\)\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim() || 'Unknown';
}

function bmsCodeDescription(field, value) {
  if (value === undefined || value === null || value === '') return 'N/A';
  const code = normalizedBmsCode(value);
  if (code === '00' || code === '0' || code === '?' || code === 'UNKNOWN') return 'N/A';
  const direct = BMS_CODE_LOOKUPS[field]?.[code] || BMS_CODE_LOOKUPS[field]?.[String(parseInt(code, 10))];
  return cleanBmsDescription(direct || 'N/A');
}

function bmsYesNoUnknown(value) {
  if (value === undefined || value === null || value === '') return 'N/A';
  const raw = String(value).trim().toUpperCase();
  const key = /^\d+(\.0+)?$/.test(raw) ? String(parseInt(raw, 10)) : raw;
  const desc = BMS_CODE_LOOKUPS.yes_no_unknown[key];
  return cleanBmsDescription(desc || 'Unknown');
}

function isRoadOverRiverBridge(b) {
  return bmsCodeDescription('type_crossing', b?.type_crossing).toLowerCase() === 'road over river';
}

function riverNameNeedsCorrection(value) {
  const s = String(value ?? '').trim();
  return !s || /^[-?]+$/.test(s) || /^\d+(\.\d+)?$/.test(s) || /^(0|none|unknown|n\/a|na|null|nil)$/i.test(s);
}

function titleCaseBridgeText(value) {
  return String(value ?? '')
    .replace(/[_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\b([a-z])/g, c => c.toUpperCase())
    .replace(/\b(Of|And|The|At|On|In)\b/g, m => m.toLowerCase())
    .replace(/\bRc\b/g, 'RC')
    .replace(/\bMpcc\b/g, 'MPCC');
}

function cleanRiverNameCandidate(value) {
  let text = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (riverNameNeedsCorrection(text)) return '';
  text = text
    .replace(/\b(bridge|overbridge|underbridge|irish crossing|crossing|splash|box culvert|culvert)\b/gi, ' ')
    .replace(/\b(no|number|nr)\.?\s*\d+\b/gi, ' ')
    .replace(/\s+\d+$/g, ' ')
    .replace(/\s*[-/]\s*$/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!text || riverNameNeedsCorrection(text)) return '';
  if (/^(good|very good|satisfactory|fair|marginal|poor|critical|excellent|beyond repair)$/i.test(text)) return '';
  if (/^(road|access|junction|link|route|chainage)$/i.test(text)) return '';
  return titleCaseBridgeText(text);
}

function watercourseNameFromText(value) {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (!text) return '';
  const sourceOfNile = text.match(/\bsource\s+of\s+the\s+nile\b/i);
  if (sourceOfNile) return 'Nile River';
  const riverMatch = text.match(/\briver\s+([a-z][a-z\s.'-]{2,40})/i);
  if (riverMatch) return cleanRiverNameCandidate(`${riverMatch[1]} River`);
  const namedRiverMatch = text.match(/\b([a-z][a-z\s.'-]{2,40})\s+river\b/i);
  if (namedRiverMatch) return cleanRiverNameCandidate(`${namedRiverMatch[1]} River`);
  return '';
}

function ensureRiverNameLabel(value) {
  const clean = cleanRiverNameCandidate(value);
  if (!clean) return '';
  if (/^Unnamed watercourse\b/i.test(clean)) return clean;
  if (/\b(river|watercourse|stream|swamp|lake|canal|nile)\b/i.test(clean)) return clean;
  return `${clean} River`;
}

function bridgeRiverName(b) {
  if (!isRoadOverRiverBridge(b)) return b?.river || 'N/A';
  const direct = cleanRiverNameCandidate(b?.river) || cleanRiverNameCandidate(b?.reference_attributes?.river);
  if (direct) return ensureRiverNameLabel(direct);
  const candidates = [
    watercourseNameFromText(b?.road_descr_principal),
    watercourseNameFromText(b?.bridge_nam),
    watercourseNameFromText(b?.link_name),
    cleanRiverNameCandidate(b?.bridge_nam),
    cleanRiverNameCandidate(b?.road_descr_principal)
  ].filter(Boolean);
  if (candidates.length) return ensureRiverNameLabel(candidates[0]);
  const fallback = cleanRiverNameCandidate(b?.bridge_nam) || cleanRiverNameCandidate(b?.link_name) || b?.bridge_no || 'bridge';
  return `Unnamed watercourse at ${fallback}`;
}

function normalizeBridgeRiverNames() {
  BRIDGES.forEach(b => {
    if (!isRoadOverRiverBridge(b)) return;
    const original = b.river;
    const corrected = bridgeRiverName(b);
    if (corrected && corrected !== '-' && corrected !== original) {
      b.river = corrected;
      b.river_name_source = riverNameNeedsCorrection(original) ? 'Derived from bridge inventory fields' : 'Cleaned from bridge inventory river field';
      if (b.reference_attributes) {
        b.reference_attributes.normalized_river_name = corrected;
      }
    }
  });
}

const BMS_BRIDGE_INVENTORY_COLUMNS = [
  { key: 'bridge_nam', label: 'Bridge Name', value: b => b.bridge_nam, highlight: true },
  { key: 'bridge_no', label: 'Bridge Number', value: b => effectiveBridgeNumber(b) },
  { key: 'location_corrected_lon', label: 'Corrected Longitude', value: b => b.location_corrected_lon ?? b.x_new },
  { key: 'location_corrected_lat', label: 'Corrected Latitude', value: b => b.location_corrected_lat ?? b.y_new },
  { key: 'location_correction_distance_km', label: 'Correction Distance km', value: b => b.location_correction_distance_km },
  { key: 'road_no', label: 'Road Number', value: b => b.road_no },
  { key: 'link_no', label: 'Link ID', value: b => b.link_no },
  { key: 'link_name', label: 'Road Link Name', value: b => b.link_name },
  { key: 'road_class', label: 'Road Class', value: b => canonicalRoadClass(b.road_class), render: b => `<span class="pill pill-${canonicalRoadClass(b.road_class).toLowerCase()}">${canonicalRoadClass(b.road_class)}</span>` },
  { key: 'surface_link', label: 'Surface Type', value: b => b.surface_link || b.surface_ty },
  { key: 'station', label: 'Maintenance Station', value: b => b.station || b.maintenanc },
  { key: 'region', label: 'Maintenance Region', value: b => b.region },
  { key: 'km', label: 'Bridge Chainage From Start of Road km', value: b => bridgeValidatedChainageKm(b) },
  { key: 'type_crossing', label: 'Type Crossing', value: b => bmsCodeDescription('type_crossing', b.type_crossing) },
  { key: 'road_descr_principal', label: 'Principal Feature / Road Description', value: b => b.road_descr_principal },
  { key: 'river', label: 'River / Watercourse', value: b => bridgeRiverName(b) },
  { key: 'town_left', label: 'Town/Village Left', value: b => b.town_left },
  { key: 'town_right', label: 'Town/Village Right', value: b => b.town_right },
  { key: 'abutment_l', label: 'Abutment Left', value: b => b.abutment_l ?? b.reference_attributes?.abutmentl },
  { key: 'abutment_r', label: 'Abutment Right', value: b => b.abutment_r ?? b.reference_attributes?.abutmentr },
  { key: 'type_bridge', label: 'Bridge Type', value: b => bmsCodeDescription('type_bridge', b.type_bridge) },
  { key: 'type_deck', label: 'Deck Type', value: b => bmsCodeDescription('type_deck', b.type_deck) },
  { key: 'type_deck_material', label: 'Deck Material', value: b => bmsCodeDescription('type_deck_material', b.type_deck_material) },
  { key: 'type_abutment_l', label: 'Left Abutment Type', value: b => bmsCodeDescription('type_abutment', b.type_abutment_l) },
  { key: 'type_abutment_r', label: 'Right Abutment Type', value: b => bmsCodeDescription('type_abutment', b.type_abutment_r) },
  { key: 'type_piers', label: 'Pier Type', value: b => bmsCodeDescription('type_piers', b.type_piers) },
  { key: 'type_para_rail', label: 'Parapet/Railing Type', value: b => bmsCodeDescription('type_para_rail', b.type_para_rail) },
  { key: 'type_wearing_surface', label: 'Wearing Surface Type', value: b => bmsCodeDescription('type_wearing_surface', b.type_wearing_surface) },
  { key: 'type_exp_joints', label: 'Expansion Joint Type', value: b => bmsCodeDescription('type_exp_joints', b.type_exp_joints) },
  { key: 'approach_slab', label: 'Approach Slab', value: b => bmsYesNoUnknown(b.approach_slab) },
  { key: 'abutment_gallery', label: 'Abutment Gallery', value: b => bmsYesNoUnknown(b.abutment_gallery) },
  { key: 'type_bearings', label: 'Bearing Type', value: b => bmsCodeDescription('type_bearings', b.type_bearings) },
  { key: 'no_of_span', label: 'Number of Spans', value: b => b.no_of_span },
  { key: 'no_of_pier', label: 'Number of Piers', value: b => b.no_of_pier },
  { key: 'no_of_exp_joints', label: 'Number of Expansion Joints', value: b => b.no_of_exp_joints },
  { key: 'year_compl', label: 'Completion Year', value: b => b.year_compl },
  { key: 'superload_route', label: 'Super Load Route', value: b => bmsYesNoUnknown(b.superload_route) },
  { key: 'weight_load_restr', label: 'Weight/Load Restriction', value: b => bmsYesNoUnknown(b.weight_load_restr) },
  { key: 'scour_protection', label: 'Scour Protection Type', value: b => bmsCodeDescription('scour_protection', b.scour_protection) },
  { key: 'scour_risk', label: 'Scour Risk', value: b => bmsYesNoUnknown(b.scour_risk) },
  { key: 'bridge_len', label: 'Overall Bridge Length m', value: b => b.bridge_len },
  { key: 'bridge_wid', label: 'Overall Bridge Width m', value: b => b.bridge_wid },
  { key: 'width_between_para_rail', label: 'Width Between Parapets/Rails m', value: b => b.width_between_para_rail },
  { key: 'min_bridge_roadway_width', label: 'Minimum Bridge Roadway Width m', value: b => b.min_bridge_roadway_width },
  { key: 'approach_roadway_width', label: 'Approach Roadway Width m', value: b => b.approach_roadway_width },
  { key: 'no_of_lane', label: 'Number of Lanes', value: b => b.no_of_lane },
  { key: 'traffic_flow_directions', label: 'Traffic Flow Directions', value: b => bmsCodeDescription('traffic_flow_directions', b.traffic_flow_directions) },
  { key: 'pave_year', label: 'Year of Last Intervention', value: b => b.pave_year },
  { key: 'pave_age', label: 'Pavement Age years', value: b => b.pave_age },
  { key: 'approaches_rating', label: 'Approaches Rating', value: b => bridgeInventoryRatingLabel(b.approaches_rating), tooltip: b => bridgeConditionRatingTooltip(b.approaches_rating, 'approaches'), render: b => bridgeInventoryRatingCell(b.approaches_rating, 'approaches') },
  { key: 'roadway_rating', label: 'Roadway Rating', value: b => bridgeInventoryRatingLabel(b.roadway_rating), tooltip: b => bridgeConditionRatingTooltip(b.roadway_rating, 'roadway'), render: b => bridgeInventoryRatingCell(b.roadway_rating, 'roadway') },
  { key: 'substructure_rating', label: 'Substructure Rating', value: b => bridgeInventoryRatingLabel(b.substructure_rating), tooltip: b => bridgeConditionRatingTooltip(b.substructure_rating, 'structural'), render: b => bridgeInventoryRatingCell(b.substructure_rating, 'structural') },
  { key: 'superstructure_rating', label: 'Superstructure Rating', value: b => bridgeInventoryRatingLabel(b.superstructure_rating), tooltip: b => bridgeConditionRatingTooltip(b.superstructure_rating, 'structural'), render: b => bridgeInventoryRatingCell(b.superstructure_rating, 'structural') },
  { key: 'waterway_rating', label: 'Waterway Rating', value: b => bridgeInventoryRatingLabel(b.waterway_rating), tooltip: b => bridgeConditionRatingTooltip(b.waterway_rating, 'waterway'), render: b => bridgeInventoryRatingCell(b.waterway_rating, 'waterway') },
  { key: 'product', label: 'BMS Product', value: b => b.product },
  { key: 'weight', label: 'BMS Weight', value: b => b.weight },
  { key: 'overall_rating', label: 'Overall Rating', value: b => bridgeInventoryRatingLabel(b.overall_rating), tooltip: b => bridgeConditionRatingTooltip(b.overall_rating, 'overall'), render: b => bridgeInventoryRatingCell(b.overall_rating, 'overall') },
  { key: 'comment', label: 'Inspection Comment', value: b => b.comment || b.remarks },
  { key: 'additional_remarks', label: 'Additional Remarks', value: b => b.remarks || b.reference_attributes?.additional_remarks },
  { key: 'annual_traffic_growth_rate', label: 'Annual Weighted Growth Rate', value: b => cachedBridgeAnnualWeightedGrowthModel(b).rate, render: b => formatGrowthPercent(cachedBridgeAnnualWeightedGrowthModel(b).rate) },
  { key: 'current_predicted_aadt', label: 'Current Predicted AADT', value: b => bridgeCurrentPredictedAadt(b), render: b => fmt(bridgeCurrentPredictedAadt(b), 0) }
];


const BMS_CULVERT_INVENTORY_COLUMNS = [
  { key: 'culvert_no', label: 'Culvert No', value: c => c.culvert_no, highlight: true },
  { key: 'type_culvert', label: 'Culvert Type', value: c => bmsCodeDescription('type_bridge', c.type_culvert) },
  { key: 'road_no', label: 'Road Number', value: c => c.road_no || String(c.link_no || '').split('_')[0] || null },
  { key: 'link_no', label: 'Link ID', value: c => c.link_no },
  { key: 'road_name', label: 'Road Name', value: c => c.road_name },
  { key: 'link_name', label: 'Road Link Name', value: c => c.link_name },
  { key: 'road_class', label: 'Road Class', value: c => canonicalRoadClass(c.road_class), render: c => `<span class="pill pill-${canonicalRoadClass(c.road_class).toLowerCase()}">${canonicalRoadClass(c.road_class)}</span>` },
  { key: 'region', label: 'Maintenance Region', value: c => c.region },
  { key: 'station', label: 'Maintenance Station', value: c => c.station },
  { key: 'chainage', label: 'Chainage (km)', value: c => c.chainage },
  { key: 'map_x', label: 'Longitude', value: c => c.map_x != null ? Number(c.map_x).toFixed(5) : null },
  { key: 'map_y', label: 'Latitude', value: c => c.map_y != null ? Number(c.map_y).toFixed(5) : null },
  { key: 'bridge_len', label: 'Overall Culvert Length (m)', value: c => c.bridge_len != null ? Number(c.bridge_len).toFixed(1) : null },
  { key: 'bridge_wid', label: 'Overall Culvert Width (m)', value: c => c.bridge_wid != null ? Number(c.bridge_wid).toFixed(1) : null },
  { key: 'cells', label: 'No. of Cells/Pipes', value: c => c.cells || c.no_of_span || '1' },
  { key: 'span_m', label: 'Span (m)', value: c => { const isPipe = c.type_culvert === '26' || c.type_culvert === '27'; return !isPipe ? c.span_diameter : null; } },
  { key: 'diameter_m', label: 'Diameter (m)', value: c => c.diameter_m != null ? Number(c.diameter_m).toFixed(2) : null },
  { key: 'culvert_width', label: 'Culvert Width (m)', value: c => c.culvert_width != null ? Number(c.culvert_width).toFixed(2) : null },
  { key: 'culvert_height', label: 'Culvert Height (m)', value: c => c.culvert_height != null ? Number(c.culvert_height).toFixed(2) : null },
  { key: 'cross_sectional_area', label: 'Cross Sectional Area (sq m)', value: c => c.cross_sectional_area != null ? Number(c.cross_sectional_area).toFixed(2) : null },
  { key: 'waterway_cond', label: 'Waterway Condition', value: c => c.waterway_cond, render: c => bridgeInventoryRatingCell(c.waterway_cond, 'waterway'), tooltip: c => bridgeConditionRatingTooltip(c.waterway_cond, 'waterway') },
  { key: 'inlet_outlet_cond', label: 'Inlet/Outlet Condition', value: c => c.inlet_outlet_cond, render: c => bridgeInventoryRatingCell(c.inlet_outlet_cond, 'structural'), tooltip: c => bridgeConditionRatingTooltip(c.inlet_outlet_cond, 'structural') },
  { key: 'structure_cond', label: 'Structure Condition', value: c => c.structure_cond, render: c => bridgeInventoryRatingCell(c.structure_cond, 'structural'), tooltip: c => bridgeConditionRatingTooltip(c.structure_cond, 'structural') },
  { key: 'roadway_cond', label: 'Roadway Condition', value: c => c.roadway_cond, render: c => bridgeInventoryRatingCell(c.roadway_cond, 'approaches'), tooltip: c => bridgeConditionRatingTooltip(c.roadway_cond, 'approaches') },
  { key: 'overall_cond', label: 'Overall Condition', value: c => c.overall_cond || c.condition_category, render: c => bridgeInventoryRatingCell(c.overall_cond || c.condition_category, 'overall'), tooltip: c => bridgeConditionRatingTooltip(c.overall_cond || c.condition_category, 'overall') },
  { key: 'overall_rating', label: 'Overall Rating', value: c => c.overall_rating, render: c => bridgeInventoryRatingCell(c.overall_rating, 'overall'), tooltip: c => bridgeConditionRatingTooltip(c.overall_rating, 'overall') },
  { key: 'comment', label: 'Inspection Comment', value: c => c.comment || c.remarks },
];

function effectiveBridgeNumber(b) {
  return b?.new_bridge_no || b?.bridge_no || b?.original_bridge_no || 'N/A';
}

function bridgeCurrentPredictedAadt(b, year = timelineYear, monthIndex = timelineMonth) {
  const linkEvidence = roadLinkAadtEvidenceFor(b);
  const sqlBotEvidence = sqlBotEvidenceForBridge(b);
  const baseAadt = Number(linkEvidence?.aadt_2026 ?? b?.aadt_rebuilt_2026 ?? b?.aadt_2025 ?? 0);
  if (!baseAadt) return null;
  const growthRate = bridgeAnnualTrafficGrowthRate(b, { linkEvidence, sqlBotEvidence });
  const targetYear = Number(year || 2026);
  const growthFactor = Number.isFinite(growthRate) ? Math.pow(1 + growthRate, targetYear - 2026) : 1;
  const seasonalFactor = Number(linkEvidence?.latest_seasonal_factor ?? seasonalCorrectionFactor(b?.region, monthIndex) ?? 1);
  return baseAadt * growthFactor * (Number.isFinite(seasonalFactor) ? seasonalFactor : 1);
}

function bridgeInventoryValue(b, col) {
  const value = col.value ? col.value(b) : b[col.key];
  return value === undefined || value === null || value === '' ? 'N/A' : value;
}

function bridgeInventoryCellText(value, key = '') {
  if (value === undefined || value === null || value === '') return 'N/A';
  if (typeof value === 'number') return Number.isInteger(value) ? String(value) : fmt(value, 3);
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return tableDisplayText(value, key);
}

function applyBridgeInventorySort(rows) {
  return sortRowsByState(rows, bridgeInventorySort, (bridge, key) => {
    const col = BMS_BRIDGE_INVENTORY_COLUMNS.find(c => c.key === key);
    if (!col) return bridge?.[key];
    const direct = bridge?.[key];
    return direct !== undefined && direct !== null && direct !== ''
      ? direct
      : bridgeInventoryValue(bridge, col);
  });
}

const CONDITION_RATING_LABELS = {
  9: 'Excellent',
  8: 'Very Good',
  7: 'Good',
  6: 'Satisfactory',
  5: 'Fair',
  4: 'Marginal',
  3: 'Poor',
  2: 'Very Poor',
  1: 'Critical',
  0: 'Beyond Repair'
};

const CONDITION_RATING_SCOPE_LABELS = {
  approaches: 'Approaches',
  waterway: 'Waterway',
  structural: 'Structural elements',
  roadway: 'Roadway surfacing, kerbs and sidewalks',
  expansion_joints: 'Expansion joints',
  drainage: 'Drainage',
  traffic_barriers: 'Traffic barriers',
  guardrails: 'Guardrails and railings',
  culvert_cell: 'Cell structures and concrete pipes',
  corrugated_metal_pipe: 'Corrugated metal pipe barrels',
  overall: 'Entire structure / structural elements'
};

const CONDITION_RATING_DESCRIPTIONS = {
  approaches: {
    9: 'New condition.',
    8: 'No noteworthy problems.',
    7: 'Some minor problems. Minor erosion damage to embankments.',
    6: 'Slight bump before bridge. Some material loss on shoulders and embankments. Safety features still intact.',
    5: 'Bump before bridge causes some discomfort when driving over. Safety features loose but still intact.',
    4: 'Bump before bridge causes significant discomfort when driving over. Cracks in embankments on shoulder. Loss of embankment material due to erosion. Guardrails damaged or loose.',
    3: 'Bump before bridge requires significant speed reduction for safe passage on to bridge. Wide cracks in embankments on shoulder. Severe material loss due to erosion. Guardrails missing.',
    2: 'Bump before bridge causes serious safety hazard. Signs of embankment slip movement.',
    1: 'Bridge should be closed due to failure of approaches.',
    0: 'Completely non functional.'
  },
  waterway: {
    9: 'No noticeable or noteworthy deficiencies which affect the condition of the channel.',
    8: 'Banks are well protected or vegetated. River control devices and bank protection are not required or are in a very good condition.',
    7: 'Bank protection has little damage. Banks and/or channel have minor amounts of drifts.',
    6: 'Bank is beginning to slump. Control devices and bank protection has widespread minor damage. There is minor stream bed movement evident. Debris is affecting the waterway slightly.',
    5: 'Bank protection is being eroded. River control devices and/or bank protection have major damage. Trees and brush restrict the channel.',
    4: 'Bank protection is severely undermined. Large deposits of debris are in the waterway.',
    3: 'Bank protection has failed. Stream bed aggradation, degradation or lateral movement has changed the waterway to now threaten the culvert and/or approach roadway.',
    2: 'The waterway has changed to the extent that the culvert is near a state of collapse.',
    1: 'Culvert closed due to channel failure. Corrective action may put it back in service.',
    0: 'Culvert closed because of channel failure. Replacement necessary.'
  },
  structural: {
    9: 'New condition.',
    8: 'No signs of distress or deterioration. Possibly some minor shrinkage or temperature cracks in concrete. No rust on steel members.',
    7: 'Some minor problems. Non-structural cracks in concrete. Light spalling. No rust stains through cracks. Some light rust formation on steel members, pitting the paint surface.',
    6: 'Structural elements show some minor deterioration. More significant non-structural cracks in concrete. Moderate spalling. No rust stains visible. Moderate rust formation on steel members. No measurable section loss.',
    5: 'Structural elements are sound but have some section loss due to deterioration, spalling or scour. Structural cracks with light rust staining. Stratified rust flakes with some measurable section loss for steel members.',
    4: 'More general section loss due to deterioration, spalling or scour. Structural cracks with moderate rust staining visible. Heavy stratified rusting resulting in advanced section loss for steel members.',
    3: 'Advanced deterioration, spalling or scour, exposing reinforcing steel. Structural cracks with severe rust staining. Rust has caused holes in structural steel members. Loose connections, buckled or bowed steel members.',
    2: 'Advanced deterioration of structural elements. Significant structural cracks visible. Reinforcing exposed and rusted. Holes rusted through steel members. Fatigue cracks. Scour has severely undermined supports. Unless closely monitored, bridge should be closed.',
    1: 'Culvert closed. Study required to determine the feasibility of repairs.',
    0: 'Permanently closed till replaced.'
  },
  roadway: {
    9: 'New condition.',
    8: 'No noteworthy problems.',
    7: 'Minor localized cracks. Generally a smooth ride over culvert deck. Kerbs and sidewalk generally smooth.',
    6: 'Light cracking over most of area. Light rutting or bleeding. Minor unevenness when driving over culvert deck, or walking over sidewalk.',
    5: 'More general cracking. Minor ravelling or section loss. More visible rutting or bleeding. Ride over culvert deck fairly uneven. No speed reduction required. Kerbs and sidewalk fairly uneven.',
    4: 'General cracking, some ravelling and section loss. Rutting clearly visible. Bleeding reduces skid resistance significantly. Unevenness calls for slight speed reduction. Kerbs or sidewalk elements significantly displaced or settled.',
    3: 'Cracking with more general ravelling and section loss. Pot holes forming. Very little skid resistance remains where bleeding is extensive. Speed reduction required to drive over culvert deck. Kerb or sidewalk elements broken but still in place, very uneven.',
    2: 'Cracking and section loss. Pot holes could cause damage to vehicles driving over culvert deck. Significant speed reduction required. Kerb or sidewalk element missing, otherwise very uneven.',
    1: 'Pot holes or other section loss pose serious safety hazard.',
    0: 'Completely non functional.'
  },
  expansion_joints: {
    9: 'New condition.',
    8: 'No noteworthy problems.',
    7: 'Minor cracking. Smooth ride over. All elements tight. No sign of leakage. Free movement.',
    6: 'More widespread cracking. Slight bump when driving over. Seal intact but some signs of little leakage. Free movement of the joint.',
    5: 'Widespread cracking with some isolated spalling. Bump when driving over. Seal protrudes slightly and/or shows some signs of damage. More significant signs of leakage. Free movement.',
    4: 'Cracking with spalling at edges of joint. Significant bump when driving over. Seal loose or protrudes significantly. Leakage stains visible. Bolted down or cast in elements loose. Joint strained to its extreme reaches.',
    3: 'Cracking and spalling over whole length of nosing. Speed reduction required when driving over. Seal missing or completely damaged. Very prominent leakage stains. Free movement restricted.',
    2: 'Cracking and spalling over whole length. Rust stains visible. Significant speed reduction required. Seal missing or completely non functional. Very prominent leakage stains. Cracking in deck or abutment wall due to movement restriction.',
    1: 'Same symptoms as above except that the degree is such that vehicles could be damaged when driving over or safety hazard.',
    0: 'Completely non functional.'
  },
  drainage: {
    9: 'New condition.',
    8: 'No noteworthy problems.',
    7: 'Some debris collected in scupper. No silting or ponding evident.',
    6: 'Some debris collected in scupper. Minor silting or ponding evident. No scuppers provided but little evidence of silting or ponding.',
    5: 'Debris in scuppers with more noticeable signs of ponding and silting. Some silt build up on bridges with no scuppers.',
    4: 'Scuppers only marginally functional due to silting or debris. More significant silting or signs of ponding on bridges with no scuppers.',
    3: 'Scuppers blocked. Leakage around scuppers. Spalling concrete around scupper. Silting on deck encroaches roadway.',
    2: 'Scuppers blocked. Leakage and spalling around scuppers with rust stains visible. Vegetation growing out of scuppers or silted areas. Extensive signs of ponding.',
    1: 'Drainage system non functional and could lead to dangerous situations due to ponding or roadway encroachment.',
    0: 'Completely non functional.'
  },
  traffic_barriers: {
    9: 'New condition.',
    8: 'No noteworthy problems.',
    7: 'Localized minor accident damage. Some non-structural cracking.',
    6: 'General minor accident damage. Light general non-structural cracking. No rust stains.',
    5: 'General accident damage. More significant non structural cracking. Light rust stains visible.',
    4: 'More serious accident damage. Spalling and cracking clearly visible. Significant rust stains.',
    3: 'Serious accident damage. Significant spalling and cracking with severe rust staining.',
    2: 'Elements loose or missing which could pose safety hazard. Reinforcement visible and corroded.',
    1: 'Condition poses serious safety hazard.',
    0: 'Completely non functional.'
  },
  guardrails: {
    9: 'New condition.',
    8: 'No noteworthy problems.',
    7: 'Minor accident damage. All components tight. Some light rust.',
    6: 'More general minor accident damage. Most components tight. Light rust.',
    5: 'General moderate accident damage. More elements loose but still intact. Safety not affected. Moderate rust.',
    4: 'More serious accident damage. Most elements loose, some missing but railing can still function as a safety feature. Moderate to severe rust.',
    3: 'Components loose or accident damage to the extent that railing can not perform function any more. Severe rust.',
    2: 'Railing components missing. Could pose safety hazard. Corrosion causes section loss.',
    1: 'Serious safety hazard due to lack of guardrails or railing.',
    0: 'Completely non functional.'
  },
  culvert_cell: {
    9: 'New condition.',
    8: 'Alignment good with no settlement or misalignment; joints tight; concrete has no cracking, spalling or scaling; footings good with no invert scour.',
    7: 'Generally good alignment; minor joint misalignment or deterioration; minor hairline cracking, slight spalling or scaling; good footings with minor invert scour.',
    6: 'Fair alignment with minor misalignment or settlement; joints generally deteriorated with minor separation, infiltration or exfiltration; extensive hairline cracks, minor delamination or scaling; minor scour.',
    5: 'Generally fair alignment with minor misalignment or settlement and possible piping; joints open allowing backfill infiltration; cracking, delamination and moderate spalling exposing reinforcing steel; moderate footing scour.',
    4: 'Significant settlement, misalignment or evidence of piping; joint separation, infiltration or exfiltration; extensive cracks with efflorescence, heavily corroded exposed rebars and scaling; slight undermining.',
    3: 'Significant ponding due to sagging or misaligned pipes; end section drop off; significant joint openings or differential movement; settlement, depressions, extensive cracking, spalling, delamination or severe undermining.',
    2: 'Culvert not functioning due to severe misalignment; severe cracks with differential movement; concrete deteriorated in isolated locations; severe undermining with significant settlement causing severe cracks.',
    1: 'Partially collapsed; road closed to traffic; severe undermining causing partial collapse.',
    0: 'Total failure of culvert and fill; road closed to traffic.'
  },
  corrugated_metal_pipe: {
    9: 'New condition.',
    8: 'Shape good, seams and joints tight, no openings; aluminium has superficial corrosion or slight pitting; steel has superficial rust and no pitting.',
    7: 'Generally good shape with minor flattening; minor seam or joint cracking and openings; aluminium has moderate corrosion with no core attack; steel has moderate rust and slight pitting.',
    6: 'Fair shape; bottom half flattened significantly; minor cracking at bolts prevalent in lower seam; evidence of backfill infiltration; aluminium significant corrosion or minor core attack; steel heavy rust or moderate pitting.',
    5: 'Significant distortion in isolated locations; extreme invert flattening; moderate bolt-hole cracking near bottom and deflection from backfill infiltration; aluminium significant corrosion or minor core attack; steel scattered heavy rust or deep pitting.',
    4: 'Significant distortion throughout; lower third may be kinked; moderate cracking near top seam and deflection from loss of backfill through open joints; aluminium extensive corrosion or significant core attack; steel extensive heavy rust or deep pitting.',
    3: 'Extreme deflection in isolated locations, flattening crown; bolt-hole cracks; aluminium extensive corrosion, core attack or scattered perforations; steel extensive heavy rust, deep pitting or perforations.',
    2: 'Extreme distortion or deflection throughout, flattening crown; plate cracked from bolt to bolt; aluminium or steel has extensive perforations.',
    1: 'Partially collapsed with crown in reverse curve; seams failed; road closed to traffic.',
    0: 'Pipe totally failed; road closed to traffic.'
  }
};
CONDITION_RATING_DESCRIPTIONS.overall = CONDITION_RATING_DESCRIPTIONS.structural;

function normalizedConditionRating(value) {
  if (value === undefined || value === null || value === '') return null;
  const n = Math.round(Number(value));
  return Number.isFinite(n) && CONDITION_RATING_LABELS[n] ? n : null;
}

function bridgeInventoryRatingLabel(value) {
  if (value === undefined || value === null || value === '') return 'N/A';
  const n = normalizedConditionRating(value);
  return n == null ? String(value) : CONDITION_RATING_LABELS[n];
}

function bridgeConditionRatingTooltip(value, scope = 'structural') {
  const n = normalizedConditionRating(value);
  if (n == null) return 'Condition rating not available.';
  const safeScope = CONDITION_RATING_DESCRIPTIONS[scope] ? scope : 'structural';
  return CONDITION_RATING_DESCRIPTIONS[safeScope][n] || CONDITION_RATING_DESCRIPTIONS.structural[n] || '';
}

function bridgeInventoryRatingCell(value, scope = 'structural') {
  if (value === undefined || value === null || value === '') return 'N/A';
  const n = Number(value);
  const cls = n >= 7 ? 'rating-7' : n >= 5 ? 'rating-5' : n >= 3 ? 'rating-3' : 'rating-low';
  return `<span class="rating-badge ${cls}" title="${htmlEscape(bridgeConditionRatingTooltip(value, scope))}">${htmlEscape(bridgeInventoryRatingLabel(value))}</span>`;
}

function buildBridgeTable() {
  const filtered = applyBridgeInventorySort(getFilteredBridges());
  const tbody = document.getElementById('bridgeTableBody');
  const emptyState = document.getElementById('bridgeEmptyState');
  const table = document.getElementById('bridgeTable');
  const scrollWrap = document.querySelector('.bridge-inventory-scroll');
  const headRow = document.getElementById('bridgeTableHeadRow');
  const columns = BMS_BRIDGE_INVENTORY_COLUMNS;
  
  if (headRow && headRow.dataset.rendered !== '1') {
    headRow.innerHTML = columns.map(col => `<th data-sort="${htmlEscape(col.key)}">${htmlEscape(col.label)}</th>`).join('');
    headRow.dataset.rendered = '1';
  }

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    table.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  table.style.display = 'table';
  emptyState.style.display = 'none';
  
  
  const BRIDGE_INVENTORY_PAGE_SIZE = 999999;
  const totalPages = Math.max(1, Math.ceil(filtered.length / BRIDGE_INVENTORY_PAGE_SIZE));
  if (typeof window.bridgeInventoryPage === 'undefined') window.bridgeInventoryPage = 1;
  window.bridgeInventoryPage = Math.max(1, Math.min(window.bridgeInventoryPage, totalPages));
  
  const prevBtn = document.getElementById('bridgeTablePrev');
  const nextBtn = document.getElementById('bridgeTableNext');
  const infoBtn = document.getElementById('bridgeTablePageInfo');
  if (infoBtn) infoBtn.textContent = `Page ${window.bridgeInventoryPage} of ${totalPages} (${filtered.length} total)`;
  if (prevBtn) {
    prevBtn.disabled = window.bridgeInventoryPage <= 1;
    prevBtn.onclick = () => { window.bridgeInventoryPage--; buildBridgeTable(); };
  }
  if (nextBtn) {
    nextBtn.disabled = window.bridgeInventoryPage >= totalPages;
    nextBtn.onclick = () => { window.bridgeInventoryPage++; buildBridgeTable(); };
  }

  const pageFiltered = filtered.slice((window.bridgeInventoryPage - 1) * BRIDGE_INVENTORY_PAGE_SIZE, window.bridgeInventoryPage * BRIDGE_INVENTORY_PAGE_SIZE);
  
  tbody.innerHTML = pageFiltered.map(b => `
    <tr data-bridge-id="${b._id}" class="${bridgeRowActiveClass(b._id)}">
      ${columns.map(col => {
        const raw = bridgeInventoryValue(b, col);
        const rendered = col.render ? col.render(b) : htmlEscape(bridgeInventoryCellText(raw, col.key));
        const titleAttr = col.tooltip ? ` title="${htmlEscape(col.tooltip(b))}"` : '';
        return `<td class="${col.highlight ? 'highlight-cell' : ''}"${titleAttr}>${rendered}</td>`;
      }).join('')}
    </tr>
  `).join('');

  bindPagedTableSortHandlers('bridgeTable', 'inventory');
  applyActiveBridgeSelectionToTables();
}
function updateBridgeInventoryPager(totalRows, totalPages) {
  const info = document.getElementById('bridgeInventoryPageInfo');
  const prev = document.getElementById('bridgeInventoryPrev');
  const next = document.getElementById('bridgeInventoryNext');
  if (!info || !prev || !next) return;
  info.textContent = `Page ${bridgeInventoryPage} of ${totalPages} (${fmt(totalRows)} records)`;
  prev.disabled = bridgeInventoryPage <= 1;
  next.disabled = bridgeInventoryPage >= totalPages;
  if (prev.dataset.bound !== '1') {
    prev.dataset.bound = '1';
    prev.addEventListener('click', () => {
      bridgeInventoryPage = Math.max(1, bridgeInventoryPage - 1);
      buildBridgeTable();
    });
    next.addEventListener('click', () => {
      bridgeInventoryPage += 1;
      buildBridgeTable();
    });
  }
}

function initBridgeInventoryHorizontalScroll() {
  const wrap = document.querySelector('.bridge-inventory-scroll');
  const proxy = document.getElementById('bridgeInventoryScrollProxy');
  const proxyInner = document.getElementById('bridgeInventoryScrollProxyInner');
  if (!wrap || !proxy || !proxyInner) return;
  let syncing = false;

  const syncGeometry = () => {
    const max = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
    proxyInner.style.width = `${wrap.scrollWidth}px`;
    proxy.style.display = max > 0 ? 'block' : 'none';
    proxy.style.left = `${Math.max(12, wrap.getBoundingClientRect().left)}px`;
    proxy.style.right = `${Math.max(12, window.innerWidth - wrap.getBoundingClientRect().right)}px`;
    proxy.scrollLeft = wrap.scrollLeft;
  };

  if (wrap.dataset.scrollBound !== '1') {
    wrap.dataset.scrollBound = '1';
    wrap.addEventListener('scroll', () => {
      if (syncing) return;
      syncing = true;
      proxy.scrollLeft = wrap.scrollLeft;
      syncing = false;
    });
    proxy.addEventListener('scroll', () => {
      if (syncing) return;
      syncing = true;
      wrap.scrollLeft = proxy.scrollLeft;
      syncing = false;
    });
    wrap.addEventListener('wheel', e => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && e.shiftKey) {
        e.preventDefault();
        wrap.scrollLeft += e.deltaY;
      }
    }, { passive: false });
    window.addEventListener('resize', syncGeometry);
  }

  requestAnimationFrame(syncGeometry);
}

function buildBridgeLocationAuditKpis(rows) {
  const kpiEl = document.getElementById('bridgeLocationAuditKpis');
  if (!kpiEl) return;
  const total = rows.length;
  const moved = rows.filter(b => Number(b.location_correction_distance_km || 0) > 0.01).length;
  const chainage = rows.filter(b => /chainage/i.test(b.location_correction_method || '')).length;
  const corridorSnap = rows.filter(b => b.location_network_match_scope === 'same-national-road').length;
  const nearestReviewSnap = rows.filter(b => b.location_network_match_scope === 'nearest-national-road-review').length;
  const exactNational = rows.filter(b => b.location_network_match_scope === 'exact-national-link').length;
  const review = rows.filter(b => b.location_requires_review || /review|No correction/i.test(`${b.location_audit_status || ''} ${b.location_correction_method || ''}`)).length;
  const moveVals = rows.map(b => Number(b.location_correction_distance_km || 0)).filter(Number.isFinite);
  const avgMove = moveVals.length ? moveVals.reduce((s, v) => s + v, 0) / moveVals.length : 0;
  const maxMove = moveVals.length ? Math.max(...moveVals) : 0;

  kpiEl.innerHTML = [
    [fmt(total), 'Filtered bridge records'],
    [fmt(moved), 'Source points corrected'],
    [fmt(exactNational), 'Exact national host links'],
    [fmt(chainage), 'Placed by bridge chainage'],
    [fmt(corridorSnap), 'Same-road corridor snaps'],
    [fmt(nearestReviewSnap), 'Nearest-network review snaps'],
    [fmt(avgMove, 2) + ' km', 'Average correction'],
    [fmt(maxMove, 2) + ' km', 'Maximum correction'],
    [fmt(review), 'Records for manual review']
  ].map(([v, l]) => `<div class="traffic-metric"><strong>${v}</strong><span>${l}</span></div>`).join('');
}

function buildBridgeInventoryClusterCharts(rows) {
  // charts removed
}

// BRIDGE TRAFFIC ANALYTICS PER CROSSING
function normalizeAtcId(id) {
  const s = String(id || '').trim();
  if (s === 'U00010') return 'U0010';
  return s;
}

function atcFlowFor(id) {
  const norm = normalizeAtcId(id);
  return ATC_FLOW.aadt.find(a => normalizeAtcId(a.id) === norm) || null;
}

function atcSpeedFor(id) {
  const norm = normalizeAtcId(id);
  return ATC_SPEED_ITEMS.find(s => normalizeAtcId(s.id) === norm) || null;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  if ([lat1, lon1, lat2, lon2].some(v => v == null || Number.isNaN(Number(v)))) return null;
  const toRad = d => Number(d) * Math.PI / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function nearestAtcForBridge(b) {
  return combinedAtcStationsForBridge(b, 1)[0] || null;
}

function nearestManualStationsForBridge(b, limit = 3) {
  const cacheKey = bridgeSpatialCacheKey(b, `manual-${limit}`);
  if (bridgeManualStationCache.has(cacheKey)) return bridgeManualStationCache.get(cacheKey);
  const result = MANUAL_COUNT_STATIONS
    .map(site => {
      const lat = Number(site.lat);
      const lng = Number(site.lng);
      if (!lat || !lng) return null;
      const distanceKm = haversineKm(b.y_new, b.x_new, lat, lng);
      if (distanceKm == null) return null;
      const sameLink = String(site.link_id || '').toUpperCase() === String(b.link_no || '').toUpperCase();
      return { ...site, distanceKm, sameLink };
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (a.sameLink !== b.sameLink) return a.sameLink ? -1 : 1;
      return a.distanceKm - b.distanceKm;
    })
    .slice(0, limit);
  bridgeManualStationCache.set(cacheKey, result);
  return result;
}

function affectingAtcStationsForBridge(b, limit = 3) {
  return ATC_SITE_ITEMS
    .map(site => {
      const distanceKm = haversineKm(b.y_new, b.x_new, site.lat, site.lng);
      if (distanceKm == null) return null;
      const flow = atcFlowFor(site.id);
      const breakdown = getAtcAdtBreakdown(site.id);
      if (!flow && !breakdown) return null;
      const weight = 1 / Math.max(1, distanceKm) ** 1.15;
      return { ...site, id: normalizeAtcId(site.id), distanceKm, flow, breakdown, weight };
    })
    .filter(Boolean)
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit);
}

function legacyAtcProfileForLink(linkId) {
  const key = normalizedLinkKey(linkId);
  return Object.values(LEGACY_ATC_ACCURACY_DATA || {}).find(p => normalizedLinkKey(p.link_id) === key) || null;
}

function affectingLegacyAtcStationsForBridge(b, limit = 3) {
  const bridgeLat = bridgeMapLat(b) ?? b.y_new;
  const bridgeLng = bridgeMapLon(b) ?? b.x_new;
  const bridgeLinkKey = normalizedLinkKey(b?.link_no);
  return getLegacyAtcMapStations()
    .map(site => {
      const profile = legacyAtcProfileForLink(site.link_id);
      if (!profile) return null;
      const sameLink = normalizedLinkKey(site.link_id) === bridgeLinkKey;
      const distanceKm = haversineKm(bridgeLat, bridgeLng, site.lat, site.lng);
      if (distanceKm == null) return null;
      const weight = (sameLink ? 3 : 1) / Math.max(1, distanceKm) ** 1.15;
      return {
        ...site,
        id: site.id,
        road: site.link_name || site.name,
        distanceKm,
        sameLink,
        weight,
        legacyProfile: profile
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (a.sameLink !== b.sameLink) return a.sameLink ? -1 : 1;
      return a.distanceKm - b.distanceKm;
    })
    .slice(0, limit);
}

function combinedAtcStationsForBridge(b, limit = 25) {
  const cacheKey = bridgeSpatialCacheKey(b, `atc-${limit}`);
  if (bridgeAtcStationCache.has(cacheKey)) return bridgeAtcStationCache.get(cacheKey);
  const bridgeLat = bridgeMapLat(b) ?? b.y_new;
  const bridgeLng = bridgeMapLon(b) ?? b.x_new;
  const bridgeLinkKey = normalizedLinkKey(b?.link_no);
  const bridgeRoadNo = normalizedLinkKey(b?.road_no || String(b?.link_no || '').split('_')[0]);

  const current = ATC_SITE_ITEMS.map(site => {
    const distanceKm = haversineKm(bridgeLat, bridgeLng, site.lat, site.lng);
    if (distanceKm == null) return null;
    const flow = atcFlowFor(site.id);
    const breakdown = getAtcAdtBreakdown(site.id);
    if (!flow && !breakdown) return null;
    const stationRoadNo = normalizedLinkKey(String(site.road || '').match(/\b[ABC]\d{3}|M\d+/i)?.[0] || '');
    const sameRoad = stationRoadNo && stationRoadNo === bridgeRoadNo;
    const weight = (sameRoad ? 1.8 : 1) / Math.max(1, distanceKm) ** 1.15;
    return {
      ...site,
      id: normalizeAtcId(site.id),
      source: 'Current ATC',
      type: 'current-atc',
      road: site.road || '',
      link_id: '',
      distanceKm,
      sameLink: false,
      sameRoad,
      flow,
      breakdown,
      weight
    };
  }).filter(Boolean);

  const legacy = getLegacyAtcMapStations().map(site => {
    const profile = legacyAtcProfileForLink(site.link_id);
    if (!profile) return null;
    const distanceKm = haversineKm(bridgeLat, bridgeLng, site.lat, site.lng);
    if (distanceKm == null) return null;
    const sameLink = normalizedLinkKey(site.link_id) === bridgeLinkKey;
    const sameRoad = normalizedLinkKey(site.road_no || String(site.link_id || '').split('_')[0]) === bridgeRoadNo;
    const weight = (sameLink ? 4.5 : sameRoad ? 2.2 : 1) / Math.max(1, distanceKm) ** 1.15;
    return {
      ...site,
      id: site.id,
      source: 'Legacy ATC 2016-2022',
      type: 'legacy-atc',
      road: site.link_name || site.name,
      distanceKm,
      sameLink,
      sameRoad,
      weight,
      legacyProfile: profile
    };
  }).filter(Boolean);

  const result = [...legacy, ...current]
    .sort((a, b) => {
      if (a.sameLink !== b.sameLink) return a.sameLink ? -1 : 1;
      if (a.sameRoad !== b.sameRoad) return a.sameRoad ? -1 : 1;
      return a.distanceKm - b.distanceKm;
    })
    .slice(0, limit);
  bridgeAtcStationCache.set(cacheKey, result);
  return result;
}

const REGIONAL_SEASONAL_ADT_FACTORS = {
  "Central": [1.0379, 0.9529, 1.0910, 1.0580, 0.9781, 0.9582, 0.9934, 0.9636, 0.9869, 0.9997, 0.9976, 1.0013],
  "Eastern": [0.9924, 0.9636, 1.0816, 0.9671, 0.9312, 1.0081, 1.0131, 0.9909, 1.0563, 1.0296, 1.0170, 0.9684],
  "North Eastern": [0.9794, 0.9089, 1.0043, 0.9897, 0.9376, 0.9982, 0.9887, 1.0450, 1.0066, 1.0380, 0.9674, 1.1831],
  "Northern": [0.9547, 0.8946, 1.0545, 1.0067, 0.9376, 1.1070, 1.0400, 0.9630, 0.9848, 1.0634, 1.0200, 1.0132],
  "Southern": [1.0118, 0.9655, 1.0494, 1.0198, 0.9728, 0.9997, 1.0297, 1.0022, 1.0057, 1.0159, 0.9987, 0.9388],
  "Western": [0.9914, 0.9563, 1.0844, 1.0370, 0.9388, 1.0178, 1.0150, 1.0535, 1.0342, 0.9889, 0.9602, 0.9458]
};

function normalizeTrafficRegion(region) {
  const r = String(region || '').trim();
  if (/north\s*east/i.test(r)) return 'North Eastern';
  if (/north/i.test(r)) return 'Northern';
  if (/east/i.test(r)) return 'Eastern';
  if (/west/i.test(r)) return 'Western';
  if (/south/i.test(r)) return 'Southern';
  if (/central|kampala|mpigi|masaka|mubende/i.test(r)) return 'Central';
  return 'Central';
}

function seasonalCorrectionFactor(region, monthIndex = timelineMonth) {
  const factors = REGIONAL_SEASONAL_ADT_FACTORS[normalizeTrafficRegion(region)] || REGIONAL_SEASONAL_ADT_FACTORS.Central;
  const idx = Math.max(0, Math.min(11, Number(monthIndex) || 0));
  return Number(factors[idx] || 1);
}

function bridgeMonthlySeasonalFactorProfile(bridge, evidence = null) {
  const ev = evidence || bridgeTrafficEvidence(bridge);
  const normalizeFactors = factors => Array.from({ length: 12 }, (_, i) => {
    const n = Number(factors?.[i]);
    return Number.isFinite(n) && n > 0 ? n : seasonalCorrectionFactor(bridge?.region, i);
  });
  if (Array.isArray(ev?.legacyProfile?.seasonal_factors) && ev.legacyProfile.seasonal_factors.length >= 12) {
    return {
      factors: normalizeFactors(ev.legacyProfile.seasonal_factors),
      source: ev.legacyProfile.name ? `Legacy ATC: ${ev.legacyProfile.name}` : 'Legacy ATC monthly profile'
    };
  }
  if (Array.isArray(ev?.sqlBotEvidence?.seasonal_factors) && ev.sqlBotEvidence.seasonal_factors.length >= 12) {
    return {
      factors: normalizeFactors(ev.sqlBotEvidence.seasonal_factors),
      source: ev.sqlBotEvidence.link_id ? `SQLBot link evidence: ${ev.sqlBotEvidence.link_id}` : 'SQLBot monthly profile'
    };
  }
  const region = normalizeTrafficRegion(bridge?.region);
  return {
    factors: normalizeFactors(REGIONAL_SEASONAL_ADT_FACTORS[region]),
    source: `${region} regional seasonal model`
  };
}

function seasonallyCorrectAdt(adt, region, monthIndex = timelineMonth) {
  const v = Number(adt || 0);
  return v ? v * seasonalCorrectionFactor(region, monthIndex) : 0;
}

function isUsableSqlBotPayload(data) {
  return !!(data && typeof data === 'object' && (
    data.link_evidence || data.road_evidence || data.bridge_predictions || data.od_matrix
  ));
}

function sqlBotTrafficStore() {
  if (isUsableSqlBotPayload(sqlBotTrafficBackendSnapshot)) return sqlBotTrafficBackendSnapshot;
  return typeof SQLBOT_TRAFFIC_INTELLIGENCE === 'object' ? SQLBOT_TRAFFIC_INTELLIGENCE : null;
}

function refreshSqlBotTrafficViews() {
  clearBridgeTrafficEvidenceCache();
  buildKPIs();
  const activePanelId = document.querySelector('.panel.active')?.id || 'panel-spatial-map';
  if (activePanelId === 'panel-bridge-traffic') {
    buildBridgeTrafficTab();
  } else if (activePanelId === 'panel-od-matrix') {
    buildODMatrixTab();
  }
  updateBridgeAnalyticsPane(selectedMapBridge || null);
  if (activePanelId === 'panel-spatial-map') drawMap();
}

function loadSqlBotTrafficBackend() {
  if (sqlBotTrafficBackendPromise) return sqlBotTrafficBackendPromise;
  if (typeof fetch !== 'function') return Promise.resolve(null);
  sqlBotTrafficBackendPromise = fetch(SQLBOT_TRAFFIC_BACKEND_URL, { cache: 'no-store' })
    .then(response => response.ok ? response.json() : null)
    .then(data => {
      if (!isUsableSqlBotPayload(data)) return null;
      sqlBotTrafficBackendSnapshot = data;
      sqlBotTrafficBackendStatus = `external ${data.generated_at || 'snapshot'}`;
      refreshSqlBotTrafficViews();
      return data;
    })
    .catch(() => {
      sqlBotTrafficBackendStatus = 'embedded';
      return null;
    });
  return sqlBotTrafficBackendPromise;
}

function sqlBotEvidenceForBridge(b) {
  const bot = sqlBotTrafficStore();
  if (!bot) return null;
  const correctedLink = b?.location_corrected_link_id || b?.link_no;
  const linkKey = sqlBotLinkKey(correctedLink);
  const originalLinkKey = sqlBotLinkKey(b?.link_no);
  const roadKey = sqlBotLinkKey(b?.road_no || String(b?.link_no || '').split('_')[0]);
  const byBridgeRaw = bot.bridge_predictions?.[b?._id];
  const byBridgeLinkKey = sqlBotLinkKey(byBridgeRaw?.link_id || byBridgeRaw?.bridge_link_no || byBridgeRaw?.link_no);
  const originalIsCorrected = !originalLinkKey || originalLinkKey === linkKey;
  const byBridge = byBridgeRaw && (!byBridgeLinkKey || byBridgeLinkKey === linkKey || (originalIsCorrected && byBridgeLinkKey === originalLinkKey))
    ? byBridgeRaw
    : null;
  const byLink = bot.link_evidence?.[linkKey] || null;
  const byRoad = bot.road_evidence?.[roadKey];
  const ev = byBridge || byLink || byRoad;
  if (!ev || !Number(ev.aadt_2026 || ev.adt_incl_motorcycles)) return null;
  return {
    ...ev,
    link_id: ev.link_id || correctedLink || b?.link_no,
    road_no: ev.road_no || b?.road_no,
    aadt_2026: Number(ev.aadt_2026 || ev.adt_incl_motorcycles || 0),
    adt_excl_motorcycles: Number(ev.adt_excl_motorcycles || 0),
    latest_year: ev.latest_year ?? null,
    latest_seasonal_factor: ev.latest_seasonal_factor ?? 1,
    observation_count: Number(ev.observed_days || ev.observation_count || 0),
    growth_rate: Number(ev.growth_rate || 0),
    class_shares: ev.class_shares || {},
    sources: ev.sources || ['SQLBot annual data collection'],
    basis: ev.basis || 'SQLBot annual data model',
    match_type: ev.match_type || (byLink ? 'exact-link' : 'road-corridor')
  };
}

function sqlBotOdRowsForBridge(b, limit = 8) {
  const bot = sqlBotTrafficStore();
  if (!bot?.od_matrix?.length) return [];
  const text = `${b?.link_name || ''} ${b?.road_descr_principal || ''}`.toLowerCase();
  const roadKey = sqlBotLinkKey(b?.road_no || String(b?.link_no || '').split('_')[0]);
  const linked = bot.od_matrix.filter(row => {
    const od = `${row.origin || ''} ${row.destination || ''}`.toLowerCase();
    return od.split(/\s+/).some(part => part.length > 3 && text.includes(part)) || sqlBotLinkKey(row.road_no) === roadKey;
  });
  return (linked.length ? linked : bot.od_matrix).slice(0, limit);
}

function bridgeRoadLinkEndpoints(row) {
  const raw = String(row?.location_corrected_link_name || row?.link_name || row?.road_descr_principal || row?.road_name || '').replace(/\s+/g, ' ').trim();
  const clean = raw.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
  const parts = clean.split(/\s+-\s+|-/).map(part => part.trim()).filter(part => part && !/^(?:link|road)$/i.test(part));
  if (parts.length >= 2) {
    return {
      origin: parts[0],
      destination: parts[parts.length - 1],
      confident: true
    };
  }
  const fallbackLink = raw || row?.link_no || row?.road_no || 'Host road link';
  return {
    origin: row?.station || row?.region || 'Host link start',
    destination: fallbackLink,
    confident: false
  };
}

function bridgeOdScoreForRow(row, od, endpoints = bridgeRoadLinkEndpoints(row)) {
  const odText = normalizeSearchText(`${od?.origin || ''} ${od?.destination || ''}`);
  if (!odText) return 0;
  const linkText = normalizeSearchText(`${row?.link_name || ''} ${row?.road_descr_principal || ''}`);
  const roadKey = sqlBotLinkKey(row?.road_no || String(row?.link_no || '').split('_')[0]);
  let score = 0;
  if (roadKey && sqlBotLinkKey(od?.road_no) === roadKey) score += 8;
  [endpoints.origin, endpoints.destination].forEach(endpoint => {
    const term = normalizeSearchText(endpoint);
    if (!term || term.length < 3) return;
    if (odText.includes(term)) score += 4;
    searchTokens(term).forEach(token => {
      if (token.length > 3 && odText.includes(token)) score += 1;
    });
  });
  searchTokens(linkText).forEach(token => {
    if (token.length > 4 && odText.includes(token)) score += 0.5;
  });
  const odOrigin = normalizeSearchText(od?.origin);
  const odDestination = normalizeSearchText(od?.destination);
  if (odOrigin && odDestination && linkText.includes(odOrigin) && linkText.includes(odDestination)) score += 5;
  return score;
}

function linkedSqlBotOdRowsForBridge(row, limit = 1, endpoints = bridgeRoadLinkEndpoints(row)) {
  const bot = sqlBotTrafficStore();
  if (!bot?.od_matrix?.length) return [];
  const minScore = endpoints.confident ? 4 : 6;
  return bot.od_matrix
    .map(od => ({ ...od, _od_match_score: bridgeOdScoreForRow(row, od, endpoints) }))
    .filter(od => od._od_match_score >= minScore)
    .sort((a, b) => {
      if (Number(b._od_match_score || 0) !== Number(a._od_match_score || 0)) return Number(b._od_match_score || 0) - Number(a._od_match_score || 0);
      if (Number(b.year || 0) !== Number(a.year || 0)) return Number(b.year || 0) - Number(a.year || 0);
      return Number(b.estimated_adt || 0) - Number(a.estimated_adt || 0);
    })
    .slice(0, limit);
}

function roadLinkAadtEvidenceFor(b) {
  const linkKey = normalizedLinkKey(b?.location_corrected_link_id || b?.link_no);
  const originalLinkKey = normalizedLinkKey(b?.link_no);
  const roadNo = normalizedLinkKey(b?.road_no || String(b?.link_no || '').split('_')[0]);
  const cacheKey = [linkKey, originalLinkKey, roadNo].join('|');
  if (roadLinkAadtEvidenceCache.has(cacheKey)) return roadLinkAadtEvidenceCache.get(cacheKey);
  const direct = ROAD_LINK_AADT_DATA[linkKey] || ROAD_LINK_AADT_DATA[originalLinkKey];
  if (direct) {
    const result = { ...direct, match_type: direct.match_type || 'exact-link' };
    roadLinkAadtEvidenceCache.set(cacheKey, result);
    return result;
  }
  if (!roadNo) {
    roadLinkAadtEvidenceCache.set(cacheKey, null);
    return null;
  }
  const candidates = Object.values(ROAD_LINK_AADT_DATA)
    .filter(r => normalizedLinkKey(r.road_no) === roadNo || normalizedLinkKey(r.link_id).startsWith(`${roadNo}_`))
    .sort((a, b) => {
      if (Number(b.latest_year || 0) !== Number(a.latest_year || 0)) return Number(b.latest_year || 0) - Number(a.latest_year || 0);
      return Number(b.observation_count || 0) - Number(a.observation_count || 0);
    });
  const result = candidates[0] ? { ...candidates[0], match_type: candidates[0].match_type || 'road-corridor' } : null;
  roadLinkAadtEvidenceCache.set(cacheKey, result);
  return result;
}

function classSharesToVolumes(shares, assignedAdt) {
  const volumes = {};
  Object.entries(shares || {}).forEach(([label, share]) => {
    const value = Number(share || 0) * Number(assignedAdt || 0);
    if (value > 0) volumes[label] = value;
  });
  return volumes;
}

function bucketVolumesFromClassVolumes(classVolumes) {
  const bucketVolumes = { Motorcycles: 0, 'Light Vehicles': 0, Buses: 0, 'Heavy Goods': 0, Other: 0 };
  Object.entries(classVolumes || {}).forEach(([label, value]) => {
    bucketVolumes[majorVehicleBucket(label)] = (bucketVolumes[majorVehicleBucket(label)] || 0) + Number(value || 0);
  });
  return bucketVolumes;
}

function classProfileFromAtcEvidence(atcStations, region, monthIndex = timelineMonth) {
  const profileKey = [
    normalizeTrafficRegion(region),
    Math.max(0, Math.min(11, Number(monthIndex) || 0)),
    (atcStations || []).map(site => [
      site.type || '',
      normalizeAtcId(site.id || site.name || ''),
      Number(site.distanceKm || 0).toFixed(2),
      Number(site.weight || 0).toFixed(5)
    ].join(':')).join('|')
  ].join('::');
  if (atcClassProfileCache.has(profileKey)) return atcClassProfileCache.get(profileKey);
  const bucketTotals = { Motorcycles: 0, 'Light Vehicles': 0, Buses: 0, 'Heavy Goods': 0, Other: 0 };
  const classTotals = {};
  let weightedAdt = 0;
  let rawWeightedAdt = 0;
  let weightSum = 0;

  atcStations.forEach(site => {
    const legacyProfile = site.legacyProfile || null;
    const legacySeasonal = legacyProfile?.seasonal_factors?.[Math.max(0, Math.min(11, Number(monthIndex) || 0))];
    const rawStationAdt = Number(legacyProfile?.latest_year_avg_adt || legacyProfile?.avg_adt_2016_2022 || site.breakdown?.includingMotorcycles || site.flow?.aadt || 0);
    const stationAdt = rawStationAdt
      ? rawStationAdt * Number(legacySeasonal || seasonalCorrectionFactor(region || site.region, monthIndex))
      : 0;
    if (!stationAdt) return;
    weightedAdt += stationAdt * site.weight;
    rawWeightedAdt += rawStationAdt * site.weight;
    weightSum += site.weight;

    if (legacyProfile?.class_shares) {
      Object.entries(legacyProfile.class_shares).forEach(([label, share]) => {
        const classAdt = stationAdt * Number(share || 0);
        classTotals[label] = (classTotals[label] || 0) + classAdt * site.weight;
        const bucket = majorVehicleBucket(label);
        bucketTotals[bucket] = (bucketTotals[bucket] || 0) + classAdt * site.weight;
      });
    } else if (site.breakdown?.rows?.length) {
      site.breakdown.rows.forEach(row => {
        const label = row.label || 'Unclassified';
        const classAdt = Number(row.adt || 0) * (rawStationAdt ? stationAdt / rawStationAdt : 1);
        classTotals[label] = (classTotals[label] || 0) + classAdt * site.weight;
        bucketTotals[row.bucket] = (bucketTotals[row.bucket] || 0) + classAdt * site.weight;
      });
    } else if (site.flow) {
      const heavyAdt = stationAdt * Number(site.flow.heavy_pct || 0) / 100;
      const lightAdt = Math.max(0, stationAdt - heavyAdt);
      bucketTotals['Light Vehicles'] += lightAdt * site.weight;
      bucketTotals['Heavy Goods'] += heavyAdt * site.weight;
      classTotals['Light vehicles - unclassified'] = (classTotals['Light vehicles - unclassified'] || 0) + lightAdt * site.weight;
      classTotals['Heavy vehicles - unclassified'] = (classTotals['Heavy vehicles - unclassified'] || 0) + heavyAdt * site.weight;
    }
  });

  const totalBucket = Object.values(bucketTotals).reduce((s, v) => s + v, 0);
  const totalClass = Object.values(classTotals).reduce((s, v) => s + v, 0);
  const bucketShares = {};
  const classShares = {};
  Object.entries(bucketTotals).forEach(([k, v]) => { bucketShares[k] = totalBucket ? v / totalBucket : 0; });
  Object.entries(classTotals).forEach(([k, v]) => { classShares[k] = totalClass ? v / totalClass : 0; });

  const result = {
    weightedAtcAdt: weightSum ? weightedAdt / weightSum : null,
    rawWeightedAtcAdt: weightSum ? rawWeightedAdt / weightSum : null,
    seasonalFactor: seasonalCorrectionFactor(region, monthIndex),
    bucketShares,
    classShares,
    sourceWeight: weightSum
  };
  atcClassProfileCache.set(profileKey, result);
  return result;
}

function bridgeTrafficEvidence(b) {
  const cacheKey = bridgeEvidenceCacheKey(b);
  if (bridgeTrafficEvidenceCache.has(cacheKey)) return bridgeTrafficEvidenceCache.get(cacheKey);
  const manualStations = nearestManualStationsForBridge(b, 8);
  const allAtcStations = combinedAtcStationsForBridge(b, 25);
  const atcStations = allAtcStations.filter(s => s.type === 'current-atc');
  const legacyAtcStations = allAtcStations.filter(s => s.type === 'legacy-atc');
  const nearestAtc = allAtcStations[0] || null;
  const profile = classProfileFromAtcEvidence(allAtcStations, b.region, timelineMonth);
  const sqlBotEvidence = sqlBotEvidenceForBridge(b);
  const repositoryLinkEvidence = roadLinkAadtEvidenceFor(b);
  const repoExact = repositoryLinkEvidence && normalizedLinkKey(repositoryLinkEvidence.link_id) === normalizedLinkKey(b.link_no);
  const sqlExact = sqlBotEvidence && (
    sqlBotEvidence.match_type === 'exact-link' ||
    sqlBotLinkKey(sqlBotEvidence.link_id) === sqlBotLinkKey(b.link_no)
  );
  const linkEvidence = repoExact
    ? repositoryLinkEvidence
    : (sqlExact ? sqlBotEvidence : (repositoryLinkEvidence || sqlBotEvidence));
  const hasExactLinkAadt = normalizedLinkKey(linkEvidence?.link_id) === normalizedLinkKey(b.link_no) || linkEvidence?.match_type === 'exact-link';
  const exactLegacyProfile = legacyAtcProfileForLink(b.link_no);
  const legacyAadt = Number(exactLegacyProfile?.latest_year_avg_adt || exactLegacyProfile?.avg_adt_2016_2022 || 0);
  const linkAadt = Number(linkEvidence?.aadt_2026 || b.aadt_rebuilt_2026 || b.aadt_2025 || 0);
  const nearestRawAtcAdt = Number(nearestAtc?.legacyProfile?.latest_year_avg_adt || nearestAtc?.legacyProfile?.avg_adt_2016_2022 || nearestAtc?.breakdown?.includingMotorcycles || nearestAtc?.flow?.aadt || 0);
  const nearestCorrectedAtcAdt = seasonallyCorrectAdt(nearestRawAtcAdt, b.region, timelineMonth);
  const atcAadt = Number(profile.weightedAtcAdt || nearestCorrectedAtcAdt || 0);
  const nearestDistance = Number(nearestAtc?.distanceKm ?? 999);
  let assignedAdt = 0;
  let assignedBasis = 'No ADT evidence';
  let bestClassShares = null;

  if (hasExactLinkAadt && linkAadt) {
    assignedAdt = linkAadt;
    assignedBasis = linkEvidence?.basis || 'Exact road-link AADT rebuilt from classified traffic evidence';
    bestClassShares = linkEvidence?.class_shares || null;
  } else if (atcAadt && atcAadt >= Math.max(linkAadt, legacyAadt)) {
    assignedAdt = atcAadt;
    assignedBasis = 'Assigned bridge ADT from the traffic evidence model';
  } else if (linkAadt) {
    assignedAdt = linkAadt;
    assignedBasis = linkEvidence?.basis || 'Road-corridor AADT proxy from the traffic repository';
    bestClassShares = linkEvidence?.class_shares || null;
  } else if (legacyAadt) {
    assignedAdt = legacyAadt;
    assignedBasis = 'Exact legacy ATC 2016-2022 corridor ADT';
    bestClassShares = exactLegacyProfile?.class_shares || null;
  }

  bestClassShares = bestClassShares || exactLegacyProfile?.class_shares;
  const classVolumes = bestClassShares
    ? classSharesToVolumes(bestClassShares, assignedAdt)
    : Object.fromEntries(Object.entries(profile.classShares).map(([label, share]) => [label, assignedAdt * share]));
  const bucketVolumes = Object.keys(classVolumes).length
    ? bucketVolumesFromClassVolumes(classVolumes)
    : Object.fromEntries(['Motorcycles', 'Light Vehicles', 'Buses', 'Heavy Goods', 'Other'].map(k => [k, assignedAdt * Number(profile.bucketShares[k] || 0)]));
  const motorcycleAdt = bucketVolumes.Motorcycles || 0;
  const evidenceScore = Math.min(100,
    (allAtcStations.length ? 45 : 0) +
    (legacyAtcStations.some(s => s.sameLink) ? 12 : 0) +
    Math.max(0, 25 - Math.min(nearestDistance, 50) / 2) +
    Math.min(20, manualStations.length * 7) +
    (manualStations.some(s => s.sameLink) ? 10 : 0)
  );

  const result = {
    manualStations,
    atcStations: allAtcStations,
    currentAtcStations: atcStations,
    legacyAtcStations,
    nearestManual: manualStations[0] || null,
    nearestAtc,
    linkAadt,
    legacyAadt,
    legacyProfile: exactLegacyProfile,
    linkEvidence,
    sqlBotEvidence,
    hasExactLinkAadt,
    weightedAtcAdt: atcAadt || null,
    rawWeightedAtcAdt: profile.rawWeightedAtcAdt ?? (nearestRawAtcAdt || null),
    seasonalFactor: linkEvidence?.latest_seasonal_factor ?? profile.seasonalFactor ?? seasonalCorrectionFactor(b.region, timelineMonth),
    assignedBasis,
    assignedAdt,
    assignedAdtExclMotorcycles: Math.max(0, assignedAdt - motorcycleAdt),
    bucketVolumes,
    classVolumes,
    evidenceScore
  };
  bridgeTrafficEvidenceCache.set(cacheKey, result);
  return result;
}

function roadInfluenceRowsForBridge(b, limit = 10) {
  const allRoads = [...(ROAD_GEOMETRY || []), ...(NATIONAL_ROAD_NETWORK || [])];
  const bridgeRoadNo = normalizedLinkKey(b?.road_no || String(b?.link_no || '').split('_')[0]);
  const bridgeLink = normalizedLinkKey(b?.link_no);
  const rows = allRoads
    .filter(r => normalizedLinkKey(r.id) === bridgeLink || normalizedLinkKey(r.road_no) === bridgeRoadNo)
    .map(r => {
      const firstLine = r.lines?.[0] || [];
      const mid = firstLine.length ? firstLine[Math.floor(firstLine.length / 2)] : [null, null];
      return {
        id: r.id,
        road_no: r.road_no,
        name: r.name,
        cls: r.cls || canonicalRoadClass(r.road_no || r.id),
        surface: r.surface || '',
        region: r.region || '',
        station: r.station || '',
        length: r.length,
        longitude: mid?.[0] ?? null,
        latitude: mid?.[1] ?? null,
        role: normalizedLinkKey(r.id) === bridgeLink ? 'Host bridge road link' : 'Same road corridor influence'
      };
    })
    .sort((a, b2) => {
      if (a.role !== b2.role) return a.role === 'Host bridge road link' ? -1 : 1;
      return Number(b2.length || 0) - Number(a.length || 0);
    });
  return rows.slice(0, limit);
}

function classVolumeText(volumes) {
  return Object.entries(volumes || {})
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => `${label}: ${fmt(value, 0)}`)
    .join('; ');
}

const MAJOR_PERIOD_CLASSES = ['Motorcycles', 'Light Vehicles', 'Buses', 'Heavy Goods', 'Other'];
const BRIDGE_REFERENCE_CORRECTIONS = {
  B046: {
    bridge_nam: 'Source of the Nile Bridge Jinja (New Jinja Bridge)',
    official_name: 'Source of the Nile Bridge Jinja',
    known_as: 'New Jinja Bridge',
    river: 'Victoria Nile',
    carries: 'Kampala-Jinja Expressway',
    locale: 'Jinja, Uganda',
    bridge_design: 'Cable-stayed bridge',
    bridge_material: 'Steel, concrete',
    bridge_len: 525,
    longest_span_m: 285,
    bridge_wid: 22.9,
    year_compl: 2018,
    construction_start: 'January 2014',
    opened_date: '2018-10-17',
    source_reference_note: 'Reference note supplied for Source of the Nile Bridge Jinja; coordinates 0.438611 N, 33.187500 E.',
    x_new: 33.1875,
    y_new: 0.438611,
    source_x_new: 33.1875,
    source_y_new: 0.438611,
    no_of_lane: 4,
    traffic_flow_directions: 2,
    road_descr_principal: 'Source of the Nile Bridge Jinja',
    type_crossing: '01'
  }
};

const PROPOSED_BRIDGE_NUMBER_POOLS = {
  Central: ['B140', 'B141', 'B152', 'B153', 'B155', 'B157', 'B180', 'B190', 'B191', 'B193', 'B194', 'B205', 'B420', 'B421', 'B422', 'B423', 'B424', 'B425', 'B426', 'B427'],
  Southern: ['B559', 'B562', 'B563', 'B564', 'B565', 'B566', 'B567', 'B568', 'B569', 'B570', 'B571', 'B572', 'B573', 'B574', 'B575', 'B576', 'B577', 'B578', 'B579', 'B580'],
  Western: ['B645', 'B646', 'B647', 'B648', 'B649', 'B650', 'B651', 'B652', 'B653', 'B654', 'B655', 'B656', 'B657', 'B658', 'B659', 'B660', 'B661', 'B662', 'B663', 'B664'],
  Northern: ['B728', 'B729', 'B730', 'B734', 'B742', 'B744', 'B745', 'B746', 'B747', 'B748', 'B749', 'B753', 'B754', 'B755', 'B756', 'B757', 'B758', 'B759'],
  Eastern: ['B771', 'B772', 'B773', 'B774', 'B775', 'B776', 'B777', 'B778', 'B779', 'B780', 'B781', 'B782', 'B783', 'B784', 'B785', 'B786', 'B787', 'B788', 'B789', 'B790']
};

const BRIDGE_NUMBER_CORRECTIONS = {
  'bridge-b387': {
    bridge_no: 'B559',
    new_bridge_no: 'B559',
    note: 'Kaseiga in Kasese moved from B387 because B387 is already reserved in the Central/Jinja bridge numbering block.'
  },
  'bridge-b389': {
    bridge_no: 'B771',
    new_bridge_no: 'B771',
    region: 'North Eastern',
    station: 'Kotido',
    link_no: 'B302_Link01',
    road_no: 'B302',
    link_name: 'Kotido - Abim',
    note: 'Dopeth Irish Crossing moved from B389 because B389 is already reserved in the Central/Jinja bridge numbering block.'
  },
  'bridge-b888': {
    bridge_no: 'B772',
    new_bridge_no: 'B772',
    note: 'Nabilatuk Irish Crossing moved from duplicate B272 to the Eastern proposed numbering pool.'
  },
  'bridge-b890': {
    bridge_no: 'B728',
    new_bridge_no: 'B728',
    note: 'Agago Irish Crossing moved from duplicate B769 to the Northern proposed numbering pool.'
  },
  'bridge-b637': {
    bridge_no: 'B420',
    new_bridge_no: 'B420',
    note: 'Kafu duplicate moved from B637 to the Central proposed numbering pool; B637 is retained for Paraa Bridge 2 in Western.'
  }
};

function applyBridgeReferenceCorrections() {
  BRIDGES.forEach(bridge => {
    const correction = BRIDGE_REFERENCE_CORRECTIONS[bridge.bridge_no] || BRIDGE_REFERENCE_CORRECTIONS[bridge.new_bridge_no];
    if (!correction) return;
    Object.assign(bridge, correction);
    bridge.reference_attributes = {
      ...(bridge.reference_attributes || {}),
      bridgename: correction.bridge_nam,
      coordinatee: correction.x_new,
      coordinates: correction.y_new,
      river: correction.river,
      roaddescrprincipal: correction.road_descr_principal,
      official_name: correction.official_name,
      known_as: correction.known_as,
      carries: correction.carries,
      design: correction.bridge_design,
      material: correction.bridge_material,
      opened_date: correction.opened_date,
      overallbridgelength: correction.bridge_len,
      longest_span_m: correction.longest_span_m,
      numberoflanes: correction.no_of_lane
    };
  });
}

function setBridgeNumber(bridge, bridgeNo, note) {
  bridge.bridge_no = bridgeNo;
  bridge.new_bridge_no = bridgeNo;
  bridge.bridge_number_unique_status = 'Unique';
  bridge.bridge_number_correction_note = note || 'Assigned from proposed unused bridge numbering pool.';
  bridge.reference_attributes = {
    ...(bridge.reference_attributes || {}),
    new_bridge_number: bridgeNo,
    bridgenumber: bridgeNo,
    bridge_number_correction_note: bridge.bridge_number_correction_note
  };
}

function bridgeNumberRegionKey(bridge) {
  const region = String(bridge?.region || '').toLowerCase();
  const station = String(bridge?.station || '').toLowerCase();
  if (region.includes('north') && !region.includes('eastern')) return 'Northern';
  if (region.includes('eastern') || region.includes('moroto') || station.includes('kotido') || station.includes('moroto')) return 'Eastern';
  if (region.includes('western') || station.includes('fort portal') || station.includes('hoima') || station.includes('masindi')) return 'Western';
  if (region.includes('southern') || station.includes('kasese') || station.includes('mbarara') || station.includes('mpigi')) return 'Southern';
  return 'Central';
}

function nextUnusedBridgeNumberForRegion(bridge, used) {
  const regionKey = bridgeNumberRegionKey(bridge);
  const pools = [
    ...(PROPOSED_BRIDGE_NUMBER_POOLS[regionKey] || []),
    ...Object.keys(PROPOSED_BRIDGE_NUMBER_POOLS)
      .filter(key => key !== regionKey)
      .flatMap(key => PROPOSED_BRIDGE_NUMBER_POOLS[key])
  ];
  return pools.find(no => !used.has(no)) || null;
}

function applyBridgeNumberCorrections() {
  BRIDGES.forEach(bridge => {
    const correction = BRIDGE_NUMBER_CORRECTIONS[bridge._id];
    if (!correction) return;
    const previousBridgeNo = bridge.bridge_no || '';
    Object.entries(correction).forEach(([key, value]) => {
      if (key !== 'bridge_no' && key !== 'new_bridge_no' && key !== 'note') bridge[key] = value;
    });
    setBridgeNumber(bridge, correction.bridge_no, correction.note);
    bridge.bridge_number_previous_assignment = previousBridgeNo;
    if (bridge.reference_attributes) {
      if (correction.link_no) bridge.reference_attributes.link_id = correction.link_no;
      if (correction.link_name) bridge.reference_attributes.link_name = correction.link_name;
      if (correction.road_no) bridge.reference_attributes.road_no = correction.road_no;
      if (correction.region) bridge.reference_attributes.maintenance_region = correction.region;
      if (correction.station) bridge.reference_attributes.maintenance_station = correction.station;
    }
  });

  const used = new Set();
  const seen = new Map();
  BRIDGES.forEach(bridge => {
    const no = String(bridge.bridge_no || '').trim().toUpperCase();
    if (!/^B\d{3}$/.test(no)) return;
    if (!seen.has(no)) {
      seen.set(no, bridge);
      used.add(no);
      return;
    }
    const replacement = nextUnusedBridgeNumberForRegion(bridge, used);
    if (replacement) {
      setBridgeNumber(bridge, replacement, `Auto-corrected from duplicate ${no} using the ${bridgeNumberRegionKey(bridge)} proposed numbering pool.`);
      used.add(replacement);
    } else {
      bridge.bridge_number_unique_status = 'Duplicate - review required';
      bridge.bridge_number_correction_note = `Duplicate bridge number ${no}; no unused proposed number was available.`;
    }
  });
}

function toBridgeSentenceCase(value) {
  if (value === null || value === undefined) return value;
  const cleaned = String(value).trim().replace(/\s+/g, ' ');
  if (!cleaned) return cleaned;
  return cleaned
    .toLocaleLowerCase('en-UG')
    .replace(/(^|[\s\-\/(\[])([a-z])/g, (match, lead, letter) => lead + letter.toLocaleUpperCase('en-UG'))
    .replace(/\bIi\b/g, 'II')
    .replace(/\bIii\b/g, 'III')
    .replace(/\bIv\b/g, 'IV');
}

applyBridgeReferenceCorrections();
applyBridgeNumberCorrections();

BRIDGES.forEach(bridge => {
  bridge.bridge_nam = toBridgeSentenceCase(bridge.bridge_nam);
  if (bridge.reference_attributes && bridge.reference_attributes.bridgename) {
    bridge.reference_attributes.bridgename = toBridgeSentenceCase(bridge.reference_attributes.bridgename);
  }
});

const PERIOD_DEFINITIONS = [
  { key: 'hour', label: 'Hour', days: 1 / 24 },
  { key: 'day', label: 'Day', days: 1 },
  { key: 'week', label: 'Week', days: 7 },
  { key: 'month', label: 'Month', days: null },
  { key: 'year', label: 'Year', days: null }
];

function daysInMonth(year, monthIndex = timelineMonth) {
  return new Date(Number(year), Number(monthIndex) + 1, 0).getDate();
}

function daysInYear(year) {
  const y = Number(year);
  return ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) ? 366 : 365;
}

function bridgeAnnualGrowthFactor(row, year) {
  const rate = Number(row.annual_traffic_growth_rate ?? row.road_link_aadt_growth_rate ?? 0);
  const baseYear = Number(row.road_link_aadt_latest_year || 2026);
  const exponent = Number(year) - baseYear;
  return Number.isFinite(rate) ? Math.pow(1 + rate, exponent) : 1;
}

function bridgeClassDailyVolume(row, className) {
  const map = {
    Motorcycles: row.motorcycle_adt,
    'Light Vehicles': row.light_vehicle_adt,
    Buses: row.bus_adt,
    'Heavy Goods': row.heavy_goods_adt,
    Other: row.other_vehicle_adt
  };
  return Number(map[className] || 0);
}

function vehicleClassPeriodSummaryRows(rows = buildBridgeTrafficRows(), startYear = 2016, endYear = 2035) {
  const summaries = [];
  for (let year = startYear; year <= endYear; year++) {
    PERIOD_DEFINITIONS.forEach(period => {
      MAJOR_PERIOD_CLASSES.forEach(className => {
        let volume = 0;
        let growthWeighted = 0;
        let seasonalWeighted = 0;
        let baseDaily = 0;
        let bridgesWithEvidence = 0;
        rows.forEach(row => {
          const dailyClass = bridgeClassDailyVolume(row, className);
          if (!dailyClass) return;
          const growthFactor = bridgeAnnualGrowthFactor(row, year);
          const seasonalFactor = Number(row.seasonal_factor || seasonalCorrectionFactor(row.region, timelineMonth) || 1);
          const periodDays = period.key === 'month' ? daysInMonth(year, timelineMonth) : period.key === 'year' ? daysInYear(year) : period.days;
          const value = dailyClass * growthFactor * seasonalFactor * periodDays;
          volume += value;
          baseDaily += dailyClass;
          growthWeighted += growthFactor * dailyClass;
          seasonalWeighted += seasonalFactor * dailyClass;
          bridgesWithEvidence++;
        });
        summaries.push({
          year,
          period: period.label,
          vehicle_class: className,
          bridge_count: rows.length,
          bridges_with_class_evidence: bridgesWithEvidence,
          base_daily_adt: baseDaily,
          annual_growth_factor: baseDaily ? growthWeighted / baseDaily : 1,
          seasonal_factor: baseDaily ? seasonalWeighted / baseDaily : seasonalCorrectionFactor('Central', timelineMonth),
          period_volume: volume,
          month: timelineMonth + 1,
          month_name: new Date(2026, timelineMonth, 1).toLocaleString('en-US', { month: 'long' })
        });
      });
    });
  }
  return summaries;
}

function vehicleClassPeriodCsvText(rows = buildBridgeTrafficRows()) {
  const escapeCSV = val => {
    if (val == null) return '""';
    const str = String(val).trim();
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) return '"' + str.replace(/"/g, '""') + '"';
    return str;
  };
  const headers = [
    'Year', 'Projection Month', 'Period', 'Vehicle Class', 'Bridge Count', 'Bridges With Class Evidence',
    'Base Daily ADT', 'Annual Weighted Growth Factor', 'Seasonal Factor', 'Projected Period Volume'
  ];
  const lines = [headers.join(',')];
  vehicleClassPeriodSummaryRows(rows).forEach(r => {
    lines.push([
      r.year, r.month_name, r.period, r.vehicle_class, r.bridge_count, r.bridges_with_class_evidence,
      r.base_daily_adt.toFixed(2), r.annual_growth_factor.toFixed(6), r.seasonal_factor.toFixed(6), r.period_volume.toFixed(2)
    ].map(escapeCSV).join(','));
  });
  lines.push('');
  lines.push('Bridge Name,Bridge No,Link ID,Road Class,Region,Station,Current Assigned ADT Incl MC,Annual Weighted Growth Rate,Seasonal Factor,Motorcycles ADT,Light Vehicles ADT,Buses ADT,Heavy Goods ADT,Other ADT');
  rows.forEach(r => {
    lines.push([
      r.bridge_nam, r.bridge_no, r.link_no, r.road_class, r.region, r.station,
      Number(r.assigned_adt_incl_motorcycles || 0).toFixed(2),
      r.annual_traffic_growth_rate != null ? Number(r.annual_traffic_growth_rate).toFixed(6) : '',
      r.seasonal_factor != null ? Number(r.seasonal_factor).toFixed(6) : '',
      Number(r.motorcycle_adt || 0).toFixed(2), Number(r.light_vehicle_adt || 0).toFixed(2),
      Number(r.bus_adt || 0).toFixed(2), Number(r.heavy_goods_adt || 0).toFixed(2),
      Number(r.other_vehicle_adt || 0).toFixed(2)
    ].map(escapeCSV).join(','));
  });
  return lines.join('\n');
}

function exportVehicleClassPeriodCSV() {
  const blob = new Blob(['\ufeff' + vehicleClassPeriodCsvText(buildBridgeTrafficRows())], { type: 'text/csv;charset=utf-8;' });
  downloadBlob('uganda_bridge_vehicle_class_period_growth_summary.csv', blob);
}

function monthlyHeavyFor(id) {
  const norm = normalizeAtcId(id);
  const rows = (ATC_FLOW.monthly || []).filter(m => normalizeAtcId(m.id) === norm);
  if (!rows.length) return { total: null, heavy: null, avgHeavy: null, months: 0 };
  const total = rows.reduce((s, r) => s + Number(r.total || 0), 0);
  const heavy = rows.reduce((s, r) => s + Number(r.heavy || 0), 0);
  return { total, heavy, avgHeavy: heavy / rows.length, months: rows.length };
}

function priorityFromScore(score) {
  if (score >= 82) return 'High';
  if (score >= 62) return 'Medium';
  if (score >= 42) return 'Watch';
  return 'Low';
}

function priorityClass(p) {
  return p === 'High' ? 'priority-high' : p === 'Medium' ? 'priority-medium' : p === 'Watch' ? 'priority-watch' : 'priority-low';
}

function trafficBand(aadt) {
  const v = Number(aadt || 0);
  if (v >= 20000) return 'Very High >=20k';
  if (v >= 10000) return 'High 10k-20k';
  if (v >= 4500) return 'Moderate 4.5k-10k';
  if (v >= 1000) return 'Low 1k-4.5k';
  return 'Very Low <1k';
}

function bridgeFlowIsTwoWay(record) {
  const cls = canonicalRoadClass(record?.road_class || record?.cls);
  const raw = String(record?.traffic_flow_directions ?? record?.reference_attributes?.trafflowdirections ?? '').trim();
  if (raw === '1') return false;
  if (raw === '2') return true;
  return cls !== 'M';
}

function bridgeFlowDirectionModel(record) {
  return bridgeFlowIsTwoWay(record) ? 'Two-way single carriageway' : 'One-way or divided carriageway';
}

const ROAD_CLASS_ANNUAL_GROWTH_RATES = {
  M: 0.055,
  A: 0.045,
  B: 0.038,
  C: 0.032
};

function normalizedAnnualGrowthRate(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > -0.2 && n < 0.5 ? n : null;
}

function usableAnnualGrowthRate(value, evidence = null) {
  const rate = normalizedAnnualGrowthRate(value);
  if (rate == null) return null;
  if (Math.abs(rate) > 0.000001) return rate;
  const observedYears = Array.isArray(evidence?.observed_years) ? evidence.observed_years.length : 0;
  return observedYears > 1 ? rate : null;
}

function growthSeriesFromRecord(record) {
  const series = Array.isArray(record?.annual)
    ? record.annual
    : (Array.isArray(record?.annual_adt) ? record.annual_adt : (Array.isArray(record?.yearly_adt) ? record.yearly_adt : []));
  const rows = series.map(item => ({
    year: Number(item?.year ?? item?.Year ?? item?.YEAR),
    aadt: Number(item?.aadt ?? item?.adt ?? item?.avg_adt ?? item?.raw_adt ?? item?.volume ?? item?.estimated_adt)
  }))
    .filter(item => Number.isFinite(item.year) && Number.isFinite(item.aadt) && item.aadt > 0)
    .sort((a, b) => a.year - b.year);
  if (rows.length >= 2) return rows;
  const yearly = record?.yearly || record?.years || null;
  if (!yearly || typeof yearly !== 'object') return rows;
  return Object.entries(yearly).map(([year, value]) => ({
    year: Number(year),
    aadt: Number(value?.aadt ?? value?.adt ?? value?.avg_adt ?? value)
  }))
    .filter(item => Number.isFinite(item.year) && Number.isFinite(item.aadt) && item.aadt > 0)
    .sort((a, b) => a.year - b.year);
}

function annualSeriesGrowthRate(record) {
  const rows = growthSeriesFromRecord(record);
  if (rows.length >= 2) {
    const first = rows[0];
    const last = rows[rows.length - 1];
    if (last.year > first.year && first.aadt > 0) {
      const rate = Math.pow(last.aadt / first.aadt, 1 / (last.year - first.year)) - 1;
      const normalized = normalizedAnnualGrowthRate(rate);
      if (normalized != null) return normalized;
    }
  }
  return usableAnnualGrowthRate(record?.growth_rate ?? record?.annual_growth_rate ?? record?.road_link_aadt_growth_rate, record);
}

function growthWeightFromRecord(record) {
  const aadt = Number(record?.aadt_2026 ?? record?.latest_aadt ?? record?.latest_year_avg_adt ?? record?.avg_adt_2016_2022 ?? record?.adt_incl_motorcycles ?? 0);
  const years = Array.isArray(record?.observed_years) ? record.observed_years.length : growthSeriesFromRecord(record).length;
  return Math.max(1, Math.min(100000, aadt || 1)) * (years > 1 ? 1.35 : 1);
}

function weightedObservedGrowthRate(records) {
  let weighted = 0;
  let weights = 0;
  (records || []).forEach(record => {
    const rate = annualSeriesGrowthRate(record);
    if (rate == null) return;
    const weight = growthWeightFromRecord(record);
    weighted += rate * weight;
    weights += weight;
  });
  return weights ? weighted / weights : null;
}

function roadCorridorObservedGrowthRate(bridge) {
  const roadNo = normalizedLinkKey(bridge?.road_no || String(bridge?.link_no || '').split('_')[0]);
  if (!roadNo) return null;
  return weightedObservedGrowthRate(Object.values(ROAD_LINK_AADT_DATA || {}).filter(record =>
    normalizedLinkKey(record.road_no) === roadNo || normalizedLinkKey(record.link_id).startsWith(`${roadNo}_`)
  ));
}

function regionalObservedGrowthRate(region) {
  const target = normalizeTrafficRegion(region);
  return weightedObservedGrowthRate(Object.values(ROAD_LINK_AADT_DATA || {}).filter(record => normalizeTrafficRegion(record.region) === target));
}

function functionalClassObservedGrowthRate(roadClass) {
  const cls = canonicalRoadClass(roadClass);
  return weightedObservedGrowthRate(Object.values(ROAD_LINK_AADT_DATA || {}).filter(record => canonicalRoadClass(record.road_class || record.road_no || record.link_id) === cls));
}

function spatialAtcWeightedGrowthRate(bridge, evidence = null) {
  const sites = evidence?.atcStations?.length ? evidence.atcStations : combinedAtcStationsForBridge(bridge, 15);
  let weighted = 0;
  let weights = 0;
  (sites || []).forEach(site => {
    const stationRoadNo = normalizedLinkKey(site.road_no || String(site.link_id || site.road || '').match(/\b[ABC]\d{3}|M\d+/i)?.[0] || '');
    const rate = annualSeriesGrowthRate(site.legacyProfile) ?? roadCorridorObservedGrowthRate({
      road_no: stationRoadNo,
      link_no: site.link_id,
      road_class: bridge?.road_class
    });
    if (rate == null) return;
    const spatialWeight = Math.max(0.05, Number(site.weight || 0.05)) * (site.sameLink ? 3 : site.sameRoad ? 1.8 : 0.65);
    weighted += rate * spatialWeight;
    weights += spatialWeight;
  });
  return weights ? weighted / weights : null;
}

function bridgeAnnualWeightedGrowthModel(bridge, evidence = null) {
  const linkEvidence = evidence?.linkEvidence || roadLinkAadtEvidenceFor(bridge);
  const sqlEvidence = evidence?.sqlBotEvidence || sqlBotEvidenceForBridge(bridge);
  const bridgeLink = normalizedLinkKey(bridge?.link_no);
  const linkExact = linkEvidence && (linkEvidence.match_type === 'exact-link' || normalizedLinkKey(linkEvidence.link_id) === bridgeLink);
  const sqlExact = sqlEvidence && (sqlEvidence.match_type === 'exact-link' || sqlBotLinkKey(sqlEvidence.link_id) === sqlBotLinkKey(bridge?.link_no));
  const components = [];
  const add = (label, rate, weight) => {
    const normalized = normalizedAnnualGrowthRate(rate);
    if (normalized == null || !Number.isFinite(weight) || weight <= 0) return;
    components.push({ label, rate: normalized, weight });
  };

  add('host-link traffic history', linkExact ? annualSeriesGrowthRate(linkEvidence) : null, 0.46);
  add('annual data collection link history', sqlExact ? annualSeriesGrowthRate(sqlEvidence) : null, 0.20);
  add('same-road corridor history', roadCorridorObservedGrowthRate(bridge), linkExact ? 0.12 : 0.24);
  add('spatial ATC/count-station influence', spatialAtcWeightedGrowthRate(bridge, evidence), 0.20);
  add('regional observed growth', regionalObservedGrowthRate(bridge?.region), 0.12);
  add('functional road-class growth', functionalClassObservedGrowthRate(bridge?.road_class), 0.12);
  add(`class ${canonicalRoadClass(bridge?.road_class)} design prior`, ROAD_CLASS_ANNUAL_GROWTH_RATES[canonicalRoadClass(bridge?.road_class)] ?? 0.035, 0.04);

  const totalWeight = components.reduce((s, item) => s + item.weight, 0);
  const rate = totalWeight
    ? components.reduce((s, item) => s + item.rate * item.weight, 0) / totalWeight
    : (ROAD_CLASS_ANNUAL_GROWTH_RATES[canonicalRoadClass(bridge?.road_class)] ?? 0.035);
  const source = `Annual weighted growth rate: ${components.slice(0, 4).map(item => item.label).join(' + ')}`;
  return {
    rate,
    source,
    components
  };
}

function bridgeAnnualTrafficGrowthRate(bridge, evidence = null) {
  return bridgeAnnualWeightedGrowthModel(bridge, evidence).rate;
}

function bridgeAnnualTrafficGrowthSource(bridge, evidence = null) {
  return bridgeAnnualWeightedGrowthModel(bridge, evidence).source;
}

function cachedBridgeAnnualWeightedGrowthModel(bridge) {
  if (!bridge) return { rate: null, source: '', components: [] };
  if (bridge._annual_weighted_growth_model_cache) return bridge._annual_weighted_growth_model_cache;
  const model = bridgeAnnualWeightedGrowthModel(bridge);
  Object.defineProperty(bridge, '_annual_weighted_growth_model_cache', {
    value: model,
    writable: true,
    configurable: true
  });
  return model;
}

function formatGrowthPercent(value, digits = 2) {
  const n = Number(value);
  return Number.isFinite(n) ? `${(n * 100).toFixed(digits)}%` : 'N/A';
}

function weightedAnnualTrafficGrowthRate(rows) {
  const valid = (rows || []).filter(r => normalizedAnnualGrowthRate(r.annual_traffic_growth_rate) != null);
  if (!valid.length) return null;
  const weighted = valid.reduce((s, r) => s + Number(r.annual_traffic_growth_rate) * Math.max(1, Number(r.assigned_adt_incl_motorcycles || 0)), 0);
  const weights = valid.reduce((s, r) => s + Math.max(1, Number(r.assigned_adt_incl_motorcycles || 0)), 0);
  return weights ? weighted / weights : valid.reduce((s, r) => s + Number(r.annual_traffic_growth_rate), 0) / valid.length;
}

function buildBridgeTrafficRows(options = {}) {
  const useCache = !options.sourceBridges && !options.skipCache;
  const cacheKey = useCache ? bridgeTrafficRowsCacheKey() : null;
  if (useCache && bridgeTrafficRowsCache.key === cacheKey && Array.isArray(bridgeTrafficRowsCache.rows)) {
    return bridgeTrafficRowsCache.rows;
  }
  const sourceBridges = getBridgeTrafficSourceBridges(options.sourceBridges || getFilteredBridges());
  const rows = sourceBridges.map(b => {
    const evidence = bridgeTrafficEvidence(b);
    const annualGrowthModel = bridgeAnnualWeightedGrowthModel(b, evidence);
    const annualGrowthRate = annualGrowthModel.rate;
    const annualGrowthSource = annualGrowthModel.source;
    const nearest = evidence.nearestAtc;
    const nearestManual = evidence.nearestManual;
    const flow = nearest ? atcFlowFor(nearest.id) : null;
    const speed = nearest ? atcSpeedFor(nearest.id) : null;
    const monthly = nearest ? monthlyHeavyFor(nearest.id) : { total: null, heavy: null, avgHeavy: null, months: 0 };
    const distancePenalty = nearest ? Math.max(0, 1 - Math.min(nearest.distanceKm, 250) / 250) : 0;
    const linkAadt = Number(b.aadt_2025 || 0);
    const atcAadt = Number(evidence.weightedAtcAdt || 0);
    const heavyAdt = Number(evidence.bucketVolumes['Heavy Goods'] || 0) + Number(evidence.bucketVolumes.Buses || 0);
    const heavyPct = evidence.assignedAdt ? (heavyAdt / evidence.assignedAdt) * 100 : Number(flow?.heavy_pct || 0);
    const aadtBasis = Number(evidence.assignedAdt || Math.max(linkAadt, atcAadt));
    const score = Math.min(100,
      (Math.log10(aadtBasis + 1) / 5) * 45 +
      (heavyPct / 35) * 35 +
      distancePenalty * 15 +
      (evidence.evidenceScore / 100) * 8 +
      (canonicalRoadClass(b.road_class) === 'M' ? 8 : canonicalRoadClass(b.road_class) === 'A' ? 6 : canonicalRoadClass(b.road_class) === 'B' ? 4 : 2)
    );
    const priority = priorityFromScore(score);
    const isTwoWay = bridgeFlowIsTwoWay(b);
    const directionalFactor = isTwoWay ? 0.5 : 1;
    const monthlySeasonalProfile = bridgeMonthlySeasonalFactorProfile(b, evidence);
    return {
      ...b,
      _id: b._id,
      river: bridgeRiverName(b),
      nearest_manual_id: nearestManual?.name || nearestManual?.id || 'N/A',
      nearest_manual_link: nearestManual?.link_id || 'N/A',
      nearest_manual_road: nearestManual?.link_name || 'N/A',
      nearest_manual_lat: nearestManual?.lat ?? null,
      nearest_manual_lng: nearestManual?.lng ?? null,
      nearest_manual_distance_km: nearestManual?.distanceKm ?? null,
      manual_station_count: evidence.manualStations.length,
      affecting_atc_count: evidence.atcStations.length,
      current_atc_count: evidence.currentAtcStations.length,
      legacy_atc_count: evidence.legacyAtcStations.length,
      prediction_atc_count: evidence.atcStations.length,
      prediction_atc_ids: evidence.atcStations.map(s => s.id).join('; '),
      nearest_atc_id: nearest?.id || 'N/A',
      nearest_atc_road: nearest?.road || 'N/A',
      nearest_atc_source: nearest?.source || '',
      nearest_atc_lat: nearest?.lat ?? null,
      nearest_atc_lng: nearest?.lng ?? null,
      nearest_atc_distance_km: nearest?.distanceKm ?? null,
      seasonal_factor: evidence.seasonalFactor ?? seasonalCorrectionFactor(b.region, timelineMonth),
      monthly_seasonal_factors: monthlySeasonalProfile.factors,
      monthly_seasonal_source: monthlySeasonalProfile.source,
      jan_factor: monthlySeasonalProfile.factors[0],
      feb_factor: monthlySeasonalProfile.factors[1],
      mar_factor: monthlySeasonalProfile.factors[2],
      apr_factor: monthlySeasonalProfile.factors[3],
      may_factor: monthlySeasonalProfile.factors[4],
      jun_factor: monthlySeasonalProfile.factors[5],
      jul_factor: monthlySeasonalProfile.factors[6],
      aug_factor: monthlySeasonalProfile.factors[7],
      sep_factor: monthlySeasonalProfile.factors[8],
      oct_factor: monthlySeasonalProfile.factors[9],
      nov_factor: monthlySeasonalProfile.factors[10],
      dec_factor: monthlySeasonalProfile.factors[11],
      road_link_aadt_2026: evidence.linkEvidence?.aadt_2026 ?? null,
      road_link_aadt_latest_year: evidence.linkEvidence?.latest_year ?? null,
      road_link_aadt_source: evidence.linkEvidence?.sources?.join('; ') || '',
      road_link_aadt_observations: evidence.linkEvidence?.observation_count ?? null,
      road_link_aadt_growth_rate: annualGrowthRate,
      annual_traffic_growth_rate: annualGrowthRate,
      annual_traffic_growth_rate_pct: annualGrowthRate * 100,
      annual_traffic_growth_source: annualGrowthSource,
      annual_weighted_growth_rate: annualGrowthRate,
      annual_weighted_growth_rate_pct: annualGrowthRate * 100,
      annual_weighted_growth_source: annualGrowthSource,
      annual_weighted_growth_components: annualGrowthModel.components.map(c => `${c.label}: ${formatGrowthPercent(c.rate)}`).join('; '),
      sqlbot_match_type: evidence.sqlBotEvidence?.match_type || '',
      sqlbot_latest_year: evidence.sqlBotEvidence?.latest_year ?? null,
      sqlbot_observed_days: evidence.sqlBotEvidence?.observation_count ?? null,
      sqlbot_growth_rate: evidence.sqlBotEvidence?.growth_rate ?? null,
      sqlbot_basis: evidence.sqlBotEvidence?.basis || '',
      legacy_atc_corridor: evidence.legacyProfile?.name || '',
      legacy_atc_source: evidence.legacyProfile?.source || '',
      legacy_atc_observations: evidence.legacyProfile?.observation_count ?? null,
      legacy_atc_avg_adt_2016_2022: evidence.legacyProfile?.avg_adt_2016_2022 ?? null,
      legacy_atc_latest_year: evidence.legacyProfile?.latest_year ?? null,
      legacy_atc_latest_year_adt: evidence.legacyProfile?.latest_year_avg_adt ?? null,
      assigned_adt_incl_motorcycles: evidence.assignedAdt,
      assigned_adt_excl_motorcycles: evidence.assignedAdtExclMotorcycles,
      flow_direction_model: bridgeFlowDirectionModel(b),
      flow_direction_count: isTwoWay ? 2 : 1,
      directional_adt_incl_motorcycles: evidence.assignedAdt * directionalFactor,
      directional_adt_excl_motorcycles: evidence.assignedAdtExclMotorcycles * directionalFactor,
      motorcycle_adt: evidence.bucketVolumes.Motorcycles || 0,
      light_vehicle_adt: evidence.bucketVolumes['Light Vehicles'] || 0,
      bus_adt: evidence.bucketVolumes.Buses || 0,
      heavy_goods_adt: evidence.bucketVolumes['Heavy Goods'] || 0,
      other_vehicle_adt: evidence.bucketVolumes.Other || 0,
      class_volumes: evidence.classVolumes,
      count_evidence_score: evidence.evidenceScore,
      light_pct: flow?.light_pct ?? null,
      heavy_pct: heavyPct,
      count_days: flow?.days ?? null,
      avg_speed: speed?.avg_speed ?? null,
      p85_speed: speed?.p85_speed ?? null,
      monthly_total: monthly.total,
      monthly_heavy: monthly.heavy,
      monthly_avg_heavy: monthly.avgHeavy,
      monthly_count_months: monthly.months,
      influence_score: score,
      priority
    };
  });
  if (useCache) bridgeTrafficRowsCache = { key: cacheKey, rows };
  return rows;
}

function applyBridgeTrafficSort(rows) {
  return sortRowsByState(rows, bridgeTrafficSort, (row, key) => row?.[key]);
}

function buildBridgeTrafficAnalytics() {
  const sourceBridges = getBridgeTrafficSourceBridges();
  const needsFullRows = !!bridgeTrafficSort?.key;
  // Always build all rows, leveraging the cache
  const rows = applyBridgeTrafficSort(buildBridgeTrafficRows());
  const tbody = document.getElementById('bridgeTrafficBody');
  const emptyState = document.getElementById('bridgeTrafficEmptyState');
  const table = document.getElementById('bridgeTrafficTable');
  const scrollWrap = document.querySelector('.analytics-grid-scroll');
  if (!tbody) return rows;

  if (rows.length === 0) {
    tbody.innerHTML = '';
    table.style.display = 'none';
    emptyState.style.display = 'block';
  } else {
    table.style.display = 'table';
    emptyState.style.display = 'none';
    
    
    const BRIDGE_TRAFFIC_PAGE_SIZE = 50;
    const totalPages = Math.max(1, Math.ceil(rows.length / BRIDGE_TRAFFIC_PAGE_SIZE));
    if (typeof window.bridgeTrafficPage === 'undefined') window.bridgeTrafficPage = 1;
    window.bridgeTrafficPage = Math.max(1, Math.min(window.bridgeTrafficPage, totalPages));
    
    const prevBtn = document.getElementById('bridgeTrafficPrev');
    const nextBtn = document.getElementById('bridgeTrafficNext');
    const infoBtn = document.getElementById('bridgeTrafficPageInfo');
    if (infoBtn) infoBtn.textContent = `Page ${window.bridgeTrafficPage} of ${totalPages} (${rows.length} total)`;
    if (prevBtn) {
      prevBtn.disabled = window.bridgeTrafficPage <= 1;
      prevBtn.onclick = () => { window.bridgeTrafficPage--; buildBridgeTrafficAnalytics(); };
    }
    if (nextBtn) {
      nextBtn.disabled = window.bridgeTrafficPage >= totalPages;
      nextBtn.onclick = () => { window.bridgeTrafficPage++; buildBridgeTrafficAnalytics(); };
    }

    const pageRows = rows.slice((window.bridgeTrafficPage - 1) * BRIDGE_TRAFFIC_PAGE_SIZE, window.bridgeTrafficPage * BRIDGE_TRAFFIC_PAGE_SIZE);

    tbody.innerHTML = pageRows.map(r => `
      <tr data-bridge-id="${r._id}" class="${bridgeRowActiveClass(r._id)}">
        <td class="highlight-cell">${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class="pill" style="background:#ef4444; color:white; margin-left:4px; font-size:9px">CRITICAL</span>' : ''}</td>
        <td>${tableCellHtml(r.bridge_no, 'bridge_no')}</td>
        <td>${tableCellHtml(r.link_no, 'link_no')}</td>
        <td>${tableCellHtml(r.road_no, 'road_no')}</td>
        <td style="white-space:normal; min-width:260px">${tableCellHtml(r.link_name, 'link_name')}</td>
        <td>${tableCellHtml(r.region, 'region')}</td>
        <td>${tableCellHtml(r.station, 'station')}</td>
        <td><span class="pill pill-${canonicalRoadClass(r.road_class).toLowerCase()}">${canonicalRoadClass(r.road_class)}</span></td>
        <td>${bridgeMapLat(r) != null ? Number(bridgeMapLat(r)).toFixed(6) : 'N/A'}</td>
        <td>${bridgeMapLon(r) != null ? Number(bridgeMapLon(r)).toFixed(6) : 'N/A'}</td>
        <td style="color:var(--accent-cyan);font-weight:800">${fmt(r.assigned_adt_incl_motorcycles, 0)}</td>
        <td>${formatGrowthPercent(r.annual_traffic_growth_rate)}</td>
        <td title="${tableCellHtml(r.nearest_manual_road, 'link_name')}">${tableCellHtml(r.nearest_manual_id, 'station_name')}</td>
        <td>${r.nearest_manual_distance_km != null ? fmt(r.nearest_manual_distance_km, 1) + ' km' : 'N/A'}</td>
        <td>${r.nearest_manual_lat != null ? Number(r.nearest_manual_lat).toFixed(5) : 'N/A'}, ${r.nearest_manual_lng != null ? Number(r.nearest_manual_lng).toFixed(5) : 'N/A'}</td>
        <td>${r.seasonal_factor != null ? fmt(r.seasonal_factor, 3) + 'x' : 'N/A'}</td>
        <td style="color:var(--accent-emerald);font-weight:700">${fmt(r.assigned_adt_excl_motorcycles, 0)}</td>
        <td style="color:var(--accent-amber);font-weight:700">${fmt(r.motorcycle_adt, 0)}</td>
        <td>${fmt(r.light_vehicle_adt, 0)}</td>
        <td>${fmt(r.bus_adt, 0)}</td>
        <td style="color:var(--accent-rose);font-weight:700">${fmt(r.heavy_goods_adt, 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Bicycles'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Carts'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Motorcycles & Scooters'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Saloon Cars'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Light Goods (Pickups, Vans, 4WD)'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Minibuses (Matatus)'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Medium Buses'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Large Buses'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Light Trucks (Dynas, Tractors)'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Medium Trucks (Fusos, Lorries)'), 0)}</td>
        <td>${fmt(bridgeDetailedClassAdt(r, 'Heavy Trucks & Semi-Trailers'), 0)}</td>
        <td>${fmt(r.count_evidence_score, 0)} / 100</td>
        <td>${r.monthly_heavy != null ? fmt(r.monthly_heavy) : 'N/A'}</td>
        <td>${r.avg_speed != null ? fmt(r.avg_speed, 1) + ' km/h' : 'N/A'}</td>
        <td style="color:var(--text-primary);font-weight:800">${fmt(r.influence_score, 1)}</td>
        <td class="${priorityClass(r.priority)}">${tableCellHtml(r.priority, 'priority')}</td>
      </tr>
    `).join('');
  }

  bindPagedTableSortHandlers('bridgeTrafficTable', 'traffic');
  applyActiveBridgeSelectionToTables();
  return rows;
}
function updateBridgeTrafficPager(totalRows, totalPages) {
  const info = document.getElementById('bridgeTrafficPageInfo');
  const prev = document.getElementById('bridgeTrafficPrev');
  const next = document.getElementById('bridgeTrafficNext');
  if (!info || !prev || !next) return;
  info.textContent = `Page ${bridgeTrafficPage} of ${totalPages} (${fmt(totalRows)} records)`;
  prev.disabled = bridgeTrafficPage <= 1;
  next.disabled = bridgeTrafficPage >= totalPages;
  if (prev.dataset.bound !== '1') {
    prev.dataset.bound = '1';
    prev.addEventListener('click', () => {
      bridgeTrafficPage = Math.max(1, bridgeTrafficPage - 1);
      buildBridgeTrafficAnalytics();
    });
    next.addEventListener('click', () => {
      bridgeTrafficPage += 1;
      buildBridgeTrafficAnalytics();
    });
  }
}

const MONTH_FACTOR_COLUMNS = [
  ['jan_factor', 'Jan'],
  ['feb_factor', 'Feb'],
  ['mar_factor', 'Mar'],
  ['apr_factor', 'Apr'],
  ['may_factor', 'May'],
  ['jun_factor', 'Jun'],
  ['jul_factor', 'Jul'],
  ['aug_factor', 'Aug'],
  ['sep_factor', 'Sep'],
  ['oct_factor', 'Oct'],
  ['nov_factor', 'Nov'],
  ['dec_factor', 'Dec']
];

function seasonalFactorCell(value, monthIndex = -1) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 'N/A';
  const activeStyle = monthIndex === timelineMonth ? ' style="color:var(--accent-cyan);font-weight:900"' : '';
  return `<span${activeStyle}>${n.toFixed(4)}x</span>`;
}

function buildBridgeSeasonalFactorsTable(rows = buildBridgeTrafficRows()) {
  const tbody = document.getElementById('bridgeSeasonalFactorsBody');
  if (!tbody) return;
  const tableRows = Array.isArray(rows) ? rows : [];
  if (!tableRows.length) {
    tbody.innerHTML = '<tr><td colspan="22">No monthly seasonal factor records are available for the active bridge filters.</td></tr>';
    return;
  }
  tbody.innerHTML = tableRows.map(r => `
    <tr data-bridge-id="${r._id}" class="${bridgeRowActiveClass(r._id)}">
      <td class="highlight-cell">${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class="pill" style="background:#ef4444; color:white; margin-left:4px; font-size:9px">CRITICAL</span>' : ''}</td>
      <td>${tableCellHtml(r.bridge_no, 'bridge_no')}</td>
      <td>${tableCellHtml(r.link_no, 'link_no')}</td>
      <td style="white-space:normal;min-width:240px">${tableCellHtml(r.link_name, 'link_name')}</td>
      <td>${tableCellHtml(r.region, 'region')}</td>
      <td>${tableCellHtml(r.station, 'station')}</td>
      <td><span class="pill pill-${canonicalRoadClass(r.road_class).toLowerCase()}">${canonicalRoadClass(r.road_class)}</span></td>
      <td>${formatGrowthPercent(r.annual_traffic_growth_rate)}</td>
      <td style="white-space:normal;min-width:220px">${tableCellHtml(r.monthly_seasonal_source, 'monthly_seasonal_source')}</td>
      ${MONTH_FACTOR_COLUMNS.map(([key], index) => `<td>${seasonalFactorCell(r[key], index)}</td>`).join('')}
      <td>${seasonalFactorCell(r.seasonal_factor, timelineMonth)}</td>
    </tr>
  `).join('');
  bindTableSortHandlers('bridgeSeasonalFactorsTable');
  applyActiveBridgeSelectionToTables();
}

function bridgeOdFlowRows(rows = buildBridgeTrafficRows()) {
  const tableRows = Array.isArray(rows) ? rows : [];
  return tableRows.flatMap(row => {
    const endpoints = bridgeRoadLinkEndpoints(row);
    const odMatch = linkedSqlBotOdRowsForBridge(row, 1, endpoints)[0] || null;
    const origin = odMatch?.origin || endpoints.origin;
    const destination = odMatch?.destination || endpoints.destination;
    const assignedAdt = Number(row.assigned_adt_incl_motorcycles || odMatch?.estimated_adt || 0);
    const assignedExcl = Number(row.assigned_adt_excl_motorcycles || 0);
    const odEstimatedAdt = Number(odMatch?.estimated_adt || assignedAdt || 0);
    const totalCount = Number(odMatch?.total_count || 0);
    const observedDays = Number(odMatch?.observed_days || 0);
    const isTwoWay = Number(row.flow_direction_count || 0) > 1 || bridgeFlowIsTwoWay(row);
    const directions = isTwoWay
      ? [
          { origin, destination, share: 0.5, label: 'Forward along road link' },
          { origin: destination, destination: origin, share: 0.5, label: 'Return along road link' }
        ]
      : [
          { origin, destination, share: 1, label: 'Primary divided-carriageway flow' }
        ];
    return directions.map((direction, index) => ({
      ...row,
      od_origin: direction.origin,
      od_destination: direction.destination,
      od_direction: direction.label,
      od_direction_index: index + 1,
      current_assigned_adt: assignedAdt,
      current_assigned_adt_excl_motorcycles: assignedExcl,
      directional_current_adt: assignedAdt * direction.share,
      directional_current_adt_excl_motorcycles: assignedExcl * direction.share,
      od_estimated_adt: odEstimatedAdt,
      directional_od_adt: odEstimatedAdt * direction.share,
      od_year: odMatch?.year || row.sqlbot_latest_year || row.road_link_aadt_latest_year || timelineYear,
      od_total_count: totalCount || '',
      od_observed_days: observedDays || row.sqlbot_observed_days || '',
      od_observed_links: odMatch?.observed_links || '',
      od_match_score: odMatch?._od_match_score || 0,
      od_match_basis: odMatch
        ? `SQLBot OD matrix matched to host road link (${Number(odMatch._od_match_score || 0).toFixed(1)} score)`
        : 'Host road link endpoint model using current assigned ADT'
    }));
  });
}

function buildBridgeOdFlowTable(rows = buildBridgeTrafficRows()) {
  const tbody = document.getElementById('bridgeOdBody');
  if (!tbody) return [];
  const odRows = bridgeOdFlowRows(rows);
  if (!odRows.length) {
    tbody.innerHTML = '<tr><td colspan="18">No origin-destination flow records are available for the active bridge filters.</td></tr>';
    return [];
  }
  tbody.innerHTML = odRows.map(r => `
    <tr data-bridge-id="${r._id}" class="${bridgeRowActiveClass(r._id)}">
      <td class="highlight-cell">${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class="pill" style="background:#ef4444; color:white; margin-left:4px; font-size:9px">CRITICAL</span>' : ''}</td>
      <td>${tableCellHtml(r.bridge_no, 'bridge_no')}</td>
      <td>${tableCellHtml(r.link_no, 'link_no')}</td>
      <td style="white-space:normal;min-width:260px">${tableCellHtml(r.link_name, 'link_name')}</td>
      <td><span class="pill pill-${canonicalRoadClass(r.road_class).toLowerCase()}">${canonicalRoadClass(r.road_class)}</span></td>
      <td>${tableCellHtml(r.region, 'region')}</td>
      <td>${tableCellHtml(r.station, 'station')}</td>
      <td style="white-space:normal;min-width:170px">${tableCellHtml(r.od_origin, 'od_origin')}</td>
      <td style="white-space:normal;min-width:170px">${tableCellHtml(r.od_destination, 'od_destination')}</td>
      <td>${tableCellHtml(r.od_direction, 'od_direction')}</td>
      <td style="color:var(--accent-cyan);font-weight:850">${fmt(r.current_assigned_adt, 0)}</td>
      <td>${fmt(r.directional_current_adt, 0)}</td>
      <td>${fmt(r.od_estimated_adt, 0)}</td>
      <td>${fmt(r.directional_od_adt, 0)}</td>
      <td>${tableCellHtml(r.od_year, 'year')}</td>
      <td>${r.od_observed_days ? fmt(r.od_observed_days, 0) : 'N/A'}</td>
      <td>${r.od_observed_links ? fmt(r.od_observed_links, 0) : 'N/A'}</td>
      <td style="white-space:normal;min-width:260px" title="${htmlEscape(r.od_match_basis)}">${tableCellHtml(r.od_match_basis, 'od_match_basis')}</td>
    </tr>
  `).join('');
  bindTableSortHandlers('bridgeOdFlowTable');
  applyActiveBridgeSelectionToTables();
  return odRows;
}

function bridgeOdFlowCsvText(rows = buildBridgeTrafficRows()) {
  const escapeCSV = val => {
    if (val == null) return '""';
    const str = String(val).trim();
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };
  const odRows = bridgeOdFlowRows(rows);
  if (!odRows.length) return '';
  const lines = [
    'Bridge Name,Bridge No,Link ID,Road Link Name,Road Class,Region,Station,Origin,Destination,Traffic Direction,Current Assigned ADT,Directional ADT,OD Evidence ADT,Directional OD ADT,OD Year,Observed Days,Observed Links,Match Basis'
  ];
  odRows.forEach(r => {
    lines.push([
      escapeCSV(r.bridge_nam),
      escapeCSV(r.bridge_no),
      escapeCSV(r.link_no),
      escapeCSV(r.link_name),
      escapeCSV(canonicalRoadClass(r.road_class)),
      escapeCSV(r.region),
      escapeCSV(r.station),
      escapeCSV(toBridgeSentenceCase(r.od_origin)),
      escapeCSV(toBridgeSentenceCase(r.od_destination)),
      escapeCSV(toBridgeSentenceCase(r.od_direction)),
      r.current_assigned_adt != null ? Number(r.current_assigned_adt).toFixed(2) : '',
      r.directional_current_adt != null ? Number(r.directional_current_adt).toFixed(2) : '',
      r.od_estimated_adt != null ? Number(r.od_estimated_adt).toFixed(2) : '',
      r.directional_od_adt != null ? Number(r.directional_od_adt).toFixed(2) : '',
      escapeCSV(r.od_year),
      r.od_observed_days || '',
      r.od_observed_links || '',
      escapeCSV(toBridgeSentenceCase(r.od_match_basis))
    ].join(','));
  });
  return lines.join('\n');
}

function buildBridgeTrafficCharts(rows) {
  const bands = ['Very Low <1k', 'Low 1k-4.5k', 'Moderate 4.5k-10k', 'High 10k-20k', 'Very High >=20k'];
  const bandCounts = Object.fromEntries(bands.map(b => [b, 0]));
  rows.forEach(r => bandCounts[trafficBand(r.assigned_adt_incl_motorcycles || r.aadt_2025)]++);

  if (chartInstances.bridgeTrafficBands) chartInstances.bridgeTrafficBands.destroy();
  chartInstances.bridgeTrafficBands = new Chart(document.getElementById('chartBridgeTrafficBands'), {
    type: 'bar',
    data: {
      labels: bands,
      datasets: [{ label: 'Bridge crossings', data: bands.map(b => bandCounts[b]), backgroundColor: [COLORS.teal, COLORS.cyan, COLORS.blue, COLORS.amber, COLORS.rose], borderRadius: 8 }]
    },
    options: { ...chartDefaults(), indexAxis: 'y', plugins: { ...chartDefaults().plugins, legend: { display: false } } }
  });

  const byRegion = {};
  rows.forEach(r => {
    const key = r.region || 'Unassigned';
    if (!byRegion[key]) byRegion[key] = { bridges: 0, heavyExposure: 0 };
    byRegion[key].bridges++;
    byRegion[key].heavyExposure += Number(r.monthly_heavy || 0);
  });
  const stationRows = Object.entries(byRegion)
    .map(([id, v]) => ({ id, bridges: v.bridges, heavyExposure: v.heavyExposure }))
    .sort((a, b) => b.heavyExposure - a.heavyExposure)
    .slice(0, 10);

  if (chartInstances.bridgeHeavyExposure) chartInstances.bridgeHeavyExposure.destroy();
  chartInstances.bridgeHeavyExposure = new Chart(document.getElementById('chartBridgeHeavyExposure'), {
    type: 'bar',
    data: {
      labels: stationRows.map(s => s.id),
      datasets: [{ label: 'Monthly heavy vehicles', data: stationRows.map(s => s.heavyExposure), backgroundColor: COLORS.rose, borderRadius: 8 }]
    },
    options: {
      ...chartDefaults(),
      indexAxis: 'y',
      plugins: { ...chartDefaults().plugins, legend: { display: false } },
      scales: {
        ...chartDefaults().scales,
        x: { ...chartDefaults().scales.x, ticks: { ...chartDefaults().scales.x.ticks, callback: v => v >= 1e6 ? (v / 1e6).toFixed(1) + 'M' : v >= 1e3 ? (v / 1e3).toFixed(0) + 'K' : v } }
      }
    }
  });

  const topAdtRows = rows
    .slice()
    .sort((a, b) => Number(b.assigned_adt_incl_motorcycles || 0) - Number(a.assigned_adt_incl_motorcycles || 0))
    .slice(0, 12);
  const bridgeLabels = topAdtRows.map(r => (r.bridge_nam || r.bridge_no || 'Bridge').slice(0, 22));
  const yTick = v => v >= 1e6 ? (v / 1e6).toFixed(1) + 'M' : v >= 1e3 ? (v / 1e3).toFixed(0) + 'K' : v;

  if (chartInstances.bridgeEvidenceAdt) chartInstances.bridgeEvidenceAdt.destroy();
  chartInstances.bridgeEvidenceAdt = new Chart(document.getElementById('chartBridgeEvidenceAdt'), {
    type: 'bar',
    data: {
      labels: bridgeLabels,
      datasets: [
        { label: 'Current assigned ADT', data: topAdtRows.map(r => Number(r.assigned_adt_incl_motorcycles || 0)), backgroundColor: COLORS.cyan, borderRadius: 6 }
      ]
    },
    options: {
      ...chartDefaults(),
      indexAxis: 'y',
      scales: { ...chartDefaults().scales, x: { ...chartDefaults().scales.x, ticks: { ...chartDefaults().scales.x.ticks, callback: yTick } } }
    }
  });

  if (chartInstances.bridgeVehicleClassGrouped) chartInstances.bridgeVehicleClassGrouped.destroy();
  chartInstances.bridgeVehicleClassGrouped = new Chart(document.getElementById('chartBridgeVehicleClassGrouped'), {
    type: 'bar',
    data: {
      labels: bridgeLabels,
      datasets: [
        { label: 'Motorcycles', data: topAdtRows.map(r => r.motorcycle_adt || 0), backgroundColor: COLORS.amber, borderRadius: 6 },
        { label: 'Light vehicles', data: topAdtRows.map(r => r.light_vehicle_adt || 0), backgroundColor: COLORS.blue, borderRadius: 6 },
        { label: 'Buses', data: topAdtRows.map(r => r.bus_adt || 0), backgroundColor: COLORS.purple, borderRadius: 6 },
        { label: 'Heavy goods', data: topAdtRows.map(r => r.heavy_goods_adt || 0), backgroundColor: COLORS.rose, borderRadius: 6 }
      ]
    },
    options: {
      ...chartDefaults(),
      indexAxis: 'y',
      scales: { ...chartDefaults().scales, x: { ...chartDefaults().scales.x, ticks: { ...chartDefaults().scales.x.ticks, callback: yTick } } }
    }
  });

  if (chartInstances.bridgeVehicleClassStacked) chartInstances.bridgeVehicleClassStacked.destroy();
  chartInstances.bridgeVehicleClassStacked = new Chart(document.getElementById('chartBridgeVehicleClassStacked'), {
    type: 'bar',
    data: {
      labels: bridgeLabels,
      datasets: [
        { label: 'Motorcycles', data: topAdtRows.map(r => r.motorcycle_adt || 0), backgroundColor: COLORS.amber },
        { label: 'Light vehicles', data: topAdtRows.map(r => r.light_vehicle_adt || 0), backgroundColor: COLORS.blue },
        { label: 'Buses', data: topAdtRows.map(r => r.bus_adt || 0), backgroundColor: COLORS.purple },
        { label: 'Heavy goods', data: topAdtRows.map(r => r.heavy_goods_adt || 0), backgroundColor: COLORS.rose },
        { label: 'Other', data: topAdtRows.map(r => r.other_vehicle_adt || 0), backgroundColor: COLORS.teal }
      ]
    },
    options: {
      ...chartDefaults(),
      indexAxis: 'y',
      scales: {
        x: { ...chartDefaults().scales.x, stacked: false, ticks: { ...chartDefaults().scales.x.ticks, callback: yTick } },
        y: { ...chartDefaults().scales.y, stacked: false }
      }
    }
  });
}

function bridgeDetailedClassAdt(row, selectedClass) {
  const entries = Object.entries(row.class_volumes || {});
  if (selectedClass === 'all') {
    return entries.reduce((s, [, value]) => s + Number(value || 0), 0);
  }
  return entries.reduce((s, [label, value]) => s + (classBucket11(label) === selectedClass ? Number(value || 0) : 0), 0);
}

function buildBridgeVehicleClassFocus(rows) {
  const kpis = document.getElementById('bridgeTrafficClassKpis');
  const tbody = document.getElementById('bridgeVehicleClassBody');
  const canvas = document.getElementById('chartBridgeSelectedVehicleClass');
  if (!kpis || !tbody) return;

  rows = rows || buildBridgeTrafficRows();
  const rankedRows = [...rows]
    .sort((a, b) => Number(b.assigned_adt_incl_motorcycles || 0) - Number(a.assigned_adt_incl_motorcycles || 0));
  const totalAssigned = rankedRows.reduce((s, r) => s + Number(r.assigned_adt_incl_motorcycles || 0), 0);
  const totalExcl = rankedRows.reduce((s, r) => s + Number(r.assigned_adt_excl_motorcycles || 0), 0);
  const motorcycle = rankedRows.reduce((s, r) => s + Number(r.motorcycle_adt || 0), 0);
  const busHeavy = rankedRows.reduce((s, r) => s + Number(r.bus_adt || 0) + Number(r.heavy_goods_adt || 0), 0);
  const topRow = rankedRows[0];

  kpis.innerHTML = [
    [fmt(rankedRows.length), 'Bridge Crossings'],
    [fmt(totalAssigned, 0), 'Assigned ADT incl. motorcycles'],
    [fmt(totalExcl, 0), 'Assigned ADT excl. motorcycles'],
    [fmt(motorcycle, 0), 'Motorcycle ADT'],
    [fmt(busHeavy, 0), 'Bus + heavy goods ADT'],
    [topRow ? fmt(topRow.assigned_adt_incl_motorcycles, 0) : 'N/A', 'Highest Assigned ADT']
  ].map(([v, l]) => `<div class="traffic-metric"><strong>${v}</strong><span>${l}</span></div>`).join('');

  tbody.innerHTML = rankedRows.length ? rankedRows.map(r => `
    <tr data-bridge-id="${r._id}" class="${bridgeRowActiveClass(r._id)}">
      <td class="highlight-cell">${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class="pill" style="background:#ef4444; color:white; margin-left:4px; font-size:9px">CRITICAL</span>' : ''}</td>
      <td>${tableCellHtml(r.bridge_no, 'bridge_no')}</td>
      <td>${tableCellHtml(r.region, 'region')}</td>
      <td>${tableCellHtml(r.station, 'station')}</td>
      <td>${fmt(r.assigned_adt_incl_motorcycles, 0)}</td>
      <td>${fmt(r.assigned_adt_excl_motorcycles, 0)}</td>
      <td>${tableCellHtml(r.flow_direction_model, 'flow_direction_model')}</td>
      <td>${fmt(r.directional_adt_incl_motorcycles, 0)}</td>
      <td>${formatGrowthPercent(r.annual_traffic_growth_rate)}</td>
      <td>${r.seasonal_factor != null ? fmt(r.seasonal_factor, 4) : 'N/A'}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Bicycles'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Carts'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Motorcycles & Scooters'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Saloon Cars'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Light Goods (Pickups, Vans, 4WD)'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Minibuses (Matatus)'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Medium Buses'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Large Buses'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Light Trucks (Dynas, Tractors)'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Medium Trucks (Fusos, Lorries)'), 0)}</td>
      <td>${fmt(bridgeDetailedClassAdt(r, 'Heavy Trucks & Semi-Trailers'), 0)}</td>
    </tr>
  `).join('') : '<tr><td colspan="21">No bridge traffic analytics records are available.</td></tr>';

  destroyChart('bridgeSelectedVehicleClass');
  bindTableSortHandlers('bridgeVehicleClassTable');
  applyActiveBridgeSelectionToTables();
}

function destroyChart(key) {
  if (chartInstances[key]) {
    chartInstances[key].destroy();
    chartInstances[key] = null;
  }
}

function renderPaneSummaryCharts(rows) {
  destroyChart('paneSummaryBands');
  destroyChart('paneSummaryClass');
  destroyChart('paneSummaryPriority');
  const bandsCanvas = document.getElementById('paneSummaryBandsChart');
  const classCanvas = document.getElementById('paneSummaryClassChart');
  const priorityCanvas = document.getElementById('paneSummaryPriorityChart');
  if (!bandsCanvas || !classCanvas || !priorityCanvas) return;

  // Make canvases shorter since they are now horizontal 100% stacked bars
  bandsCanvas.style.height = '60px';
  classCanvas.style.height = '60px';
  priorityCanvas.style.height = '60px';

  const bands = ['Very Low <1k', 'Low 1k-4.5k', 'Moderate 4.5k-10k', 'High 10k-20k', 'Very High >=20k'];
  const bandCounts = Object.fromEntries(bands.map(b => [b, 0]));
  rows.forEach(r => bandCounts[trafficBand(r.assigned_adt_incl_motorcycles || r.aadt_2025)]++);
  const totalBridges = rows.length || 1;

  const getClusterOpts = () => ({
    ...chartDefaults(),
    indexAxis: 'y',
    maintainAspectRatio: false,
    plugins: {
      ...chartDefaults().plugins,
      legend: { ...chartDefaults().plugins.legend, display: true, position: 'bottom', labels: { ...chartDefaults().plugins.legend.labels, boxWidth: 10, font: { size: 10 } } },
      tooltip: { ...chartDefaults().plugins.tooltip, callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw >= 1e6 ? (ctx.raw/1e6).toFixed(1) + 'M' : ctx.raw >= 1e3 ? (ctx.raw/1e3).toFixed(1) + 'k' : ctx.raw.toLocaleString()}` } }
    },
    scales: {
      x: { 
        stacked: false, 
        ticks: { 
          callback: v => v >= 1e6 ? (v/1e6).toFixed(1) + 'M' : v >= 1e3 ? (v/1e3).toFixed(0) + 'K' : v 
        } 
      },
      y: { stacked: false, display: false }
    }
  });

  chartInstances.paneSummaryBands = new Chart(bandsCanvas, {
    type: 'bar',
    data: {
      labels: ['Bridges'],
      datasets: bands.map((b, i) => ({
        label: b,
        data: [bandCounts[b]],
        backgroundColor: [COLORS.slate, COLORS.teal, COLORS.cyan, COLORS.amber, COLORS.rose][i]
      }))
    },
    options: getClusterOpts()
  });

  const roadClasses = ['M', 'A', 'B', 'C'];
  const classAdtCounts = Object.fromEntries(roadClasses.map(cls => [cls, rows.filter(r => canonicalRoadClass(r.road_class) === cls).reduce((s, r) => s + Number(r.assigned_adt_incl_motorcycles || 0), 0)]));
  const totalAdt = Object.values(classAdtCounts).reduce((a, b) => a + b, 0) || 1;

  chartInstances.paneSummaryClass = new Chart(classCanvas, {
    type: 'bar',
    data: {
      labels: ['Total ADT'],
      datasets: roadClasses.map((cls, i) => ({
        label: `Class ${cls}`,
        data: [classAdtCounts[cls]],
        backgroundColor: [COLORS.cyan, COLORS.emerald, COLORS.blue, COLORS.amber][i]
      }))
    },
    options: getClusterOpts()
  });

  const priorityLabels = ['High', 'Medium', 'Watch', 'Low'];
  const priorityCounts = Object.fromEntries(priorityLabels.map(p => [p, rows.filter(r => r.priority === p).length]));
  
  chartInstances.paneSummaryPriority = new Chart(priorityCanvas, {
    type: 'bar',
    data: {
      labels: ['Bridges'],
      datasets: priorityLabels.map((p, i) => ({
        label: p,
        data: [priorityCounts[p]],
        backgroundColor: [COLORS.rose, COLORS.amber, COLORS.cyan, COLORS.emerald][i]
      }))
    },
    options: getClusterOpts()
  });
}

function renderPaneSelectedCharts(row, classRows) {
  destroyChart('paneSelectedVehicleClass');
  destroyChart('paneSelectedEvidence');
}

function aggregateRows(rows, keyFn, valueFn) {
  return rows.reduce((acc, row) => {
    const key = keyFn(row) || 'Unassigned';
    acc[key] = (acc[key] || 0) + Number(valueFn(row) || 0);
    return acc;
  }, {});
}

function buildBridgeTrafficSummaryPanel() {
  const rows = buildBridgeTrafficRows();
  const kpiEl = document.getElementById('bridgeSummaryKpis');
  if (!kpiEl) return;

  const totalAdt = rows.reduce((s, r) => s + Number(r.assigned_adt_incl_motorcycles || 0), 0);
  const avgAdt = rows.length ? totalAdt / rows.length : 0;
  const highPriority = rows.filter(r => r.priority === 'High').length;
  const avgEvidence = rows.length ? rows.reduce((s, r) => s + Number(r.count_evidence_score || 0), 0) / rows.length : 0;
  const heavyAdt = rows.reduce((s, r) => s + Number(r.bus_adt || 0) + Number(r.heavy_goods_adt || 0), 0);

  kpiEl.innerHTML = [
    [fmt(rows.length), 'Bridge crossings analyzed'],
    [fmt(totalAdt, 0), 'Assigned ADT incl. motorcycles'],
    [fmt(avgAdt, 0), 'Average assigned ADT'],
    [fmt(heavyAdt, 0), 'Bus + heavy goods ADT'],
    [fmt(highPriority), 'High priority bridges'],
    [fmt(avgEvidence, 0) + ' / 100', 'Average count evidence']
  ].map(([v, l]) => `<div class="traffic-metric"><strong>${v}</strong><span>${l}</span></div>`).join('');

  const basis = aggregateRows(rows, r => `Class ${canonicalRoadClass(r.road_class)}`, () => 1);
  destroyChart('bridgeSummaryBasis');
  chartInstances.bridgeSummaryBasis = new Chart(document.getElementById('chartBridgeSummaryBasis'), {
    type: 'bar',
    data: {
      labels: Object.keys(basis),
      datasets: [{ label: 'Bridge crossings', data: Object.values(basis), backgroundColor: [COLORS.cyan, COLORS.emerald, COLORS.amber, COLORS.rose, COLORS.purple], borderRadius: 8 }]
    },
    options: { ...chartDefaults(), plugins: { ...chartDefaults().plugins, legend: { display: false } } }
  });

  const regions = [...new Set(rows.map(r => r.region || 'Unassigned'))].sort();
  const bands = ['Very Low <1k', 'Low 1k-4.5k', 'Moderate 4.5k-10k', 'High 10k-20k', 'Very High >=20k'];
  destroyChart('bridgeSummaryRegionBands');
  chartInstances.bridgeSummaryRegionBands = new Chart(document.getElementById('chartBridgeSummaryRegionBands'), {
    type: 'bar',
    data: {
      labels: regions,
      datasets: bands.map((band, idx) => ({
        label: band,
        data: regions.map(region => rows.filter(r => (r.region || 'Unassigned') === region && trafficBand(r.assigned_adt_incl_motorcycles) === band).length),
        backgroundColor: [COLORS.slate, COLORS.teal, COLORS.cyan, COLORS.amber, COLORS.rose][idx],
        borderRadius: 5
      }))
    },
    options: { ...chartDefaults(), indexAxis: 'y', scales: { ...chartDefaults().scales, x: { ...chartDefaults().scales.x, stacked: false }, y: { ...chartDefaults().scales.y, stacked: false } } }
  });

  const roadClasses = ['M', 'A', 'B', 'C'];
  destroyChart('bridgeSummaryClassAdt');
  chartInstances.bridgeSummaryClassAdt = new Chart(document.getElementById('chartBridgeSummaryClassAdt'), {
    type: 'bar',
    data: {
      labels: roadClasses,
      datasets: [
        {
          label: 'Average ADT incl. motorcycles',
          data: roadClasses.map(cls => {
            const classRows = rows.filter(r => canonicalRoadClass(r.road_class) === cls);
            return classRows.length ? classRows.reduce((s, r) => s + Number(r.assigned_adt_incl_motorcycles || 0), 0) / classRows.length : 0;
          }),
          backgroundColor: COLORS.cyan,
          borderRadius: 7
        },
        {
          label: 'Average ADT excl. motorcycles',
          data: roadClasses.map(cls => {
            const classRows = rows.filter(r => canonicalRoadClass(r.road_class) === cls);
            return classRows.length ? classRows.reduce((s, r) => s + Number(r.assigned_adt_excl_motorcycles || 0), 0) / classRows.length : 0;
          }),
          backgroundColor: COLORS.emerald,
          borderRadius: 7
        }
      ]
    },
    options: chartDefaults()
  });

  const priorities = ['High', 'Medium', 'Watch', 'Low'];
  destroyChart('bridgeSummaryPriority');
  chartInstances.bridgeSummaryPriority = new Chart(document.getElementById('chartBridgeSummaryPriority'), {
    type: 'bar',
    data: {
      labels: regions,
      datasets: priorities.map((priority, idx) => ({
        label: priority,
        data: regions.map(region => rows.filter(r => (r.region || 'Unassigned') === region && r.priority === priority).length),
        backgroundColor: [COLORS.rose, COLORS.amber, COLORS.cyan, COLORS.emerald][idx],
        borderRadius: 5
      }))
    },
    options: chartDefaults()
  });

  const tbody = document.getElementById('bridgeSummaryBody');
  if (tbody) {
    tbody.innerHTML = [...rows].sort((a, b) => Number(b.assigned_adt_incl_motorcycles || 0) - Number(a.assigned_adt_incl_motorcycles || 0)).slice(0, 30).map(r => `
      <tr data-bridge-id="${r._id}" class="${bridgeRowActiveClass(r._id)}">
        <td class="highlight-cell">${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class="pill" style="background:#ef4444; color:white; margin-left:4px; font-size:9px">CRITICAL</span>' : ''}</td>
        <td>${tableCellHtml(r.bridge_no, 'bridge_no')}</td>
        <td>${tableCellHtml(r.link_no, 'link_no')}</td>
        <td><span class="pill pill-${canonicalRoadClass(r.road_class).toLowerCase()}">${canonicalRoadClass(r.road_class)}</span></td>
        <td>${tableCellHtml(r.region, 'region')}</td>
        <td>${fmt(r.assigned_adt_incl_motorcycles, 0)}</td>
        <td>${fmt(r.assigned_adt_excl_motorcycles, 0)}</td>
        <td>${fmt(r.heavy_goods_adt, 0)}</td>
        <td>${formatGrowthPercent(r.annual_traffic_growth_rate)}</td>
        <td style="white-space:normal;min-width:180px">${tableCellHtml(trafficBand(r.assigned_adt_incl_motorcycles), 'traffic_band')}</td>
        <td class="${priorityClass(r.priority)}">${tableCellHtml(r.priority, 'priority')}</td>
      </tr>
    `).join('');
    applyActiveBridgeSelectionToTables();
  }
}

function buildBridgeLoadingPanel() {
  const rows = buildBridgeTrafficRows();
  const kpiEl = document.getElementById('bridgeLoadingKpis');
  if (!kpiEl) return;

  const totalIncl = rows.reduce((s, r) => s + Number(r.assigned_adt_incl_motorcycles || 0), 0);
  const totalExcl = rows.reduce((s, r) => s + Number(r.assigned_adt_excl_motorcycles || 0), 0);
  const motorcycle = rows.reduce((s, r) => s + Number(r.motorcycle_adt || 0), 0);
  const bus = rows.reduce((s, r) => s + Number(r.bus_adt || 0), 0);
  const heavy = rows.reduce((s, r) => s + Number(r.heavy_goods_adt || 0), 0);

  kpiEl.innerHTML = [
    [fmt(totalIncl, 0), 'Total ADT incl. motorcycles'],
    [fmt(totalExcl, 0), 'Total ADT excl. motorcycles'],
    [fmt(motorcycle, 0), 'Motorcycle ADT'],
    [fmt(bus, 0), 'Bus ADT'],
    [fmt(heavy, 0), 'Heavy goods ADT'],
    [fmt(rows.length), 'Bridge crossings']
  ].map(([v, l]) => `<div class="traffic-metric"><strong>${v}</strong><span>${l}</span></div>`).join('');

  destroyChart('bridgeLoadingClassTotals');
  chartInstances.bridgeLoadingClassTotals = new Chart(document.getElementById('chartBridgeLoadingClassTotals'), {
    type: 'bar',
    data: {
      labels: ['Motorcycles', 'Light vehicles', 'Buses', 'Heavy goods', 'Other'],
      datasets: [{
        label: 'Assigned ADT',
        data: [
          motorcycle,
          rows.reduce((s, r) => s + Number(r.light_vehicle_adt || 0), 0),
          bus,
          heavy,
          rows.reduce((s, r) => s + Number(r.other_vehicle_adt || 0), 0)
        ],
        backgroundColor: [COLORS.amber, COLORS.cyan, COLORS.purple, COLORS.rose, COLORS.slate],
        borderRadius: 8
      }]
    },
    options: { ...chartDefaults(), plugins: { ...chartDefaults().plugins, legend: { display: false } } }
  });

  const regions = [...new Set(rows.map(r => r.region || 'Unassigned'))].sort();
  destroyChart('bridgeLoadingMotorcycleRegion');
  chartInstances.bridgeLoadingMotorcycleRegion = new Chart(document.getElementById('chartBridgeLoadingMotorcycleRegion'), {
    type: 'bar',
    data: {
      labels: regions,
      datasets: [
        { label: 'Motorcycle ADT', data: regions.map(region => rows.filter(r => (r.region || 'Unassigned') === region).reduce((s, r) => s + Number(r.motorcycle_adt || 0), 0)), backgroundColor: COLORS.amber, borderRadius: 6 },
        { label: 'ADT excl. motorcycles', data: regions.map(region => rows.filter(r => (r.region || 'Unassigned') === region).reduce((s, r) => s + Number(r.assigned_adt_excl_motorcycles || 0), 0)), backgroundColor: COLORS.emerald, borderRadius: 6 }
      ]
    },
    options: { ...chartDefaults(), indexAxis: 'y', scales: { ...chartDefaults().scales, x: { ...chartDefaults().scales.x, stacked: false }, y: { ...chartDefaults().scales.y, stacked: false } } }
  });

  const roadClasses = ['M', 'A', 'B', 'C'];
  destroyChart('bridgeLoadingHeavyClass');
  chartInstances.bridgeLoadingHeavyClass = new Chart(document.getElementById('chartBridgeLoadingHeavyClass'), {
    type: 'bar',
    data: {
      labels: roadClasses,
      datasets: [
        { label: 'Bus ADT', data: roadClasses.map(cls => rows.filter(r => canonicalRoadClass(r.road_class) === cls).reduce((s, r) => s + Number(r.bus_adt || 0), 0)), backgroundColor: COLORS.purple, borderRadius: 6 },
        { label: 'Heavy goods ADT', data: roadClasses.map(cls => rows.filter(r => canonicalRoadClass(r.road_class) === cls).reduce((s, r) => s + Number(r.heavy_goods_adt || 0), 0)), backgroundColor: COLORS.rose, borderRadius: 6 }
      ]
    },
    options: chartDefaults()
  });

  const metricKey = 'assigned_adt_incl_motorcycles';
  const topRows = [...rows].sort((a, b) => Number(b[metricKey] || 0) - Number(a[metricKey] || 0)).slice(0, 14);
  destroyChart('bridgeLoadingTopClass');
  chartInstances.bridgeLoadingTopClass = new Chart(document.getElementById('chartBridgeLoadingTopClass'), {
    type: 'bar',
    data: {
      labels: topRows.map(r => (r.bridge_nam || r.bridge_no || 'Bridge').slice(0, 22)),
      datasets: [{ label: 'Current assigned ADT', data: topRows.map(r => Number(r[metricKey] || 0)), backgroundColor: COLORS.cyan, borderRadius: 7 }]
    },
    options: { ...chartDefaults(), indexAxis: 'y', plugins: { ...chartDefaults().plugins, legend: { display: false } } }
  });

  const tbody = document.getElementById('bridgeLoadingBody');
  if (tbody) {
    tbody.innerHTML = [...rows].sort((a, b) => Number(b.assigned_adt_incl_motorcycles || 0) - Number(a.assigned_adt_incl_motorcycles || 0)).map(r => `
      <tr data-bridge-id="${r._id}" class="${bridgeRowActiveClass(r._id)}">
        <td class="highlight-cell">${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class="pill" style="background:#ef4444; color:white; margin-left:4px; font-size:9px">CRITICAL</span>' : ''}</td>
        <td>${tableCellHtml(r.bridge_no, 'bridge_no')}</td>
        <td>${tableCellHtml(r.region, 'region')}</td>
        <td><span class="pill pill-${canonicalRoadClass(r.road_class).toLowerCase()}">${canonicalRoadClass(r.road_class)}</span></td>
        <td style="white-space:normal;min-width:170px">${tableCellHtml(r.nearest_manual_id, 'station_name')}</td>
        <td>${fmt(r.assigned_adt_incl_motorcycles, 0)}</td>
        <td>${fmt(r.assigned_adt_excl_motorcycles, 0)}</td>
        <td>${formatGrowthPercent(r.annual_traffic_growth_rate)}</td>
        <td>${tableCellHtml(r.flow_direction_model, 'flow_direction_model')}</td>
        <td>${fmt(r.directional_adt_incl_motorcycles, 0)}</td>
        <td>${fmt(r.directional_adt_excl_motorcycles, 0)}</td>
        <td>${fmt(r.motorcycle_adt, 0)}</td>
        <td>${fmt(r.light_vehicle_adt, 0)}</td>
        <td>${fmt(r.bus_adt, 0)}</td>
        <td>${fmt(r.heavy_goods_adt, 0)}</td>
      </tr>
    `).join('');
    bindTableSortHandlers('bridgeLoadingTable');
    applyActiveBridgeSelectionToTables();
  }
}

function buildBridgeLoadingTableOnly(rows = buildBridgeTrafficRows()) {
  const tbody = document.getElementById('bridgeLoadingBody');
  if (!tbody) return;
  const tableRows = Array.isArray(rows) ? rows : [];
  tbody.innerHTML = tableRows.length ? tableRows.map(r => `
    <tr data-bridge-id="${r._id}" class="${bridgeRowActiveClass(r._id)}">
      <td class="highlight-cell">${tableCellHtml(r.bridge_nam, 'bridge_nam')} ${r.is_critical ? '<span class="pill" style="background:#ef4444; color:white; margin-left:4px; font-size:9px">CRITICAL</span>' : ''}</td>
      <td>${tableCellHtml(r.bridge_no, 'bridge_no')}</td>
      <td>${tableCellHtml(r.region, 'region')}</td>
      <td><span class="pill pill-${canonicalRoadClass(r.road_class).toLowerCase()}">${canonicalRoadClass(r.road_class)}</span></td>
      <td style="white-space:normal;min-width:170px">${tableCellHtml(r.nearest_manual_id, 'station_name')}</td>
      <td>${fmt(r.assigned_adt_incl_motorcycles, 0)}</td>
      <td>${fmt(r.assigned_adt_excl_motorcycles, 0)}</td>
      <td>${formatGrowthPercent(r.annual_traffic_growth_rate)}</td>
      <td>${tableCellHtml(r.flow_direction_model, 'flow_direction_model')}</td>
      <td>${fmt(r.directional_adt_incl_motorcycles, 0)}</td>
      <td>${fmt(r.directional_adt_excl_motorcycles, 0)}</td>
      <td>${fmt(r.motorcycle_adt, 0)}</td>
      <td>${fmt(r.light_vehicle_adt, 0)}</td>
      <td>${fmt(r.bus_adt, 0)}</td>
      <td>${fmt(r.heavy_goods_adt, 0)}</td>
    </tr>
  `).join('') : '<tr><td colspan="15">No bridge loading records are available for the active filters.</td></tr>';
  bindTableSortHandlers('bridgeLoadingTable');
  applyActiveBridgeSelectionToTables();
}

// COUNT STATION COVERAGE AND CLASSIFICATION SUMMARY
function buildCountStationCoverage() {
  const kpiEl = document.getElementById('stationKpis');
  if (!kpiEl) return;
  const manualRegions = new Set(MANUAL_COUNT_STATIONS.map(s => s.region).filter(Boolean));
  const manualWithCoords = MANUAL_COUNT_STATIONS.filter(s => s.lat != null && s.lng != null).length;
  const legacyObs = LEGACY_ATC_STATIONS.reduce((s, r) => s + Number(r.observations || 0), 0);
  const currentAtc = ATC_SITE_ITEMS.length;
  kpiEl.innerHTML = [
    ['298', 'Manual Count Stations'],
    ['15', 'Legacy ATC Corridors'],
    [fmt(currentAtc), 'Current ATC Sites'],
    [fmt(manualWithCoords), 'Manual Stations Geocoded'],
    [fmt(manualRegions.size), 'Manual Count Regions'],
    [fmt(legacyObs), 'Legacy ATC Observations']
  ].map(([v,l]) => `<div class="traffic-metric"><strong>${v}</strong><span>${l}</span></div>`).join('');

  buildStationCoverageCharts();
  buildManualStationsTable();
  buildLegacyAtcTable();
}

function buildStationCoverageCharts() {
  if (chartInstances.stationSource) chartInstances.stationSource.destroy();
  chartInstances.stationSource = new Chart(document.getElementById('chartStationSource'), {
    type: 'bar',
    data: {
      labels: ['Manual Count', 'Legacy ATC', 'Current ATC'],
      datasets: [{ label: 'Stations / corridors', data: [MANUAL_COUNT_STATIONS.length, LEGACY_ATC_STATIONS.length, ATC_SITE_ITEMS.length], backgroundColor: [COLORS.cyan, COLORS.purple, COLORS.rose], borderRadius: 8, maxBarThickness: 80 }]
    },
    options: { ...chartDefaults(), plugins: { ...chartDefaults().plugins, legend: { display: false } } }
  });

  const regions = [...new Set(MANUAL_COUNT_STATIONS.map(s => s.region || 'Unassigned'))].sort();
  const byRegion = Object.fromEntries(regions.map(r => [r, 0]));
  MANUAL_COUNT_STATIONS.forEach(s => byRegion[s.region || 'Unassigned']++);
  if (chartInstances.manualStationsRegion) chartInstances.manualStationsRegion.destroy();
  chartInstances.manualStationsRegion = new Chart(document.getElementById('chartManualStationsRegion'), {
    type: 'bar',
    data: {
      labels: regions,
      datasets: [{ label: 'Manual stations', data: regions.map(r => byRegion[r]), backgroundColor: COLORS.teal, borderRadius: 8, maxBarThickness: 42 }]
    },
    options: { ...chartDefaults(), indexAxis: 'y', plugins: { ...chartDefaults().plugins, legend: { display: false } } }
  });

  const allRegions = [...new Set([
    ...MANUAL_COUNT_STATIONS.map(s => s.region || 'Unassigned'),
    ...ATC_SITE_ITEMS.map(s => nearestManualStationsForBridge({ x_new: s.lng, y_new: s.lat, link_no: '' }, 1)[0]?.region || 'Unassigned')
  ])].sort();
  const manualByRegion = Object.fromEntries(allRegions.map(r => [r, 0]));
  const geocodedByRegion = Object.fromEntries(allRegions.map(r => [r, 0]));
  MANUAL_COUNT_STATIONS.forEach(s => {
    const r = s.region || 'Unassigned';
    manualByRegion[r] = (manualByRegion[r] || 0) + 1;
    if (validLonLat(s.lng, s.lat)) geocodedByRegion[r] = (geocodedByRegion[r] || 0) + 1;
  });
  const atcByRegion = Object.fromEntries(allRegions.map(r => [r, 0]));
  ATC_SITE_ITEMS.forEach(s => {
    const r = nearestManualStationsForBridge({ x_new: s.lng, y_new: s.lat, link_no: '' }, 1)[0]?.region || 'Unassigned';
    atcByRegion[r] = (atcByRegion[r] || 0) + 1;
  });
  if (chartInstances.stationRegionCluster) chartInstances.stationRegionCluster.destroy();
  chartInstances.stationRegionCluster = new Chart(document.getElementById('chartStationRegionCluster'), {
    type: 'bar',
    data: {
      labels: allRegions,
      datasets: [
        { label: 'Manual stations', data: allRegions.map(r => manualByRegion[r] || 0), backgroundColor: COLORS.cyan, borderRadius: 6 },
        { label: 'Geocoded manual', data: allRegions.map(r => geocodedByRegion[r] || 0), backgroundColor: COLORS.emerald, borderRadius: 6 },
        { label: 'Current ATC', data: allRegions.map(r => atcByRegion[r] || 0), backgroundColor: COLORS.rose, borderRadius: 6 }
      ]
    },
    options: { ...chartDefaults() }
  });

  const classes = ['M', 'A', 'B', 'C'];
  const byClass = Object.fromEntries(classes.map(c => [c, { manual: 0, geocoded: 0, atcLocation: 0 }]));
  MANUAL_COUNT_STATIONS.forEach(s => {
    const cls = canonicalRoadClass(s.link_id || s.link_name);
    byClass[cls].manual++;
    if (validLonLat(s.lng, s.lat)) byClass[cls].geocoded++;
    if (/ATC Location/i.test(s.comment || '')) byClass[cls].atcLocation++;
  });
  if (chartInstances.stationRoadClassCluster) chartInstances.stationRoadClassCluster.destroy();
  chartInstances.stationRoadClassCluster = new Chart(document.getElementById('chartStationRoadClassCluster'), {
    type: 'bar',
    data: {
      labels: classes,
      datasets: [
        { label: 'Manual stations', data: classes.map(c => byClass[c].manual), backgroundColor: COLORS.cyan, borderRadius: 6 },
        { label: 'Geocoded manual', data: classes.map(c => byClass[c].geocoded), backgroundColor: COLORS.emerald, borderRadius: 6 },
        { label: 'Marked ATC location', data: classes.map(c => byClass[c].atcLocation), backgroundColor: COLORS.amber, borderRadius: 6 }
      ]
    },
    options: { ...chartDefaults() }
  });
}

function buildManualStationsTable() {
  const tbody = document.getElementById('manualStationsBody');
  if (!tbody) return;
  tbody.innerHTML = MANUAL_COUNT_STATIONS.map(s => `
    <tr>
      <td class="highlight-cell">${tableCellHtml(s.id, 'station_id')}</td>
      <td>${tableCellHtml(s.name, 'station_name')}</td>
      <td>${tableCellHtml(s.link_id, 'link_no')}</td>
      <td style="white-space:normal; min-width:260px">${tableCellHtml(s.link_name, 'link_name')}</td>
      <td>${tableCellHtml(s.station, 'station')}</td>
      <td>${tableCellHtml(s.region, 'region')}</td>
      <td>${s.lat != null ? Number(s.lat).toFixed(6) : 'N/A'}</td>
      <td>${s.lng != null ? Number(s.lng).toFixed(6) : 'N/A'}</td>
    </tr>
  `).join('');
  document.querySelectorAll('#manualStationsTable thead th').forEach(th => {
    th.onclick = () => sortTable('manualStationsTable', th);
  });
}

function dominantClassFromTotals(totals) {
  const entries = Object.entries(totals || {}).filter(([k]) => k !== 'Grand Total');
  if (!entries.length) return 'N/A';
  return entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];
}

function buildLegacyAtcTable() {
  const tbody = document.getElementById('legacyAtcBody');
  if (!tbody) return;
  tbody.innerHTML = LEGACY_ATC_STATIONS.map(s => {
    const profile = LEGACY_ATC_ACCURACY_DATA[s.name] || null;
    return `
    <tr>
      <td class="highlight-cell">${tableCellHtml(s.id, 'station_id')}</td>
      <td style="white-space:normal; min-width:260px">${tableCellHtml(s.name, 'station_name')}</td>
      <td>${tableCellHtml(profile?.link_id, 'link_no')}</td>
      <td>${fmt(profile?.observation_count ?? s.observations)}</td>
      <td>${profile?.avg_adt_2016_2022 != null ? fmt(profile.avg_adt_2016_2022, 1) : (s.avg_adt != null ? fmt(s.avg_adt, 1) : 'N/A')}</td>
      <td>${profile?.latest_year_avg_adt != null ? `${fmt(profile.latest_year_avg_adt, 1)} (${profile.latest_year})` : 'N/A'}</td>
      <td>${profile?.max_adt_2016_2022 != null ? fmt(profile.max_adt_2016_2022, 1) : (s.max_adt != null ? fmt(s.max_adt, 1) : 'N/A')}</td>
      <td style="white-space:normal">${tableCellHtml(dominantClassFromTotals(profile?.class_totals || s.class_totals), 'vehicle_class')}</td>
    </tr>
  `;
  }).join('');
  document.querySelectorAll('#legacyAtcTable thead th').forEach(th => {
    th.onclick = () => sortTable('legacyAtcTable', th);
  });
}

function classBucket11(label) {
  const l = String(label || '').toLowerCase();
  if (l.includes('motorcycle') || l.includes('mortocycle') || l.includes('scooter')) return 'Motorcycles & Scooters';
  if (l.includes('saloon') || l.includes('car')) return 'Saloon Cars';
  if (l.includes('pickup') || l.includes('van') || l.includes('4wd') || l.includes('lmv') || l.includes('towing')) return 'Light Goods (Pickups, Vans, 4WD)';
  if (l.includes('minibus') || l.includes('matatu') || l.includes('small bus')) return 'Minibuses (Matatus)';
  if (l.includes('coaster') || l.includes('2-axle bus') || (l.includes('medium bus') && !l.includes('large'))) return 'Medium Buses';
  if (l.includes('large bus') || l.includes('3-axle bus') || l.includes('large') || l.includes('bus')) return 'Large Buses';
  if (l.includes('dyna') || l.includes('tractor') || l.includes('2-axle rigid') || l.includes('light single unit')) return 'Light Trucks (Dynas, Tractors)';
  if (l.includes('fuso') || l.includes('lorry') || l.includes('3-axle rigid') || l.includes('medium bus / light single unit') || l.includes('medium - large unit')) return 'Medium Trucks (Fusos, Lorries)';
  if (l.includes('rigid') || l.includes('trailer') || l.includes('semi') || l.includes('axle') || l.includes('double') || l.includes('heavy') || l.includes('trailer')) return 'Heavy Trucks & Semi-Trailers';
  if (l.includes('bicycle')) return 'Bicycles';
  if (l.includes('cart')) return 'Carts';

  if (l.includes('motor') || l.includes('scoot')) return 'Motorcycles & Scooters';
  if (l.includes('truck') || l.includes('cargo')) return 'Heavy Trucks & Semi-Trailers';
  return 'Saloon Cars';
}

function majorVehicleBucket(label) {
  const detailed = classBucket11(label);
  if (detailed === 'Motorcycles & Scooters') return 'Motorcycles';
  if (['Medium Buses', 'Large Buses', 'Minibuses (Matatus)'].includes(detailed)) return 'Buses';
  if (['Light Trucks (Dynas, Tractors)', 'Medium Trucks (Fusos, Lorries)', 'Heavy Trucks & Semi-Trailers'].includes(detailed)) return 'Heavy Goods';
  if (detailed === 'Bicycles' || detailed === 'Carts') return 'Other';
  return 'Light Vehicles';
}

function bucketAtcClasses11(site) {
  const buckets = {};
  [
    'Motorcycles & Scooters',
    'Saloon Cars',
    'Light Goods (Pickups, Vans, 4WD)',
    'Minibuses (Matatus)',
    'Medium Buses',
    'Large Buses',
    'Light Trucks (Dynas, Tractors)',
    'Medium Trucks (Fusos, Lorries)',
    'Heavy Trucks & Semi-Trailers',
    'Bicycles',
    'Carts'
  ].forEach(b => { buckets[b] = 0; });

  (site.classes || []).forEach(c => {
    const b = classBucket11(c.label);
    if (buckets[b] !== undefined) {
      buckets[b] += Number(c.count || 0);
    } else {
      buckets['Saloon Cars'] += Number(c.count || 0);
    }
  });
  return buckets;
}

function bucketLegacyClasses11(station) {
  const buckets = {};
  [
    'Motorcycles & Scooters',
    'Saloon Cars',
    'Light Goods (Pickups, Vans, 4WD)',
    'Minibuses (Matatus)',
    'Medium Buses',
    'Large Buses',
    'Light Trucks (Dynas, Tractors)',
    'Medium Trucks (Fusos, Lorries)',
    'Heavy Trucks & Semi-Trailers',
    'Bicycles',
    'Carts'
  ].forEach(b => { buckets[b] = 0; });

  Object.entries(station.class_totals || {}).forEach(([label, count]) => {
    if (label === 'Grand Total') return;
    const b = classBucket11(label);
    if (buckets[b] !== undefined) {
      buckets[b] += Number(count || 0);
    } else {
      buckets['Saloon Cars'] += Number(count || 0);
    }
  });
  return buckets;
}

function buildVehicleClassificationGroupCharts() {
  const buckets = [
    'Motorcycles & Scooters',
    'Saloon Cars',
    'Light Goods (Pickups, Vans, 4WD)',
    'Minibuses (Matatus)',
    'Medium Buses',
    'Large Buses',
    'Light Trucks (Dynas, Tractors)',
    'Medium Trucks (Fusos, Lorries)',
    'Heavy Trucks & Semi-Trailers',
    'Bicycles',
    'Carts'
  ];
  const colors = [
    'rgba(245, 158, 11, 0.85)',
    'rgba(59, 130, 246, 0.85)',
    'rgba(37, 99, 235, 0.85)',
    'rgba(147, 51, 234, 0.85)',
    'rgba(168, 85, 247, 0.85)',
    'rgba(124, 58, 237, 0.85)',
    'rgba(244, 63, 94, 0.85)',
    'rgba(225, 29, 72, 0.85)',
    'rgba(159, 18, 57, 0.85)',
    'rgba(16, 185, 129, 0.85)',
    'rgba(5, 150, 105, 0.85)'
  ];

  if (chartInstances.vehicleClassStacked) chartInstances.vehicleClassStacked.destroy();
  chartInstances.vehicleClassStacked = new Chart(document.getElementById('chartVehicleClassStacked'), {
    type: 'bar',
    data: {
      labels: ATC_CLASS_ITEMS.map(s => normalizeAtcId(s.id)),
      datasets: buckets.map((b, i) => ({ label: b, data: ATC_CLASS_ITEMS.map(s => bucketAtcClasses11(s)[b]), backgroundColor: colors[i], borderRadius: 4 }))
    },
    options: { ...chartDefaults(), indexAxis: 'y', scales: { x: { stacked: false, ticks: { color: '#5a668a', callback: v => v >= 1e6 ? (v/1e6).toFixed(1) + 'M' : v >= 1e3 ? (v/1e3).toFixed(0) + 'K' : v }, grid: { color: 'rgba(84,116,255,0.05)' } }, y: { stacked: false, ticks: { color: '#5a668a' }, grid: { color: 'rgba(84,116,255,0.05)' } } } }
  });

  if (chartInstances.legacyClassStacked) chartInstances.legacyClassStacked.destroy();
  chartInstances.legacyClassStacked = new Chart(document.getElementById('chartLegacyClassStacked'), {
    type: 'bar',
    data: {
      labels: LEGACY_ATC_STATIONS.map(s => s.id),
      datasets: buckets.map((b, i) => ({ label: b, data: LEGACY_ATC_STATIONS.map(s => bucketLegacyClasses11(s)[b]), backgroundColor: colors[i], borderRadius: 4 }))
    },
    options: { ...chartDefaults(), indexAxis: 'y', scales: { x: { stacked: false, ticks: { color: '#5a668a', callback: v => v >= 1e6 ? (v/1e6).toFixed(1) + 'M' : v >= 1e3 ? (v/1e3).toFixed(0) + 'K' : v }, grid: { color: 'rgba(84,116,255,0.05)' } }, y: { stacked: false, ticks: { color: '#5a668a' }, grid: { color: 'rgba(84,116,255,0.05)' } } } }
  });

  const atcLabels = ATC_CLASS_ITEMS.map(s => normalizeAtcId(s.id));
  const atcAdtRows = ATC_CLASS_ITEMS.map(s => getAtcAdtBreakdown(s.id));
  if (chartInstances.atcAdtCluster) chartInstances.atcAdtCluster.destroy();
  chartInstances.atcAdtCluster = new Chart(document.getElementById('chartAtcAdtCluster'), {
    type: 'bar',
    data: {
      labels: atcLabels,
      datasets: [
        { label: 'ADT incl. motorcycles', data: atcAdtRows.map(r => r?.includingMotorcycles || 0), backgroundColor: COLORS.cyan, borderRadius: 6 },
        { label: 'ADT excl. motorcycles', data: atcAdtRows.map(r => r?.excludingMotorcycles || 0), backgroundColor: COLORS.emerald, borderRadius: 6 },
        { label: 'Motorcycle ADT', data: atcAdtRows.map(r => r?.motorcycleAdt || 0), backgroundColor: COLORS.amber, borderRadius: 6 },
        { label: 'Bus + heavy goods ADT', data: atcAdtRows.map(r => (r?.rows || []).filter(x => x.bucket === 'Buses' || x.bucket === 'Heavy Goods').reduce((s, x) => s + x.adt, 0)), backgroundColor: COLORS.rose, borderRadius: 6 }
      ]
    },
    options: { ...chartDefaults(), scales: { ...chartDefaults().scales, y: { ...chartDefaults().scales.y, ticks: { ...chartDefaults().scales.y.ticks, callback: v => v >= 1e3 ? (v / 1e3).toFixed(0) + 'K' : v } } } }
  });

  if (chartInstances.legacyClassCluster) chartInstances.legacyClassCluster.destroy();
  chartInstances.legacyClassCluster = new Chart(document.getElementById('chartLegacyClassCluster'), {
    type: 'bar',
    data: {
      labels: LEGACY_ATC_STATIONS.map(s => s.id),
      datasets: buckets.map((b, i) => ({ label: b, data: LEGACY_ATC_STATIONS.map(s => bucketLegacyClasses11(s)[b]), backgroundColor: colors[i], borderRadius: 4 }))
    },
    options: { ...chartDefaults(), scales: { ...chartDefaults().scales, y: { ...chartDefaults().scales.y, ticks: { ...chartDefaults().scales.y.ticks, callback: v => v >= 1e6 ? (v / 1e6).toFixed(1) + 'M' : v >= 1e3 ? (v / 1e3).toFixed(0) + 'K' : v } } } }
  });
}

// BRIDGE DETAIL MODAL CONTROLLER
function openBridgeModal(bridgeId) {
  const b = BRIDGES.find(br => br._id === bridgeId) || BRIDGES.find(br => br.bridge_nam === bridgeId);
  if (!b) return;

  document.getElementById('modalBridgeName').textContent = b.bridge_nam;
  document.getElementById('mBridgeNo').textContent = b.bridge_no || 'N/A';
  document.getElementById('mRiver').textContent = bridgeRiverName(b);
  document.getElementById('mLength').textContent = b.bridge_len ? fmt(b.bridge_len, 1) + ' meters' : 'N/A';
  document.getElementById('mWidth').textContent = b.bridge_wid ? fmt(b.bridge_wid, 1) + ' meters' : 'N/A';
  document.getElementById('mSpansPiersLanes').textContent = `Spans: ${b.no_of_span ?? '-'} | Piers: ${b.no_of_pier ?? '-'} | Lanes: ${b.no_of_lane ?? '-'}`;

  const modalRatingBadge = (value, scope) => {
    if (value === undefined || value === null || value === '') return '<span style="color:var(--text-muted)">Not Surveyed</span>';
    return bridgeInventoryRatingCell(value, scope);
  };
  document.getElementById('mRating').innerHTML = modalRatingBadge(b.overall_rating, 'overall');

  // Link corridor Info
  document.getElementById('mLinkNo').textContent = b.link_no || 'N/A';
  document.getElementById('mLinkName').textContent = b.link_name || 'N/A';
  document.getElementById('mLinkLengthClass').textContent = `Length: ${b.link_len_km ? fmt(b.link_len_km, 1) + ' km' : 'N/A'} | Class: ${canonicalRoadClass(b.road_class)}`;
  document.getElementById('mLinkSurface').textContent = b.surface_link || b.surface_ty || 'N/A';

  const paveAgeText = b.pave_age != null
    ? `${b.pave_year} (${b.pave_age} years old)`
    : b.pave_year ? `${b.pave_year}` : 'N/A';
  document.getElementById('mLinkPaveAge').textContent = paveAgeText;
  document.getElementById('mNdp4Station').textContent = `NDP4 Link: ${b.ndp4 ? 'Yes' : 'No'} | Station: ${b.station || 'N/A'}`;

  // Traffic / Coordinates Info
  const trafficRow = bridgeTrafficRowForBridge(b);
  document.getElementById('mLinkAADT').textContent = trafficRow?.assigned_adt_incl_motorcycles != null ? fmt(trafficRow.assigned_adt_incl_motorcycles, 0) + ' vehicles / day' : 'N/A';
  document.getElementById('mAnnualGrowthRate').textContent = formatGrowthPercent(trafficRow?.annual_traffic_growth_rate);
  document.getElementById('mRegion').textContent = b.region || 'N/A';

  if (b.x_new && b.y_new) {
    const sourceText = b.location_source_lat != null && b.location_source_lon != null
      ? `Source: ${Number(b.location_source_lat).toFixed(6)}, ${Number(b.location_source_lon).toFixed(6)}`
      : 'Source: -';
    const correctedText = `Corrected: ${Number(b.y_new).toFixed(6)}, ${Number(b.x_new).toFixed(6)}`;
    const moveText = b.location_correction_distance_km != null ? `Moved: ${fmt(b.location_correction_distance_km, 3)} km` : 'Moved: -';
    document.getElementById('mCoordinates').textContent = `${correctedText} | ${sourceText} | ${moveText} | ${b.location_correction_method || 'N/A'}`;
  } else {
    document.getElementById('mCoordinates').textContent = '-';
  }

  const refText = (...vals) => vals.filter(v => v != null && String(v).trim() !== '').join(' | ') || 'N/A';
  const componentRatings = [
    ['Approaches', b.approaches_rating, 'approaches'],
    ['Roadway', b.roadway_rating, 'roadway'],
    ['Substructure', b.substructure_rating, 'structural'],
    ['Superstructure', b.superstructure_rating, 'structural'],
    ['Waterway', b.waterway_rating, 'waterway']
  ].map(([label, value, scope]) => {
    return `<span title="${htmlEscape(bridgeConditionRatingTooltip(value, scope))}">${htmlEscape(label)}: ${modalRatingBadge(value, scope)}</span>`;
  }).join(' <span style="color:var(--border)">|</span> ');
  document.getElementById('mReferenceSource').textContent = `${b.source_workbook || 'Bridges and Culverts 2026.xlsx'} / ${b.source_sheet || 'tblB-Bridge2'} / row ${b.source_row || 'N/A'}`;
  document.getElementById('mReferenceNumbers').textContent = refText(`Original: ${b.original_bridge_no || 'N/A'}`, `New: ${b.new_bridge_no || 'N/A'}`);
  document.getElementById('mBridgeTypes').textContent = refText(`Bridge: ${b.type_bridge || 'N/A'}`, `Deck: ${b.type_deck || 'N/A'}`, `Crossing: ${b.type_crossing || 'N/A'}`);
  document.getElementById('mDeckMaterial').textContent = refText(`Material: ${b.type_deck_material || 'N/A'}`, `Wearing: ${b.type_wearing_surface || 'N/A'}`, `Surface: ${b.surface_link || 'N/A'}`);
  document.getElementById('mWaterwayScour').textContent = refText(`Scour risk: ${b.scour_risk || 'N/A'}`, `Protection: ${b.scour_protection || 'N/A'}`);
  document.getElementById('mComponentRatings').innerHTML = componentRatings;
  document.getElementById('mTownEndpoints').textContent = refText(b.town_left, b.town_right);
  document.getElementById('mInspectionReference').textContent = refText(b.inspector, b.firm, b.date_modified);
  document.getElementById('mReferenceComment').textContent = b.comment || b.remarks || 'N/A';

  document.getElementById('bridgeModal').classList.add('active');
}

function closeModal() {
  document.getElementById('bridgeModal').classList.remove('active');
}

// TAB 3: ONGOING ROAD WORKS PANEL
// TAB 4: PAVEMENT HEALTH & CONDITION
// TAB 5: NETWORK EVOLUTION & HISTORY
// TAB 6: TRAFFIC GROWTH PANEL
// TAB 7: VEHICLE CLASSIFICATION PANEL
function buildATCClassification() {
  updateATCClassChart();

  const tbody = document.getElementById('atcSummaryBody');
  tbody.innerHTML = ATC_SITE_ITEMS.map(s => {
    const flow = ATC_FLOW.aadt.find(a => normalizeAtcId(a.id) === normalizeAtcId(s.id));
    const speed = ATC_SPEED_ITEMS.find(sp => normalizeAtcId(sp.id) === normalizeAtcId(s.id));
    const adt = getAtcAdtBreakdown(s.id);
    return `
      <tr>
        <td class="highlight-cell">${tableCellHtml(normalizeAtcId(s.id), 'station_id')}</td>
        <td>${tableCellHtml(s.road, 'road_name')}</td>
        <td style="color:var(--accent-cyan);font-weight:700">${flow ? fmt(flow.aadt) : 'N/A'}</td>
        <td style="color:var(--accent-emerald);font-weight:700">${adt ? fmt(adt.excludingMotorcycles, 0) : 'N/A'}</td>
        <td style="color:var(--accent-amber);font-weight:700">${adt ? fmt(adt.motorcycleAdt, 0) : 'N/A'}</td>
        <td>${flow ? flow.light_pct + '%' : 'N/A'}</td>
        <td style="color:var(--accent-amber);font-weight:700">${flow ? flow.heavy_pct + '%' : 'N/A'}</td>
        <td>${speed ? speed.avg_speed : 'N/A'} km/h</td>
        <td>${speed ? speed.p85_speed : 'N/A'} km/h</td>
        <td>${flow ? flow.days : 'N/A'} days</td>
      </tr>
    `;
  }).join('');

  document.querySelectorAll('#atcSummaryTable thead th').forEach(th => {
    th.onclick = () => sortTable('atcSummaryTable', th);
  });
}

function getAtcAdtBreakdown(siteId) {
  const norm = normalizeAtcId(siteId);
  const siteData = ATC_CLASS_ITEMS.find(s => normalizeAtcId(s.id) === norm);
  const flow = ATC_FLOW.aadt.find(a => normalizeAtcId(a.id) === norm);
  if (!siteData || !flow || !flow.aadt) return null;
  const classes = (siteData.classes || []).filter(c => c.count > 0 && c.cls > 0);
  const totalCount = classes.reduce((s, c) => s + Number(c.count || 0), 0);
  if (!totalCount) return null;
  const rows = classes.map(c => {
    const share = Number(c.count || 0) / totalCount;
    const adt = share * Number(flow.aadt || 0);
    const detailedBucket = classBucket11(c.label);
    const bucket = majorVehicleBucket(c.label);
    const isMotorcycle = bucket === 'Motorcycles';
    return { ...c, share, adt, bucket, detailedBucket, isMotorcycle };
  });
  const motorcycleAdt = rows.filter(r => r.isMotorcycle).reduce((s, r) => s + r.adt, 0);
  const includingMotorcycles = Number(flow.aadt || 0);
  return {
    siteId: norm,
    road: ATC_SITE_ITEMS.find(s => normalizeAtcId(s.id) === norm)?.road || '',
    rows,
    includingMotorcycles,
    motorcycleAdt,
    excludingMotorcycles: Math.max(0, includingMotorcycles - motorcycleAdt),
    motorcycleShare: includingMotorcycles ? motorcycleAdt / includingMotorcycles : 0,
    totalCount
  };
}

function buildVehicleClassAdt(siteId) {
  const breakdown = getAtcAdtBreakdown(siteId);
  const kpi = document.getElementById('atcAdtKpis');
  const tbody = document.getElementById('vehicleClassAdtBody');
  const canvas = document.getElementById('chartVehicleClassAdt');
  if (!kpi || !tbody || !canvas) return;

  if (!breakdown) {
    kpi.innerHTML = '';
    tbody.innerHTML = '<tr><td colspan="5">No ADT/classification record available for this station.</td></tr>';
    if (chartInstances.vehicleClassAdt) chartInstances.vehicleClassAdt.destroy();
    return;
  }

  const heavyAdt = breakdown.rows
    .filter(r => r.bucket === 'Heavy Goods' || r.bucket === 'Buses')
    .reduce((s, r) => s + r.adt, 0);
  kpi.innerHTML = [
    [fmt(breakdown.includingMotorcycles, 0), 'ADT Including Motorcycles'],
    [fmt(breakdown.excludingMotorcycles, 0), 'ADT Excluding Motorcycles'],
    [fmt(breakdown.motorcycleAdt, 0), 'Motorcycle ADT'],
    [(breakdown.motorcycleShare * 100).toFixed(1) + '%', 'Motorcycle Share'],
    [fmt(heavyAdt, 0), 'Bus + Heavy Goods ADT'],
    [fmt(breakdown.totalCount, 0), 'Classified Count Records']
  ].map(([v,l]) => `<div class="traffic-metric"><strong>${v}</strong><span>${l}</span></div>`).join('');

  const rows = breakdown.rows.slice().sort((a, b) => b.adt - a.adt);
  
    const BRIDGE_TRAFFIC_PAGE_SIZE = 50;
    const totalPages = Math.max(1, Math.ceil(rows.length / BRIDGE_TRAFFIC_PAGE_SIZE));
    if (typeof window.bridgeTrafficPage === 'undefined') window.bridgeTrafficPage = 1;
    window.bridgeTrafficPage = Math.max(1, Math.min(window.bridgeTrafficPage, totalPages));
    
    const prevBtn = document.getElementById('bridgeTrafficPrev');
    const nextBtn = document.getElementById('bridgeTrafficNext');
    const infoBtn = document.getElementById('bridgeTrafficPageInfo');
    if (infoBtn) infoBtn.textContent = `Page ${window.bridgeTrafficPage} of ${totalPages} (${rows.length} total)`;
    if (prevBtn) {
      prevBtn.disabled = window.bridgeTrafficPage <= 1;
      prevBtn.onclick = () => { window.bridgeTrafficPage--; buildBridgeTrafficAnalytics(); };
    }
    if (nextBtn) {
      nextBtn.disabled = window.bridgeTrafficPage >= totalPages;
      nextBtn.onclick = () => { window.bridgeTrafficPage++; buildBridgeTrafficAnalytics(); };
    }

    const pageRows = rows.slice((window.bridgeTrafficPage - 1) * BRIDGE_TRAFFIC_PAGE_SIZE, window.bridgeTrafficPage * BRIDGE_TRAFFIC_PAGE_SIZE);

    tbody.innerHTML = pageRows.map(r => `
    <tr>
      <td class="highlight-cell">${tableCellHtml(r.label, 'vehicle_class')}</td>
      <td>${fmt(r.count)}</td>
      <td>${(r.share * 100).toFixed(2)}%</td>
      <td style="color:var(--accent-cyan);font-weight:700">${fmt(r.adt, 0)}</td>
      <td>${tableCellHtml(r.isMotorcycle ? 'No' : 'Yes', 'yes_no')}</td>
    </tr>
  `).join('');

  if (chartInstances.vehicleClassAdt) chartInstances.vehicleClassAdt.destroy();
  chartInstances.vehicleClassAdt = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: rows.map(r => r.label),
      datasets: [{
        label: 'Estimated ADT',
        data: rows.map(r => r.adt),
        backgroundColor: rows.map(r => r.isMotorcycle ? COLORS.amber : r.bucket === 'Heavy Goods' ? COLORS.rose : r.bucket === 'Buses' ? COLORS.purple : COLORS.cyan),
        borderRadius: 6,
        maxBarThickness: 26
      }]
    },
    options: {
      ...chartDefaults(),
      indexAxis: 'y',
      plugins: {
        ...chartDefaults().plugins,
        legend: { display: false },
        title: { display: true, text: `Estimated ADT by Vehicle Class - ${breakdown.siteId}`, color: '#f0f3fa', font: { family: 'Plus Jakarta Sans', size: 13, weight: 700 } }
      },
      scales: {
        ...chartDefaults().scales,
        x: { ...chartDefaults().scales.x, ticks: { ...chartDefaults().scales.x.ticks, callback: v => fmt(v, 0) } }
      }
    }
  });
}

function updateATCClassChart() {
  const siteId = document.getElementById('atcSiteSelect').value;
  const siteData = ATC_CLASS_ITEMS.find(s => normalizeAtcId(s.id) === normalizeAtcId(siteId));
  if (!siteData) return;
  buildVehicleClassAdt(siteId);

  const classes = siteData.classes.filter(c => c.count > 0 && c.cls > 0);
  const labels = classes.map(c => c.label);
  const counts = classes.map(c => c.count);

  if (chartInstances.atcClass) chartInstances.atcClass.destroy();
  chartInstances.atcClass = new Chart(document.getElementById('chartATCClass'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{ label: 'Counted Vehicles', data: counts, backgroundColor: labels.map((_, i) => PALETTE[i % PALETTE.length]), borderRadius: 6, maxBarThickness: 24 }]
    },
    options: {
      ...chartDefaults(), indexAxis: 'y',
      plugins: {
        ...chartDefaults().plugins, legend: { display: false },
        title: { display: true, text: `Classified Fleet Count - ${siteId}`, color: '#f0f3fa', font: { family: 'Plus Jakarta Sans', size: 13, weight: 700 } }
      },
      scales: {
        ...chartDefaults().scales,
        x: { ...chartDefaults().scales.x, ticks: { ...chartDefaults().scales.x.ticks, callback: v => v >= 1e6 ? (v/1e6).toFixed(1) + 'M' : v >= 1e3 ? (v/1e3).toFixed(0) + 'K' : v } }
      }
    }
  });

  const lightClasses = [1, 2, 3];
  const lightTotal = counts.reduce((s, c, i) => s + (lightClasses.includes(classes[i].cls) ? c : 0), 0);
  const heavyTotal = counts.reduce((s, c, i) => s + (lightClasses.includes(classes[i].cls) ? 0 : c), 0);

  if (chartInstances.atcPie) chartInstances.atcPie.destroy();
  chartInstances.atcPie = new Chart(document.getElementById('chartATCPie'), {
    type: 'doughnut',
    data: {
      labels: ['Light Vehicles', 'Heavy Cargo Vehicles'],
      datasets: [{ data: [lightTotal, heavyTotal], backgroundColor: [COLORS.cyan, COLORS.rose], borderWidth: 0, hoverOffset: 12 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '60%',
      plugins: {
        legend: { position: 'bottom', labels: { color: '#9aa5c4', font: { family: 'Plus Jakarta Sans', size: 12, weight: 600 }, padding: 20 } },
        title: { display: true, text: 'Heavy Vehicle Classification Ratio', color: '#f0f3fa', font: { family: 'Plus Jakarta Sans', size: 13, weight: 700 } },
        tooltip: {
          backgroundColor: 'rgba(6, 9, 19, 0.96)', borderColor: 'rgba(84, 116, 255, 0.25)', borderWidth: 1, padding: 12, cornerRadius: 12,
          callbacks: { label: ctx => ` ${ctx.label}: ${fmt(ctx.raw)} (${((ctx.raw/(lightTotal+heavyTotal))*100).toFixed(1)}%)` }
        }
      }
    }
  });
}

// TAB 8: MONTHLY FLOWS PANEL
// ===========================================
//  EXPORT ENGINE: PNG & CSV
// ===========================================
function bindExport() {
  document.getElementById('btnDownloadPNG').addEventListener('click', exportPNG);
  document.getElementById('btnDownloadCSV').addEventListener('click', exportCSV);
    document.getElementById('btnDownloadKML')?.addEventListener('click', exportCorrectedBridgeKML);
    document.getElementById('btnDownloadSHP')?.addEventListener('click', exportCorrectedBridgeSHP);
    document.getElementById('btnDownloadPDF')?.addEventListener('click', exportCorrectedBridgePDF);
    document.getElementById('btnDownloadPeriodCSV')?.addEventListener('click', exportVehicleClassPeriodCSV);
    document.getElementById('btnDownloadXLSX')?.addEventListener('click', downloadFormulaWorkbook);
}

function exportPNG() {
  const activePanel = document.querySelector('.panel.active');
  const canvas = activePanel?.querySelector('canvas');
  if (!canvas) { alert('No chart currently visible to export on this tab.'); return; }

  const link = document.createElement('a');
  link.download = 'uganda_bridge_network_chart_' + new Date().toISOString().slice(0, 10) + '.png';

  const expCanvas = document.getElementById('exportCanvas');
  expCanvas.width = canvas.width * 2;
  expCanvas.height = canvas.height * 2;

  const ctx = expCanvas.getContext('2d');
  ctx.fillStyle = '#060913';
  ctx.fillRect(0, 0, expCanvas.width, expCanvas.height);
  ctx.drawImage(canvas, 0, 0, expCanvas.width, expCanvas.height);

  link.href = expCanvas.toDataURL('image/png', 1.0);
  link.click();
}

function exportCSV() {
  const activeTab = document.querySelector('.tab.active')?.dataset.tab;
  let csv = '';
  let filename = 'uganda_bridge_transport_analytics.csv';

  const escapeCSV = val => {
    if (val == null) return '""';
    const str = String(val).trim();
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };

  if (activeTab === 'spatial-map' && selectedMapBridge) {
    csv = selectedBridgeCsvText(selectedMapBridge);
    filename = `uganda_bridge_selected_details_${String(selectedMapBridge.bridge_nam || selectedMapBridge.bridge_no || 'bridge').replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '').toLowerCase()}.csv`;
  } else if (activeTab === 'spatial-map') {
    csv = correctedBridgeCsvText();
    filename = 'uganda_corrected_bridge_database.csv';
  } else if (activeTab === 'bridge-table') {
    const filtered = getFilteredBridges();
    csv = BMS_BRIDGE_INVENTORY_COLUMNS.map(col => escapeCSV(col.label)).join(',') + '\n';
    csv += filtered.map(b => BMS_BRIDGE_INVENTORY_COLUMNS.map(col => escapeCSV(bridgeInventoryCellText(bridgeInventoryValue(b, col), col.key))).join(',')).join('\n');
    filename = 'uganda_bridges_bms_inventory_elements_conditions.csv';
  } else if (activeTab === 'bridge-traffic') {
    const rows = buildBridgeTrafficRows();
    csv = 'Bridge Name,Bridge No,Bridge Latitude,Bridge Longitude,Link ID,Link Name,Road Class,Region,Station,River,Current Assigned ADT,ADT Excl Motorcycles,Annual Weighted Growth Rate,Annual Weighted Growth Source,Seasonal Factor,Seasonal Source,Jan Seasonal Factor,Feb Seasonal Factor,Mar Seasonal Factor,Apr Seasonal Factor,May Seasonal Factor,Jun Seasonal Factor,Jul Seasonal Factor,Aug Seasonal Factor,Sep Seasonal Factor,Oct Seasonal Factor,Nov Seasonal Factor,Dec Seasonal Factor,Nearest Manual Count,Manual Link,Manual Latitude,Manual Longitude,Manual Distance km,Manual Stations Used,Motorcycle ADT,Light Vehicle ADT,Bus ADT,Heavy Goods ADT,Other ADT,Bicycles,Carts,Motorcycles Class,Saloon Cars,Light Goods,Minibuses,Medium Buses,Large Buses,Light Trucks,Medium Trucks,Heavy Trucks,Heavy %,Evidence Score,Detailed Vehicle Class Volumes,Count Days,Monthly Total Vehicles,Monthly Heavy Vehicles,Average Monthly Heavy,Average Speed km/h,P85 Speed km/h,Influence Score,Priority\n';
    csv += rows.map(r => [
      escapeCSV(r.bridge_nam), escapeCSV(r.bridge_no), bridgeMapLat(r) ?? r.y_new ?? '', bridgeMapLon(r) ?? r.x_new ?? '', escapeCSV(r.link_no), escapeCSV(r.link_name), escapeCSV(r.road_class), escapeCSV(r.region), escapeCSV(r.station), escapeCSV(r.river),
      r.assigned_adt_incl_motorcycles != null ? r.assigned_adt_incl_motorcycles.toFixed(2) : '',
      r.assigned_adt_excl_motorcycles != null ? r.assigned_adt_excl_motorcycles.toFixed(2) : '',
      r.annual_traffic_growth_rate != null ? r.annual_traffic_growth_rate.toFixed(5) : '',
      escapeCSV(r.annual_traffic_growth_source),
      r.seasonal_factor != null ? r.seasonal_factor.toFixed(4) : '',
      escapeCSV(r.monthly_seasonal_source),
      ...MONTH_FACTOR_COLUMNS.map(([key]) => r[key] != null ? Number(r[key]).toFixed(4) : ''),
      escapeCSV(r.nearest_manual_id), escapeCSV(r.nearest_manual_link), r.nearest_manual_lat ?? '', r.nearest_manual_lng ?? '', r.nearest_manual_distance_km != null ? r.nearest_manual_distance_km.toFixed(3) : '',
      r.manual_station_count ?? '', r.motorcycle_adt != null ? r.motorcycle_adt.toFixed(2) : '',
      r.light_vehicle_adt != null ? r.light_vehicle_adt.toFixed(2) : '', r.bus_adt != null ? r.bus_adt.toFixed(2) : '', r.heavy_goods_adt != null ? r.heavy_goods_adt.toFixed(2) : '',
      r.other_vehicle_adt != null ? r.other_vehicle_adt.toFixed(2) : '',
      bridgeDetailedClassAdt(r, 'Bicycles').toFixed(2), bridgeDetailedClassAdt(r, 'Carts').toFixed(2), bridgeDetailedClassAdt(r, 'Motorcycles & Scooters').toFixed(2),
      bridgeDetailedClassAdt(r, 'Saloon Cars').toFixed(2), bridgeDetailedClassAdt(r, 'Light Goods (Pickups, Vans, 4WD)').toFixed(2), bridgeDetailedClassAdt(r, 'Minibuses (Matatus)').toFixed(2),
      bridgeDetailedClassAdt(r, 'Medium Buses').toFixed(2), bridgeDetailedClassAdt(r, 'Large Buses').toFixed(2), bridgeDetailedClassAdt(r, 'Light Trucks (Dynas, Tractors)').toFixed(2),
      bridgeDetailedClassAdt(r, 'Medium Trucks (Fusos, Lorries)').toFixed(2), bridgeDetailedClassAdt(r, 'Heavy Trucks & Semi-Trailers').toFixed(2),
      r.heavy_pct != null ? r.heavy_pct.toFixed(3) : '', r.count_evidence_score != null ? r.count_evidence_score.toFixed(2) : '',
      escapeCSV(classVolumeText(r.class_volumes)), r.count_days ?? '', r.monthly_total ?? '', r.monthly_heavy ?? '',
      r.monthly_avg_heavy != null ? r.monthly_avg_heavy.toFixed(2) : '', r.avg_speed ?? '', r.p85_speed ?? '', r.influence_score != null ? r.influence_score.toFixed(2) : '', escapeCSV(r.priority)
    ].join(',')).join('\n');
    const odCsv = bridgeOdFlowCsvText(rows);
    if (odCsv) csv += '\n\nPer-Bridge Road-Link OD Flow Table\n' + odCsv;
    filename = 'uganda_bridge_crossing_traffic_analytics.csv';
  } else if (activeTab === 'bridge-summary') {
    const rows = buildBridgeTrafficRows();
    csv = 'Bridge Name,Bridge No,Link ID,Link Name,Road Class,Region,Station,River,Current Assigned ADT,ADT Excl Motorcycles,Annual Weighted Growth Rate,Annual Weighted Growth Source,Motorcycle ADT,Light Vehicle ADT,Bus ADT,Heavy Goods ADT,Other ADT,Traffic Band,Nearest Manual Count,Manual Distance km,Seasonal Factor,Evidence Score,Influence Score,Priority\n';
    csv += rows.map(r => [
      escapeCSV(r.bridge_nam), escapeCSV(r.bridge_no), escapeCSV(r.link_no), escapeCSV(r.link_name), escapeCSV(r.road_class), escapeCSV(r.region), escapeCSV(r.station), escapeCSV(r.river),
      r.assigned_adt_incl_motorcycles != null ? r.assigned_adt_incl_motorcycles.toFixed(2) : '',
      r.assigned_adt_excl_motorcycles != null ? r.assigned_adt_excl_motorcycles.toFixed(2) : '',
      r.annual_traffic_growth_rate != null ? r.annual_traffic_growth_rate.toFixed(5) : '',
      escapeCSV(r.annual_traffic_growth_source),
      r.motorcycle_adt != null ? r.motorcycle_adt.toFixed(2) : '',
      r.light_vehicle_adt != null ? r.light_vehicle_adt.toFixed(2) : '',
      r.bus_adt != null ? r.bus_adt.toFixed(2) : '',
      r.heavy_goods_adt != null ? r.heavy_goods_adt.toFixed(2) : '',
      r.other_vehicle_adt != null ? r.other_vehicle_adt.toFixed(2) : '',
      escapeCSV(trafficBand(r.assigned_adt_incl_motorcycles)),
      escapeCSV(r.nearest_manual_id), r.nearest_manual_distance_km != null ? r.nearest_manual_distance_km.toFixed(3) : '',
      r.seasonal_factor != null ? r.seasonal_factor.toFixed(4) : '', r.count_evidence_score != null ? r.count_evidence_score.toFixed(2) : '',
      r.influence_score != null ? r.influence_score.toFixed(2) : '', escapeCSV(r.priority)
    ].join(',')).join('\n');
    filename = 'uganda_bridge_traffic_summary.csv';
  } else if (activeTab === 'bridge-loading') {
    const rows = buildBridgeTrafficRows();
    csv = 'Bridge Name,Bridge No,Link ID,Link Name,Road Class,Region,Manual Count Evidence,ADT incl Motorcycles,ADT excl Motorcycles,Annual Weighted Growth Rate,Annual Weighted Growth Source,Motorcycle ADT,Light Vehicle ADT,Bus ADT,Heavy Goods ADT,Other ADT,Heavy %,Detailed Vehicle Class Volumes,Priority\n';
    csv += rows.map(r => [
      escapeCSV(r.bridge_nam), escapeCSV(r.bridge_no), escapeCSV(r.link_no), escapeCSV(r.link_name), escapeCSV(r.road_class), escapeCSV(r.region),
      escapeCSV(r.nearest_manual_id || 'N/A'),
      r.assigned_adt_incl_motorcycles != null ? r.assigned_adt_incl_motorcycles.toFixed(2) : '',
      r.assigned_adt_excl_motorcycles != null ? r.assigned_adt_excl_motorcycles.toFixed(2) : '',
      r.annual_traffic_growth_rate != null ? r.annual_traffic_growth_rate.toFixed(5) : '',
      escapeCSV(r.annual_traffic_growth_source),
      r.motorcycle_adt != null ? r.motorcycle_adt.toFixed(2) : '',
      r.light_vehicle_adt != null ? r.light_vehicle_adt.toFixed(2) : '',
      r.bus_adt != null ? r.bus_adt.toFixed(2) : '',
      r.heavy_goods_adt != null ? r.heavy_goods_adt.toFixed(2) : '',
      r.other_vehicle_adt != null ? r.other_vehicle_adt.toFixed(2) : '',
      r.heavy_pct != null ? r.heavy_pct.toFixed(3) : '',
      escapeCSV(classVolumeText(r.class_volumes)),
      escapeCSV(r.priority)
    ].join(',')).join('\n');
    filename = 'uganda_bridge_vehicle_class_loading.csv';
  } else if (activeTab === 'bridge-works') {
    csv = 'Record Type,S/N,Bridge or Project,Bridge No,Link ID,Link Name,Funder,Contractor / Consultant,Financial Status,Construction Status,Compensation / Land,Chainage Km\n';
    if (typeof BRIDGE_WORKS_DATA !== 'undefined') {
      csv += BRIDGE_WORKS_DATA.map((row, i) => [
        'Active Package', row.sn || (i + 1), escapeCSV(row.bridge), '', '', '', escapeCSV(row.funder), escapeCSV(row.contractor_consultant),
        escapeCSV(row.financial_status), escapeCSV(row.status), escapeCSV(row.compensation), ''
      ].join(',')).join('\n');
    }
    if (typeof ONGOING_BRIDGE_WORKS !== 'undefined') {
      csv += (csv.endsWith('\n') ? '' : '\n') + ONGOING_BRIDGE_WORKS.map(row => [
        'Candidate Bridge Work', row.sn, escapeCSV(row.bridge_name), escapeCSV(row.bridge_no), escapeCSV(row.link_id), escapeCSV(row.link_name),
        'Candidate', 'Road link candidate list', 'Not available in candidate list', escapeCSV(row.status), '', row.chainage_km ?? ''
      ].join(',')).join('\n');
    }
    filename = 'uganda_bridge_works_inventory.csv';
  } else if (activeTab === 'major-culverts') {
    const culverts = typeof MAJOR_CULVERTS !== 'undefined' ? MAJOR_CULVERTS : [];
    csv = BMS_CULVERT_INVENTORY_COLUMNS.map(col => escapeCSV(col.label)).join(',') + '\n';
    csv += culverts.map(c => BMS_CULVERT_INVENTORY_COLUMNS.map(col => escapeCSV(bridgeInventoryCellText(bridgeInventoryValue(c, col), col.key))).join(',')).join('\n');
    filename = 'uganda_major_culverts_bms_inventory.csv';
  }

  if (!csv) { alert('No data available to export for this tab.'); return; }

  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadBlob(filename, blob) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadFormulaWorkbook() {
  const link = document.createElement('a');
  link.href = 'bridge_traffic_formula_workbook.xlsx';
  link.download = 'bridge_traffic_formula_workbook.xlsx';
  link.click();
}

function xmlEscape(value) {
  return String(value ?? '').replace(/[<>&"']/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c]));
}

function correctedBridgeRows() {
  auditAndCorrectBridgeDatabaseLocations();
  validateAndCorrectBridgeChainages();
  return BRIDGES.map(b => {
    const evidence = bridgeTrafficEvidence(b);
    const annualGrowthModel = bridgeAnnualWeightedGrowthModel(b, evidence);
    const annualGrowthRate = annualGrowthModel.rate;
    return {
      id: b._id,
      bridge_no: b.bridge_no || '',
      bridge_nam: b.bridge_nam || '',
      link_no: b.link_no || '',
      link_name: b.link_name || '',
      road_class: canonicalRoadClass(b.road_class),
      region: b.region || '',
      station: b.station || '',
      river: bridgeRiverName(b),
      source_lon: b.location_source_lon ?? b.source_x_new ?? '',
      source_lat: b.location_source_lat ?? b.source_y_new ?? '',
      lon: b.location_corrected_lon ?? b.x_new ?? '',
      lat: b.location_corrected_lat ?? b.y_new ?? '',
      correction_km: b.location_correction_distance_km ?? '',
      correction_method: b.location_correction_method || '',
      audit_status: b.location_audit_status || '',
      national_network_status: b.location_on_national_road ? 'On national road network' : 'Not on national road network',
      network_match_scope: b.location_network_match_scope || '',
      requires_review: b.location_requires_review ? 'Yes' : 'No',
      corrected_link_id: b.location_corrected_link_id || b.link_no || '',
      corrected_road_name: b.location_corrected_road_name || b.link_name || '',
      corrected_road_class: b.location_corrected_road_class || canonicalRoadClass(b.road_class),
      aadt: b.aadt_rebuilt_2026 ?? b.aadt_2025 ?? '',
      annual_growth_rate: annualGrowthRate,
      annual_growth_source: annualGrowthModel.source,
      annual_weighted_growth_rate: annualGrowthRate,
      annual_weighted_growth_source: annualGrowthModel.source
    };
  });
}

function correctedBridgeCsvText() {
  const escapeCSV = val => {
    if (val == null) return '""';
    const str = String(val).trim();
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };
  const headers = [
    'Record ID', 'Bridge No', 'Bridge Name', 'Link ID', 'Link Name', 'Road Class', 'Region', 'Station', 'River',
    'AADT', 'Annual Weighted Growth Rate', 'Annual Weighted Growth Source', 'Source Longitude', 'Source Latitude', 'Corrected Longitude', 'Corrected Latitude',
    'Correction Distance km', 'Correction Method', 'Audit Status', 'National Network Status', 'Network Match Scope',
    'Requires Review', 'Corrected Link ID', 'Corrected Road Name', 'Corrected Road Class'
  ];
  const lines = [headers.join(',')];
  correctedBridgeRows().forEach(r => {
    lines.push([
      r.id, r.bridge_no, r.bridge_nam, r.link_no, r.link_name, r.road_class, r.region, r.station, r.river,
      r.aadt, r.annual_growth_rate, r.annual_growth_source, r.source_lon, r.source_lat, r.lon, r.lat, r.correction_km, r.correction_method,
      r.audit_status, r.national_network_status, r.network_match_scope, r.requires_review, r.corrected_link_id,
      r.corrected_road_name, r.corrected_road_class
    ].map(escapeCSV).join(','));
  });
  return lines.join('\n');
}

function exportCorrectedBridgeKML() {
  const rows = correctedBridgeRows();
  const placemarks = rows.map(r => `
    <Placemark>
      <name>${xmlEscape(`${r.bridge_no} ${r.bridge_nam}`.trim())}</name>
      <styleUrl>#bridgePoint</styleUrl>
      <description>${xmlEscape(`Link: ${r.link_no} | ${r.link_name}\nClass: ${r.road_class}\nRegion: ${r.region}\nAADT: ${r.aadt}\nAnnual weighted growth: ${formatGrowthPercent(r.annual_growth_rate)}\nSource coordinate: ${r.source_lat}, ${r.source_lon}\nCorrected coordinate: ${r.lat}, ${r.lon}\nCorrection: ${r.correction_method}\nDistance moved km: ${r.correction_km}`)}</description>
      <ExtendedData>
        ${Object.entries(r).filter(([k]) => !['annual_growth_rate', 'annual_growth_source'].includes(k)).map(([k, v]) => `<Data name="${xmlEscape(k)}"><value>${xmlEscape(v)}</value></Data>`).join('')}
      </ExtendedData>
      <Point><coordinates>${r.lon},${r.lat},0</coordinates></Point>
    </Placemark>`).join('');
  const kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Corrected Uganda Bridge Database</name>
    <description>Bridge locations corrected to Uganda national road network geometry and audited for source/corrected coordinates.</description>
    <Style id="bridgePoint"><IconStyle><color>ff00e5ff</color><scale>0.9</scale></IconStyle></Style>
    ${placemarks}
  </Document>
</kml>`;
  downloadBlob('uganda_corrected_bridge_database.kml', new Blob([kml], { type: 'application/vnd.google-earth.kml+xml;charset=utf-8' }));
}

function fixedAscii(value, len) {
  const text = String(value ?? '').replace(/[^\x20-\x7E]/g, ' ').slice(0, len);
  return text.padEnd(len, ' ');
}

function makeDbf(rows) {
  const fields = [
    ['BRIDGE_NO', 'C', 20, 0], ['NAME', 'C', 60, 0], ['LINK_ID', 'C', 24, 0], ['ROAD_CLASS', 'C', 8, 0],
    ['REGION', 'C', 24, 0], ['STATION', 'C', 24, 0], ['COND', 'C', 24, 0], ['AADT', 'N', 12, 0], ['GROWTH_RT', 'N', 10, 5], ['GROWTH_SRC', 'C', 80, 0],
    ['SRC_LON', 'N', 14, 6], ['SRC_LAT', 'N', 14, 6], ['CORR_LON', 'N', 14, 6], ['CORR_LAT', 'N', 14, 6],
    ['MOVE_KM', 'N', 12, 3], ['NETWORK', 'C', 28, 0], ['SCOPE', 'C', 32, 0], ['REVIEW', 'C', 8, 0], ['AUDIT', 'C', 28, 0], ['METHOD', 'C', 80, 0]
  ];
  const headerLen = 32 + fields.length * 32 + 1;
  const recordLen = 1 + fields.reduce((s, f) => s + f[2], 0);
  const bytes = new Uint8Array(headerLen + rows.length * recordLen + 1);
  const view = new DataView(bytes.buffer);
  const now = new Date();
  bytes[0] = 0x03; bytes[1] = now.getFullYear() - 1900; bytes[2] = now.getMonth() + 1; bytes[3] = now.getDate();
  view.setUint32(4, rows.length, true);
  view.setUint16(8, headerLen, true);
  view.setUint16(10, recordLen, true);
  let off = 32;
  fields.forEach(([name, type, len, dec]) => {
    const nameBytes = new TextEncoder().encode(name.slice(0, 10));
    bytes.set(nameBytes, off);
    bytes[off + 11] = type.charCodeAt(0);
    bytes[off + 16] = len;
    bytes[off + 17] = dec;
    off += 32;
  });
  bytes[off++] = 0x0D;
  const values = r => [r.bridge_no, r.bridge_nam, r.link_no, r.road_class, r.region, r.station, r.condition, r.aadt, r.annual_growth_rate, r.annual_growth_source, r.source_lon, r.source_lat, r.lon, r.lat, r.correction_km, r.national_network_status, r.network_match_scope, r.requires_review, r.audit_status, r.correction_method];
  rows.forEach(r => {
    bytes[off++] = 0x20;
    values(r).forEach((v, i) => {
      const [, type, len, dec] = fields[i];
      const text = type === 'N'
        ? (Number.isFinite(Number(v)) ? Number(v).toFixed(dec).slice(0, len).padStart(len, ' ') : ''.padStart(len, ' '))
        : fixedAscii(v, len);
      bytes.set(new TextEncoder().encode(text), off);
      off += len;
    });
  });
  bytes[off] = 0x1A;
  return bytes;
}

function makePointShp(rows, shx = false) {
  const contentBytes = rows.length * (8 + 4 + 16);
  const fileBytes = shx ? 100 + rows.length * 8 : 100 + contentBytes;
  const bytes = new Uint8Array(fileBytes);
  const view = new DataView(bytes.buffer);
  const xs = rows.map(r => Number(r.lon)).filter(Number.isFinite);
  const ys = rows.map(r => Number(r.lat)).filter(Number.isFinite);
  view.setInt32(0, 9994, false);
  view.setInt32(24, fileBytes / 2, false);
  view.setInt32(28, 1000, true);
  view.setInt32(32, 1, true);
  view.setFloat64(36, Math.min(...xs), true); view.setFloat64(44, Math.min(...ys), true);
  view.setFloat64(52, Math.max(...xs), true); view.setFloat64(60, Math.max(...ys), true);
  let off = 100;
  let shpOffsetWords = 50;
  rows.forEach((r, idx) => {
    if (shx) {
      view.setInt32(off, shpOffsetWords, false);
      view.setInt32(off + 4, 10, false);
      off += 8;
      shpOffsetWords += 14;
    } else {
      view.setInt32(off, idx + 1, false);
      view.setInt32(off + 4, 10, false);
      view.setInt32(off + 8, 1, true);
      view.setFloat64(off + 12, Number(r.lon), true);
      view.setFloat64(off + 20, Number(r.lat), true);
      off += 28;
    }
  });
  return bytes;
}

function crc32(bytes) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = Array.from({ length: 256 }, (_, n) => {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      return c >>> 0;
    });
  }
  let c = 0xFFFFFFFF;
  for (let i = 0; i < bytes.length; i++) c = table[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function makeZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  files.forEach(file => {
    const name = encoder.encode(file.name);
    const data = file.data instanceof Uint8Array ? file.data : encoder.encode(file.data);
    const crc = crc32(data);
    const local = new Uint8Array(30 + name.length);
    const lv = new DataView(local.buffer);
    lv.setUint32(0, 0x04034b50, true); lv.setUint16(8, 0, true); lv.setUint16(10, 0, true);
    lv.setUint32(14, crc, true); lv.setUint32(18, data.length, true); lv.setUint32(22, data.length, true); lv.setUint16(26, name.length, true);
    local.set(name, 30);
    localParts.push(local, data);
    const central = new Uint8Array(46 + name.length);
    const cv = new DataView(central.buffer);
    cv.setUint32(0, 0x02014b50, true); cv.setUint16(4, 20, true); cv.setUint16(6, 20, true);
    cv.setUint32(16, crc, true); cv.setUint32(20, data.length, true); cv.setUint32(24, data.length, true); cv.setUint16(28, name.length, true); cv.setUint32(42, offset, true);
    central.set(name, 46);
    centralParts.push(central);
    offset += local.length + data.length;
  });
  const centralSize = centralParts.reduce((s, p) => s + p.length, 0);
  const end = new Uint8Array(22);
  const ev = new DataView(end.buffer);
  ev.setUint32(0, 0x06054b50, true); ev.setUint16(8, files.length, true); ev.setUint16(10, files.length, true); ev.setUint32(12, centralSize, true); ev.setUint32(16, offset, true);
  const all = [...localParts, ...centralParts, end];
  const total = all.reduce((s, p) => s + p.length, 0);
  const out = new Uint8Array(total);
  let pos = 0;
  all.forEach(part => { out.set(part, pos); pos += part.length; });
  return out;
}

function exportCorrectedBridgeSHP() {
  const rows = correctedBridgeRows();
  const shp = makePointShp(rows, false);
  const shx = makePointShp(rows, true);
  const dbf = makeDbf(rows);
  const prj = 'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563]],PRIMEM["Greenwich",0],UNIT["degree",0.0174532925199433]]';
  const zip = makeZip([
    { name: 'uganda_corrected_bridges.shp', data: shp },
    { name: 'uganda_corrected_bridges.shx', data: shx },
    { name: 'uganda_corrected_bridges.dbf', data: dbf },
    { name: 'uganda_corrected_bridges.prj', data: prj },
    { name: 'uganda_corrected_bridges.cpg', data: 'UTF-8' }
  ]);
  downloadBlob('uganda_corrected_bridge_database_shp.zip', new Blob([zip], { type: 'application/zip' }));
}

function pdfEscape(value) {
  return String(value ?? '')
    .replace(/[\r\n\t]+/g, ' ')
    .normalize('NFKD')
    .replace(/[^\x20-\x7E]/g, '')
    .replace(/[\\()]/g, '\\$&');
}

function writeSimplePdf(lines, filename) {
  const pageWidth = 595;
  const pageHeight = 842;
  const margin = 34;
  const bottomMargin = 54;
  const contentWidth = pageWidth - margin * 2;
  const pages = [];
  let commands = [];
  let y = pageHeight - 42;

  const addPage = () => {
    if (commands.length) pages.push(commands);
    commands = [];
    y = pageHeight - 42;
  };

  const textAt = (value, x, baseline, size = 8, font = 'F1', color = '0.10 0.12 0.18') => {
    const safe = pdfEscape(value).slice(0, 400);
    commands.push(`${color} rg BT /${font} ${size} Tf ${x.toFixed(1)} ${baseline.toFixed(1)} Td (${safe}) Tj ET`);
  };

  const rect = (x, top, w, h, stroke = '0.62 0.66 0.76', fill = null) => {
    if (fill) commands.push(`${fill} rg ${x.toFixed(1)} ${(top - h).toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)} re f`);
    commands.push(`${stroke} RG 0.35 w ${x.toFixed(1)} ${(top - h).toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)} re S`);
  };

  const lineRule = () => {
    commands.push(`0.82 0.85 0.91 RG 0.5 w ${margin} ${(y - 5).toFixed(1)} m ${margin + contentWidth} ${(y - 5).toFixed(1)} l S`);
    y -= 12;
  };

  const truncate = (value, width, size) => {
    const text = String(value ?? '').replace(/\s+/g, ' ').trim();
    const maxChars = Math.max(4, Math.floor(width / (size * 0.48)));
    return text.length > maxChars ? text.slice(0, Math.max(1, maxChars - 3)) + '...' : text;
  };

  const addPlainLine = line => {
    const clean = String(line ?? '').trim();
    if (!clean) {
      y -= 8;
      return;
    }
    if (y < bottomMargin + 20) addPage();
    if (!pages.length && commands.length === 0) {
      textAt(clean, margin, y, 15, 'F2', '0.03 0.06 0.14');
      y -= 18;
      lineRule();
      return;
    }
    const isHeading = clean.length < 70 && !clean.includes(':') && !clean.includes('|');
    textAt(clean, margin, y, isHeading ? 10 : 8, isHeading ? 'F2' : 'F1', isHeading ? '0.04 0.23 0.42' : '0.10 0.12 0.18');
    y -= isHeading ? 15 : 12;
  };

  const parseRow = line => String(line).split('|').map(cell => cell.trim());

  const drawTable = tableLines => {
    if (!tableLines.length) return;
    const rows = tableLines.map(parseRow);
    const colCount = Math.max(...rows.map(r => r.length));
    const header = rows[0];
    const bodyRows = rows.slice(1);
    const widths = Array.from({ length: colCount }, () => contentWidth / colCount);
    const fontSize = colCount > 7 ? 5.5 : colCount > 5 ? 6.2 : 7;
    const headerSize = Math.max(5.2, fontSize - 0.1);
    const rowHeight = colCount > 7 ? 17 : 19;
    const headerHeight = rowHeight + 3;

    const drawHeader = () => {
      if (y < bottomMargin + headerHeight + rowHeight) addPage();
      let x = margin;
      for (let c = 0; c < colCount; c++) {
        rect(x, y, widths[c], headerHeight, '0.23 0.32 0.52', '0.08 0.13 0.26');
        textAt(truncate(header[c] || '', widths[c] - 6, headerSize), x + 3, y - 12, headerSize, 'F2', '1 1 1');
        x += widths[c];
      }
      y -= headerHeight;
    };

    drawHeader();
    bodyRows.forEach((row, idx) => {
      if (y < bottomMargin + rowHeight) {
        addPage();
        drawHeader();
      }
      let x = margin;
      const fill = idx % 2 === 0 ? '0.98 0.99 1' : '0.94 0.96 0.99';
      for (let c = 0; c < colCount; c++) {
        rect(x, y, widths[c], rowHeight, '0.70 0.74 0.83', fill);
        textAt(truncate(row[c] || '', widths[c] - 6, fontSize), x + 3, y - 12, fontSize, 'F1', '0.08 0.10 0.16');
        x += widths[c];
      }
      y -= rowHeight;
    });
    y -= 8;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = String(lines[i] ?? '');
    if (line.includes('|')) {
      const tableLines = [];
      while (i < lines.length && String(lines[i] ?? '').includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      i--;
      drawTable(tableLines);
    } else {
      addPlainLine(line);
    }
  }
  if (commands.length) pages.push(commands);

  const objects = [];
  const add = s => { objects.push(s); return objects.length; };
  const catalogId = add('');
  const pagesId = add('');
  const pageIds = [];
  pages.forEach((pageCommands, index) => {
    const footer = [
      `0.74 0.78 0.86 RG 0.4 w ${margin} 34 m ${margin + contentWidth} 34 l S`,
      `0.32 0.36 0.48 rg BT /F1 7 Tf ${margin} 22 Td (Ministry of Works and Transport - Department of National Roads) Tj ET`,
      `0.32 0.36 0.48 rg BT /F2 7 Tf ${pageWidth - margin - 72} 22 Td (Page ${index + 1} of ${pages.length}) Tj ET`
    ];
    const text = [...pageCommands, ...footer].join('\n');
    const stream = `<< /Length ${text.length} >>\nstream\n${text}\nendstream`;
    const contentId = add(stream);
    const pageId = add(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> >> >> /Contents ${contentId} 0 R >>`);
    pageIds.push(pageId);
  });
  objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach(o => { pdf += `${String(o).padStart(10, '0')} 00000 n \n`; });
  pdf += `trailer << /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  downloadBlob(filename, new Blob([pdf], { type: 'application/pdf' }));
}

function allBridgeTrafficReportLines(rows, trafficRows, periodRows, annualFactorRows) {
  const moved = rows.filter(r => Number(r.correction_km || 0) > 0.01).length;
  const totalIncl = trafficRows.reduce((s, r) => s + Number(r.assigned_adt_incl_motorcycles || 0), 0);
  const totalExcl = trafficRows.reduce((s, r) => s + Number(r.assigned_adt_excl_motorcycles || 0), 0);
  const avgGrowth = weightedAnnualTrafficGrowthRate(trafficRows);
  const totalsByClass = MAJOR_PERIOD_CLASSES.map(cls => [
    cls,
    trafficRows.reduce((s, r) => s + bridgeClassDailyVolume(r, cls), 0)
  ]);
  const byRoadClass = ['M', 'A', 'B', 'C'].map(cls => {
    const clsRows = trafficRows.filter(r => canonicalRoadClass(r.road_class) === cls);
    return `${cls} | Bridges ${clsRows.length} | ADT incl MC ${fmt(clsRows.reduce((s, r) => s + Number(r.assigned_adt_incl_motorcycles || 0), 0), 0)} | Heavy goods ${fmt(clsRows.reduce((s, r) => s + Number(r.heavy_goods_adt || 0), 0), 0)}`;
  });
  const byRegion = Object.entries(aggregateRows(trafficRows, r => r.region || 'Unassigned', r => Number(r.assigned_adt_incl_motorcycles || 0)))
    .sort((a, b) => b[1] - a[1])
    .map(([region, value]) => `${region} | ADT incl MC ${fmt(value, 0)} | Bridges ${trafficRows.filter(r => (r.region || 'Unassigned') === region).length}`);
  const topBridges = [...trafficRows].sort((a, b) => Number(b.assigned_adt_incl_motorcycles || 0) - Number(a.assigned_adt_incl_motorcycles || 0)).slice(0, 30);
  const currentPeriodRows = periodRows.filter(r => Number(r.year) === Number(timelineYear));

  return [
    'Uganda Bridge and Traffic Statistics Report',
    'Agency: Ministry of Works and Transport - Department of National Roads',
    `Bridge records: ${rows.length}`,
    `Traffic records in current filters: ${trafficRows.length}`,
    `Total ADT incl. motorcycles: ${fmt(totalIncl, 0)}`,
    `Total ADT excl. motorcycles: ${fmt(totalExcl, 0)}`,
    `Annual weighted growth rate: ${formatGrowthPercent(avgGrowth)}`,
    `Manual count stations: ${MANUAL_COUNT_STATIONS.length}`,
    `Current ATC stations: ${ATC_SITE_ITEMS.length}`,
    `Legacy ATC stations: ${getLegacyAtcMapStations().length}`,
    `Corrected on national road network: ${rows.filter(r => r.national_network_status === 'On national road network').length}`,
    `Records moved more than 10 metres: ${moved}`,
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
    'Major Vehicle-Class Daily ADT',
    ...totalsByClass.map(([cls, value]) => `${cls} | ${fmt(value, 0)}`),
    '',
    'Bridge Traffic by Road Class',
    ...byRoadClass,
    '',
    'Bridge Traffic by Region',
    ...byRegion,
    '',
    'Annual and Seasonal Growth Factors',
    'Year | Weighted annual growth factor | Weighted seasonal factor | Projected daily volume',
    ...annualFactorRows.map(r => `${r.year} | ${r.growth.toFixed(4)}x | ${r.seasonal.toFixed(4)}x | ${fmt(r.daily, 0)}`),
    '',
    `Vehicle Class Period Summary for ${timelineYear}`,
    'Period | Vehicle Class | Base daily ADT | Growth factor | Seasonal factor | Projected period volume',
    ...currentPeriodRows.map(r => `${r.period} | ${r.vehicle_class} | ${fmt(r.base_daily_adt, 0)} | ${r.annual_growth_factor.toFixed(4)}x | ${r.seasonal_factor.toFixed(4)}x | ${fmt(r.period_volume, 0)}`),
    '',
    'Top Bridge Crossings by Assigned ADT',
    'Bridge No | Bridge Name | Link ID | Region | ADT incl MC | Annual Weighted Growth | Heavy Goods | Evidence | Priority',
    ...topBridges.map(r => `${r.bridge_no || 'N/A'} | ${r.bridge_nam || 'N/A'} | ${r.link_no || 'N/A'} | ${r.region || 'N/A'} | ${fmt(r.assigned_adt_incl_motorcycles, 0)} | ${formatGrowthPercent(r.annual_traffic_growth_rate)} | ${fmt(r.heavy_goods_adt, 0)} | ${fmt(r.count_evidence_score, 0)}/100 | ${r.priority || 'N/A'}`),
    '',
    'Bridge Geodata Audit',
    'Bridge No | Bridge Name | Original Link | Corrected Link | Corrected Lat,Lon | Network Scope | Review',
    ...rows.map(r => `${r.bridge_no || 'N/A'} | ${r.bridge_nam || 'N/A'} | ${r.link_no || 'N/A'} | ${r.corrected_link_id || 'N/A'} | ${Number(r.lat).toFixed(6)}, ${Number(r.lon).toFixed(6)} | ${r.network_match_scope || 'N/A'} | ${r.requires_review || 'No'}`)
  ];
}

function selectedBridgeTrafficReportLines(bridge) {
  const row = bridgeTrafficRowForBridge(bridge);
  const projected = projectedBridgeTraffic(row);
  const evidence = bridgeTrafficEvidence(bridge);
  const periods = vehicleClassPeriodSummaryRows([row]).filter(r => Number(r.year) === Number(timelineYear));
  const classRows = Object.entries(row.class_volumes || {}).sort((a, b) => b[1] - a[1]);
  const manualPool = evidence.manualStations.slice(0, 8);
  return [
    'Selected Bridge Traffic Report',
    'Agency: Ministry of Works and Transport - Department of National Roads',
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
    `Bridge: ${row.bridge_nam || 'N/A'} (${row.bridge_no || 'N/A'})`,
    `Host link: ${row.link_no || 'N/A'} | ${row.link_name || 'N/A'}`,
    `Region / Station: ${row.region || 'N/A'} / ${row.station || 'N/A'}`,
    `Corrected coordinate: ${Number(bridgeMapLat(row) ?? row.y_new).toFixed(6)}, ${Number(bridgeMapLon(row) ?? row.x_new).toFixed(6)}`,
    '',
    'Traffic Summary',
    `Projected ADT incl. motorcycles: ${fmt(projected.projected, 0)}`,
    `Projected ADT excl. motorcycles: ${fmt(projected.projectedExclMotorcycles, 0)}`,
    `Base assigned ADT incl. motorcycles: ${fmt(row.assigned_adt_incl_motorcycles, 0)}`,
    `Base assigned ADT excl. motorcycles: ${fmt(row.assigned_adt_excl_motorcycles, 0)}`,
    `Seasonal factor: ${row.seasonal_factor != null ? Number(row.seasonal_factor).toFixed(4) + 'x' : 'N/A'}`,
    `Annual weighted growth rate: ${formatGrowthPercent(row.annual_traffic_growth_rate)}`,
    `Annual weighted growth source: ${row.annual_traffic_growth_source || 'N/A'}`,
    `Evidence score: ${fmt(row.count_evidence_score, 0)}/100 | Priority: ${row.priority || 'N/A'}`,
    '',
    'Major Vehicle-Class Daily ADT',
    ...MAJOR_PERIOD_CLASSES.map(cls => `${cls} | ${fmt(bridgeClassDailyVolume(row, cls), 0)}`),
    '',
    `Vehicle Class Period Summary for ${timelineYear}`,
    'Period | Vehicle Class | Base daily ADT | Growth factor | Seasonal factor | Projected period volume',
    ...periods.map(r => `${r.period} | ${r.vehicle_class} | ${fmt(r.base_daily_adt, 0)} | ${r.annual_growth_factor.toFixed(4)}x | ${r.seasonal_factor.toFixed(4)}x | ${fmt(r.period_volume, 0)}`),
    '',
    'Detailed Vehicle-Class ADT',
    ...classRows.map(([label, value]) => `${label} | ${fmt(value, 0)} | ${majorVehicleBucket(label)}`),
    '',
    'Traffic Count Evidence Summary',
    `Manual stations used: ${manualPool.length} | nearest ${row.nearest_manual_id || 'N/A'} at ${row.nearest_manual_distance_km != null ? fmt(row.nearest_manual_distance_km, 1) + ' km' : 'N/A'}`,
    '',
    'Bridge Asset Context',
    `Length: ${fmt(row.bridge_len, 1)} m | Width: ${fmt(row.bridge_wid, 1)} m | Spans: ${row.no_of_span ?? '-'}`,
    `Overall rating: ${bridgeInventoryRatingLabel(row.overall_rating)}`,
    `River: ${row.river || 'N/A'} | Year completed: ${row.year_compl || 'N/A'}`
  ];
}

function exportCorrectedBridgePDF() {
  const rows = correctedBridgeRows();
  const trafficRows = buildBridgeTrafficRows();
  const periodRows = vehicleClassPeriodSummaryRows(trafficRows);
  const annualFactorRows = [];
  for (let y = 2016; y <= 2035; y++) {
    const yearRows = periodRows.filter(r => r.year === y && r.period === 'Day');
    const base = yearRows.reduce((s, r) => s + Number(r.base_daily_adt || 0), 0);
    annualFactorRows.push({
      year: y,
      growth: base ? yearRows.reduce((s, r) => s + Number(r.annual_growth_factor || 1) * Number(r.base_daily_adt || 0), 0) / base : 1,
      seasonal: base ? yearRows.reduce((s, r) => s + Number(r.seasonal_factor || 1) * Number(r.base_daily_adt || 0), 0) / base : 1,
      daily: yearRows.reduce((s, r) => s + Number(r.period_volume || 0), 0)
    });
  }
  if (selectedMapBridge) {
    const safeName = String(selectedMapBridge.bridge_nam || selectedMapBridge.bridge_no || 'selected_bridge').replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '').toLowerCase();
    writeSimplePdf(selectedBridgeTrafficReportLines(selectedMapBridge), `uganda_selected_bridge_traffic_report_${safeName || 'bridge'}.pdf`);
  } else {
    writeSimplePdf(allBridgeTrafficReportLines(rows, trafficRows, periodRows, annualFactorRows), 'uganda_all_bridges_traffic_statistics_report.pdf');
  }
}

// ===========================================
//  SPATIAL NETWORK MAP
// ===========================================
let mapScale = 1.0;
let mapOffsetX = 0;
let mapOffsetY = 0;
let isMapDragging = false;
let mapStartX = 0;
let mapStartY = 0;
let hoveredBridge = null;
let timelineYear = 2026;
let timelineMonth = 4;
let timelineDay = 22;
let mapTileLoadState = { loaded: 0, requested: 0, failed: 0, queued: 0 };
let mapTilesEnabled = true;
let mapTileStartTimer = null;
let mapTileActiveRequests = 0;
let mapTileRedrawPending = false;
let mapAnimationFrame = null;
let mapAnimationStart = performance.now();
let mapLastAnimationDraw = 0;
let mapInfluenceCache = { key: '', links: [] };
const MAP_TILE_CACHE = new Map();
const MAP_TILE_QUEUE = [];
const MAP_TILE_QUEUED_KEYS = new Set();
const MAP_TILE_CONCURRENT_LIMIT = 2;
const MAP_TILE_NEW_REQUESTS_PER_DRAW = 4;
const MAP_TILE_SERVICES = {
  imagery: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  labels: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
};
const BRIDGE_SYMBOL = {
  fill: '#00e5ff',
  stroke: '#ffffff',
  casing: 'rgba(2,6,23,0.88)',
  deck: '#06101f',
  halo: 'rgba(0,229,255,0.42)'
};
const ROAD_AADT_BY_LINK = BRIDGES.reduce((acc, b) => {
  if (b.link_no && b.aadt_2025) acc[b.link_no] = Math.max(Number(acc[b.link_no] || 0), Number(b.aadt_2025 || 0));
  return acc;
}, {});

function initSpatialMap() {
  const canvas = document.getElementById('mapCanvas');
  if (!canvas) return;
  initTimelineControls();
  updateBridgeAnalyticsPane(selectedMapBridge);
  initMapPaneResize();

  const resizeCanvas = () => {
    const rect = canvas.parentNode.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return; // Prevent collapse if hidden during resize
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    resetMapProjection({ draw: false });
  };

  window.addEventListener('resize', resizeCanvas);

  canvas.addEventListener('mousedown', e => {
    isMapDragging = true;
    canvas.style.cursor = 'grabbing';
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio;
    mapStartX = (e.clientX - rect.left) * dpr - mapOffsetX;
    mapStartY = (e.clientY - rect.top) * dpr - mapOffsetY;
  });

  window.addEventListener('mouseup', () => {
    isMapDragging = false;
    canvas.style.cursor = hoveredBridge ? 'pointer' : 'grab';
  });

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (isMapDragging) {
      const dpr = window.devicePixelRatio;
      mapOffsetX = mouseX * dpr - mapStartX;
      mapOffsetY = mouseY * dpr - mapStartY;
      drawMap();
      return;
    }

    const dpr = window.devicePixelRatio;
    const tx = (mouseX * dpr - mapOffsetX) / mapScale;
    const ty = (mouseY * dpr - mapOffsetY) / mapScale;

    // Get active set to exclude hovered events on faded out bridges
    const activeBridges = getFilteredBridges();
    const activeSet = new Set(activeBridges.map(b => b._id));

    let found = null;
    let minDist = 12 / mapScale;

    BRIDGES.concat(MAJOR_CULVERTS).forEach(b => {
      const isCulvert = b.culvert_no !== undefined;
      const lon = isCulvert ? (b.map_x || b.x_new) : bridgeMapLon(b);
      const lat = isCulvert ? (b.map_y || b.y_new) : bridgeMapLat(b);
      if (lon == null || lat == null) return;
      if (!isCulvert && !activeSet.has(b._id)) return; // Exclude hovered events on inactive (faded out) bridges
      const pt = getProjection(bridgeMapLon(b), bridgeMapLat(b), canvas.width, canvas.height);
      const dist = Math.hypot(pt.x - tx, pt.y - ty);
      if (dist < minDist) {
        minDist = dist;
        found = b;
      }
    });

    const tooltip = document.getElementById('mapTooltip');
    if (found) {
      hoveredBridge = found;
      canvas.style.cursor = 'pointer';

      const isCulv = found.culvert_no !== undefined || found.type_culvert !== undefined;
      if (isCulv) {
        const lookupType = typeof BMS_CODE_LOOKUPS !== 'undefined' ? (BMS_CODE_LOOKUPS.type_bridge || {}) : {};
        const isPipe = found.type_culvert === '26' || found.type_culvert === '27';
        const typeText = lookupType[found.type_culvert] || found.type_culvert || 'Standard Structure';
        document.getElementById('mTooltipTitle').textContent = `Culvert ${found.culvert_no || 'Crossing'}`;
        document.getElementById('mTooltipRegion').textContent = `Region: ${found.region || 'Uganda Central'}`;
        document.getElementById('mTooltipRiver').textContent = `River/Waterway: ${found.river || found.road_name || 'Unspecified Waterway'}`;
        document.getElementById('mTooltipClass').textContent = `Class ${canonicalRoadClass(found.road_class)} | Type: ${typeText}`;
      } else {
        document.getElementById('mTooltipTitle').textContent = found.bridge_nam || 'Bridge Crossing';
        document.getElementById('mTooltipRegion').textContent = `Region: ${found.region || 'Uganda Central'}`;
        document.getElementById('mTooltipRiver').textContent = `River/Waterway: ${found.river || 'Unspecified Waterway'}`;
        document.getElementById('mTooltipClass').textContent = `Class ${canonicalRoadClass(found.road_class)}`;
      }

      tooltip.style.display = 'block';
      tooltip.style.left = (mouseX + 15) + 'px';
      tooltip.style.top = (mouseY + 15) + 'px';
    } else {
      hoveredBridge = null;
      canvas.style.cursor = 'grab';
      tooltip.style.display = 'none';
    }

    drawMap();
  });

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) * window.devicePixelRatio;
    const mouseY = (e.clientY - rect.top) * window.devicePixelRatio;

    const zoomFactor = 1.15;
    const prevScale = mapScale;
    if (e.deltaY < 0) {
      mapScale = Math.min(mapScale * zoomFactor, 80);
    } else {
      mapScale = Math.max(mapScale / zoomFactor, 0.5);
    }

    mapOffsetX = mouseX - (mouseX - mapOffsetX) * (mapScale / prevScale);
    mapOffsetY = mouseY - (mouseY - mapOffsetY) * (mapScale / prevScale);

    drawMap();
  });

  canvas.addEventListener('click', e => {
    if (hoveredBridge) {
      selectBridgeById(hoveredBridge._id, { switchToMap: false, centerMap: false });
    }
  });

  document.getElementById('btnMapZoomIn').onclick = () => {
    const prevScale = mapScale;
    mapScale = Math.min(mapScale * 1.3, 80);
    mapOffsetX = canvas.width / 2 - (canvas.width / 2 - mapOffsetX) * (mapScale / prevScale);
    mapOffsetY = canvas.height / 2 - (canvas.height / 2 - mapOffsetY) * (mapScale / prevScale);
    drawMap();
  };

  document.getElementById('btnMapZoomOut').onclick = () => {
    const prevScale = mapScale;
    mapScale = Math.max(mapScale / 1.3, 0.5);
    mapOffsetX = canvas.width / 2 - (canvas.width / 2 - mapOffsetX) * (mapScale / prevScale);
    mapOffsetY = canvas.height / 2 - (canvas.height / 2 - mapOffsetY) * (mapScale / prevScale);
    drawMap();
  };

  document.getElementById('btnMapClearSelection').onclick = () => {
    selectedMapBridge = null;
    hoveredBridge = null;
    setBridgeTrafficControlsForBridge(null);
    bridgeInventoryPage = 1;
    bridgeTrafficPage = 1;
    buildKPIs();
    const activePanelId = document.querySelector('.panel.active')?.id || 'panel-spatial-map';
    if (activePanelId === 'panel-bridge-table') {
      buildBridgeInventoryTab();
    } else if (activePanelId === 'panel-bridge-traffic') {
      buildBridgeTrafficTab();
    }
    updateBridgeAnalyticsPane(null);
    applyActiveBridgeSelectionToTables();
    drawMap();
  };

  document.getElementById('btnMapReset').onclick = () => {
    resetMapProjection();
  };

  document.getElementById('paneOpenModalBtn')?.addEventListener('click', () => {
    if (selectedMapBridge) openBridgeModal(selectedMapBridge._id);
  });

  resizeCanvas();
  requestAnimationFrame(drawMap);
  scheduleMapTileWarmup(9000);
}

function initMapPaneResize() {
  const workspace = document.querySelector('.map-workspace');
  const handle = document.getElementById('mapPaneResizeHandle');
  const pane = document.getElementById('bridgeAnalyticsPane');
  const canvas = document.getElementById('mapCanvas');
  if (!workspace || !handle || !pane || handle.dataset.ready) return;
  handle.dataset.ready = 'true';

  let savedWidth = 0; try { savedWidth = Number(localStorage.getItem('bridgeMapPaneWidth') || 0); } catch (e) {}
  if (savedWidth) {
    workspace.style.setProperty('--map-pane-width', `${Math.max(320, Math.min(savedWidth, 760))}px`);
  }

  const resizeMapCanvas = () => {
    if (!canvas?.parentNode) return;
    const rect = canvas.parentNode.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    drawMap();
  };

  handle.addEventListener('pointerdown', event => {
    if (window.innerWidth <= 1180) return;
    event.preventDefault();
    handle.classList.add('is-dragging');
    handle.setPointerCapture?.(event.pointerId);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const onMove = moveEvent => {
      const bounds = workspace.getBoundingClientRect();
      const proposed = bounds.right - moveEvent.clientX;
      const maxWidth = bounds.width - 20;
      const nextWidth = Math.max(320, Math.min(proposed, maxWidth));
      workspace.style.setProperty('--map-pane-width', `${Math.round(nextWidth)}px`);
      try { localStorage.setItem('bridgeMapPaneWidth', String(Math.round(nextWidth))); } catch (e) {}
      resizeMapCanvas();
      Object.values(chartInstances || {}).forEach(chart => chart?.resize?.());
    };

    const onUp = () => {
      handle.classList.remove('is-dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      resizeMapCanvas();
      Object.values(chartInstances || {}).forEach(chart => chart?.resize?.());
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  });
}

function initTimelineControls() {
  const slider = document.getElementById('timelineSlider');
  const months = document.getElementById('timelineCalendarMonths');
  const panel = document.getElementById('timelineCalendarPanel');
  if (!slider || !months || months.dataset.ready) return;
  if (panel) panel.style.display = 'none';
  const monthLabels = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
  months.innerHTML = monthLabels.map((m, i) => `<button class="calendar-month-btn${i === timelineMonth ? ' active' : ''}" data-month="${i}">${m}</button>`).join('');
  slider.value = timelineYear;
  slider.addEventListener('input', () => {
    timelineYear = Number(slider.value);
    updateTimelineUI();
    updateBridgeAnalyticsPane(selectedMapBridge);
    drawMap();
  });
  document.getElementById('btnTimelinePrev')?.addEventListener('click', () => {
    timelineYear = Math.max(2016, timelineYear - 1);
    slider.value = timelineYear;
    updateTimelineUI();
    updateBridgeAnalyticsPane(selectedMapBridge);
    drawMap();
  });
  document.getElementById('btnTimelineNext')?.addEventListener('click', () => {
    timelineYear = Math.min(2035, timelineYear + 1);
    slider.value = timelineYear;
    updateTimelineUI();
    updateBridgeAnalyticsPane(selectedMapBridge);
    drawMap();
  });
  months.querySelectorAll('.calendar-month-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      timelineMonth = Number(btn.dataset.month);
      timelineDay = Math.min(timelineDay, daysInMonth(timelineYear, timelineMonth));
      updateTimelineUI();
      updateBridgeAnalyticsPane(selectedMapBridge);
      drawMap();
    });
  });
  document.getElementById('timelineCalendarDays')?.addEventListener('click', e => {
    const btn = e.target.closest('.calendar-day');
    if (!btn) return;
    timelineYear = Number(btn.dataset.year);
    timelineMonth = Number(btn.dataset.month);
    timelineDay = Number(btn.dataset.day);
    slider.value = timelineYear;
    updateTimelineUI();
    updateBridgeAnalyticsPane(selectedMapBridge);
    drawMap();
  });
  document.getElementById('btnTimelineCalendarClose')?.addEventListener('click', () => {
    if (panel) panel.style.display = 'none';
  });
  document.getElementById('btnTimelineCalendarOpen')?.addEventListener('click', () => {
    if (panel) panel.style.display = panel.style.display === 'none' || !panel.style.display ? 'block' : 'none';
  });
  document.querySelectorAll('.timeline-periods button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.timeline-periods button').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  months.dataset.ready = '1';
  updateTimelineUI();
}

function updateTimelineUI() {
  timelineDay = Math.min(Math.max(1, timelineDay), daysInMonth(timelineYear, timelineMonth));
  const date = new Date(timelineYear, timelineMonth, timelineDay);
  const label = document.getElementById('timelineDateLabel');
  const live = document.getElementById('timelineLiveLabel');
  const yearLabel = document.getElementById('timelineCalendarYear');
  const yearSmall = document.getElementById('timelineCalendarYearSmall');
  const monthLabel = document.getElementById('timelineCalendarMonthLabel');
  const slider = document.getElementById('timelineSlider');
  if (label) label.textContent = date.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  if (live) live.textContent = `${timelineYear} projection x${trafficProjectionFactor().toFixed(2)}`;
  if (yearLabel) yearLabel.textContent = timelineYear;
  if (yearSmall) yearSmall.textContent = timelineYear;
  if (monthLabel) monthLabel.textContent = date.toLocaleDateString(undefined, { month: 'long' });
  if (slider) slider.value = timelineYear;
  document.querySelectorAll('.calendar-month-btn').forEach(btn => btn.classList.toggle('active', Number(btn.dataset.month) === timelineMonth));
  renderTimelineCalendar();
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function renderTimelineCalendar() {
  const daysEl = document.getElementById('timelineCalendarDays');
  const dotsEl = document.getElementById('timelineCalendarDots');
  if (!daysEl) return;
  const first = new Date(timelineYear, timelineMonth, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const daysThisMonth = daysInMonth(timelineYear, timelineMonth);
  const prevMonth = timelineMonth === 0 ? 11 : timelineMonth - 1;
  const prevYear = timelineMonth === 0 ? timelineYear - 1 : timelineYear;
  const nextMonth = timelineMonth === 11 ? 0 : timelineMonth + 1;
  const nextYear = timelineMonth === 11 ? timelineYear + 1 : timelineYear;
  const daysPrevMonth = daysInMonth(prevYear, prevMonth);
  const today = new Date(2026, 4, 22);
  const cells = [];
  for (let i = 0; i < 42; i++) {
    let y = timelineYear;
    let m = timelineMonth;
    let d = i - startOffset + 1;
    let adjacent = false;
    if (d < 1) {
      y = prevYear;
      m = prevMonth;
      d = daysPrevMonth + d;
      adjacent = true;
    } else if (d > daysThisMonth) {
      y = nextYear;
      m = nextMonth;
      d -= daysThisMonth;
      adjacent = true;
    }
    const active = y === timelineYear && m === timelineMonth && d === timelineDay;
    const isToday = y === today.getFullYear() && m === today.getMonth() && d === today.getDate();
    cells.push(`<button class="calendar-day${adjacent ? ' adjacent' : ''}${active ? ' active' : ''}${isToday ? ' today' : ''}" data-year="${y}" data-month="${m}" data-day="${d}">${d}</button>`);
  }
  daysEl.innerHTML = cells.join('');
  if (dotsEl) {
    dotsEl.innerHTML = Array.from({ length: 14 }, (_, i) => `<span class="calendar-dot${i === timelineMonth ? ' active' : ''}"></span>`).join('');
  }
}

function trafficProjectionFactor(year = timelineYear, month = timelineMonth, annualRate = 0.045) {
  const yearDelta = Number(year) - 2026;
  const regionalFactors = Object.values(REGIONAL_SEASONAL_ADT_FACTORS || {});
  const monthIndex = Math.max(0, Math.min(11, Number(month) || 0));
  const monthlySeason = regionalFactors.length
    ? regionalFactors.reduce((sum, factors) => sum + Number(factors[monthIndex] || 1), 0) / regionalFactors.length
    : 1;
  const rate = normalizedAnnualGrowthRate(annualRate) ?? 0.045;
  return Math.max(0.55, Math.pow(1 + rate, yearDelta) * monthlySeason);
}

function bridgeTrafficRowForBridge(bridge) {
  if (!bridge) return null;
  return buildBridgeTrafficRows({ sourceBridges: [bridge], skipCache: true })[0] || { ...bridge };
}

function projectedBridgeTraffic(row) {
  const factor = trafficProjectionFactor(timelineYear, timelineMonth, row.annual_traffic_growth_rate);
  const base = Number(row.assigned_adt_incl_motorcycles || row.aadt_2025 || 0);
  const projected = base * factor;
  const classScale = base ? projected / base : factor;
  return {
    factor,
    projected,
    projectedExclMotorcycles: Number(row.assigned_adt_excl_motorcycles || 0) * classScale,
    motorcycle: Number(row.motorcycle_adt || 0) * classScale,
    light: Number(row.light_vehicle_adt || 0) * classScale,
    bus: Number(row.bus_adt || 0) * classScale,
    heavy: Number(row.heavy_goods_adt || 0) * classScale,
    other: Number(row.other_vehicle_adt || 0) * classScale
  };
}

function selectedBridgeCsvText(bridge) {
  if (!bridge) return '';
  const escapeCSV = val => {
    if (val == null) return '""';
    const str = String(val).trim();
    if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };

  const isCulvert = bridge.culvert_no !== undefined || bridge.type_culvert !== undefined;
  if (isCulvert) {
    const lookupType = typeof BMS_CODE_LOOKUPS !== 'undefined' ? (BMS_CODE_LOOKUPS.type_bridge || {}) : {};
    const typeText = lookupType[bridge.type_culvert] || bridge.type_culvert || 'Standard Culvert';
    const lines = [];
    lines.push('Structure Type,Culvert No,Culvert Type,Span/Diameter (m),Pipes/Cells,Culvert Length (m),Height (m),Overall Rating,Road Class,Road Name,Link ID,Region,Station,Latitude,Longitude,Waterway');
    lines.push([
      'Major Culvert',
      bridge.culvert_no || 'N/A',
      typeText,
      bridge.span_diameter != null ? Number(bridge.span_diameter).toFixed(2) : 'N/A',
      bridge.no_pipes_cells || 1,
      bridge.culvert_length != null ? Number(bridge.culvert_length).toFixed(1) : 'N/A',
      bridge.height != null ? Number(bridge.height).toFixed(1) : 'N/A',
      bridgeInventoryRatingLabel(bridge.overall_rating || 3),
      canonicalRoadClass(bridge.road_class),
      bridge.road_name || bridge.link_name || 'N/A',
      bridge.link_no || 'N/A',
      bridge.region || 'Uganda Central',
      bridge.station || 'National Network Station',
      bridgeMapLat(bridge) ?? bridge.map_y ?? '',
      bridgeMapLon(bridge) ?? bridge.map_x ?? '',
      bridge.river || bridge.road_name || 'Unspecified Waterway'
    ].map(escapeCSV).join(','));
    return lines.join('\n');
  }

  const row = bridgeTrafficRowForBridge(bridge);
  const evidence = bridgeTrafficEvidence(bridge);
  const roads = roadInfluenceRowsForBridge(bridge, 12);
  const lines = [];
  lines.push('Section,Record Type,ID,Name,Source,Link ID,Road Name,Road Class,Region,Station,Latitude,Longitude,Distance km,ADT incl Motorcycles,ADT excl Motorcycles,Seasonal Factor,Annual Weighted Growth Rate,Annual Weighted Growth Source,Weight,Role,Notes');
  lines.push([
    'Bridge Summary', 'Selected Bridge', row.bridge_no, row.bridge_nam, row.source_workbook, row.link_no, row.link_name, canonicalRoadClass(row.road_class), row.region, row.station,
    bridgeMapLat(row) ?? row.y_new ?? '', bridgeMapLon(row) ?? row.x_new ?? '', '', row.assigned_adt_incl_motorcycles ?? '', row.assigned_adt_excl_motorcycles ?? '', row.seasonal_factor ?? '',
    row.annual_traffic_growth_rate ?? '', row.annual_traffic_growth_source || '', '', 'Bridge crossing',
    `Current assigned ADT is the single traffic value shown in the dashboard; Evidence: ${fmt(row.count_evidence_score, 0)}/100; Priority: ${row.priority || 'N/A'}`
  ].map(escapeCSV).join(','));
  roads.forEach(r => {
    lines.push([
      'Influencing Roads', 'Road Link', r.id, r.name, '2026 national road network', r.id, r.name, r.cls, r.region, r.station,
      r.latitude ?? '', r.longitude ?? '', '', '', '', '', '', '', r.role, `Length km: ${r.length ?? '-'}; Surface: ${r.surface || 'N/A'}`
    ].map(escapeCSV).join(','));
  });
  evidence.manualStations.forEach(s => {
    lines.push([
      'Influencing Count Stations', 'Manual Count', s.id, s.name, 'Manual traffic count station', s.link_id, s.link_name, canonicalRoadClass(s.link_id || s.link_name), s.region, s.station,
      s.lat ?? '', s.lng ?? '', s.distanceKm != null ? s.distanceKm.toFixed(3) : '', '', '', '', '', '', s.sameLink ? 1 : '', s.sameLink ? 'Same host link' : 'Nearby wider-network station', ''
    ].map(escapeCSV).join(','));
  });
  Object.entries(row.class_volumes || {}).forEach(([label, value]) => {
    lines.push([
      'Vehicle Class ADT', 'Assigned class volume', label, label, 'Assigned bridge traffic model', row.link_no, row.link_name, canonicalRoadClass(row.road_class), row.region, row.station,
      bridgeMapLat(row) ?? row.y_new ?? '', bridgeMapLon(row) ?? row.x_new ?? '', '', value, '', row.seasonal_factor ?? '',
      row.annual_traffic_growth_rate ?? '', row.annual_traffic_growth_source || '', '', 'Assigned to selected bridge', majorVehicleBucket(label)
    ].map(escapeCSV).join(','));
  });
  bridgeOdFlowRows([row]).forEach(od => {
    lines.push([
      'Origin Destination Flow', 'Road-link OD direction', `${od.link_no || row.link_no}-${od.od_direction_index || 1}`,
      `${od.od_origin || 'N/A'} to ${od.od_destination || 'N/A'}`, od.od_match_basis || 'Bridge road-link OD model',
      od.link_no || row.link_no, od.link_name || row.link_name, canonicalRoadClass(od.road_class || row.road_class), od.region || row.region, od.station || row.station,
      bridgeMapLat(row) ?? row.y_new ?? '', bridgeMapLon(row) ?? row.x_new ?? '', '', od.directional_current_adt ?? '', od.directional_current_adt_excl_motorcycles ?? '',
      row.seasonal_factor ?? '', row.annual_traffic_growth_rate ?? '', row.annual_traffic_growth_source || '', od.od_match_score || '',
      od.od_direction || 'Road-link direction',
      `OD year: ${od.od_year || 'N/A'}; OD evidence ADT: ${od.od_estimated_adt != null ? Number(od.od_estimated_adt).toFixed(2) : 'N/A'}; Current assigned ADT: ${od.current_assigned_adt != null ? Number(od.current_assigned_adt).toFixed(2) : 'N/A'}`
    ].map(escapeCSV).join(','));
  });
  return lines.join('\n');
}

function downloadSelectedBridgeCsv(bridge = selectedMapBridge) {
  if (!bridge) {
    alert('Select a bridge on the map first.');
    return;
  }
  const csv = selectedBridgeCsvText(bridge);
  const safeName = String(bridge.bridge_nam || bridge.bridge_no || 'selected_bridge').replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '').toLowerCase();
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `uganda_bridge_selected_details_${safeName || 'bridge'}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

  const CONDITION_DICT = {
    9: 'EXCELLENT', 8: 'VERY GOOD', 7: 'GOOD', 6: 'SATISFACTORY',
    5: 'FAIR', 4: 'MARGINAL', 3: 'POOR', 2: 'VERY POOR',
    1: 'CRITICAL', 0: 'BEYOND REPAIR'
  };

  const ELEMENT_DICT = {
    deck: {
      '01': 'Solid slab', '02': 'Voided slab', '03': 'Inverted T-beams with infill', '04': 'Inverted T-beams (Pseudo box)',
      '05': 'Box beams', '06': 'Beam and slab deck', '07': 'Monolithic beam and slab deck', '08': 'Rib deck',
      '09': 'Voided spine beam', '10': 'Solid spine beam', '11': 'Twin beam and slab', '12': 'Box girder - Box beam',
      '13': 'Multiple box girder Box beam', '14': 'Twin box and slab', '15': 'Multiple box and slab', '16': 'Steel I-beams encased in concrete',
      '17': 'Steel I-beam ribs (Jacked arch)', '18': 'Composite steel and concrete', '19': 'Non-composite steel and concrete',
      '20': 'Steel with any other material', '21': 'Solid slab with balustrade beam', '22': 'Cell structure', '98': 'Other'
    },
    material: {
      '01': 'Pre/post-stressed concrete', '02': 'Precast units (cell structures)', '03': 'Reinforced concrete',
      '04': 'Precast beams', '05': 'Structural steel', '06': 'Steel and concrete', '07': 'Timber', '98': 'Other'
    },
    abutment: {
      '01': 'Mass concrete gravity type', '02': 'Reinforced Concrete', '03': 'R C wall with RC wingwalls',
      '04': 'Spill through', '05': 'Seating beam/stub column', '06': 'Frame (only bridges, not cell structures)',
      '07': 'Buttressed concrete wall', '08': 'Masonry wall', '09': 'Integral pile cap', '10': 'Reinforced earth',
      '11': 'Counterforte RC', '12': 'Cell structure', '13': 'Multiple V-type', '14': 'Perched abutment',
      '22': 'Solid RC cantilever/wingwall', '23': 'Solid RC cantilever/returnwall', '97': 'None', '98': 'Other'
    },
    pier: {
      '20': 'Solid R C wall', '21': 'Cellular R C Wall', '22': 'Single R C column', '23': 'Single RC hollow column',
      '24': 'Multiple R C columns', '25': 'Multiple R C columns (Beam on top)', '26': 'Masonry wall', '27': 'Mass concrete wall',
      '28': 'Steel lattice', '29': 'Single RC splayed pier', '30': 'Multiple RC splayed piers', '31': 'Single RCV shape',
      '32': 'Multiple RCV shape', '97': 'None', '98': 'Other'
    }
  };

  function getConditionColor(score) {
    if (score == null || score === '' || score === 'N/A') return 'transparent';
    const n = Number(score);
    if (isNaN(n)) return 'transparent';
    if (n >= 7) return 'var(--accent-green, #10b981)'; 
    if (n >= 5) return 'var(--accent-amber, #f59e0b)'; 
    if (n >= 3) return 'var(--accent-orange, #f97316)'; 
    return 'var(--accent-red, #ef4444)'; 
  }

  function getDictName(type, val) {
    if (!val) return 'N/A';
    let strVal = String(val).padStart(2, '0');
    if (strVal === '00' || strVal === '0' || strVal === '?' || strVal.toUpperCase() === 'UNKNOWN') return 'N/A';
    return cleanBmsDescription(ELEMENT_DICT[type] && ELEMENT_DICT[type][strVal] ? ELEMENT_DICT[type][strVal] : 'Unknown');
  }

  function getCondName(val) {
    if (val == null || val === '' || val === 'N/A') return 'N/A';
    const num = Math.floor(Number(val));
    if (isNaN(num)) return val;
    return CONDITION_RATING_LABELS[num] ? CONDITION_RATING_LABELS[num] : (CONDITION_DICT[num] ? CONDITION_DICT[num] : val);
  }

function updateBridgeAnalyticsPane(bridge) {
  const title = document.getElementById('paneBridgeName');
  const subtitle = document.getElementById('paneBridgeSubtitle');
  const body = document.getElementById('paneBridgeBody');
  if (!title || !subtitle || !body) return;
  if (!bridge) {
    destroyChart('paneSelectedVehicleClass');
    destroyChart('paneSelectedEvidence');
    const activeBridges = getFilteredBridges();
    const totalLength = activeBridges.reduce((s, b) => s + (Number(b.bridge_len) || 0), 0);
    const bridgeLinks = new Set(activeBridges.map(b => b.link_no).filter(Boolean));
    let totalIncl = 0;
    let highTraffic = 0;
    let totalWeightedGrowth = 0;
    let totalGrowthWeight = 0;
    activeBridges.forEach(item => {
      const adt = quickBridgeAssignedAdt(item);
      const growth = quickBridgeGrowthRate(item);
      totalIncl += adt;
      if (adt >= 10000) highTraffic++;
      if (normalizedAnnualGrowthRate(growth) != null) {
        const weight = Math.max(1, adt);
        totalWeightedGrowth += Number(growth) * weight;
        totalGrowthWeight += weight;
      }
    });
    const avgAadt = activeBridges.length ? totalIncl / activeBridges.length : 0;
    const avgGrowth = totalGrowthWeight ? totalWeightedGrowth / totalGrowthWeight : null;
    const trafficRows = typeof buildBridgeTrafficRows === 'function' ? buildBridgeTrafficRows() : [];
    const busHeavyAdt = trafficRows.reduce((s, r) => s + (Number(r.bus_adt) || 0) + (Number(r.heavy_goods_adt) || 0), 0);

    title.textContent = 'Bridges & Major Culvert Analytics Pane';
    subtitle.textContent = 'Please select a bridge or major culvert on the map or in the tables to view its traffic loading profile, dimensions, and condition context.';
    
    const activeCulverts = typeof MAJOR_CULVERTS !== 'undefined' ? MAJOR_CULVERTS : [];
    const culvertLength = activeCulverts.reduce((s, c) => s + (Number(c.culvert_length) || Number(c.length) || 0), 0);
    const culvertPipes = activeCulverts.reduce((s, c) => s + (Number(c.no_pipes_cells) || 1), 0);
    const avgSpan = activeCulverts.length ? (activeCulverts.reduce((s, c) => s + (Number(c.span_diameter) || 0), 0) / activeCulverts.length) : 0;

    body.innerHTML = `
      <div class="empty-state" style="padding:32px 16px 16px; margin-top:12px; text-align:center;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="44" height="44" style="margin: 0 auto 12px; display: block; opacity: 0.55; color: #38bdf8;"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        <p style="color: var(--text-muted); font-size: 11px;">Select a structure to view its analytics.</p>
      </div>
      <div class="pane-section-title" style="margin-top: 20px; color: var(--accent-cyan); font-weight: 800; letter-spacing: 1.1px;">BRIDGES NETWORK SUMMARY</div>
      <div class="pane-metrics">
        <div class="pane-metric"><strong>${fmt(activeBridges.length)}</strong><span>BRIDGE CROSSINGS</span></div>
        <div class="pane-metric"><strong>${fmt(bridgeLinks.size)}</strong><span>HOST ROAD LINKS</span></div>
        <div class="pane-metric"><strong>${fmt(totalLength, 0)} m</strong><span>TOTAL BRIDGE LENGTH</span></div>
        <div class="pane-metric"><strong>${fmt(avgAadt, 0)}</strong><span>AVG ASSIGNED ADT</span></div>
        <div class="pane-metric"><strong>${formatGrowthPercent(avgGrowth)}</strong><span>WEIGHTED ANNUAL GROWTH</span></div>
        <div class="pane-metric"><strong>${fmt(highTraffic)}</strong><span>HIGH TRAFFIC BRIDGES</span></div>
        <div class="pane-metric"><strong>${fmt(totalIncl, 0)}</strong><span>TOTAL ADT INCL. MC</span></div>
        <div class="pane-metric"><strong>${fmt(busHeavyAdt, 0)}</strong><span>BUS + HEAVY GOODS ADT</span></div>
      </div>
      <div class="pane-section-title" style="margin-top: 20px; color: #f59e0b; font-weight: 800; letter-spacing: 1.1px;">MAJOR CULVERTS NETWORK SUMMARY</div>
      <div class="pane-metrics">
        <div class="pane-metric"><strong>${fmt(activeCulverts.length)}</strong><span>MAJOR CULVERTS</span></div>
        <div class="pane-metric"><strong>${fmt(culvertLength, 0)} m</strong><span>TOTAL CULVERT LENGTH</span></div>
        <div class="pane-metric"><strong>${fmt(culvertPipes)}</strong><span>PIPES / CELLS</span></div>
        <div class="pane-metric"><strong>${fmt(avgSpan, 2)} m</strong><span>AVG SPAN / DIAMETER</span></div>
      </div>
    `;
    return;
  }
  destroyChart('paneSummaryBands');
  destroyChart('paneSummaryClass');
  destroyChart('paneSummaryPriority');
  selectedMapBridge = bridge;

  if (bridge.culvert_no !== undefined || bridge.type_culvert !== undefined) {
    const isPipe = bridge.type_culvert === '26' || bridge.type_culvert === '27';
    const typeLabel = (typeof BMS_CODE_LOOKUPS !== 'undefined' && BMS_CODE_LOOKUPS.type_bridge)
      ? (BMS_CODE_LOOKUPS.type_bridge[bridge.type_culvert] || bridge.type_culvert || 'Standard Culvert')
      : (bridge.type_culvert || 'Standard Culvert');
    
    title.innerHTML = `Culvert ${escapeHTML(bridge.culvert_no || 'Crossing')}`;
    subtitle.innerHTML = `${escapeHTML(bridge.link_no || 'Link')} | ${escapeHTML(bridge.road_name || bridge.link_name || 'Road Network')} | Class ${canonicalRoadClass(bridge.road_class)} | Region: ${escapeHTML(bridge.region || 'Uganda Central')}`;
    
    body.innerHTML = `
      <div class="pane-section-title" style="color: #f59e0b; margin-top: 8px;">Major Culvert Asset Context</div>
      <div class="pane-metrics">
        <div class="pane-metric"><strong>${bridge.culvert_no || 'N/A'}</strong><span>Culvert Number</span></div>
        <div class="pane-metric"><strong>${typeLabel}</strong><span>Culvert Type</span></div>
        <div class="pane-metric"><strong>${bridge.span_diameter ? fmt(bridge.span_diameter, 2) + ' m' : 'N/A'}</strong><span>${isPipe ? 'Diameter' : 'Span / Width'}</span></div>
        <div class="pane-metric"><strong>${bridge.no_pipes_cells || 1}</strong><span>Pipes / Cells</span></div>
        <div class="pane-metric"><strong>${bridge.culvert_length ? fmt(bridge.culvert_length, 1) + ' m' : 'N/A'}</strong><span>Culvert Length</span></div>
        <div class="pane-metric"><strong>${bridge.height ? fmt(bridge.height, 1) + ' m' : 'N/A'}</strong><span>Height</span></div>
        <div class="pane-metric"><strong>${bridgeInventoryRatingLabel(bridge.overall_rating || 3)}</strong><span>Overall Rating</span></div>
        <div class="pane-metric"><strong>${bridge.river || bridge.road_name || 'Unspecified'}</strong><span>Waterway / Location</span></div>
      </div>
      <button class="btn pane-action" id="paneOpenModalBtn">Open Major Culvert Details</button>
    `;
    document.getElementById('paneOpenModalBtn')?.addEventListener('click', () => {
      if (typeof openStructureModal === 'function') openStructureModal(bridge);
    });
    return;
  }

  const row = bridgeTrafficRowForBridge(bridge);
  const projected = projectedBridgeTraffic(row);

  const get11ClassBreakdown = (r, p) => {
    const results = {
      'Motorcycles & Scooters': 0,
      'Saloon Cars': 0,
      'Light Goods (Pickups, Vans, 4WD)': 0,
      'Minibuses (Matatus)': 0,
      'Medium Buses': 0,
      'Large Buses': 0,
      'Light Trucks (Dynas, Tractors)': 0,
      'Medium Trucks (Fusos, Lorries)': 0,
      'Heavy Trucks & Semi-Trailers': 0,
      'Bicycles': 0,
      'Carts': 0
    };

    const factor = trafficProjectionFactor();
    const classScale = r.assigned_adt_incl_motorcycles ? p.projected / r.assigned_adt_incl_motorcycles : factor;

    const hasDetailed = r.class_volumes && Object.keys(r.class_volumes).length > 0;
    if (hasDetailed) {
      Object.entries(r.class_volumes).forEach(([label, baseVal]) => {
        const val = baseVal * classScale;
        const l = label.toLowerCase();

        if (l.includes('motorcycle') || l.includes('mortocycle') || l.includes('scooter')) {
          results['Motorcycles & Scooters'] += val;
        } else if (l.includes('saloon') || l.includes('car')) {
          results['Saloon Cars'] += val;
        } else if (l.includes('pickup') || l.includes('van') || l.includes('4wd') || l.includes('lmv') || l.includes('towing')) {
          results['Light Goods (Pickups, Vans, 4WD)'] += val;
        } else if (l.includes('minibus') || l.includes('matatu') || l.includes('small bus')) {
          results['Minibuses (Matatus)'] += val;
        } else if (l.includes('coaster') || l.includes('2-axle bus')) {
          results['Medium Buses'] += val;
        } else if (l.includes('large bus') || l.includes('3-axle bus') || l.includes('bus')) {
          results['Large Buses'] += val;
        } else if (l.includes('dyna') || l.includes('tractor') || l.includes('2-axle rigid')) {
          results['Light Trucks (Dynas, Tractors)'] += val;
        } else if (l.includes('fuso') || l.includes('lorry') || l.includes('3-axle rigid')) {
          results['Medium Trucks (Fusos, Lorries)'] += val;
        } else if (l.includes('rigid') || l.includes('trailer') || l.includes('semi') || l.includes('axle') || l.includes('double')) {
          results['Heavy Trucks & Semi-Trailers'] += val;
        } else if (l.includes('bicycle')) {
          results['Bicycles'] += val;
        } else if (l.includes('cart')) {
          results['Carts'] += val;
        } else {
          if (l.includes('heavy') || l.includes('truck')) {
            results['Heavy Trucks & Semi-Trailers'] += val;
          } else {
            results['Saloon Cars'] += val;
          }
        }
      });
    } else {
      const mc = p.motorcycle;
      const lt = p.light;
      const bus = p.bus;
      const hvy = p.heavy;
      const oth = p.other;

      results['Motorcycles & Scooters'] = mc;
      results['Saloon Cars'] = lt * 0.45;
      results['Light Goods (Pickups, Vans, 4WD)'] = lt * 0.40;
      results['Minibuses (Matatus)'] = lt * 0.15;
      results['Medium Buses'] = bus * 0.35;
      results['Large Buses'] = bus * 0.65;
      results['Light Trucks (Dynas, Tractors)'] = hvy * 0.20;
      results['Medium Trucks (Fusos, Lorries)'] = hvy * 0.45;
      results['Heavy Trucks & Semi-Trailers'] = hvy * 0.35;
      results['Bicycles'] = oth * 0.80;
      results['Carts'] = oth * 0.20;
    }

    return Object.entries(results).map(([label, value]) => {
      let color = COLORS.cyan;
      if (label.includes('Motorcycle')) color = COLORS.amber;
      else if (label.includes('Saloon') || label.includes('Light Goods') || label.includes('Minibuses')) color = COLORS.blue;
      else if (label.includes('Bus')) color = COLORS.purple;
      else if (label.includes('Truck')) color = COLORS.rose;
      else color = COLORS.teal;
      return [label, value, color];
    });
  };

  const classRows = get11ClassBreakdown(row, projected);
  const maxClass = Math.max(1, ...classRows.map(r => r[1]));
  title.innerHTML = `${escapeHTML(row.bridge_nam || row.bridge_no || 'Bridge crossing')} ${row.is_critical ? '<span class="pill" style="background:#ef4444; color:white; margin-left:8px;">CRITICAL STRUCTURE</span>' : ''}`;
  subtitle.innerHTML = `${escapeHTML(row.link_no || 'N/A')} | ${escapeHTML(row.link_name || 'N/A')} | Class ${canonicalRoadClass(row.road_class)} | ${timelineYear} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][timelineMonth]}
${row.is_critical && row.critical_comment ? `<br><span style="color:#ef4444; font-weight:500; font-size:11px; display:inline-block; margin-top:4px;">Warning: ${escapeHTML(row.critical_comment)}</span>` : ''}`;
  const condRef = bridge.reference_attributes || bridge;
  const approachRating = bridge.approaches_rating ?? bridge.approaches ?? bridge.inlet_outlet_cond ?? bridge.overall_rating ?? 3;
  const roadwayRating = bridge.roadway_rating ?? bridge.roadway ?? bridge.roadway_cond ?? bridge.overall_rating ?? 3;
  const substructureRating = bridge.substructure_rating ?? bridge.substructure ?? bridge.structure_cond ?? bridge.overall_rating ?? 3;
  const superstructureRating = bridge.superstructure_rating ?? bridge.superstructure ?? bridge.structure_cond ?? bridge.overall_rating ?? 3;
  const waterwayRating = bridge.waterway_rating ?? bridge.waterway ?? bridge.waterway_cond ?? bridge.overall_rating ?? 3;
  const condHtml = `
    <div class="pane-section-title">Structural Elements & Condition</div>
    <div class="pane-metrics">
      <div class="pane-metric" title="${htmlEscape(bridgeConditionRatingTooltip(bridge.overall_rating || 3, 'overall'))}" style="border-left: 3px solid ${getConditionColor(bridge.overall_rating || 3)}; padding-left: 8px;">
        <strong>${getCondName(bridge.overall_rating || 3)}</strong><span>Overall Rating</span>
      </div>
      <div class="pane-metric" title="${htmlEscape(bridgeConditionRatingTooltip(approachRating, 'approaches'))}" style="border-left: 3px solid ${getConditionColor(approachRating)}; padding-left: 8px;">
        <strong>${getCondName(approachRating)}</strong><span>Approaches</span>
      </div>
      <div class="pane-metric" title="${htmlEscape(bridgeConditionRatingTooltip(roadwayRating, 'roadway'))}" style="border-left: 3px solid ${getConditionColor(roadwayRating)}; padding-left: 8px;">
        <strong>${getCondName(roadwayRating)}</strong><span>Roadway</span>
      </div>
      <div class="pane-metric" title="${htmlEscape(bridgeConditionRatingTooltip(substructureRating, 'structural'))}" style="border-left: 3px solid ${getConditionColor(substructureRating)}; padding-left: 8px;">
        <strong>${getCondName(substructureRating)}</strong><span>Substructure</span>
      </div>
      <div class="pane-metric" title="${htmlEscape(bridgeConditionRatingTooltip(superstructureRating, 'structural'))}" style="border-left: 3px solid ${getConditionColor(superstructureRating)}; padding-left: 8px;">
        <strong>${getCondName(superstructureRating)}</strong><span>Superstructure</span>
      </div>
      <div class="pane-metric" title="${htmlEscape(bridgeConditionRatingTooltip(waterwayRating, 'waterway'))}" style="border-left: 3px solid ${getConditionColor(waterwayRating)}; padding-left: 8px;">
        <strong>${getCondName(waterwayRating)}</strong><span>Waterway</span>
      </div>
    </div>
    <div class="pane-metrics" style="margin-top: 8px;">
      <div class="pane-metric"><strong>${getDictName('deck', condRef.typedeck || condRef.type_deck)}</strong><span>Deck Type</span></div>
      <div class="pane-metric"><strong>${getDictName('material', condRef.typedeckmaterial || condRef.type_deck_material)}</strong><span>Deck Material</span></div>
      <div class="pane-metric"><strong>${getDictName('abutment', condRef.typeabutmentl || condRef.type_abutment_l)}</strong><span>Abutment (L)</span></div>
      <div class="pane-metric"><strong>${getDictName('abutment', condRef.typeabutmentr || condRef.type_abutment_r)}</strong><span>Abutment (R)</span></div>
      <div class="pane-metric"><strong>${getDictName('pier', condRef.typepiers || condRef.type_piers)}</strong><span>Pier Type</span></div>
    </div>
  `;
  body.innerHTML = `
    <div class="pane-metrics">
      <div class="pane-metric"><strong>${fmt(row.assigned_adt_incl_motorcycles, 0)}</strong><span>Current assigned ADT incl. MC</span></div>
      <div class="pane-metric"><strong>${fmt(row.assigned_adt_excl_motorcycles, 0)}</strong><span>Current assigned ADT excl. MC</span></div>
      <div class="pane-metric"><strong>${fmt(projected.projected, 0)}</strong><span>Projected ADT incl. MC</span></div>
      <div class="pane-metric"><strong>${fmt(projected.projectedExclMotorcycles, 0)}</strong><span>Projected ADT excl. MC</span></div>
      <div class="pane-metric"><strong>${formatGrowthPercent(row.annual_traffic_growth_rate)}</strong><span>Annual weighted growth</span></div>
      <div class="pane-metric"><strong>${fmt(projected.factor, 2)}x</strong><span>Projection factor</span></div>
      <div class="pane-metric"><strong>${row.seasonal_factor != null ? fmt(row.seasonal_factor, 3) + 'x' : 'N/A'}</strong><span>Seasonal factor</span></div>
    </div>
    <div class="pane-section-title">Projected Vehicle Class Loading</div>
    ${classRows.map(([label, value, color]) => `
      <div class="class-bar-row">
        <span>${label}</span>
        <div class="class-bar-track"><div class="class-bar-fill" style="width:${Math.max(2, (value / maxClass) * 100)}%;background:${color}"></div></div>
        <strong>${fmt(value, 0)}</strong>
      </div>
    `).join('')}

    <div class="pane-section-title">Bridge Asset Context</div>
    <div class="pane-metrics">
      <div class="pane-metric"><strong>${row.bridge_len ? fmt(row.bridge_len, 1) + ' m' : 'N/A'}</strong><span>Length</span></div>
      <div class="pane-metric"><strong>${row.bridge_wid ? fmt(row.bridge_wid, 1) + ' m' : 'N/A'}</strong><span>Width</span></div>
      <div class="pane-metric"><strong>${bridgeInventoryRatingLabel(row.overall_rating)}</strong><span>Overall Rating</span></div>
      <div class="pane-metric"><strong>${row.priority || 'N/A'}</strong><span>Traffic priority</span></div>
    </div>
    ${condHtml}
    <button class="btn pane-action" id="paneOpenModalBtn">Open Full Bridge Details</button>
    <button class="btn pane-action" id="paneViewPhotosBtn" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);">View Photos in Gallery</button>
    <button class="btn pane-action" id="paneDownloadBridgeCsvBtn">Download Selected Bridge CSV</button>
  `;
  renderPaneSelectedCharts(row, classRows);
  
  document.getElementById('paneViewPhotosBtn')?.addEventListener('click', () => {
      const tab = document.querySelector('[data-tab="photos"]');
      if (tab) tab.click();
      const searchInput = document.getElementById('photoGallerySearch');
      if (searchInput) {
          searchInput.value = bridge.bridge_no || bridge._id || '';
          currentGalleryFilter.search = searchInput.value.toLowerCase();
          currentGalleryFilter.type = 'all';
          currentGalleryFilter.condition = 'all';
          const typeSel = document.getElementById('photoFilterType');
          if (typeSel) typeSel.value = 'all';
          const condSel = document.getElementById('photoFilterCondition');
          if (condSel) condSel.value = 'all';
          renderPhotoGallery();
          // Find the index of this structure and open it
          const idx = filteredGallery.findIndex(s => s.id === (bridge.bridge_no || bridge._id));
          if (idx >= 0) openLightbox(idx);
      }
  });
  // Old ones are still below this, so we leave them intact
  document.getElementById('paneOpenModalBtn')?.addEventListener('click', () => openBridgeModal(row._id));
  document.getElementById('paneDownloadBridgeCsvBtn')?.addEventListener('click', () => downloadSelectedBridgeCsv(row));
}

function buildBridgeWorksTable() {
  const tbody = document.getElementById('bridgeWorksBody');
  if (!tbody || typeof BRIDGE_WORKS_DATA === 'undefined') return;

  const detailedRows = BRIDGE_WORKS_DATA.map((row, i) => ({ ...row, sn: row.sn || (i + 1), _rowType: 'Active package' }));
  const candidateRows = (typeof ONGOING_BRIDGE_WORKS === 'undefined' ? [] : ONGOING_BRIDGE_WORKS).map(row => ({
    sn: `C${row.sn}`,
    bridge: `${row.bridge_no} - ${row.bridge_name}`,
    funder: 'Candidate',
    contractor_consultant: `Road link: ${row.link_id}\n${row.link_name || ''}`,
    financial_status: 'Not available in candidate list',
    status: `${row.status}\nChainage: ${row.chainage_km == null ? 'N/A' : `${row.chainage_km} km`}`,
    compensation: 'N/A',
    _rowType: 'Candidate bridge work'
  }));
  const rows = [...detailedRows, ...candidateRows];

  tbody.innerHTML = rows.map((row, i) => {
    const sn = row.sn || (i + 1);
    return `
      <tr>
        <td style="font-weight: 700; color: var(--accent-cyan); text-align: center;">${tableCellHtml(sn, 'sn')}</td>
        <td class="highlight-cell" style="font-weight: 700; font-size: 13px; white-space: normal; line-height: 1.4;">${tableMultilineHtml(row.bridge, 'bridge_nam')}<br><span style="font-size:10px;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:.5px;">${tableCellHtml(row._rowType, 'work_type')}</span></td>
        <td style="font-weight: 600; text-align: center;">${tableCellHtml(row.funder, 'funder')}</td>
        <td style="white-space: normal; font-size: 11px; line-height: 1.4;">${tableMultilineHtml(row.contractor_consultant, 'contractor_consultant')}</td>
        <td style="white-space: normal; font-size: 11px; line-height: 1.4; color: var(--text-muted);"><span style="color: #e2e8f0; font-weight: 600;">${tableMultilineHtml(row.financial_status, 'financial_status')}</span></td>
        <td style="white-space: normal; font-size: 11px; line-height: 1.4; color: var(--text-secondary);">${tableMultilineHtml(row.status, 'status')}</td>
        <td style="white-space: normal; font-size: 11px; line-height: 1.4; color: var(--accent-amber);">${tableMultilineHtml(row.compensation, 'compensation')}</td>
      </tr>
    `;
  }).join('');
}

function resetMapProjection(options = {}) {
  const canvas = document.getElementById('mapCanvas');
  if (!canvas) return;
  mapScale = 1.0;
  mapOffsetX = 0;
  mapOffsetY = 0;
  if (options.draw !== false) drawMap();
}

function bridgeHostRoadCandidates(b) {
  const allRoads = [...(NATIONAL_ROAD_NETWORK || []), ...(ROAD_GEOMETRY || [])];
  const linkKey = normalizedLinkKey(b?.link_no);
  const roadNo = normalizedLinkKey(b?.road_no || String(b?.link_no || '').split('_')[0]);
  const exact = allRoads.filter(r => normalizedLinkKey(r.id) === linkKey);
  if (exact.length) return exact;
  const sameRoad = allRoads.filter(r => normalizedLinkKey(r.road_no) === roadNo || normalizedLinkKey(r.id).startsWith(`${roadNo}_`));
  return sameRoad.length ? sameRoad : allRoads;
}

function nationalRoadCandidatesForBridge(b) {
  const nationalRoads = NATIONAL_ROAD_NETWORK || [];
  const linkKey = normalizedLinkKey(b?.link_no);
  const roadNo = normalizedLinkKey(b?.road_no || String(b?.link_no || '').split('_')[0]);
  const exact = nationalRoads.filter(r => normalizedLinkKey(r.id) === linkKey);
  if (exact.length) return { roads: exact, scope: 'exact-national-link' };
  const sameRoad = nationalRoads.filter(r => normalizedLinkKey(r.road_no) === roadNo || normalizedLinkKey(r.id).startsWith(`${roadNo}_`));
  if (sameRoad.length) return { roads: sameRoad, scope: 'same-national-road' };
  return { roads: nationalRoads, scope: 'nearest-national-road-review' };
}

function nearestPointOnSegmentDeg(p, a, b) {
  const ax = Number(a[0]), ay = Number(a[1]), bx = Number(b[0]), by = Number(b[1]);
  const px = Number(p[0]), py = Number(p[1]);
  const dx = bx - ax, dy = by - ay;
  const len2 = dx * dx + dy * dy;
  const t = len2 ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2)) : 0;
  const x = ax + t * dx;
  const y = ay + t * dy;
  const d2 = (px - x) ** 2 + (py - y) ** 2;
  return { x, y, d2 };
}

function nearestRoadPointForBridge(b) {
  const sourceLon = Number(b.source_x_new ?? b.x_new);
  const sourceLat = Number(b.source_y_new ?? b.y_new);
  let p = [Number.isFinite(sourceLon) ? sourceLon : 32.5, Number.isFinite(sourceLat) ? sourceLat : 1.0];
  const nationalCandidates = nationalRoadCandidatesForBridge(b);
  const override = BRIDGE_LOCATION_OVERRIDES[b?._id];
  if (override && validLonLat(override.lng, override.lat)) {
    p = [Number(override.lng), Number(override.lat)];
  }
  const exactRoad = nationalCandidates.roads.find(r => normalizedLinkKey(r.id) === normalizedLinkKey(b?.link_no));
  const km = Number(b?.km ?? b?.chainage_km ?? b?.reference_attributes?.kmprincipal);
  const chainageFrom = Number(b?.chainage_from);
  const chainageTo = Number(b?.chainage_to);
  if (!override && exactRoad && Number.isFinite(km) && Number.isFinite(chainageFrom) && Number.isFinite(chainageTo) && chainageTo > chainageFrom) {
    const fraction = Math.max(0, Math.min(1, (km - chainageFrom) / (chainageTo - chainageFrom)));
    const byChainage = pointAlongRoadGeometry(exactRoad, fraction);
    if (byChainage) return { ...byChainage, road: exactRoad, method: 'chainage', scope: nationalCandidates.scope };
  }
  let best = null;
  nationalCandidates.roads.forEach(road => {
    (road.lines || []).forEach(line => {
      for (let i = 0; i < line.length - 1; i++) {
        const candidate = nearestPointOnSegmentDeg(p, line[i], line[i + 1]);
        if (!best || candidate.d2 < best.d2) {
          best = { ...candidate, road };
        }
      }
      if (line.length === 1) {
        const pt = line[0];
        const d2 = (p[0] - pt[0]) ** 2 + (p[1] - pt[1]) ** 2;
        if (!best || d2 < best.d2) best = { x: pt[0], y: pt[1], d2, road };
      }
    });
  });
  if (best) {
    best.method = override ? 'override-national-snap' : 'network-snap';
    best.scope = nationalCandidates.scope;
    if (override) best.basis = override.basis || 'Audited override snapped onto national road network';
  }
  return best;
}

function pointAlongRoadGeometry(road, fraction) {
  const segments = [];
  let totalKm = 0;
  (road.lines || []).forEach(line => {
    for (let i = 0; i < line.length - 1; i++) {
      const a = line[i], b = line[i + 1];
      const km = haversineKm(a[1], a[0], b[1], b[0]) || 0;
      if (km > 0) {
        segments.push({ a, b, km });
        totalKm += km;
      }
    }
  });
  if (!segments.length || !totalKm) return null;
  let target = totalKm * Math.max(0, Math.min(1, fraction));
  for (const seg of segments) {
    if (target <= seg.km) {
      const t = seg.km ? target / seg.km : 0;
      const x = Number(seg.a[0]) + (Number(seg.b[0]) - Number(seg.a[0])) * t;
      const y = Number(seg.a[1]) + (Number(seg.b[1]) - Number(seg.a[1])) * t;
      return { x, y, d2: 0 };
    }
    target -= seg.km;
  }
  const last = segments[segments.length - 1].b;
  return { x: last[0], y: last[1], d2: 0 };
}

function nearestPositionAlongRoadGeometry(road, lon, lat) {
  if (!road || !validLonLat(lon, lat)) return null;
  const p = [Number(lon), Number(lat)];
  const segments = [];
  let totalKm = 0;
  (road.lines || []).forEach(line => {
    for (let i = 0; i < line.length - 1; i++) {
      const a = line[i], b = line[i + 1];
      const km = haversineKm(a[1], a[0], b[1], b[0]) || 0;
      if (km > 0) {
        segments.push({ a, b, km, startKm: totalKm });
        totalKm += km;
      }
    }
  });
  if (!segments.length || !totalKm) return null;
  let best = null;
  for (const seg of segments) {
    const projection = nearestPointOnSegmentDeg(p, seg.a, seg.b);
    const dx = Number(seg.b[0]) - Number(seg.a[0]);
    const dy = Number(seg.b[1]) - Number(seg.a[1]);
    const len2 = dx * dx + dy * dy;
    const t = len2 ? Math.max(0, Math.min(1, ((p[0] - Number(seg.a[0])) * dx + (p[1] - Number(seg.a[1])) * dy) / len2)) : 0;
    const alongKm = seg.startKm + seg.km * t;
    const candidate = { ...projection, alongKm, totalKm, fraction: alongKm / totalKm, road };
    if (!best || candidate.d2 < best.d2) best = candidate;
  }
  return best;
}

function roadLinkSequenceNumber(id) {
  const m = String(id || '').match(/link[_-]?(\d+)/i);
  return m ? Number(m[1]) : Number.POSITIVE_INFINITY;
}

function roadNumberForRecord(record) {
  return normalizedLinkKey(record?.road_no || record?.road || String(record?.link_no || record?.id || '').split('_')[0]);
}

function roadCoordinateSequence(road) {
  const seq = [];
  (road?.lines || []).forEach(line => {
    (line || []).forEach(pt => {
      if (!Array.isArray(pt) || pt.length < 2) return;
      const coord = [Number(pt[0]), Number(pt[1])];
      if (!Number.isFinite(coord[0]) || !Number.isFinite(coord[1])) return;
      const last = seq[seq.length - 1];
      if (!last || Math.abs(last[0] - coord[0]) > 1e-10 || Math.abs(last[1] - coord[1]) > 1e-10) {
        seq.push(coord);
      }
    });
  });
  return seq;
}

function coordDistanceKm(a, b) {
  if (!a || !b) return Number.POSITIVE_INFINITY;
  return haversineKm(Number(a[1]), Number(a[0]), Number(b[1]), Number(b[0]));
}

function polylineLengthKm(coords) {
  let total = 0;
  for (let i = 0; i < (coords || []).length - 1; i++) {
    total += coordDistanceKm(coords[i], coords[i + 1]) || 0;
  }
  return total;
}

function nearestEndpointDistance(point, coords) {
  if (!coords?.length) return Number.POSITIVE_INFINITY;
  return Math.min(coordDistanceKm(point, coords[0]), coordDistanceKm(point, coords[coords.length - 1]));
}

function orderedRoadLinksForRoad(roadNo) {
  const key = normalizedLinkKey(roadNo);
  const national = (NATIONAL_ROAD_NETWORK || [])
    .filter(r => normalizedLinkKey(r.road_no) === key || normalizedLinkKey(r.id).startsWith(`${key}_`))
    .slice()
    .sort((a, b) => {
      const af = Number(a.chainage_from);
      const bf = Number(b.chainage_from);
      if (Number.isFinite(af) && Number.isFinite(bf) && af !== bf) return af - bf;
      return roadLinkSequenceNumber(a.id) - roadLinkSequenceNumber(b.id);
    });
  if (national.length) return national;
  return (ROAD_GEOMETRY || [])
    .filter(r => normalizedLinkKey(r.road_no) === key || normalizedLinkKey(r.id).startsWith(`${key}_`))
    .slice()
    .sort((a, b) => roadLinkSequenceNumber(a.id) - roadLinkSequenceNumber(b.id));
}

function orientedRoadLinkSequences(roads) {
  const raw = roads.map(road => ({ road, coords: roadCoordinateSequence(road) })).filter(item => item.coords.length >= 2);
  if (!raw.length) return [];
  const oriented = [];
  raw.forEach((item, idx) => {
    let coords = item.coords.slice();
    if (idx === 0 && raw[1]) {
      const next = raw[1].coords;
      const normalGap = nearestEndpointDistance(coords[coords.length - 1], next);
      const reverseGap = nearestEndpointDistance(coords[0], next);
      if (reverseGap < normalGap) coords = coords.slice().reverse();
    } else if (idx > 0) {
      const prevEnd = oriented[oriented.length - 1].coords.at(-1);
      if (coordDistanceKm(coords[coords.length - 1], prevEnd) < coordDistanceKm(coords[0], prevEnd)) {
        coords = coords.slice().reverse();
      }
    }
    oriented.push({ road: item.road, coords, lengthKm: polylineLengthKm(coords) });
  });
  return oriented;
}

function nearestPositionAlongCoordinateSequence(coords, lon, lat) {
  if (!coords?.length || !validLonLat(lon, lat)) return null;
  const p = [Number(lon), Number(lat)];
  let cumulative = 0;
  let best = null;
  for (let i = 0; i < coords.length - 1; i++) {
    const a = coords[i], b = coords[i + 1];
    const segmentKm = coordDistanceKm(a, b) || 0;
    if (!segmentKm) continue;
    const projection = nearestPointOnSegmentDeg(p, a, b);
    const dx = Number(b[0]) - Number(a[0]);
    const dy = Number(b[1]) - Number(a[1]);
    const len2 = dx * dx + dy * dy;
    const t = len2 ? Math.max(0, Math.min(1, ((p[0] - Number(a[0])) * dx + (p[1] - Number(a[1])) * dy) / len2)) : 0;
    const candidate = { ...projection, alongKm: cumulative + segmentKm * t };
    if (!best || candidate.d2 < best.d2) best = candidate;
    cumulative += segmentKm;
  }
  return best ? { ...best, totalKm: cumulative, fraction: cumulative ? best.alongKm / cumulative : 0 } : null;
}


function pointAtContinuousChainageKm(roadNo, targetChainageKm) {
  const roads = orderedRoadLinksForRoad(roadNo);
  if (!roads.length) return null;
  const oriented = orientedRoadLinkSequences(roads);
  if (!oriented.length) return null;

  let currentKm = 0;
  for (const item of oriented) {
    if (targetChainageKm <= currentKm + item.lengthKm) {
      const distanceIntoLink = targetChainageKm - currentKm;
      let accumulated = 0;
      for (let i = 0; i < item.coords.length - 1; i++) {
        const a = item.coords[i];
        const b = item.coords[i + 1];
        const segKm = haversineKm(a[1], a[0], b[1], b[0]);
        if (distanceIntoLink <= accumulated + segKm) {
          if (segKm === 0) return { x: a[0], y: a[1] };
          const t = (distanceIntoLink - accumulated) / segKm;
          return { x: a[0] + (b[0] - a[0]) * t, y: a[1] + (b[1] - a[1]) * t };
        }
        accumulated += segKm;
      }
      const last = item.coords[item.coords.length - 1];
      return { x: last[0], y: last[1] };
    }
    currentKm += item.lengthKm;
  }
  const lastItem = oriented[oriented.length - 1];
  const lastCoord = lastItem.coords[lastItem.coords.length - 1];
  return { x: lastCoord[0], y: lastCoord[1] };
}

function processMajorCulvertLocations() {
  if (typeof MAJOR_CULVERTS === 'undefined') return;
  MAJOR_CULVERTS.forEach(c => {
    if (!c.map_x || !c.map_y) {
      const roadNo = normalizedLinkKey(c.road_name);
      const chainage = Number(c.chainage);
      if (roadNo && Number.isFinite(chainage)) {
        const pt = pointAtContinuousChainageKm(roadNo, chainage);
        if (pt) {
          c.map_x = pt.x;
          c.map_y = pt.y;
        }
      }
    }
  });
}

function geospatialRoadStartChainageKm(b) {
  const correctedRoadNo = String(b?.location_corrected_link_id || '').split('_')[0];
  const roadNo = normalizedLinkKey(correctedRoadNo || roadNumberForRecord(b));
  if (!roadNo) return null;
  const roads = orderedRoadLinksForRoad(roadNo);
  if (!roads.length) return null;
  const oriented = orientedRoadLinkSequences(roads);
  if (!oriented.length) return null;
  const hostKey = normalizedLinkKey(b.location_corrected_link_id || b.link_no);
  let hostIndex = oriented.findIndex(item => normalizedLinkKey(item.road.id) === hostKey);
  if (hostIndex < 0) hostIndex = oriented.findIndex(item => normalizedLinkKey(item.road.id) === normalizedLinkKey(b.link_no));
  if (hostIndex < 0) {
    const lon = bridgeMapLon(b);
    const lat = bridgeMapLat(b);
    let bestIndex = -1;
    let best = null;
    oriented.forEach((item, idx) => {
      const candidate = nearestPositionAlongCoordinateSequence(item.coords, lon, lat);
      if (candidate && (!best || candidate.d2 < best.d2)) {
        best = candidate;
        bestIndex = idx;
      }
    });
    hostIndex = bestIndex;
  }
  if (hostIndex < 0) return null;
  const lon = bridgeMapLon(b);
  const lat = bridgeMapLat(b);
  const position = nearestPositionAlongCoordinateSequence(oriented[hostIndex].coords, lon, lat);
  if (!position) return null;
  const prefixKm = oriented.slice(0, hostIndex).reduce((sum, item) => sum + item.lengthKm, 0);
  return {
    chainageKm: prefixKm + position.alongKm,
    hostRoad: oriented[hostIndex].road,
    roadNo,
    prefixKm,
    hostAlongKm: position.alongKm,
    hostLengthKm: position.totalKm,
    snappedDistanceKm: haversineKm(lat, lon, position.y, position.x),
    linkCount: oriented.length
  };
}

function rawBridgeChainageKm(b) {
  const candidates = [b?.km, b?.chainage_km, b?.reference_attributes?.kmprincipal];
  for (const value of candidates) {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return null;
}

function bridgeValidatedChainageKm(b) {
  if (!b) return null;
  if (Number.isFinite(Number(b.chainage_validated_km))) return Number(b.chainage_validated_km);
  const rawKm = rawBridgeChainageKm(b);
  const corridor = geospatialRoadStartChainageKm(b);
  if (corridor && Number.isFinite(corridor.chainageKm)) {
    const corrected = Number(corridor.chainageKm.toFixed(3));
    b.chainage_original_km = rawKm;
    b.chainage_validated_km = corrected;
    b.km = corrected;
    b.chainage_geospatial_prefix_km = Number(corridor.prefixKm.toFixed(3));
    b.chainage_geospatial_host_along_km = Number(corridor.hostAlongKm.toFixed(3));
    b.chainage_geospatial_host_length_km = Number(corridor.hostLengthKm.toFixed(3));
    b.chainage_geospatial_snap_distance_km = Number(corridor.snappedDistanceKm.toFixed(3));
    b.chainage_validation_status = `Calculated geospatially from start of road ${corridor.roadNo} across ${corridor.linkCount} national road links`;
    return corrected;
  }
  const from = Number(b.chainage_from);
  const to = Number(b.chainage_to);
  const hasRange = Number.isFinite(from) && Number.isFinite(to) && to >= from;
  const toleranceKm = 0.05;
  if (hasRange && rawKm !== null && rawKm >= from - toleranceKm && rawKm <= to + toleranceKm) {
    b.chainage_validated_km = rawKm;
    b.chainage_validation_status = 'Validated within host road link chainage range';
    return rawKm;
  }
  const exactRoad = getRoadByLinkId(b.link_no);
  const lon = bridgeMapLon(b);
  const lat = bridgeMapLat(b);
  const projected = exactRoad ? nearestPositionAlongRoadGeometry(exactRoad, lon, lat) : null;
  if (hasRange && projected) {
    const corrected = from + projected.fraction * (to - from);
    b.chainage_original_km = rawKm;
    b.chainage_validated_km = corrected;
    b.km = corrected;
    b.chainage_validation_status = rawKm === null
      ? 'Calculated from corrected bridge position on host road link'
      : 'Corrected from host road geometry because workbook chainage was outside host link range';
    return corrected;
  }
  if (hasRange) {
    const midpoint = (from + to) / 2;
    b.chainage_original_km = rawKm;
    b.chainage_validated_km = midpoint;
    b.km = midpoint;
    b.chainage_validation_status = rawKm === null
      ? 'Estimated as midpoint of host road link chainage range'
      : 'Corrected to midpoint because host road geometry projection was unavailable';
    return midpoint;
  }
  b.chainage_validated_km = rawKm;
  b.chainage_validation_status = rawKm === null ? 'No chainage evidence available' : 'Retained source chainage; host link range unavailable';
  return rawKm;
}

function validateAndCorrectBridgeChainages() {
  BRIDGES.forEach(bridgeValidatedChainageKm);
}

function auditAndCorrectBridgeLocation(b) {
    if (b.source_x_new == null && b.x_new != null) b.source_x_new = b.x_new;
    if (b.source_y_new == null && b.y_new != null) b.source_y_new = b.y_new;
    const sourceLon = Number(b.source_x_new ?? b.x_new);
    const sourceLat = Number(b.source_y_new ?? b.y_new);
    const sourceValid = validLonLat(sourceLon, sourceLat);
    const nearest = nearestRoadPointForBridge(b);
    if (!nearest) {
      b.location_audit_status = sourceValid ? 'Source coordinate retained; no road geometry candidate found' : 'Invalid source coordinate; no road geometry candidate found';
      b.location_correction_method = 'No correction available';
      b.location_on_national_road = false;
      b.location_network_match_scope = 'no-national-network-candidate';
      return;
    }
    const distanceKm = haversineKm(sourceLat, sourceLon, nearest.y, nearest.x);
    const sameHostLink = normalizedLinkKey(nearest.road?.id) === normalizedLinkKey(b.link_no);
    const sameRoad = normalizedLinkKey(nearest.road?.road_no) === normalizedLinkKey(b.road_no || String(b.link_no || '').split('_')[0]);
    const onNational = (NATIONAL_ROAD_NETWORK || []).some(r => r === nearest.road || normalizedLinkKey(r.id) === normalizedLinkKey(nearest.road?.id));
    b.location_audit_status = sameHostLink
      ? 'Placed on exact national road host link'
      : sameRoad
        ? 'Placed on same national road corridor; host link not available'
        : 'Placed on nearest national road; host link requires manual review';
    b.location_correction_method = nearest.method === 'override'
      ? (nearest.basis || 'Applied audited bridge location override')
      : nearest.method === 'override-national-snap'
        ? `${nearest.basis || 'Applied audited bridge location override'}; projected onto national road network`
      : nearest.method === 'chainage'
        ? 'Placed by bridge chainage along exact host road link geometry'
        : sameHostLink ? 'Snapped to exact national host road link geometry' : sameRoad ? 'Snapped to same national road corridor geometry' : 'Snapped to nearest national road geometry for manual review';
    b.location_source_lon = sourceLon;
    b.location_source_lat = sourceLat;
    b.location_corrected_lon = Number(nearest.x.toFixed(6));
    b.location_corrected_lat = Number(nearest.y.toFixed(6));
    b.location_correction_distance_km = distanceKm;
    b.location_corrected_link_id = nearest.road?.id || '';
    b.location_corrected_road_name = nearest.road?.name || '';
    b.location_corrected_road_class = canonicalRoadClass(nearest.road?.cls || nearest.road?.road_no || nearest.road?.id || b.road_class);
    b.location_on_national_road = !!onNational;
    b.location_network_match_scope = nearest.scope || (sameHostLink ? 'exact-national-link' : sameRoad ? 'same-national-road' : 'nearest-national-road-review');
    b.location_requires_review = !sameHostLink || !onNational;
    b.x_new = b.location_corrected_lon;
    b.y_new = b.location_corrected_lat;
    b.map_x = b.x_new;
    b.map_y = b.y_new;
    b.map_coord_snapped = true;
    b.geo_validation = insideUgandaMapBounds(b.x_new, b.y_new) && onNational
      ? (sameHostLink ? 'corrected_on_exact_national_road_link' : 'corrected_on_national_road_requires_review')
      : 'requires_manual_review';
    if (b.geo_validation === 'requires_manual_review' && !/manual review/i.test(b.location_audit_status)) {
      b.location_audit_status = 'Requires manual review after automated correction';
    }
}

function auditAndCorrectBridgeDatabaseLocations() {
  BRIDGES.forEach(auditAndCorrectBridgeLocation);
  bridgeIntegrityPassComplete = true;
  bridgeIntegrityPassScheduled = false;
  clearBridgeSpatialEvidenceCache();
}

function scheduleDeferredBridgeIntegrityPass(delay = 2200) {
  if (bridgeIntegrityPassScheduled || bridgeIntegrityPassComplete) return;
  bridgeIntegrityPassScheduled = true;
  let index = 0;
  const batchSize = 12;
  const step = () => {
    const start = performance.now();
    for (let processed = 0; index < BRIDGES.length && processed < batchSize; index++, processed++) {
      auditAndCorrectBridgeLocation(BRIDGES[index]);
      bridgeValidatedChainageKm(BRIDGES[index]);
      if (performance.now() - start > 16) {
        index++;
        break;
      }
    }
    if (index < BRIDGES.length) {
      setTimeout(step, 0);
      return;
    }
    bridgeIntegrityPassComplete = true;
    bridgeIntegrityPassScheduled = false;
    BRIDGES.forEach(b => {
      if (b.x_new == null || b.y_new == null) return;
      b.map_x = b.x_new;
      b.map_y = b.y_new;
      b.map_coord_snapped = true;
      b.map_snap_distance_degrees = 0;
    });
    clearBridgeSpatialEvidenceCache();
    const activePanelId = document.querySelector('.panel.active')?.id || 'panel-spatial-map';
    if (activePanelId === 'panel-bridge-table') {
      buildBridgeInventoryTab();
    } else if (activePanelId === 'panel-bridge-traffic') {
      buildBridgeTrafficTab();
    }
    updateBridgeAnalyticsPane(selectedMapBridge || null);
    drawMap();
  };
  setTimeout(step, delay);
}

function snapBridgesToRoads() {
  scheduleDeferredBridgeIntegrityPass();
  BRIDGES.forEach(b => {
    if (b.x_new == null || b.y_new == null) return;
    b.map_x = b.x_new;
    b.map_y = b.y_new;
    b.map_coord_snapped = true;
    b.map_snap_distance_degrees = 0;
  });
  clearBridgeSpatialEvidenceCache();
}

function ensureMapAnimation() {
  if (mapAnimationFrame) return;
  const targetInterval = 1000;
  const tick = now => {
    mapAnimationFrame = null;
    const panel = document.getElementById('panel-spatial-map');
    if (panel?.classList.contains('active')) {
      if (!mapLastAnimationDraw || now - mapLastAnimationDraw >= targetInterval) {
        mapLastAnimationDraw = now;
        drawMap();
      }
      mapAnimationFrame = requestAnimationFrame(tick);
    }
  };
  mapAnimationFrame = requestAnimationFrame(tick);
}

const mapBounds = { minX: 29.25, maxX: 35.25, minY: -1.65, maxY: 4.35 };

function insideUgandaMapBounds(lon, lat) {
  const x = Number(lon), y = Number(lat);
  return Number.isFinite(x) && Number.isFinite(y) &&
    x >= mapBounds.minX && x <= mapBounds.maxX &&
    y >= mapBounds.minY && y <= mapBounds.maxY;
}

function validLonLat(lon, lat) {
  const x = Number(lon), y = Number(lat);
  return Number.isFinite(x) && Number.isFinite(y) && Math.abs(x) > 0.001 && insideUgandaMapBounds(x, y);
}

const BRIDGE_LOCATION_OVERRIDES = {
  'bridge-b046': { lng: 33.1875, lat: 0.438611, basis: 'Source of the Nile Bridge Jinja reference coordinate supplied by user' },
  // Source coordinate plots east of Uganda; snapped to C866_Link01 (Munamba - Lwakhakha) road geometry.
  'bridge-b107': { lng: 34.37869, lat: 0.7946, basis: 'Snapped to C866_Link01 national road link' },
  // Source coordinate was on a missing C459 link; snapped to nearest rendered national road geometry.
  'bridge-b561': { lng: 29.85295, lat: -0.91172, basis: 'Snapped to C432_Link01 national road link' }
};

const LEGACY_ATC_LINK_MAP = {
  'Kasangati - Kyaliwajala': 'C194_Link02',
  'Kalagi - Bukoloto-Kayunga': 'B101_Link02',
  'Njeru - Bukoloto': 'B102_Link01',
  'Kampala - Mukono': 'A001_Link01',
  'Buwama - Nyendo': 'A002_Link04',
  'Lyantonde - Ntusi': 'C227_Link01',
  'Ishaka - Katunguru': 'B152_Link03',
  'Kyenjojo - Fortportal': 'A005_Link10',
  'Ibanda - Kamwenge': 'B150_Link03',
  'Tirinyi - Budaka - Kamonkoli': 'A012_Link03',
  'Pallisa - Kanyago Bridge': 'B305_Link02',
  'Kumi - Brooks corner': 'C920_Link01',
  'Lira - Corner Kilak': 'B252_Link01',
  'Lamogi - Amuru Junction': 'C686_Link01',
  'Nebbi - Olevu': 'A008_Link04'
};

let legacyAtcMapStationCache = null;

function getRoadByLinkId(linkId) {
  const key = normalizedLinkKey(linkId);
  return NATIONAL_ROAD_NETWORK.find(r => normalizedLinkKey(r.id) === key) ||
    ROAD_GEOMETRY.find(r => normalizedLinkKey(r.id) === key) ||
    null;
}

function midpointOnRoadLink(linkId) {
  const road = getRoadByLinkId(linkId);
  const line = road?.lines?.find(l => Array.isArray(l) && l.some(p => validLonLat(p?.[0], p?.[1])));
  if (!line) return null;
  const pts = line.filter(p => validLonLat(p?.[0], p?.[1])).map(p => [Number(p[0]), Number(p[1])]);
  if (!pts.length) return null;
  if (pts.length === 1) return pts[0];
  const segments = [];
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (len > 0) {
      segments.push({ a, b, len });
      total += len;
    }
  }
  if (!segments.length) return pts[Math.floor(pts.length / 2)];
  let acc = 0;
  const target = total / 2;
  for (const seg of segments) {
    if (acc + seg.len >= target) {
      const t = (target - acc) / seg.len;
      return [
        seg.a[0] + (seg.b[0] - seg.a[0]) * t,
        seg.a[1] + (seg.b[1] - seg.a[1]) * t
      ];
    }
    acc += seg.len;
  }
  return pts[pts.length - 1];
}

function getLegacyAtcMapStations() {
  if (legacyAtcMapStationCache) return legacyAtcMapStationCache;
  legacyAtcMapStationCache = LEGACY_ATC_STATIONS.map(st => {
    const linkId = LEGACY_ATC_LINK_MAP[st.name] || LEGACY_ATC_LINK_MAP[st.sheet];
    const linkKey = normalizedLinkKey(linkId);
    const manualMatch = MANUAL_COUNT_STATIONS.find(m =>
      normalizedLinkKey(m.link_id) === linkKey && validLonLat(m.lng, m.lat) && /ATC Location/i.test(m.comment || '')
    ) || MANUAL_COUNT_STATIONS.find(m =>
      normalizedLinkKey(m.link_id) === linkKey && validLonLat(m.lng, m.lat)
    );
    const fallbackPt = manualMatch ? [Number(manualMatch.lng), Number(manualMatch.lat)] : midpointOnRoadLink(linkId);
    if (!fallbackPt || !validLonLat(fallbackPt[0], fallbackPt[1])) return null;
    const road = getRoadByLinkId(linkId);
    return {
      id: st.id,
      name: st.name,
      sheet: st.sheet,
      link_id: linkId,
      link_name: manualMatch?.link_name || road?.name || st.name,
      lat: fallbackPt[1],
      lng: fallbackPt[0],
      type: 'legacy-atc',
      avg_adt: st.avg_adt,
      max_adt: st.max_adt,
      observations: st.observations
    };
  }).filter(Boolean);
  return legacyAtcMapStationCache;
}

function bridgeMapLon(b) {
  const override = BRIDGE_LOCATION_OVERRIDES[b?._id];
  if (override) return override.lng;
  const v = b?.map_x ?? b?.x_new;
  return v == null ? null : Number(v);
}

function bridgeMapLat(b) {
  const override = BRIDGE_LOCATION_OVERRIDES[b?._id];
  if (override) return override.lat;
  const v = b?.map_y ?? b?.y_new;
  return v == null ? null : Number(v);
}

function getProjection(lon, lat, width, height) {
  const pad = Math.min(width, height) * 0.08;
  const mapW = mapBounds.maxX - mapBounds.minX;
  const mapH = mapBounds.maxY - mapBounds.minY;

  const scaleX = (width - 2 * pad) / mapW;
  const scaleY = (height - 2 * pad) / mapH;
  const scale = Math.min(scaleX, scaleY);

  const cx = pad + (width - 2 * pad - mapW * scale) / 2;
  const cy = pad + (height - 2 * pad - mapH * scale) / 2;

  const x = cx + (lon - mapBounds.minX) * scale;
  const y = cy + (mapBounds.maxY - lat) * scale;
  return { x, y };
}

function getInverseProjection(x, y, width, height) {
  const pad = Math.min(width, height) * 0.08;
  const mapW = mapBounds.maxX - mapBounds.minX;
  const mapH = mapBounds.maxY - mapBounds.minY;
  const scaleX = (width - 2 * pad) / mapW;
  const scaleY = (height - 2 * pad) / mapH;
  const scale = Math.min(scaleX, scaleY);
  const cx = pad + (width - 2 * pad - mapW * scale) / 2;
  const cy = pad + (height - 2 * pad - mapH * scale) / 2;
  return {
    lon: mapBounds.minX + (x - cx) / scale,
    lat: mapBounds.maxY - (y - cy) / scale
  };
}

function lon2tile(lon, z) {
  return Math.floor((lon + 180) / 360 * Math.pow(2, z));
}

function lat2tile(lat, z) {
  const rad = lat * Math.PI / 180;
  return Math.floor((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2 * Math.pow(2, z));
}

function tile2lon(x, z) {
  return x / Math.pow(2, z) * 360 - 180;
}

function tile2lat(y, z) {
  const n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
  return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function mapTileKey(kind, z, x, y) {
  return `${kind}:${z}:${x}:${y}`;
}

function scheduleMapTileWarmup(delay = 1800) {
  if (mapTilesEnabled || mapTileStartTimer) return;
  updateMapTileStatus();
  mapTileStartTimer = setTimeout(() => {
    mapTileStartTimer = null;
    mapTilesEnabled = true;
    updateMapTileStatus();
    scheduleMapTileRedraw();
  }, delay);
}

function scheduleMapTileRedraw() {
  if (mapTileRedrawPending) return;
  mapTileRedrawPending = true;
  requestAnimationFrame(() => {
    mapTileRedrawPending = false;
    drawMap();
  });
}

function drainMapTileQueue() {
  while (mapTileActiveRequests < MAP_TILE_CONCURRENT_LIMIT && MAP_TILE_QUEUE.length) {
    const request = MAP_TILE_QUEUE.shift();
    MAP_TILE_QUEUED_KEYS.delete(request.key);
    if (MAP_TILE_CACHE.has(request.key)) continue;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    img.loaded = false;
    img.failed = false;
    MAP_TILE_CACHE.set(request.key, img);
    mapTileActiveRequests++;
    mapTileLoadState.requested++;
    img.onload = () => {
      img.loaded = true;
      mapTileLoadState.loaded++;
      mapTileActiveRequests = Math.max(0, mapTileActiveRequests - 1);
      mapTileLoadState.queued = MAP_TILE_QUEUE.length;
      updateMapTileStatus();
      scheduleMapTileRedraw();
      drainMapTileQueue();
    };
    img.onerror = () => {
      img.failed = true;
      mapTileLoadState.failed++;
      mapTileActiveRequests = Math.max(0, mapTileActiveRequests - 1);
      mapTileLoadState.queued = MAP_TILE_QUEUE.length;
      updateMapTileStatus();
      drainMapTileQueue();
    };
    img.src = MAP_TILE_SERVICES[request.kind].replace('{z}', request.z).replace('{x}', request.x).replace('{y}', request.y);
  }
  mapTileLoadState.queued = MAP_TILE_QUEUE.length;
  updateMapTileStatus();
}

function getTileImage(kind, z, x, y) {
  const key = `${kind}:${z}:${x}:${y}`;
  if (MAP_TILE_CACHE.has(key)) return MAP_TILE_CACHE.get(key);
  if (!mapTilesEnabled || MAP_TILE_QUEUED_KEYS.has(key)) return null;
  MAP_TILE_QUEUED_KEYS.add(key);
  MAP_TILE_QUEUE.push({ kind, z, x, y, key });
  mapTileLoadState.queued = MAP_TILE_QUEUE.length;
  drainMapTileQueue();
  return null;
}

function updateMapTileStatus() {
  const el = document.getElementById('mapTileStatus');
  if (!el) return;
  if (!mapTilesEnabled) {
    el.textContent = 'Vector map ready - Esri imagery deferred';
    el.style.color = 'var(--accent-cyan)';
  } else if (!mapTileLoadState.requested && !mapTileLoadState.queued) {
    el.textContent = 'Vector map ready - Esri imagery loading in background';
    el.style.color = 'var(--accent-amber)';
  } else if (mapTileLoadState.loaded > 0) {
    el.textContent = `Esri imagery hybrid active (${mapTileLoadState.loaded}/${mapTileLoadState.requested} tiles, ${mapTileLoadState.queued} queued)`;
    el.style.color = 'var(--accent-cyan)';
  } else if (mapTileLoadState.failed > 0) {
    el.textContent = 'Imagery unavailable - offline vector fallback active';
    el.style.color = 'var(--accent-amber)';
  } else {
    el.textContent = `Loading Esri imagery in background (${mapTileLoadState.queued} queued)`;
    el.style.color = 'var(--accent-amber)';
  }
}

function drawHybridBaseMap(ctx, canvas, dpr) {
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, '#0f1720');
  grad.addColorStop(0.42, '#18231d');
  grad.addColorStop(0.72, '#1f2b20');
  grad.addColorStop(1, '#080d12');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = 0.16;
  for (let y = -40 * dpr; y < canvas.height + 80 * dpr; y += 46 * dpr) {
    ctx.strokeStyle = Math.round(y / dpr) % 92 === 0 ? 'rgba(151,170,120,0.18)' : 'rgba(82,112,94,0.12)';
    ctx.lineWidth = 1 * dpr;
    ctx.beginPath();
    for (let x = -60 * dpr; x <= canvas.width + 60 * dpr; x += 80 * dpr) {
      const yy = y + Math.sin((x + y) / (180 * dpr)) * 18 * dpr;
      if (x === -60 * dpr) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawEsriHybridTiles(ctx, canvas) {
  if (!mapTilesEnabled) {
    updateMapTileStatus();
    return 0;
  }
  const corners = [
    getInverseProjection((0 - mapOffsetX) / mapScale, (0 - mapOffsetY) / mapScale, canvas.width, canvas.height),
    getInverseProjection((canvas.width - mapOffsetX) / mapScale, (0 - mapOffsetY) / mapScale, canvas.width, canvas.height),
    getInverseProjection((0 - mapOffsetX) / mapScale, (canvas.height - mapOffsetY) / mapScale, canvas.width, canvas.height),
    getInverseProjection((canvas.width - mapOffsetX) / mapScale, (canvas.height - mapOffsetY) / mapScale, canvas.width, canvas.height)
  ];
  const minLon = clamp(Math.min(...corners.map(p => p.lon)) - 0.35, -180, 180);
  const maxLon = clamp(Math.max(...corners.map(p => p.lon)) + 0.35, -180, 180);
  const minLat = clamp(Math.min(...corners.map(p => p.lat)) - 0.35, -85, 85);
  const maxLat = clamp(Math.max(...corners.map(p => p.lat)) + 0.35, -85, 85);
  const z = clamp(7 + Math.round(Math.log2(Math.max(1, mapScale))), 7, 10);
  const n = Math.pow(2, z) - 1;
  const x0 = clamp(lon2tile(minLon, z), 0, n);
  const x1 = clamp(lon2tile(maxLon, z), 0, n);
  const y0 = clamp(lat2tile(maxLat, z), 0, n);
  const y1 = clamp(lat2tile(minLat, z), 0, n);
  let drawn = 0;
  let queuedThisDraw = 0;

  const tileKinds = mapTileLoadState.loaded > 0 ? ['imagery', 'labels'] : ['imagery'];
  tileKinds.forEach(kind => {
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        const key = mapTileKey(kind, z, x, y);
        let img = MAP_TILE_CACHE.get(key);
        if (!img && !MAP_TILE_QUEUED_KEYS.has(key) && queuedThisDraw < MAP_TILE_NEW_REQUESTS_PER_DRAW) {
          img = getTileImage(kind, z, x, y);
          queuedThisDraw++;
        }
        if (!img || !img.loaded || img.failed) continue;
        const west = tile2lon(x, z);
        const east = tile2lon(x + 1, z);
        const north = tile2lat(y, z);
        const south = tile2lat(y + 1, z);
        const nw = getProjection(west, north, canvas.width, canvas.height);
        const se = getProjection(east, south, canvas.width, canvas.height);
        const sx = nw.x * mapScale + mapOffsetX;
        const sy = nw.y * mapScale + mapOffsetY;
        const sw = (se.x - nw.x) * mapScale;
        const sh = (se.y - nw.y) * mapScale;
        ctx.save();
        ctx.globalAlpha = kind === 'labels' ? 0.92 : 0.88;
        try {
          ctx.drawImage(img, sx, sy, sw + 1, sh + 1);
          drawn++;
        } catch {}
        ctx.restore();
      }
    }
  });
  updateMapTileStatus();
  return drawn;
}

function canonicalRoadClass(cls) {
  const c = String(cls || '').trim().toUpperCase().charAt(0);
  return ['M', 'A', 'B', 'C'].includes(c) ? c : 'C';
}

function roadColor(road) {
  const cls = canonicalRoadClass(road.cls);
  if (cls === 'M') return 'rgba(168,85,247,1)';
  if (cls === 'A') return 'rgba(239,68,68,1)';
  if (cls === 'B') return 'rgba(249,115,22,1)';
  return 'rgba(34,197,94,1)';
}

function roadWidth(road) {
  const base = 1.8;
  return base / Math.sqrt(Math.max(1, mapScale));
}

function networkRoadWidth(road) {
  const base = 1.8;
  return base / Math.sqrt(Math.max(1, mapScale));
}

function drawLineGeometry(ctx, canvas, road) {
  road.lines.forEach(line => {
    ctx.beginPath();
    line.forEach((coord, i) => {
      const pt = getProjection(coord[0], coord[1], canvas.width, canvas.height);
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.stroke();
  });
}

function drawNationalRoadNetwork(ctx, canvas) {
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  NATIONAL_ROAD_NETWORK.forEach(road => {
    const isPaved = /bituminous|paved/i.test(road.surface || '');
    const cls = canonicalRoadClass(road.cls);
    const width = networkRoadWidth(road);
    const topColor = cls === 'M' ? 'rgba(168,85,247,0.88)' :
      cls === 'A' ? 'rgba(239,68,68,0.85)' :
      cls === 'B' ? 'rgba(249,115,22,0.85)' :
      cls === 'C' ? 'rgba(34,197,94,0.85)' :
      isPaved ? 'rgba(226,232,240,0.58)' :
      'rgba(203,213,225,0.42)';
    ctx.globalAlpha = 0.38;
    ctx.strokeStyle = 'rgba(2,6,23,0.9)';
    ctx.lineWidth = width + (0.55 / Math.sqrt(Math.max(1, mapScale)));
    drawLineGeometry(ctx, canvas, road);
    ctx.globalAlpha = 0.82;
    ctx.strokeStyle = topColor;
    ctx.lineWidth = width;
    drawLineGeometry(ctx, canvas, road);
  });
  ctx.restore();
}

function drawRoadLayer(ctx, canvas, activeLinkSet) {
  const searchHasFilter = document.getElementById('regionFilter').value !== 'all' ||
    document.getElementById('roadClassFilter').value !== 'all' ||
    document.getElementById('bridgeSearch').value.trim() !== '';
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ROAD_GEOMETRY.forEach(road => {
    const active = !searchHasFilter || activeLinkSet.has(road.id);
    const width = roadWidth(road);
    ctx.globalAlpha = active ? 0.55 : 0.16;
    ctx.strokeStyle = 'rgba(2,6,23,0.96)';
    ctx.lineWidth = width + (0.65 / Math.sqrt(Math.max(1, mapScale)));
    drawLineGeometry(ctx, canvas, road);
    ctx.globalAlpha = active ? 0.92 : 0.28;
    ctx.strokeStyle = roadColor(road);
    ctx.lineWidth = width;
    drawLineGeometry(ctx, canvas, road);
  });
  ctx.restore();
}

function findRoadPath(fromPt, toPt, roadClass, linkNo) {
  const pS = [fromPt.lng, fromPt.lat];
  const pB = [toPt.lng, toPt.lat];

  const distSq = (p1, p2) => {
    const dx = p1[0] - p2[0];
    const dy = p1[1] - p2[1];
    return dx * dx + dy * dy;
  };

  const snapToSegment = (p, a, b) => {
    const vx = b[0] - a[0];
    const vy = b[1] - a[1];
    const segLenSq = vx * vx + vy * vy;
    if (!segLenSq) {
      return { point: a, t: 0, distSq: distSq(p, a) };
    }
    const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * vx + (p[1] - a[1]) * vy) / segLenSq));
    const point = [a[0] + vx * t, a[1] + vy * t];
    return { point, t, distSq: distSq(p, point) };
  };

  const nearestSnapOnLine = (p, line) => {
    let best = { point: line[0], segmentIndex: 0, t: 0, distSq: distSq(p, line[0]) };
    if (line.length < 2) return best;
    for (let i = 0; i < line.length - 1; i++) {
      const snap = snapToSegment(p, line[i], line[i + 1]);
      if (snap.distSq < best.distSq) {
        best = { ...snap, segmentIndex: i };
      }
    }
    return best;
  };

  const cleanPath = coords => {
    const out = [];
    coords.forEach(pt => {
      if (!pt) return;
      const prev = out[out.length - 1];
      if (!prev || Math.abs(prev[0] - pt[0]) > 0.000001 || Math.abs(prev[1] - pt[1]) > 0.000001) {
        out.push(pt);
      }
    });
    return out.map(pt => ({ lng: pt[0], lat: pt[1] }));
  };

  const sliceLineBySnaps = (line, startSnap, endSnap) => {
    const startPos = startSnap.segmentIndex + startSnap.t;
    const endPos = endSnap.segmentIndex + endSnap.t;
    const coords = [startSnap.point];

    if (startPos <= endPos) {
      for (let i = startSnap.segmentIndex + 1; i <= endSnap.segmentIndex; i++) {
        coords.push(line[i]);
      }
    } else {
      for (let i = startSnap.segmentIndex; i > endSnap.segmentIndex; i--) {
        coords.push(line[i]);
      }
    }

    coords.push(endSnap.point);
    return cleanPath(coords);
  };

  let bestRoad = null;
  let bestScore = Infinity;

  const allRoads = [...(ROAD_GEOMETRY || []), ...(NATIONAL_ROAD_NETWORK || [])];

  allRoads.forEach(road => {
    if (!road.lines || !road.lines.length) return;

    let bestLine = null;

    road.lines.forEach((line, lineIdx) => {
      if (!line || !line.length) return;
      const startSnap = nearestSnapOnLine(pS, line);
      const endSnap = nearestSnapOnLine(pB, line);
      const score = Math.sqrt(startSnap.distSq) + Math.sqrt(endSnap.distSq);
      if (!bestLine || score < bestLine.score) {
        bestLine = { line, lineIdx, startSnap, endSnap, score };
      }
    });

    if (!bestLine) return;

    let distScore = bestLine.score;

    let textMatch = false;
    const rId = String(road.id || '').toUpperCase();
    const rNo = String(road.road_no || '').toUpperCase();
    const targetLink = String(linkNo || '').toUpperCase();

    if (targetLink && (rId.includes(targetLink) || targetLink.includes(rId) || (rNo && targetLink.includes(rNo)))) {
      textMatch = true;
    }

    if (textMatch) {
      distScore /= 8;
    } else if (roadClass && String(road.cls || '').toUpperCase() === String(roadClass).toUpperCase()) {
      distScore /= 1.5;
    }

    if (distScore < bestScore) {
      bestScore = distScore;
      bestRoad = {
        road,
        line: bestLine.line,
        startSnap: bestLine.startSnap,
        endSnap: bestLine.endSnap,
        minDistS: Math.sqrt(bestLine.startSnap.distSq),
        minDistB: Math.sqrt(bestLine.endSnap.distSq),
        textMatch
      };
    }
  });

  const acceptLimit = bestRoad && bestRoad.textMatch ? 1.25 : 0.65;
  if (bestRoad && bestRoad.minDistS < acceptLimit && bestRoad.minDistB < acceptLimit) {
    const roadPath = sliceLineBySnaps(bestRoad.line, bestRoad.startSnap, bestRoad.endSnap);
    if (roadPath.length >= 2) return roadPath;
  }

  return [fromPt, toPt];
}

function getPointAlongPolyline(points, progress) {
  if (!points || points.length === 0) return { x: 0, y: 0 };
  if (points.length === 1) return points[0];
  if (progress <= 0) return points[0];
  if (progress >= 1) return points[points.length - 1];

  const segmentLengths = [];
  let totalLength = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i+1];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const len = Math.hypot(dx, dy);
    segmentLengths.push(len);
    totalLength += len;
  }

  if (totalLength === 0) return points[0];

  const targetLength = progress * totalLength;
  let accumulatedLength = 0;

  for (let i = 0; i < segmentLengths.length; i++) {
    const nextAccumulated = accumulatedLength + segmentLengths[i];
    if (targetLength <= nextAccumulated) {
      const segmentProgress = (targetLength - accumulatedLength) / segmentLengths[i];
      const pStart = points[i];
      const pEnd = points[i+1];
      return {
        x: pStart.x + (pEnd.x - pStart.x) * segmentProgress,
        y: pStart.y + (pEnd.y - pStart.y) * segmentProgress
      };
    }
    accumulatedLength = nextAccumulated;
  }

  return points[points.length - 1];
}

function getPointAndTangentAlongPolyline(points, progress) {
  if (!points || points.length === 0) return { x: 0, y: 0, angle: 0, length: 0 };
  if (points.length === 1) return { x: points[0].x, y: points[0].y, angle: 0, length: 0 };

  const segmentLengths = [];
  let totalLength = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    const len = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    segmentLengths.push(len);
    totalLength += len;
  }
  if (!totalLength) return { x: points[0].x, y: points[0].y, angle: 0, length: 0 };

  const clamped = ((Number(progress) || 0) % 1 + 1) % 1;
  const targetLength = clamped * totalLength;
  let accumulatedLength = 0;
  for (let i = 0; i < segmentLengths.length; i++) {
    const nextAccumulated = accumulatedLength + segmentLengths[i];
    if (targetLength <= nextAccumulated || i === segmentLengths.length - 1) {
      const pStart = points[i];
      const pEnd = points[i + 1];
      const segmentProgress = segmentLengths[i] ? (targetLength - accumulatedLength) / segmentLengths[i] : 0;
      return {
        x: pStart.x + (pEnd.x - pStart.x) * segmentProgress,
        y: pStart.y + (pEnd.y - pStart.y) * segmentProgress,
        angle: Math.atan2(pEnd.y - pStart.y, pEnd.x - pStart.x),
        length: totalLength
      };
    }
    accumulatedLength = nextAccumulated;
  }
  const last = points[points.length - 1];
  const prev = points[points.length - 2];
  return { x: last.x, y: last.y, angle: Math.atan2(last.y - prev.y, last.x - prev.x), length: totalLength };
}

function getMapInfluenceLinks(activeBridges) {
  const visible = activeBridges
    .filter(b => validLonLat(bridgeMapLon(b), bridgeMapLat(b)))
    .slice()
    .sort((a, b) => Number(b.aadt_2025 || 0) - Number(a.aadt_2025 || 0));
  const selectedId = selectedMapBridge?._id || '';
  const key = `${selectedId}|${visible.map(b => b._id).join('|')}`;
  if (mapInfluenceCache.key === key) return mapInfluenceCache.links;

  const candidateBridges = selectedMapBridge ? visible.filter(b => b._id === selectedMapBridge._id) : visible.slice(0, 160);
  const activeLinkIds = new Set(candidateBridges.map(b => String(b.link_no || '').toUpperCase()).filter(Boolean));
  const activeRoadNos = new Set(candidateBridges.map(b => String(b.road_no || b.link_no || '').split('_')[0].toUpperCase()).filter(Boolean));
  const bridgeByLink = new Map(candidateBridges.map(b => [String(b.link_no || '').toUpperCase(), b]));
  const bridgeByRoadNo = new Map(candidateBridges.map(b => [String(b.road_no || b.link_no || '').split('_')[0].toUpperCase(), b]));
  const flows = [];

  NATIONAL_ROAD_NETWORK.forEach((road, roadIndex) => {
    const roadId = String(road.id || '').toUpperCase();
    const roadNo = String(road.road_no || roadId.split('_')[0] || '').toUpperCase();
    const bridge = bridgeByLink.get(roadId) || bridgeByRoadNo.get(roadNo);
    const isRelevant = activeLinkIds.has(roadId) || activeRoadNos.has(roadNo);
    if (!isRelevant || !road.lines?.length) return;

    road.lines.forEach((line, lineIndex) => {
      if (!line || line.length < 2) return;
      const baseFlow = {
        type: 'road',
        roadId,
        roadNo,
        roadClass: canonicalRoadClass(road.cls || bridge?.road_class),
        bridgeId: bridge?._id || '',
        bridgeName: bridge?.bridge_nam || road.name || roadId,
        path: line.map(pt => ({ lng: pt[0], lat: pt[1] })),
        seed: (roadIndex * 0.113 + lineIndex * 0.271) % 1,
        direction: 'forward',
        directionSign: bridgeFlowIsTwoWay(bridge || road) ? 1 : 0,
        directionModel: bridgeFlowDirectionModel(bridge || road)
      };
      flows.push(baseFlow);
      if (bridgeFlowIsTwoWay(bridge || road)) {
        flows.push({
          ...baseFlow,
          path: [...baseFlow.path].reverse(),
          seed: (baseFlow.seed + 0.5) % 1,
          direction: 'reverse',
          directionSign: -1
        });
      }
    });
  });

  mapInfluenceCache = { key, links: flows.slice(0, selectedMapBridge ? 64 : 280) };
  return mapInfluenceCache.links;
}

function quadPoint(a, c, b, t) {
  const mt = 1 - t;
  return {
    x: mt * mt * a.x + 2 * mt * t * c.x + t * t * b.x,
    y: mt * mt * a.y + 2 * mt * t * c.y + t * t * b.y
  };
}

function drawInfluenceFlowLayer(ctx, canvas, activeBridges) {
  const links = getMapInfluenceLinks(activeBridges);
  if (!links.length) return;
  const phase = ((performance.now() - mapAnimationStart) / 1000);
  const scaleRoot = Math.sqrt(Math.max(1, mapScale));

  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  links.forEach((link, i) => {
    const screenPoints = link.path.map(pt => getProjection(pt.lng, pt.lat, canvas.width, canvas.height));
    if (screenPoints.length < 2) return;

    const isSelected = selectedMapBridge && link.bridgeId === selectedMapBridge._id;
    const color = link.roadClass === 'M' ? '168,85,247' :
      link.roadClass === 'A' ? '239,68,68' :
      link.roadClass === 'B' ? '249,115,22' :
      '34,197,94';

    if (selectedMapBridge && !isSelected) {
      ctx.globalAlpha = 0.07;
      ctx.shadowBlur = 0;
    } else {
      ctx.globalAlpha = isSelected ? 0.96 : 0.62;
    }

    const flowWidth = (isSelected ? 2.45 : 1.45) / scaleRoot;
    const alpha = link.direction === 'reverse' ? 0.72 : 0.9;
    
    if (isSelected) {
      ctx.strokeStyle = 'rgba(253, 224, 71, 1)';
      ctx.shadowColor = 'rgba(253, 224, 71, 0.8)';
      ctx.shadowBlur = 10 / scaleRoot;
    } else {
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.shadowBlur = 0;
    }
    
    ctx.lineWidth = flowWidth;
    
    // Animate dash offset for flowing effect like uganda_atc
    const dashLen = 8 / scaleRoot;
    const gapLen = 12 / scaleRoot;
    ctx.setLineDash([dashLen, gapLen]);
    const speed = link.direction === 'reverse' ? -15 : 15;
    ctx.lineDashOffset = -phase * speed;

    ctx.beginPath();
    ctx.moveTo(screenPoints[0].x, screenPoints[0].y);
    for (let j = 1; j < screenPoints.length; j++) {
      ctx.lineTo(screenPoints[j].x, screenPoints[j].y);
    }
    ctx.stroke();
  });
  ctx.restore();
}

function drawMapLabels(ctx, canvas) {
  const labels = [
    ['Kampala', 32.58, 0.35], ['Gulu', 32.30, 2.78], ['Arua', 30.91, 3.02],
    ['Mbarara', 30.66, -0.61], ['Jinja', 33.20, 0.45], ['Mbale', 34.18, 1.08],
    ['Soroti', 33.61, 1.71], ['Fort Portal', 30.28, 0.65], ['Moroto', 34.66, 2.53],
    ['Kabale', 29.99, -1.25]
  ];
  ctx.save();
  ctx.font = `${11 / mapScale}px Plus Jakarta Sans, Arial, sans-serif`;
  ctx.textAlign = 'center';
  labels.forEach(([name, lon, lat]) => {
    const p = getProjection(lon, lat, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.72)';
    ctx.fillText(name, p.x + 1 / mapScale, p.y + 1 / mapScale);
    ctx.fillStyle = 'rgba(235,244,255,0.82)';
    ctx.fillText(name, p.x, p.y);
  });
  ctx.restore();
}

function drawBridgeSymbol(ctx, x, y, size, options = {}) {
  const scaleSize = size / mapScale;
  const isSelected = !!options.selected;
  const isHovered = !!options.hovered;
  const isActive = options.active !== false;
  const fill = options.fill || BRIDGE_SYMBOL.fill;
  const haloSize = scaleSize * (isSelected ? 2.35 : isHovered ? 2.05 : 1.65);
  const diamond = scaleSize * (isSelected ? 1.32 : isHovered ? 1.18 : 1);

  ctx.save();
  ctx.globalAlpha = isActive ? (options.alpha ?? 1) : 0.16;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  ctx.fillStyle = isSelected ? 'rgba(0,229,255,0.30)' : BRIDGE_SYMBOL.halo;
  ctx.beginPath();
  ctx.arc(x, y, haloSize, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowColor = 'rgba(0,0,0,0.72)';
  ctx.shadowBlur = 5 / mapScale;
  ctx.fillStyle = BRIDGE_SYMBOL.casing;
  ctx.beginPath();
  ctx.moveTo(x, y - diamond * 1.35);
  ctx.lineTo(x + diamond * 1.35, y);
  ctx.lineTo(x, y + diamond * 1.35);
  ctx.lineTo(x - diamond * 1.35, y);
  ctx.closePath();
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.fillStyle = fill;
  ctx.strokeStyle = BRIDGE_SYMBOL.stroke;
  ctx.lineWidth = (isSelected ? 2.8 : 2.1) / mapScale;
  ctx.beginPath();
  ctx.moveTo(x, y - diamond);
  ctx.lineTo(x + diamond, y);
  ctx.lineTo(x, y + diamond);
  ctx.lineTo(x - diamond, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = BRIDGE_SYMBOL.deck;
  ctx.lineWidth = Math.max(1.4 / mapScale, diamond * 0.18);
  ctx.beginPath();
  ctx.moveTo(x - diamond * 0.58, y);
  ctx.lineTo(x + diamond * 0.58, y);
  ctx.moveTo(x - diamond * 0.34, y - diamond * 0.24);
  ctx.lineTo(x - diamond * 0.34, y + diamond * 0.24);
  ctx.moveTo(x + diamond * 0.34, y - diamond * 0.24);
  ctx.lineTo(x + diamond * 0.34, y + diamond * 0.24);
  ctx.stroke();

  if (isSelected) {
    ctx.strokeStyle = COLORS.cyan;
    ctx.lineWidth = 2 / mapScale;
    ctx.setLineDash([5 / mapScale, 4 / mapScale]);
    ctx.beginPath();
    ctx.arc(x, y, diamond * 1.95, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.restore();
}

function drawWaterBodies(ctx, canvas) {
  if (typeof WATER_GEOMETRY === 'undefined') return;

  const scaleRoot = Math.sqrt(Math.max(1, mapScale));

  // 1. Draw Rivers
  if (WATER_GEOMETRY.rivers) {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)'; // soft sky blue
    ctx.lineWidth = 1.6 / scaleRoot;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    WATER_GEOMETRY.rivers.forEach(river => {
      if (river.length < 2) return;
      ctx.beginPath();
      river.forEach((coord, i) => {
        const pt = getProjection(coord[0], coord[1], canvas.width, canvas.height);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();
    });
    ctx.restore();
  }

  // 2. Draw Lakes
  if (WATER_GEOMETRY.lakes) {
    ctx.save();
    ctx.fillStyle = 'rgba(14, 116, 144, 0.28)'; // transparent cyan/deep blue
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
    ctx.lineWidth = 1.0 / scaleRoot;
    ctx.lineJoin = 'round';

    WATER_GEOMETRY.lakes.forEach(lake => {
      if (lake.length < 3) return;
      ctx.beginPath();
      lake.forEach((coord, i) => {
        const pt = getProjection(coord[0], coord[1], canvas.width, canvas.height);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    });
    ctx.restore();
  }
}

function drawMapLegend(ctx, canvas) {
  // Disabled in favor of HTML legend
}

function drawMap() {
  const canvas = document.getElementById('mapCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawHybridBaseMap(ctx, canvas, dpr);
  drawEsriHybridTiles(ctx, canvas);

  ctx.strokeStyle = 'rgba(84, 116, 255, 0.03)';
  ctx.lineWidth = 1;
  const gridSize = 45 * dpr;
  for (let x = mapOffsetX % gridSize; x < canvas.width; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = mapOffsetY % gridSize; y < canvas.height; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  ctx.save();
  ctx.translate(mapOffsetX, mapOffsetY);
  ctx.scale(mapScale, mapScale);

  // Render Waterbodies (Lakes & Rivers)
  // drawWaterBodies(ctx, canvas); // Disabled per user request

  const activeBridges = getFilteredBridges();
  const activeSet = new Set(activeBridges.map(b => b._id));
  const activeLinkSet = new Set(activeBridges.map(b => b.link_no).filter(Boolean));

  drawNationalRoadNetwork(ctx, canvas);
  drawRoadLayer(ctx, canvas, activeLinkSet);
  

  drawMapLabels(ctx, canvas);
  

  // Draw Major Culverts
  if (typeof MAJOR_CULVERTS !== 'undefined') {
    MAJOR_CULVERTS.forEach(c => {
      const lon = c.map_x || c.x_new;
      const lat = c.map_y || c.y_new;
      if (lon == null || lat == null) return;
      const pt = getProjection(Number(lon), Number(lat), canvas.width, canvas.height);
      const baseSize = 4.4;
      const size = baseSize / mapScale;
      ctx.save();
      ctx.fillStyle = '#f59e0b';
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 1.2 / mapScale;
      ctx.globalAlpha = 0.92;
      ctx.fillRect(pt.x - size/2, pt.y - size/2, size, size);
      ctx.strokeRect(pt.x - size/2, pt.y - size/2, size, size);
      ctx.restore();
    });
  }

  BRIDGES.forEach(b => {
    if (bridgeMapLon(b) == null || bridgeMapLat(b) == null) return;
    const pt = getProjection(bridgeMapLon(b), bridgeMapLat(b), canvas.width, canvas.height);
    const isActive = activeSet.has(b._id);
    const isHovered = hoveredBridge && b._id === hoveredBridge._id;
    const isSelected = selectedMapBridge && b._id === selectedMapBridge._id;
    const symbolSize = 4.8;

    if (isActive) {
      drawBridgeSymbol(ctx, pt.x, pt.y, symbolSize, {
        fill: BRIDGE_SYMBOL.fill,
        selected: isSelected,
        hovered: isHovered,
        active: true,
        alpha: selectedMapBridge && !isSelected ? 0.32 : 1
      });
    } else {
      drawBridgeSymbol(ctx, pt.x, pt.y, 3.2, {
        fill: BRIDGE_SYMBOL.fill,
        active: false
      });
    }
  });



  
  ctx.restore();
  drawMapLegend(ctx, canvas);
}

// --- Origin-Destination Matrix Logic (Per-Bridge Crossing) ---
(function() {
  const PAGE_SIZE = 80;
  let odPage = 0;
  let odSortKey = 'estimated_adt';
  let odSortAsc = false;
  let odFilteredData = [];
  let odAllData = [];

  function prepareODData() {
    const backend = sqlBotTrafficStore() || {};
    const raw = backend.od_matrix || [];
    const bridgeArr = window.BRIDGES ||
      (typeof BRIDGES !== 'undefined' ? BRIDGES : []);

    // Build link_name -> bridge mapping
    const linkBridgeMap = {};
    bridgeArr.forEach(b => {
      const ln = (b.link_name || b.link_nam || '').trim().toLowerCase();
      if (ln) {
        if (!linkBridgeMap[ln]) linkBridgeMap[ln] = [];
        linkBridgeMap[ln].push(b);
      }
    });

    odAllData = raw.map(r => {
      const o = (r.origin || '').trim();
      const d = (r.destination || '').trim();
      const candidates = [
        (o + ' - ' + d).toLowerCase(),
        (d + ' - ' + o).toLowerCase(),
        (o + '-' + d).toLowerCase(),
        (d + '-' + o).toLowerCase(),
        (o + ' ' + d).toLowerCase(),
        (d + ' ' + o).toLowerCase()
      ];
      let matchedBridges = [];
      for (const c of candidates) {
        if (linkBridgeMap[c]) { matchedBridges = linkBridgeMap[c]; break; }
      }
      // Also partial match — origin or dest appears in any link name
      if (!matchedBridges.length) {
        const oLow = o.toLowerCase();
        const dLow = d.toLowerCase();
        for (const [ln, bridges] of Object.entries(linkBridgeMap)) {
          if (ln.includes(oLow) && ln.includes(dLow)) {
            matchedBridges = bridges;
            break;
          }
        }
      }
      let region = '';
      let bridgeNames = [];
      let bridgeNos = [];
      if (matchedBridges.length) {
        region = matchedBridges[0].region || '';
        bridgeNames = matchedBridges.map(b => b.bridge_nam || b.bridge_no || '');
        bridgeNos = matchedBridges.map(b => b.bridge_no || '');
      }
      return {
        origin: o,
        destination: d,
        year: r.year || '',
        total_count: Math.round(r.total_count || 0),
        observed_days: r.observed_days || 0,
        observed_links: r.observed_links || 0,
        estimated_adt: Math.round(r.estimated_adt || 0),
        region: region,
        bridges: bridgeNames,
        bridgeNos: bridgeNos,
        bridgeCount: matchedBridges.length,
        _search: (o + ' ' + d + ' ' + bridgeNames.join(' ') + ' ' + bridgeNos.join(' ') + ' ' + region).toLowerCase()
      };
    });
    return odAllData;
  }

  function filterODData() {
    const search = (document.getElementById('odSearchInput') || {}).value || '';
    const searchLow = search.toLowerCase().trim();
    const bridgeVal = (document.getElementById('odBridgeFilter') || {}).value || 'all';
    const regionVal = (document.getElementById('odRegionFilter2') || {}).value || 'all';
    const yearVal = (document.getElementById('odYearFilter2') || {}).value || 'all';

    odFilteredData = odAllData.filter(r => {
      if (searchLow && !r._search.includes(searchLow)) return false;
      if (yearVal !== 'all' && String(r.year) !== yearVal) return false;
      if (regionVal !== 'all' && r.region !== regionVal) return false;
      if (bridgeVal !== 'all') {
        if (!r.bridges.some(bn => bn === bridgeVal) && !r.bridgeNos.some(bn => bn === bridgeVal)) return false;
      }
      return true;
    });

    odFilteredData.sort((a, b) => {
      let va = a[odSortKey], vb = b[odSortKey];
      if (typeof va === 'string') va = va.toLowerCase();
      if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return odSortAsc ? -1 : 1;
      if (va > vb) return odSortAsc ? 1 : -1;
      return 0;
    });
    odPage = 0;
  }

  function renderODSummary() {
    const el = document.getElementById('odSummaryRow');
    if (!el) return;
    const totalPairs = odFilteredData.length;
    const totalADT = odFilteredData.reduce((s, r) => s + r.estimated_adt, 0);
    const uOrigins = new Set(odFilteredData.map(r => r.origin)).size;
    const uDests = new Set(odFilteredData.map(r => r.destination)).size;
    const bMatched = new Set(odFilteredData.flatMap(r => r.bridgeNos).filter(Boolean)).size;
    const maxADT = odFilteredData.length ? Math.max(...odFilteredData.map(r => r.estimated_adt)) : 0;

    el.innerHTML = [
      { v: fmt(totalPairs), l: 'OD Pairs' },
      { v: fmt(totalADT), l: 'Total Est. ADT' },
      { v: fmt(uOrigins), l: 'Unique Origins' },
      { v: fmt(uDests), l: 'Unique Destinations' },
      { v: fmt(bMatched), l: 'Matched Bridge Crossings' },
      { v: fmt(maxADT), l: 'Peak ADT (Single Pair)' }
    ].map(c => '<div class="od-stat-card"><strong>' + c.v + '</strong><span>' + c.l + '</span></div>').join('');
  }

  function renderODTable() {
    const thead = document.getElementById('odTableHead2');
    const tbody = document.getElementById('odTableBody2');
    const pagination = document.getElementById('odPagination');
    if (!thead || !tbody) return;

    const cols = [
      { key: 'origin', label: 'Origin', cls: 'od-col-origin' },
      { key: 'destination', label: 'Destination', cls: 'od-col-dest' },
      { key: 'estimated_adt', label: 'Est. ADT', cls: 'od-col-adt' },
      { key: 'total_count', label: 'Total Count', cls: 'od-col-adt' },
      { key: 'observed_days', label: 'Days', cls: 'od-col-year' },
      { key: 'observed_links', label: 'Links', cls: 'od-col-year' },
      { key: 'year', label: 'Year', cls: 'od-col-year' },
      { key: 'bridges', label: 'Bridge Crossings', cls: 'od-col-bridge' },
      { key: 'region', label: 'Region', cls: 'od-col-bridge' }
    ];

    var headHtml = '<tr>';
    for (var ci = 0; ci < cols.length; ci++) {
      var c = cols[ci];
      var sorted = odSortKey === c.key;
      var arrow = sorted ? (odSortAsc ? '&#9650;' : '&#9660;') : '&#9650;';
      headHtml += '<th data-key="' + c.key + '" class="' + (sorted ? 'sorted' : '') + '">' +
        c.label + '<span class="sort-arrow">' + arrow + '</span></th>';
    }
    headHtml += '</tr>';
    thead.innerHTML = headHtml;

    var start = odPage * PAGE_SIZE;
    var pageData = odFilteredData.slice(start, start + PAGE_SIZE);

    var frag = document.createDocumentFragment();
    for (var ri = 0; ri < pageData.length; ri++) {
      var r = pageData[ri];
      var tr = document.createElement('tr');
      for (var ci2 = 0; ci2 < cols.length; ci2++) {
        var col = cols[ci2];
        var td = document.createElement('td');
        td.className = col.cls;
        if (col.key === 'bridges') {
          if (r.bridges.length) {
            td.innerHTML = '';
            r.bridges.forEach((bName, idx) => {
              const bNo = r.bridgeNos[idx];
              const span = document.createElement('span');
              span.className = 'od-bridge-link';
              span.textContent = bName;
              span.title = 'Click to view ' + bName + ' on the map';
              span.addEventListener('click', (e) => {
                e.stopPropagation();
                const found = (window.BRIDGES || []).find(b => b.bridge_nam === bName || b.bridge_no === bNo || b.bridge_no === bName);
                if (found) {
                  selectBridgeById(found._id, { centerMap: true, switchToMap: true });
                }
              });
              td.appendChild(span);
            });
          } else {
            td.textContent = 'N/A';
          }
        } else if (col.key === 'estimated_adt' || col.key === 'total_count') {
          td.textContent = fmt(r[col.key]);
        } else if (col.key === 'origin' || col.key === 'destination') {
          td.textContent = toTitleCase(r[col.key]) || 'N/A';
        } else {
          td.textContent = r[col.key] || 'N/A';
        }
        tr.appendChild(td);
      }
      frag.appendChild(tr);
    }
    tbody.innerHTML = '';
    tbody.appendChild(frag);

    var totalPages = Math.ceil(odFilteredData.length / PAGE_SIZE) || 1;
    if (pagination) {
      pagination.innerHTML =
        '<button id="odPrev"' + (odPage === 0 ? ' disabled' : '') + '>&#9664; Prev</button>' +
        '<span>Page ' + (odPage + 1) + ' of ' + totalPages + ' &middot; ' + fmt(odFilteredData.length) + ' rows</span>' +
        '<button id="odNext"' + (odPage >= totalPages - 1 ? ' disabled' : '') + '>Next &#9654;</button>';
      var prevBtn = document.getElementById('odPrev');
      var nextBtn = document.getElementById('odNext');
      if (prevBtn) prevBtn.addEventListener('click', function() { odPage--; renderODTable(); });
      if (nextBtn) nextBtn.addEventListener('click', function() { odPage++; renderODTable(); });
    }

    thead.querySelectorAll('th').forEach(function(th) {
      th.addEventListener('click', function() {
        var key = th.dataset.key;
        if (odSortKey === key) { odSortAsc = !odSortAsc; }
        else { odSortKey = key; odSortAsc = true; }
        filterODData();
        renderODTable();
      });
    });
  }

  function renderODHeatmap() {
    var thead = document.getElementById('odHeatmapHead');
    var tbody = document.getElementById('odHeatmapBody');
    if (!thead || !tbody) return;

    var originADT = {}, destADT = {}, matrix = {};
    odFilteredData.forEach(function(r) {
      originADT[r.origin] = (originADT[r.origin] || 0) + r.estimated_adt;
      destADT[r.destination] = (destADT[r.destination] || 0) + r.estimated_adt;
      if (!matrix[r.origin]) matrix[r.origin] = {};
      matrix[r.origin][r.destination] = (matrix[r.origin][r.destination] || 0) + r.estimated_adt;
    });

    var CAP = 30;
    var topOrigins = Object.entries(originADT).sort(function(a,b){return b[1]-a[1]}).slice(0, CAP).map(function(e){return e[0]});
    var topDests = Object.entries(destADT).sort(function(a,b){return b[1]-a[1]}).slice(0, CAP).map(function(e){return e[0]});

    var maxVal = 0;
    topOrigins.forEach(function(o) {
      topDests.forEach(function(d) {
        var v = (matrix[o] && matrix[o][d]) || 0;
        if (v > maxVal) maxVal = v;
      });
    });

    function heatCls(val) {
      if (!val) return 'od-heat-0';
      var ratio = val / (maxVal || 1);
      if (ratio > 0.85) return 'od-heat-7';
      if (ratio > 0.65) return 'od-heat-6';
      if (ratio > 0.45) return 'od-heat-5';
      if (ratio > 0.3) return 'od-heat-4';
      if (ratio > 0.15) return 'od-heat-3';
      if (ratio > 0.05) return 'od-heat-2';
      return 'od-heat-1';
    }

    var hHtml = '<tr><th>Origin \\ Dest</th>';
    topDests.forEach(function(d) {
      var label = d.length > 10 ? d.slice(0,9) + '\u2026' : d;
      hHtml += '<th title="' + htmlEscape(d) + '">' + htmlEscape(label) + '</th>';
    });
    hHtml += '</tr>';
    thead.innerHTML = hHtml;

    var frag = document.createDocumentFragment();
    topOrigins.forEach(function(o) {
      var tr = document.createElement('tr');
      var th = document.createElement('td');
      th.textContent = o;
      th.title = o;
      tr.appendChild(th);
      topDests.forEach(function(d) {
        var td = document.createElement('td');
        var val = (matrix[o] && matrix[o][d]) || 0;
        td.className = heatCls(val);
        td.textContent = val ? fmt(Math.round(val)) : 'N/A';
        td.title = o + ' \u2192 ' + d + ': ' + (val ? fmt(Math.round(val)) : '0') + ' ADT (Click to view details)';
        if (val) {
          td.style.cursor = 'pointer';
          td.addEventListener('click', () => {
            const searchInput = document.getElementById('odSearchInput');
            if (searchInput) searchInput.value = o + ' ' + d;
            
            const tableBtn = document.querySelector('.od-view-toggle button[data-view="table"]');
            if (tableBtn) tableBtn.click();
            
            filterODData();
            renderAll();
          });
        }
        tr.appendChild(td);
      });
      frag.appendChild(tr);
    });
    tbody.innerHTML = '';
    tbody.appendChild(frag);
  }

  function syncODBridgeFilter() {
    const bridgeSel = document.getElementById('odBridgeFilter');
    if (!bridgeSel) return;
    
    if (selectedMapBridge) {
      const bName = selectedMapBridge.bridge_nam || '';
      const bNo = selectedMapBridge.bridge_no || '';
      
      let foundOption = false;
      for (let i = 0; i < bridgeSel.options.length; i++) {
        const optVal = bridgeSel.options[i].value;
        if (optVal === bName || optVal === bNo) {
          bridgeSel.value = optVal;
          foundOption = true;
          break;
        }
      }
      
      if (!foundOption) {
        const label = (bName ? bName : bNo) + " (No OD Data)";
        const tempOpt = document.createElement('option');
        tempOpt.value = bName || bNo;
        tempOpt.textContent = label;
        tempOpt.className = 'od-temp-option';
        
        const existingTemp = bridgeSel.querySelector('.od-temp-option');
        if (existingTemp) existingTemp.remove();
        
        bridgeSel.appendChild(tempOpt);
        bridgeSel.value = tempOpt.value;
      } else {
        const existingTemp = bridgeSel.querySelector('.od-temp-option');
        if (existingTemp) existingTemp.remove();
      }
    } else {
      const existingTemp = bridgeSel.querySelector('.od-temp-option');
      if (existingTemp) existingTemp.remove();
      
      bridgeSel.value = 'all';
    }
  }

  function initODControls() {
    var years = [];
    var ySet = {};
    odAllData.forEach(function(r) { if (r.year && !ySet[r.year]) { ySet[r.year] = 1; years.push(r.year); } });
    years.sort(function(a,b){return b-a});
    var yearSel = document.getElementById('odYearFilter2');
    if (yearSel) {
      yearSel.innerHTML = '<option value="all">All Years</option>';
      years.forEach(function(y) { yearSel.innerHTML += '<option value="' + y + '">' + y + '</option>'; });
    }

    var regions = [];
    var rSet = {};
    odAllData.forEach(function(r) { if (r.region && !rSet[r.region]) { rSet[r.region] = 1; regions.push(r.region); } });
    regions.sort();
    var regionSel = document.getElementById('odRegionFilter2');
    if (regionSel) {
      regionSel.innerHTML = '<option value="all">All Regions</option>';
      regions.forEach(function(rg) { regionSel.innerHTML += '<option value="' + rg + '">' + rg + '</option>'; });
    }

    var allBridgeNames = {};
    odAllData.forEach(function(r) { r.bridges.forEach(function(b) { allBridgeNames[b] = 1; }); });
    var bridgeList = Object.keys(allBridgeNames).sort();
    var bridgeSel = document.getElementById('odBridgeFilter');
    if (bridgeSel) {
      bridgeSel.innerHTML = '<option value="all">All Bridges (' + bridgeList.length + ')</option>';
      bridgeList.forEach(function(b) { bridgeSel.innerHTML += '<option value="' + htmlEscape(b) + '">' + htmlEscape(b) + '</option>'; });
    }

    var debounce;
    var searchInput = document.getElementById('odSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        clearTimeout(debounce);
        debounce = setTimeout(function() { filterODData(); renderAll(); }, 200);
      });
    }

    [yearSel, regionSel].forEach(function(sel) {
      if (sel) sel.addEventListener('change', function() { filterODData(); renderAll(); });
    });

    if (bridgeSel) {
      bridgeSel.addEventListener('change', function() {
        const val = bridgeSel.value;
        if (val === 'all') {
          selectedMapBridge = null;
        } else {
          const found = (window.BRIDGES || []).find(b => b.bridge_nam === val || b.bridge_no === val);
          if (found) {
            selectedMapBridge = found;
          }
        }
        
        if (selectedMapBridge) {
          hoveredBridge = selectedMapBridge;
          mapInfluenceCache = { key: null, links: [] };
          setBridgeTrafficControlsForBridge(selectedMapBridge);
          focusBridgeInventoryPageForBridge(selectedMapBridge);
          focusBridgeTrafficPageForBridge(selectedMapBridge);
          buildKPIs();
          updateBridgeAnalyticsPane(selectedMapBridge);
          applyActiveBridgeSelectionToTables();
        } else {
          buildKPIs();
          updateBridgeAnalyticsPane(null);
          applyActiveBridgeSelectionToTables();
        }
        
        drawMap();
        filterODData();
        renderAll();
      });
    }

    document.querySelectorAll('.od-view-toggle button').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.od-view-toggle button').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var view = btn.dataset.view;
        document.getElementById('odTableView').style.display = view === 'table' ? '' : 'none';
        document.getElementById('odHeatmapView').style.display = view === 'heatmap' ? '' : 'none';
        if (view === 'heatmap') renderODHeatmap();
      });
    });
  }

  function renderAll() {
    var empty = document.getElementById('odEmptyState2');
    var tableView = document.getElementById('odTableView');
    var heatmapView = document.getElementById('odHeatmapView');

    if (!odFilteredData.length) {
      if (empty) empty.style.display = 'flex';
      if (tableView) tableView.style.display = 'none';
      if (heatmapView) heatmapView.style.display = 'none';
    } else {
      if (empty) empty.style.display = 'none';
      var activeView = document.querySelector('.od-view-toggle button.active');
      var isHeatmap = activeView && activeView.dataset.view === 'heatmap';
      if (tableView) tableView.style.display = isHeatmap ? 'none' : '';
      if (heatmapView) heatmapView.style.display = isHeatmap ? '' : 'none';
    }

    renderODSummary();
    renderODTable();
    var activeBtn = document.querySelector('.od-view-toggle button.active');
    if (activeBtn && activeBtn.dataset.view === 'heatmap') renderODHeatmap();

    var label = document.getElementById('odBridgeLabel');
    var bridgeVal = (document.getElementById('odBridgeFilter') || {}).value || 'all';
    if (label) label.textContent = bridgeVal === 'all' ? 'All Bridges' : bridgeVal;
  }

  window.buildODMatrixTab = function() {
    const store = sqlBotTrafficStore();
    if (!store) {
      // Show loading state in the OD tab elements
      const tbody = document.getElementById('odTableBody2');
      if (tbody) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding: 40px; color: var(--accent-cyan); font-weight: bold;">Loading Origin-Destination Matrix data...</td></tr>';
      }
      const hbody = document.getElementById('odHeatmapBody');
      if (hbody) {
        hbody.innerHTML = '<tr><td colspan="30" style="text-align:center; padding: 40px; color: var(--accent-cyan); font-weight: bold;">Loading Origin-Destination Matrix data...</td></tr>';
      }
      const summary = document.getElementById('odSummaryRow');
      if (summary) {
        summary.innerHTML = '<div style="color:var(--accent-cyan); font-weight:bold; padding: 10px;">Loading data...</div>';
      }
      
      loadSqlBotTrafficBackend().then(data => {
        if (data) {
          prepareODData();
          initODControls();
          syncODBridgeFilter();
          filterODData();
          renderAll();
        } else {
          const tbody = document.getElementById('odTableBody2');
          if (tbody) tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding: 40px; color: var(--accent-rose);">Failed to load Origin-Destination data.</td></tr>';
        }
      });
      return;
    }

    if (!odAllData.length) {
      prepareODData();
      initODControls();
    }
    syncODBridgeFilter();
    filterODData();
    renderAll();
  };

  window.initODMatrixControls = function() {};
})();


let culvertPage = 1;
const CULVERTS_PAGE_SIZE = 999999;
let culvertSort = { key: 'culvert_no', desc: false };
let culvertInventorySort = { key: 'culvert_no', ascending: true };

function buildMajorCulvertsTab() {
  buildCulvertTable();
}

function updateCulvertPager(totalRows, totalPages) {
  const prevBtn = document.getElementById('culvertTablePrev');
  const nextBtn = document.getElementById('culvertTableNext');
  const info = document.getElementById('culvertTablePageInfo');
  
  if (info) info.textContent = `Page ${culvertPage} of ${totalPages} (${totalRows} total)`;
  if (prevBtn) {
    prevBtn.disabled = culvertPage <= 1;
    prevBtn.onclick = () => { culvertPage--; buildCulvertTable(); };
  }
  if (nextBtn) {
    nextBtn.disabled = culvertPage >= totalPages;
    nextBtn.onclick = () => { culvertPage++; buildCulvertTable(); };
  }
}

function buildCulvertTable() {
  const columns = BMS_CULVERT_INVENTORY_COLUMNS;
  const filtered = applyCulvertInventorySort([...(typeof MAJOR_CULVERTS !== 'undefined' ? MAJOR_CULVERTS : [])]);
  const tbody = document.getElementById('culvertTableBody');
  const emptyState = document.getElementById('culvertEmptyState');
  const table = document.getElementById('culvertTable');
  const headRow = document.getElementById('culvertTableHeadRow');
  if (!tbody) return;

  if (headRow && headRow.dataset.rendered !== '1') {
    headRow.innerHTML = columns.map(col => `<th data-sort="${htmlEscape(col.key)}">${htmlEscape(col.label)}</th>`).join('');
    headRow.dataset.rendered = '1';
  }

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    table.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  table.style.display = 'table';
  if (emptyState) emptyState.style.display = 'none';

  const totalPages = Math.max(1, Math.ceil(filtered.length / CULVERTS_PAGE_SIZE));
  culvertPage = Math.max(1, Math.min(culvertPage, totalPages));

  const pageRows = filtered.slice((culvertPage - 1) * CULVERTS_PAGE_SIZE, culvertPage * CULVERTS_PAGE_SIZE);

  tbody.innerHTML = pageRows.map(c => `
    <tr data-culvert-id="${c._id}">
      ${columns.map(col => {
        const raw = bridgeInventoryValue(c, col);
        const rendered = col.render ? col.render(c) : htmlEscape(bridgeInventoryCellText(raw, col.key));
        const titleAttr = col.tooltip ? ` title="${htmlEscape(col.tooltip(c))}"` : '';
        return `<td class="${col.highlight ? 'highlight-cell' : ''}"${titleAttr}>${rendered}</td>`;
      }).join('')}
    </tr>
  `).join('');

  bindCulvertTableSortHandlers();
  updateCulvertPager(filtered.length, totalPages);
}

function applyCulvertInventorySort(rows) {
  return sortRowsByState(rows, culvertInventorySort, (culvert, key) => {
    const col = BMS_CULVERT_INVENTORY_COLUMNS.find(c => c.key === key);
    if (!col) return culvert?.[key];
    const direct = culvert?.[key];
    return direct !== undefined && direct !== null && direct !== ''
      ? direct
      : bridgeInventoryValue(culvert, col);
  });
}

function bindCulvertTableSortHandlers() {
  document.querySelectorAll('#culvertTable thead th[data-sort]').forEach(th => {
    th.onclick = () => {
      const key = th.dataset.sort;
      if (!key) return;
      const next = { key, ascending: culvertInventorySort?.key === key ? !culvertInventorySort.ascending : true };
      culvertInventorySort = next;
      culvertPage = 1;
      buildCulvertTable();
    };
  });
  updatePagedSortIndicators('culvertTable', culvertInventorySort);
}

// ── Photos tab: structure list + thumbnail gallery (photos_data.js) ──────────
function photoStructureName(id) {
  if (typeof BRIDGES !== 'undefined') {
    const b = BRIDGES.find(x => String(x.bridge_no) === id || String(x.new_bridge_no) === id);
    if (b) return b.bridge_nam || '';
  }
  if (typeof MAJOR_CULVERTS !== 'undefined') {
    const c = MAJOR_CULVERTS.find(x => String(x.culvert_no) === id);
    if (c) return c.road_name || '';
  }
  return '';
}

function initPhotosTab() {
  if (typeof PHOTOS_DATA === 'undefined') return;
  const listEl = document.getElementById('photoStructureList');
  const galleryEl = document.getElementById('photoGallery');
  const searchEl = document.getElementById('photoSearch');
  if (!listEl || !galleryEl) return;

  const ids = Object.keys(PHOTOS_DATA)
    .filter(k => k !== 'PHOTOS' && Array.isArray(PHOTOS_DATA[k]) && PHOTOS_DATA[k].length)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  let selected = null;

  const btnStyle = (active) => `display:flex;align-items:baseline;gap:8px;width:100%;text-align:left;`
    + `padding:7px 10px;border-radius:7px;cursor:pointer;font-family:inherit;`
    + `border:1px solid ${active ? 'var(--accent-cyan,#22d3ff)' : 'transparent'};`
    + `background:${active ? 'rgba(34,211,255,0.12)' : 'rgba(255,255,255,0.03)'};color:var(--text-primary,#f0f3fa);`;

  function renderList(filter) {
    const f = (filter || '').trim().toUpperCase();
    const shown = ids.filter(id => !f || id.toUpperCase().includes(f) || photoStructureName(id).toUpperCase().includes(f));
    listEl.innerHTML = shown.length ? shown.map(id =>
      `<button data-id="${id}" style="${btnStyle(id === selected)}">
         <strong style="font-size:13px">${id}</strong>
         <span style="font-size:10px;color:var(--accent-cyan,#22d3ff);font-weight:700">${PHOTOS_DATA[id].length}</span>
         <small style="font-size:10px;color:var(--text-muted,#9aa5c4);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${photoStructureName(id)}</small>
       </button>`).join('') : '<div class="empty-state"><p>No structure matches.</p></div>';
    listEl.querySelectorAll('button[data-id]').forEach(b => { b.onclick = () => selectStruct(b.dataset.id); });
  }

  function selectStruct(id) {
    selected = id;
    renderList(searchEl ? searchEl.value : '');
    const photos = PHOTOS_DATA[id] || [];
    const name = photoStructureName(id);
    galleryEl.innerHTML =
      `<div style="grid-column:1/-1;font-weight:700;font-size:14px;margin-bottom:4px">${id}${name ? ' · ' + name : ''} — ${photos.length} photo(s)</div>`
      + photos.map(src =>
        `<a href="${src}" target="_blank" rel="noopener" style="display:block;aspect-ratio:4/3;border-radius:8px;overflow:hidden;border:1px solid var(--border,rgba(99,130,255,0.2))">
           <img src="${src}" loading="lazy" alt="${id}" style="width:100%;height:100%;object-fit:cover">
         </a>`).join('');
  }

  if (searchEl && !searchEl._photoBound) {
    searchEl.addEventListener('input', () => renderList(searchEl.value));
    searchEl._photoBound = true;
  }
  renderList('');
  if (ids.length) selectStruct(ids[0]);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startBridgeTrafficApp, { once: true });
} else {
  startBridgeTrafficApp();
}
let statisticsChartsInitialized = false;
function initStatisticsTab() {
  if (statisticsChartsInitialized) return;
  const container = document.getElementById('statisticsChartsContainer');
  if (!container) return;

  const bridges = typeof BRIDGES !== 'undefined' ? BRIDGES : [];
  const culverts = typeof MAJOR_CULVERTS !== 'undefined' ? MAJOR_CULVERTS : [];

  const bRegion = {}; bridges.forEach(b => { const r = b.region || 'Unknown'; bRegion[r] = (bRegion[r] || 0) + 1; });
  const cRegion = {}; culverts.forEach(c => { const r = c.region || 'Unknown'; cRegion[r] = (cRegion[r] || 0) + 1; });
  const bClass = {}; bridges.forEach(b => { const c = canonicalRoadClass(b.road_class); bClass[c] = (bClass[c] || 0) + 1; });
  const cClass = {}; culverts.forEach(c => { const c_cls = canonicalRoadClass(c.road_class); cClass[c_cls] = (cClass[c_cls] || 0) + 1; });
  const bStation = {}; bridges.forEach(b => { const s = b.station || 'Unknown'; bStation[s] = (bStation[s] || 0) + 1; });
  const cStation = {}; culverts.forEach(c => { const s = c.station || 'Unknown'; cStation[s] = (cStation[s] || 0) + 1; });
  
  const bCond = {}; bridges.forEach(b => { const c = b.condition_category || 'Unknown'; bCond[c] = (bCond[c] || 0) + 1; });
  const cCond = {}; culverts.forEach(c => { const cond = c.overall_cond || c.condition_category || 'Unknown'; cCond[cond] = (cCond[cond] || 0) + 1; });
  
  const bSuper = {}; bridges.forEach(b => { const c = b.superstructure_cond || 'Unknown'; bSuper[c] = (bSuper[c] || 0) + 1; });
  const cWater = {}; culverts.forEach(c => { const cond = c.waterway_cond || 'Unknown'; cWater[cond] = (cWater[cond] || 0) + 1; });
  
  const bSub = {}; bridges.forEach(b => { const c = b.substructure_cond || 'Unknown'; bSub[c] = (bSub[c] || 0) + 1; });
  const cInlet = {}; culverts.forEach(c => { const cond = c.inlet_outlet_cond || 'Unknown'; cInlet[cond] = (cInlet[cond] || 0) + 1; });
  
  const bDeck = {}; bridges.forEach(b => { const d = bmsCodeDescription('type_deck_material', b.type_deck_material); bDeck[d] = (bDeck[d] || 0) + 1; });
  const cType = {}; culverts.forEach(c => { const t = BMS_CODE_LOOKUPS.type_bridge?.[c.type_culvert] || c.type_culvert || 'Unknown'; cType[t] = (cType[t] || 0) + 1; });
  
  const bCrossing = {}; bridges.forEach(b => { const d = bmsCodeDescription('type_crossing', b.type_crossing); bCrossing[d] = (bCrossing[d] || 0) + 1; });
  const cRoadway = {}; culverts.forEach(c => { const d = c.roadway_cond || 'Unknown'; cRoadway[d] = (cRoadway[d] || 0) + 1; });
  
  const bDecade = {}; bridges.forEach(b => { 
    if(b.year_compl) { 
      const dec = Math.floor(b.year_compl / 10) * 10; 
      bDecade[dec + 's'] = (bDecade[dec + 's'] || 0) + 1; 
    } else {
      bDecade['Unknown'] = (bDecade['Unknown'] || 0) + 1;
    }
  });
  
  const bScour = {}; bridges.forEach(b => { const s = bmsCodeDescription('scour_risk', b.scour_risk); bScour[s] = (bScour[s] || 0) + 1; });
  
  const bLength = { '< 10m':0, '10-20m':0, '20-50m':0, '50-100m':0, '> 100m':0, 'Unknown': 0 };
  bridges.forEach(b => {
    if (!b.bridge_len) bLength['Unknown']++;
    else if (b.bridge_len < 10) bLength['< 10m']++;
    else if (b.bridge_len < 20) bLength['10-20m']++;
    else if (b.bridge_len < 50) bLength['20-50m']++;
    else if (b.bridge_len < 100) bLength['50-100m']++;
    else bLength['> 100m']++;
  });

  
  // New Aggregations
  // Clustered Prep
  const regions = [...new Set([...Object.keys(bRegion), ...Object.keys(cRegion)])];
  const stations = [...new Set([...Object.keys(bStation), ...Object.keys(cStation)])];
  const classes = [...new Set([...Object.keys(bClass), ...Object.keys(cClass)])];
  const conditions = [...new Set([...Object.keys(bCond), ...Object.keys(cCond)])];
  
  // Bridges New Aggs
  const bAbutment = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_abutment', b.type_abutment); bAbutment[v] = (bAbutment[v] || 0) + 1; });
  const bPier = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_piers', b.type_piers); bPier[v] = (bPier[v] || 0) + 1; });
  const bDeckType = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_deck', b.type_deck); bDeckType[v] = (bDeckType[v] || 0) + 1; });
  const bExpansion = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_expansion', b.type_expansion); bExpansion[v] = (bExpansion[v] || 0) + 1; });
  const bTrafficPriority = {}; bridges.forEach(b => { const v = b.priority || 'Unknown'; bTrafficPriority[v] = (bTrafficPriority[v] || 0) + 1; });
  const bSpans = { 'Single Span': 0, 'Multi-Span': 0, 'Unknown': 0 };
  bridges.forEach(b => {
    if (!b.no_of_span) bSpans['Unknown']++;
    else if (b.no_of_span == 1) bSpans['Single Span']++;
    else bSpans['Multi-Span']++;
  });
  const bRivers = {}; bridges.forEach(b => { const r = b.river || 'Unknown'; if (r !== 'Unknown' && r !== 'None') bRivers[r] = (bRivers[r] || 0) + 1; });
  const topRivers = Object.entries(bRivers).sort((a,b) => b[1] - a[1]);
  
  const bAbutCond = {}; bridges.forEach(b => { const v = b.abutment_cond || 'Unknown'; bAbutCond[v] = (bAbutCond[v] || 0) + 1; });
  const bPierCond = {}; bridges.forEach(b => { const v = b.piers_cond || 'Unknown'; bPierCond[v] = (bPierCond[v] || 0) + 1; });
  const bExpCond = {}; bridges.forEach(b => { const v = b.expansion_joints_cond || 'Unknown'; bExpCond[v] = (bExpCond[v] || 0) + 1; });
  const bAct = { 'Routine Maintenance': 0, 'Rehabilitation': 0, 'Replacement': 0, 'Unknown': 0 };
  bridges.forEach(b => {
    const c = b.condition_category || '';
    if (c === 'Good') bAct['Routine Maintenance']++;
    else if (c === 'Fair') bAct['Rehabilitation']++;
    else if (c === 'Poor' || c === 'Critical') bAct['Replacement']++;
    else bAct['Unknown']++;
  });
  const bDecade2 = {}; bridges.forEach(b => {
    const y = parseInt(b.year_built);
    if (y && y > 1900) {
      const d = Math.floor(y/10)*10 + 's';
      bDecade2[d] = (bDecade2[d] || 0) + 1;
    } else {
      bDecade2['Unknown'] = (bDecade2['Unknown'] || 0) + 1;
    }
  });

  // Culverts New Aggs
  const cCells = {}; culverts.forEach(c => { const v = c.cells || c.no_of_span || 1; cCells[v] = (cCells[v] || 0) + 1; });
  const cRoadCond = {}; culverts.forEach(c => { const v = c.roadway_cond || 'Unknown'; cRoadCond[v] = (cRoadCond[v] || 0) + 1; });
  const cDiam = { '< 1m':0, '1-2m':0, '2-4m':0, '> 4m':0, 'Unknown':0 };
  culverts.forEach(c => {
    const v = parseFloat(c.span_diameter);
    if (isNaN(v)) cDiam['Unknown']++;
    else if (v < 1) cDiam['< 1m']++;
    else if (v < 2) cDiam['1-2m']++;
    else if (v < 4) cDiam['2-4m']++;
    else cDiam['> 4m']++;
  });
  const cAct = { 'Routine Maintenance': 0, 'Rehabilitation': 0, 'Replacement': 0, 'Unknown': 0 };
  culverts.forEach(c => {
    const cond = c.condition_category || '';
    if (cond === 'Good') cAct['Routine Maintenance']++;
    else if (cond === 'Fair') cAct['Rehabilitation']++;
    else if (cond === 'Poor' || cond === 'Critical') cAct['Replacement']++;
    else cAct['Unknown']++;
  });
  

  // Additional Bridge Aggregations
  const bBridgeType = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_bridge', b.type_bridge); bBridgeType[v] = (bBridgeType[v] || 0) + 1; });
  const bBearings = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_bearings', b.type_bearings); bBearings[v] = (bBearings[v] || 0) + 1; });
  const bWearing = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_wearing_surface', b.type_wearing_surface); bWearing[v] = (bWearing[v] || 0) + 1; });
  const bParapet = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_para_rail', b.type_para_rail); bParapet[v] = (bParapet[v] || 0) + 1; });
  const bScourProt = {}; bridges.forEach(b => { const v = bmsCodeDescription('scour_protection', b.scour_protection); bScourProt[v] = (bScourProt[v] || 0) + 1; });
  const bSuperLoad = {}; bridges.forEach(b => { const v = bmsYesNoUnknown(b.superload_route); bSuperLoad[v] = (bSuperLoad[v] || 0) + 1; });
  const bWeightRestr = {}; bridges.forEach(b => { const v = bmsYesNoUnknown(b.weight_load_restr); bWeightRestr[v] = (bWeightRestr[v] || 0) + 1; });
  const bApproachSlab = {}; bridges.forEach(b => { const v = bmsYesNoUnknown(b.approach_slab); bApproachSlab[v] = (bApproachSlab[v] || 0) + 1; });
  const bWidth = { '< 4m':0, '4-6m':0, '6-8m':0, '8-10m':0, '10-12m':0, '> 12m':0, 'Unknown':0 };
  bridges.forEach(b => {
    const w = parseFloat(b.bridge_wid);
    if (isNaN(w)) bWidth['Unknown']++;
    else if (w < 4) bWidth['< 4m']++;
    else if (w < 6) bWidth['4-6m']++;
    else if (w < 8) bWidth['6-8m']++;
    else if (w < 10) bWidth['8-10m']++;
    else if (w < 12) bWidth['10-12m']++;
    else bWidth['> 12m']++;
  });
  const bPierCount = {}; bridges.forEach(b => { const v = b.no_of_pier != null ? String(b.no_of_pier) : 'Unknown'; bPierCount[v] = (bPierCount[v] || 0) + 1; });
  const bSpanCount = {}; bridges.forEach(b => { const v = b.no_of_span != null ? String(b.no_of_span) : 'Unknown'; bSpanCount[v] = (bSpanCount[v] || 0) + 1; });
  const bLanes = {}; bridges.forEach(b => { const v = b.no_of_lane != null ? String(b.no_of_lane) : 'Unknown'; bLanes[v] = (bLanes[v] || 0) + 1; });
  const bTrafficFlow = {}; bridges.forEach(b => { const v = bmsCodeDescription('traffic_flow_directions', b.traffic_flow_directions); bTrafficFlow[v] = (bTrafficFlow[v] || 0) + 1; });
  const bApproachesCond = {}; bridges.forEach(b => { const v = b.approaches_rating != null ? String(b.approaches_rating) : 'Unknown'; bApproachesCond[v] = (bApproachesCond[v] || 0) + 1; });
  const bRoadwayCond = {}; bridges.forEach(b => { const v = b.roadway_rating != null ? String(b.roadway_rating) : 'Unknown'; bRoadwayCond[v] = (bRoadwayCond[v] || 0) + 1; });
  const bWaterwayCond = {}; bridges.forEach(b => { const v = b.waterway_rating != null ? String(b.waterway_rating) : 'Unknown'; bWaterwayCond[v] = (bWaterwayCond[v] || 0) + 1; });
  const bSurface = {}; bridges.forEach(b => { const v = b.surface_link || b.surface_ty || 'Unknown'; bSurface[v] = (bSurface[v] || 0) + 1; });
  const bCrossingType = {}; bridges.forEach(b => { const v = bmsCodeDescription('type_crossing', b.type_crossing); bCrossingType[v] = (bCrossingType[v] || 0) + 1; });
  
  // Additional Culvert Aggregations
  const cStructCond = {}; culverts.forEach(c => { const v = c.structure_cond || 'Unknown'; cStructCond[v] = (cStructCond[v] || 0) + 1; });

  // Funnel: Network Condition
  const totalAssets = bridges.length + culverts.length;
  const assessed = bridges.filter(b => b.overall_rating != null).length + culverts.filter(c => c.overall_rating != null || c.overall_cond != null).length;
  const goodAssets = bridges.filter(b => b.condition_category === 'Good').length + culverts.filter(c => c.condition_category === 'Good').length;
  const fairAssets = bridges.filter(b => b.condition_category === 'Fair').length + culverts.filter(c => c.condition_category === 'Fair').length;
  const poorAssets = bridges.filter(b => b.condition_category === 'Poor' || b.condition_category === 'Critical').length + culverts.filter(c => c.condition_category === 'Poor' || c.condition_category === 'Critical').length;
  const funnelLabels = ['Total Assets', 'Assessed', 'Good Condition', 'Fair Condition', 'Poor/Critical'];
  const funnelData = [totalAssets, assessed, goodAssets, fairAssets, poorAssets];
  const funnelColors = [COLORS.cyan, COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.red];

const chartConfigs = [
    // ===== CLUSTERED COLUMN CHARTS =====
    { id: 'stat21', title: 'Bridges vs Culverts by Region', type: 'bar', labels: regions, datasets: [
      { label: 'Bridges', data: regions.map(r => bRegion[r] || 0), backgroundColor: COLORS.cyan, borderRadius: 4 },
      { label: 'Major Culverts', data: regions.map(r => cRegion[r] || 0), backgroundColor: '#f59e0b', borderRadius: 4 }
    ]},
    { id: 'stat22', title: 'Bridges vs Culverts by Station', type: 'bar', indexAxis: 'y', labels: stations, datasets: [
      { label: 'Bridges', data: stations.map(r => bStation[r] || 0), backgroundColor: COLORS.blue, borderRadius: 4 },
      { label: 'Major Culverts', data: stations.map(r => cStation[r] || 0), backgroundColor: '#f59e0b', borderRadius: 4 }
    ]},
    { id: 'stat23', title: 'Bridges vs Culverts by Road Class', type: 'bar', labels: classes, datasets: [
      { label: 'Bridges', data: classes.map(r => bClass[r] || 0), backgroundColor: COLORS.indigo, borderRadius: 4 },
      { label: 'Major Culverts', data: classes.map(r => cClass[r] || 0), backgroundColor: '#f59e0b', borderRadius: 4 }
    ]},
    { id: 'stat24', title: 'Bridges vs Culverts by Overall Condition', type: 'bar', labels: conditions, datasets: [
      { label: 'Bridges', data: conditions.map(r => bCond[r] || 0), backgroundColor: COLORS.violet, borderRadius: 4 },
      { label: 'Major Culverts', data: conditions.map(r => cCond[r] || 0), backgroundColor: '#f59e0b', borderRadius: 4 }
    ]},

    // ===== BRIDGE ANALYTICS =====
    { id: 'stat1', title: 'Bridges by Region', type: 'bar', labels: Object.keys(bRegion), data: Object.values(bRegion), color: COLORS.cyan },
    { id: 'stat3', title: 'Bridges by Road Class', type: 'pie', labels: Object.keys(bClass), data: Object.values(bClass), colors: [COLORS.cyan, COLORS.blue, COLORS.indigo, COLORS.violet, COLORS.purple, COLORS.pink] },
    { id: 'stat5', title: 'Bridges by Maintenance Station', type: 'bar', indexAxis: 'y', labels: Object.keys(bStation), data: Object.values(bStation), color: COLORS.cyan },
    { id: 'stat7', title: 'Bridges by Overall Condition', type: 'bar', labels: Object.keys(bCond), data: Object.values(bCond), color: COLORS.blue },
    { id: 'stat9', title: 'Bridge Superstructure Condition', type: 'bar', labels: Object.keys(bSuper), data: Object.values(bSuper), color: COLORS.indigo },
    { id: 'stat11', title: 'Bridge Substructure Condition', type: 'bar', labels: Object.keys(bSub), data: Object.values(bSub), color: COLORS.violet },
    { id: 'stat13', title: 'Bridges by Deck Material', type: 'pie', labels: Object.keys(bDeck), data: Object.values(bDeck), colors: [COLORS.rose, COLORS.amber, COLORS.cyan, COLORS.emerald, COLORS.blue, COLORS.indigo] },
    { id: 'stat15', title: 'Bridge Crossings by Type', type: 'bar', labels: Object.keys(bCrossing), data: Object.values(bCrossing), color: COLORS.cyan },
    { id: 'stat17', title: 'Bridges Built per Decade', type: 'bar', labels: Object.keys(bDecade2).sort(), data: Object.keys(bDecade2).sort().map(k => bDecade2[k]), color: COLORS.indigo },
    { id: 'stat19', title: 'Bridge Scour Risk Profile', type: 'pie', labels: Object.keys(bScour), data: Object.values(bScour), colors: [COLORS.red, COLORS.orange, COLORS.amber, COLORS.green, COLORS.blue, COLORS.violet] },
    { id: 'stat20', title: 'Bridge Length Distribution', type: 'bar', labels: Object.keys(bLength), data: Object.values(bLength), color: COLORS.cyan },
    { id: 'stat25', title: 'Bridges by Abutment Type', type: 'bar', indexAxis: 'y', labels: Object.keys(bAbutment), data: Object.values(bAbutment), color: COLORS.amber },
    { id: 'stat26', title: 'Bridges by Pier Type', type: 'bar', indexAxis: 'y', labels: Object.keys(bPier), data: Object.values(bPier), color: COLORS.orange },
    { id: 'stat27', title: 'Bridges by Deck Type', type: 'bar', indexAxis: 'y', labels: Object.keys(bDeckType), data: Object.values(bDeckType), color: COLORS.cyan },
    { id: 'stat28', title: 'Bridges by Expansion Joint Type', type: 'pie', labels: Object.keys(bExpansion), data: Object.values(bExpansion), colors: [COLORS.blue, COLORS.indigo, COLORS.violet, COLORS.purple, COLORS.pink, COLORS.rose] },
    { id: 'stat29', title: 'Bridge Traffic Priority Levels', type: 'doughnut', labels: Object.keys(bTrafficPriority), data: Object.values(bTrafficPriority), colors: [COLORS.red, COLORS.orange, COLORS.amber, COLORS.emerald, COLORS.blue, COLORS.violet] },
    { id: 'stat30', title: 'Bridge Span Configuration', type: 'pie', labels: Object.keys(bSpans), data: Object.values(bSpans), colors: [COLORS.cyan, COLORS.indigo, COLORS.slate] },
    { id: 'stat31', title: 'Top 15 Rivers by Bridge Count', type: 'bar', indexAxis: 'y', labels: topRivers.map(x=>x[0]), data: topRivers.map(x=>x[1]), color: COLORS.blue },
    { id: 'stat32', title: 'Bridge Suggested Interventions', type: 'pie', labels: Object.keys(bAct), data: Object.values(bAct), colors: [COLORS.emerald, COLORS.amber, COLORS.red, COLORS.slate] },
    { id: 'stat34', title: 'Bridges by Abutment Condition', type: 'bar', labels: Object.keys(bAbutCond), data: Object.values(bAbutCond), color: COLORS.violet },
    { id: 'stat35', title: 'Bridges by Pier Condition', type: 'bar', labels: Object.keys(bPierCond), data: Object.values(bPierCond), color: COLORS.fuchsia },
    { id: 'stat36', title: 'Bridges by Expansion Joint Condition', type: 'bar', labels: Object.keys(bExpCond), data: Object.values(bExpCond), color: COLORS.rose },

    // ===== CULVERT ANALYTICS =====
    { id: 'stat2', title: 'Culverts by Region', type: 'bar', labels: Object.keys(cRegion), data: Object.values(cRegion), color: '#f59e0b' },
    { id: 'stat4', title: 'Culverts by Road Class', type: 'pie', labels: Object.keys(cClass), data: Object.values(cClass), colors: [COLORS.emerald, COLORS.teal, COLORS.green, COLORS.lime, COLORS.amber, COLORS.orange] },
    { id: 'stat6', title: 'Culverts by Maintenance Station', type: 'bar', indexAxis: 'y', labels: Object.keys(cStation), data: Object.values(cStation), color: '#f59e0b' },
    { id: 'stat8', title: 'Culverts by Overall Condition', type: 'bar', labels: Object.keys(cCond), data: Object.values(cCond), color: COLORS.teal },
    { id: 'stat10', title: 'Culvert Waterway Condition', type: 'bar', labels: Object.keys(cWater), data: Object.values(cWater), color: COLORS.green },
    { id: 'stat12', title: 'Culvert Inlet/Outlet Condition', type: 'bar', labels: Object.keys(cInlet), data: Object.values(cInlet), color: COLORS.lime },
    { id: 'stat14', title: 'Culverts by Structure Type', type: 'pie', labels: Object.keys(cType), data: Object.values(cType), colors: [COLORS.teal, COLORS.green, COLORS.lime, COLORS.amber, COLORS.orange, COLORS.red] },
    { id: 'stat16', title: 'Culverts by Roadway Condition', type: 'bar', labels: Object.keys(cRoadway), data: Object.values(cRoadway), color: '#f59e0b' },
    { id: 'stat33', title: 'Culvert Suggested Interventions', type: 'pie', labels: Object.keys(cAct), data: Object.values(cAct), colors: [COLORS.emerald, COLORS.amber, COLORS.red, COLORS.slate] },
    { id: 'stat37', title: 'Culverts by Number of Cells/Pipes', type: 'bar', labels: Object.keys(cCells), data: Object.values(cCells), color: COLORS.teal },
    { id: 'stat38', title: 'Culvert Roadway Condition Rating', type: 'pie', labels: Object.keys(cRoadCond), data: Object.values(cRoadCond), colors: [COLORS.green, COLORS.lime, COLORS.amber, COLORS.red, COLORS.violet] },
    { id: 'stat39', title: 'Culvert Span/Diameter Distribution', type: 'bar', labels: Object.keys(cDiam), data: Object.values(cDiam), color: '#f59e0b' },

    // ===== NETWORK-WIDE =====
    { id: 'stat18', title: 'Total Structures by Asset Type', type: 'doughnut', labels: ['Bridges', 'Major Culverts'], data: [bridges.length, culverts.length], colors: [COLORS.cyan, '#f59e0b'] },
    { id: 'stat40', title: 'Total Bridge Length by Region', type: 'bar', labels: regions, datasets: [
      { label: 'Total Bridge Length (m)', data: regions.map(r => bridges.filter(b=>b.region===r).reduce((s, b)=>s+(Number(b.bridge_len)||0), 0)), backgroundColor: COLORS.indigo, borderRadius: 4 }
    ]},

    // ===== 20 ADDITIONAL NEW CHARTS =====
    { id: 'stat41', title: 'Bridge Type Distribution', type: 'pie', labels: Object.keys(bBridgeType), data: Object.values(bBridgeType), colors: PALETTE.slice(0, Object.keys(bBridgeType).length) },
    { id: 'stat42', title: 'Bridge Bearing Type', type: 'bar', indexAxis: 'y', labels: Object.keys(bBearings), data: Object.values(bBearings), color: COLORS.sky },
    { id: 'stat43', title: 'Bridge Wearing Surface Type', type: 'pie', labels: Object.keys(bWearing), data: Object.values(bWearing), colors: PALETTE.slice(0, Object.keys(bWearing).length) },
    { id: 'stat44', title: 'Bridge Parapet/Railing Type', type: 'bar', indexAxis: 'y', labels: Object.keys(bParapet), data: Object.values(bParapet), color: COLORS.purple },
    { id: 'stat45', title: 'Bridge Scour Protection Type', type: 'pie', labels: Object.keys(bScourProt), data: Object.values(bScourProt), colors: PALETTE.slice(0, Object.keys(bScourProt).length) },
    { id: 'stat46', title: 'Super Load Route Bridges', type: 'doughnut', labels: Object.keys(bSuperLoad), data: Object.values(bSuperLoad), colors: [COLORS.cyan, COLORS.red, COLORS.slate] },
    { id: 'stat47', title: 'Weight/Load Restricted Bridges', type: 'doughnut', labels: Object.keys(bWeightRestr), data: Object.values(bWeightRestr), colors: [COLORS.emerald, COLORS.red, COLORS.slate] },
    { id: 'stat48', title: 'Approach Slab Availability', type: 'doughnut', labels: Object.keys(bApproachSlab), data: Object.values(bApproachSlab), colors: [COLORS.blue, COLORS.amber, COLORS.slate] },
    { id: 'stat49', title: 'Bridge Width Distribution', type: 'bar', labels: Object.keys(bWidth), data: Object.values(bWidth), color: COLORS.teal },
    { id: 'stat50', title: 'Number of Piers Distribution', type: 'bar', labels: Object.keys(bPierCount).sort((a,b)=>Number(a)-Number(b)), data: Object.keys(bPierCount).sort((a,b)=>Number(a)-Number(b)).map(k=>bPierCount[k]), color: COLORS.indigo },
    { id: 'stat51', title: 'Number of Spans Distribution', type: 'bar', labels: Object.keys(bSpanCount).sort((a,b)=>Number(a)-Number(b)), data: Object.keys(bSpanCount).sort((a,b)=>Number(a)-Number(b)).map(k=>bSpanCount[k]), color: COLORS.violet },
    { id: 'stat52', title: 'Bridge Number of Lanes', type: 'bar', labels: Object.keys(bLanes).sort(), data: Object.keys(bLanes).sort().map(k=>bLanes[k]), color: COLORS.cyan },
    { id: 'stat53', title: 'Bridge Traffic Flow Directions', type: 'pie', labels: Object.keys(bTrafficFlow), data: Object.values(bTrafficFlow), colors: PALETTE.slice(0, Object.keys(bTrafficFlow).length) },
    { id: 'stat54', title: 'Bridge Approaches Condition', type: 'bar', labels: Object.keys(bApproachesCond), data: Object.values(bApproachesCond), color: COLORS.amber },
    { id: 'stat55', title: 'Bridge Roadway Rating Distribution', type: 'bar', labels: Object.keys(bRoadwayCond), data: Object.values(bRoadwayCond), color: COLORS.orange },
    { id: 'stat56', title: 'Bridge Waterway Rating Distribution', type: 'bar', labels: Object.keys(bWaterwayCond), data: Object.values(bWaterwayCond), color: COLORS.blue },
    { id: 'stat57', title: 'Bridge Surface Type on Link', type: 'pie', labels: Object.keys(bSurface), data: Object.values(bSurface), colors: PALETTE.slice(0, Object.keys(bSurface).length) },
    { id: 'stat58', title: 'Bridges by Crossing Type', type: 'pie', labels: Object.keys(bCrossingType), data: Object.values(bCrossingType), colors: PALETTE.slice(0, Object.keys(bCrossingType).length) },
    { id: 'stat59', title: 'Culvert Structure Condition', type: 'bar', labels: Object.keys(cStructCond), data: Object.values(cStructCond), color: COLORS.teal },
    { id: 'stat60', title: 'Network Condition Funnel', type: 'bar', labels: funnelLabels, data: funnelData, colors: funnelColors },
  ];

  let html = '';
  chartConfigs.forEach(c => {
    html += `
      <div class="card" style="box-shadow:none; border:1px solid rgba(255,255,255,0.05); min-height: 250px;">
        <div class="card-title">${htmlEscape(c.title)}</div>
        <div class="chart-container" style="position: relative; height: 220px;"><canvas id="${c.id}"></canvas></div>
      </div>
    `;
  });
  
  const goodCondition = bridges.filter(b => b.condition_category === 'Good').length + culverts.filter(c => c.condition_category === 'Good').length;
  const poorCondition = bridges.filter(b => b.condition_category === 'Poor' || b.condition_category === 'Critical').length + culverts.filter(c => c.condition_category === 'Poor' || c.condition_category === 'Critical').length;
  const totalLength = bridges.reduce((sum, b) => sum + (Number(b.bridge_len) || 0), 0);
  
  const summaryCardsHtml = `
    <div style="grid-column: 1 / -1; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
      <div class="card" style="border-left: 4px solid #00e5ff; padding: 16px;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin-bottom: 8px;">Total Assets</div>
        <div style="font-size: 28px; font-weight: 700; color: #fff;">${bridges.length + culverts.length}</div>
        <div style="font-size: 12px; color: #64748b; margin-top: 4px;">${bridges.length} Bridges, ${culverts.length} Culverts</div>
      </div>
      <div class="card" style="border-left: 4px solid #10b981; padding: 16px;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin-bottom: 8px;">Assets in Good Condition</div>
        <div style="font-size: 28px; font-weight: 700; color: #fff;">${goodCondition}</div>
        <div style="font-size: 12px; color: #10b981; margin-top: 4px;">${Math.round(goodCondition / (bridges.length + culverts.length) * 100)}% of network</div>
      </div>
      <div class="card" style="border-left: 4px solid #ef4444; padding: 16px;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin-bottom: 8px;">Critical/Poor Assets</div>
        <div style="font-size: 28px; font-weight: 700; color: #fff;">${poorCondition}</div>
        <div style="font-size: 12px; color: #ef4444; margin-top: 4px;">Require immediate intervention</div>
      </div>
      <div class="card" style="border-left: 4px solid #a855f7; padding: 16px;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; margin-bottom: 8px;">Total Bridge Span Covered</div>
        <div style="font-size: 28px; font-weight: 700; color: #fff;">${Math.round(totalLength).toLocaleString()} m</div>
        <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Sum of all recorded lengths</div>
      </div>
    </div>
  `;
  html = summaryCardsHtml + html;
container.innerHTML = html;

  chartConfigs.forEach(c => {
    const ctx = document.getElementById(c.id).getContext('2d');
    const isPie = c.type === 'pie' || c.type === 'doughnut';
    const config = {
      type: c.type,
      data: {
        labels: c.labels,
        datasets: c.datasets ? c.datasets : [{
          label: 'Count',
          data: c.data,
          backgroundColor: c.colors || c.color,
          borderWidth: 0,
          borderRadius: isPie ? 0 : 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: c.indexAxis || 'x',
        plugins: {
          legend: { display: isPie || !!c.datasets, position: isPie ? 'right' : (c.datasets ? 'top' : 'right'), labels: { color: 'rgba(255,255,255,0.7)', font: { size: 10 } } },
          tooltip: {
            backgroundColor: 'rgba(15,23,42,0.9)',
            titleColor: '#fff',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 10
          }
        },
        scales: isPie ? {} : {
          x: { ticks: { color: 'rgba(255,255,255,0.5)', autoSkip: false, maxRotation: 45, minRotation: 45 }, grid: { display: false } },
          y: { ticks: { color: 'rgba(255,255,255,0.5)' }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
        }
      }
    };
    new Chart(ctx, config);
  });

  statisticsChartsInitialized = true;
}

// ==========================================
// PHOTO ALBUM LOGIC
// ==========================================

let galleryStructures = [];
let currentGalleryFilter = { search: '', type: 'all', condition: 'all' };
let currentLightboxIndex = 0;
let currentLightboxPhotos = [];
let currentLightboxPhotoIndex = 0;
let filteredGallery = [];

function initPhotoGallery() {
    galleryStructures = [];
    
    // Process Bridges
    if (typeof BRIDGES !== 'undefined') {
        BRIDGES.forEach(b => {
            const id = String(b.bridge_no || b._id || '').trim();
            const photos = PHOTOS_DATA[id] || [];
            galleryStructures.push({
                type: 'bridge',
                id: id,
                name: b.bridge_nam || 'Unknown Bridge',
                district: b.district || b.region || 'Unknown',
                road: b.link_name || b.road_no || 'Unknown Road',
                conditionNum: b.overall_rating || b.condition_rating || b.overall_cond || null,
                conditionCat: b.condition_category || 'Unknown',
                span: b.bridge_len || b.span_diameter || '-',
                material: bmsCodeDescription('type_material', b.type_material) || '-',
                year: b.year_built || '-',
                adt: b.aadt_rebuilt_2026 || b.aadt_2025 || '-',
                notes: b.overall_rating_notes || b.general_notes || '-',
                photos: photos,
                chainage: b.km || b.chainage_validated_km || '-',
                lat: b.map_y || b.y_new,
                lon: b.map_x || b.x_new,
                link_id: b.link_no
            });
        });
    }

    // Process Culverts
    if (typeof MAJOR_CULVERTS !== 'undefined') {
        MAJOR_CULVERTS.forEach(c => {
            const id = String(c.culvert_no || c.bridge_no || c._id || '').trim();
            const photos = PHOTOS_DATA[id] || [];
            galleryStructures.push({
                type: 'culvert',
                id: id,
                name: c.bridge_nam || c.culvert_nam || 'Major Culvert',
                district: c.district || c.region || 'Unknown',
                road: c.link_name || c.road || 'Unknown Road',
                conditionNum: c.overall_cond || c.overall_rating || c.condition_rating || null,
                conditionCat: c.condition_category || 'Unknown',
                span: c.span_diameter || c.diameter || '-',
                material: c.type_material ? bmsCodeDescription('type_material', c.type_material) : '-',
                year: c.year_built || '-',
                adt: c.aadt_rebuilt_2026 || c.aadt_2025 || '-',
                notes: c.overall_cond_notes || c.general_notes || '-',
                photos: photos,
                chainage: c.km || c.chainage_validated_km || '-',
                lat: c.map_y || c.y_new,
                lon: c.map_x || c.x_new,
                link_id: c.link_no
            });
        });
    }

    // Bind UI
    document.getElementById('photoGallerySearch')?.addEventListener('input', e => {
        currentGalleryFilter.search = e.target.value.toLowerCase();
        renderPhotoGallery();
    });
    document.getElementById('photoFilterType')?.addEventListener('change', e => {
        currentGalleryFilter.type = e.target.value;
        renderPhotoGallery();
    });
    document.getElementById('photoFilterCondition')?.addEventListener('change', e => {
        currentGalleryFilter.condition = e.target.value;
        renderPhotoGallery();
    });

    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev')?.addEventListener('click', () => changeLightboxPhoto(-1));
    document.getElementById('lightboxNext')?.addEventListener('click', () => changeLightboxPhoto(1));

    document.getElementById('btnLightboxMap')?.addEventListener('click', () => {
        closeLightbox();
        const tab = document.querySelector('[data-tab="spatial-map"]');
        if(tab) tab.click();
        const s = filteredGallery[currentLightboxIndex];
        if (s && s.lon && s.lat) {
            mapOffsetX = canvas.width / 2 - getProjection(s.lon, s.lat, canvas.width, canvas.height).x;
            mapOffsetY = canvas.height / 2 - getProjection(s.lon, s.lat, canvas.width, canvas.height).y;
            drawMap();
        }
    });

    renderPhotoGallery();
}

function getConditionColorClass(cat) {
    if (!cat) return 'unknown';
    const c = cat.toLowerCase();
    if (c.includes('good') || c.includes('excellent')) return 'good';
    if (c.includes('fair')) return 'fair';
    if (c.includes('poor') || c.includes('critical') || c.includes('bad')) return 'critical';
    return 'unknown';
}

function renderPhotoGallery() {
    filteredGallery = galleryStructures.filter(s => {
        if (currentGalleryFilter.type !== 'all' && s.type !== currentGalleryFilter.type) return false;
        if (currentGalleryFilter.condition !== 'all') {
            const cClass = getConditionColorClass(s.conditionCat);
            if (cClass !== currentGalleryFilter.condition) return false;
        }
        if (currentGalleryFilter.search) {
            const q = currentGalleryFilter.search;
            return (s.id.toLowerCase().includes(q) || s.road.toLowerCase().includes(q) || s.district.toLowerCase().includes(q));
        }
        return true;
    });

    // Update Heatmap
    const heatmap = document.getElementById('photoHeatmap');
    if (heatmap) {
        const counts = { good: 0, fair: 0, critical: 0, unknown: 0 };
        filteredGallery.forEach(s => counts[getConditionColorClass(s.conditionCat)]++);
        const total = filteredGallery.length || 1;
        heatmap.innerHTML = `
            <div style="width: ${counts.good/total*100}%; background: #10b981;"></div>
            <div style="width: ${counts.fair/total*100}%; background: #f59e0b;"></div>
            <div style="width: ${counts.critical/total*100}%; background: #ef4444;"></div>
            <div style="width: ${counts.unknown/total*100}%; background: #64748b;"></div>
        `;
    }

    const grid = document.getElementById('photoMainGrid');
    if (!grid) return;

    if (filteredGallery.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>No structures match your filters.</p></div>';
        return;
    }

    // Lazy rendering for performance - slice first 100
    const displayList = filteredGallery.slice(0, 200);

    grid.innerHTML = displayList.map((s, idx) => {
        const cClass = getConditionColorClass(s.conditionCat);
        const thumb = s.photos.length > 0 ? s.photos[0] : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%231e293b"><rect width="100%" height="100%"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23475569">No Photo Available</text></svg>';
        
        return `
            <div class="photo-card" data-condition="${cClass}" onclick="openLightbox(${idx})">
                <div class="photo-card-img-container">
                    <img src="${thumb}" loading="lazy" alt="Structure ${s.id}">
                </div>
                <div class="photo-card-body">
                    <div class="photo-card-title">
                        ${s.id}
                        <div class="condition-ring ring-${cClass}" title="${s.conditionCat}"></div>
                    </div>
                    <div class="photo-card-subtitle">${s.road} &bull; ${s.district}</div>
                    
                    <div class="photo-card-hover-details">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                            <span>Span: ${s.span}m</span>
                            <span>Built: ${s.year}</span>
                        </div>
                        <div>Material: ${s.material}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function openLightbox(index) {
    if (!filteredGallery[index]) return;
    currentLightboxIndex = index;
    const s = filteredGallery[index];
    currentLightboxPhotos = s.photos.length > 0 ? s.photos : ['data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="%230f172a"><rect width="100%" height="100%"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%23475569">No Photo Available</text></svg>'];
    currentLightboxPhotoIndex = 0;
    
    // Update metadata
    document.getElementById('lightboxTitle').innerText = s.id + (s.name !== 'Unknown Bridge' && s.name !== 'Major Culvert' ? ' - ' + s.name : '');
    document.getElementById('lightboxSubtitle').innerText = `${s.road} • ${s.district} • CH ${s.chainage} km`;
    document.getElementById('lightboxSpan').innerText = s.span ? s.span + ' m' : '-';
    document.getElementById('lightboxMaterial').innerText = s.material || '-';
    document.getElementById('lightboxYear').innerText = s.year || '-';
    document.getElementById('lightboxADT').innerText = s.adt || '-';
    document.getElementById('lightboxNotes').innerText = s.notes || '-';
    
    const cClass = getConditionColorClass(s.conditionCat);
    const ring = document.getElementById('lightboxConditionRing');
    ring.className = '';
    ring.style.borderColor = cClass === 'good' ? '#10b981' : cClass === 'fair' ? '#f59e0b' : cClass === 'critical' ? '#ef4444' : '#64748b';
    ring.innerText = s.conditionNum || '-';

    updateLightboxImage();
    
    document.getElementById('photoLightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('photoLightbox').style.display = 'none';
}

function changeLightboxPhoto(dir) {
    currentLightboxPhotoIndex += dir;
    if (currentLightboxPhotoIndex < 0) currentLightboxPhotoIndex = currentLightboxPhotos.length - 1;
    if (currentLightboxPhotoIndex >= currentLightboxPhotos.length) currentLightboxPhotoIndex = 0;
    updateLightboxImage();
}

function updateLightboxImage() {
    document.getElementById('lightboxImage').src = currentLightboxPhotos[currentLightboxPhotoIndex];
    
    const filmstrip = document.getElementById('lightboxFilmstrip');
    if (currentLightboxPhotos.length > 1) {
        filmstrip.style.display = 'flex';
        filmstrip.innerHTML = currentLightboxPhotos.map((p, i) => `
            <img src="${p}" class="filmstrip-thumb ${i === currentLightboxPhotoIndex ? 'active' : ''}" onclick="currentLightboxPhotoIndex = ${i}; updateLightboxImage();">
        `).join('');
    } else {
        filmstrip.style.display = 'none';
    }
}

// Hook into the initialization
const oldAppJsInit = window.onload;
window.onload = function() {
    if (oldAppJsInit) oldAppJsInit();
    setTimeout(initPhotoGallery, 1500); // Wait for data to load
};

