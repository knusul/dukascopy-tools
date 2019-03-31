const symbols = {
  AUSUSD: {
    name: 'A.US/USD',
    description: 'AGILENT TECHNOLOGIES INC',
    minStartDate: '2017-05-25'
  },
  AAUSUSD: {
    name: 'AA.US/USD',
    description: 'ALCOA INC',
    minStartDate: '2018-01-30'
  },
  AABAUSUSD: {
    name: 'AABA.US/USD',
    description: 'ALTABA INC',
    minStartDate: '2017-11-02'
  },
  AALGBGBX: {
    name: 'AAL.GB/GBX',
    description: 'Anglo American PLC',
    minStartDate: '2016-08-01'
  },
  AALUSUSD: {
    name: 'AAL.US/USD',
    description: 'AMERICAN AIRLINES GROUP INC',
    minStartDate: '2017-11-02'
  },
  AAPLUSUSD: {
    name: 'AAPL.US/USD',
    description: 'APPLE INC',
    minStartDate: '2017-01-17'
  },
  ABBSESEK: {
    name: 'ABB.SE/SEK',
    description: 'ABB Ltd',
    minStartDate: '2016-11-14'
  },
  ABCUSUSD: {
    name: 'ABC.US/USD',
    description: 'AMERISOURCEBERGEN CORP',
    minStartDate: '2018-01-30'
  },
  ABEVUSUSD: {
    name: 'ABEV.US/USD',
    description: 'Ambev S.A.',
    minStartDate: '2017-01-26'
  },
  ABFGBGBX: {
    name: 'ABF.GB/GBX',
    description: 'Associated British Foods PLC',
    minStartDate: '2016-09-06'
  },
  ABIBEEUR: {
    name: 'ABI.BE/EUR',
    description: 'Anheuser-Busch InBev NV',
    minStartDate: '2016-11-14'
  },
  ABTUSUSD: {
    name: 'ABT.US/USD',
    description: 'ABBOTT LABORATORIES',
    minStartDate: '2017-05-11'
  },
  ACFREUR: {
    name: 'AC.FR/EUR',
    description: 'Accor SA',
    minStartDate: '2016-08-11'
  },
  ACAFREUR: {
    name: 'ACA.FR/EUR',
    description: 'Credit Agricole SA',
    minStartDate: '2016-09-30'
  },
  ACSESEUR: {
    name: 'ACS.ES/EUR',
    description: 'ACS Actividades de Construccion y Servicios SA',
    minStartDate: '2016-11-14'
  },
  ACXESEUR: {
    name: 'ACX.ES/EUR',
    description: 'Acerinox SA',
    minStartDate: '2016-11-14'
  },
  ADBEUSUSD: {
    name: 'ADBE.US/USD',
    description: 'ADOBE SYSTEMS INC',
    minStartDate: '2017-05-11'
  },
  ADIUSUSD: {
    name: 'ADI.US/USD',
    description: 'ANALOG DEVICES INC',
    minStartDate: '2018-01-30'
  },
  ADMGBGBX: {
    name: 'ADM.GB/GBX',
    description: 'Admiral Group PLC',
    minStartDate: '2016-09-06'
  },
  ADPUSUSD: {
    name: 'ADP.US/USD',
    description: 'AUTOMATIC DATA PROCESSING',
    minStartDate: '2017-11-02'
  },
  ADSDEEUR: {
    name: 'ADS.DE/EUR',
    description: 'Adidas AG',
    minStartDate: '2015-03-13'
  },
  ADSKUSUSD: {
    name: 'ADSK.US/USD',
    description: 'AUTODESK INC',
    minStartDate: '2018-01-30'
  },
  AENAESEUR: {
    name: 'AENA.ES/EUR',
    description: 'Aena SA',
    minStartDate: '2016-11-14'
  },
  AETUSUSD: {
    name: 'AET.US/USD',
    description: 'AETNA INC',
    minStartDate: '2017-05-11'
  },
  AFFREUR: {
    name: 'AF.FR/EUR',
    description: 'Air France-KLM',
    minStartDate: '2016-09-27'
  },
  AGKGBGBX: {
    name: 'AGK.GB/GBX',
    description: 'Aggreko PLC',
    minStartDate: '2016-09-06'
  },
  AGNNLEUR: {
    name: 'AGN.NL/EUR',
    description: 'Aegon NV',
    minStartDate: '2016-11-14'
  },
  AGSBEEUR: {
    name: 'AGS.BE/EUR',
    description: 'Ageas',
    minStartDate: '2016-11-14'
  },
  AHNLEUR: {
    name: 'AH.NL/EUR',
    description: 'Koninklijke Ahold Delhaize NV',
    minStartDate: '2016-11-14'
  },
  AHTGBGBX: {
    name: 'AHT.GB/GBX',
    description: 'Ashtead Group PLC',
    minStartDate: '2016-09-06'
  },
  AIFREUR: {
    name: 'AI.FR/EUR',
    description: 'Air Liquide SA',
    minStartDate: '2016-09-30'
  },
  AIGUSUSD: {
    name: 'AIG.US/USD',
    description: 'AMERICAN INTERNATIONAL GROUP',
    minStartDate: '2017-05-11'
  },
  AIRFREUR: {
    name: 'AIR.FR/EUR',
    description: 'Airbus Group SE',
    minStartDate: '2016-09-30'
  },
  AKZANLEUR: {
    name: 'AKZA.NL/EUR',
    description: 'Akzo Nobel NV',
    minStartDate: '2016-11-14'
  },
  ALFASESEK: {
    name: 'ALFA.SE/SEK',
    description: 'Alfa Laval AB',
    minStartDate: '2016-11-07'
  },
  ALLUSUSD: {
    name: 'ALL.US/USD',
    description: 'ALLSTATE CORP',
    minStartDate: '2018-01-31'
  },
  ALOFREUR: {
    name: 'ALO.FR/EUR',
    description: 'Alstom SA',
    minStartDate: '2016-09-27'
  },
  ALVDEEUR: {
    name: 'ALV.DE/EUR',
    description: 'Allianz SE',
    minStartDate: '2015-04-09'
  },
  ALXNUSUSD: {
    name: 'ALXN.US/USD',
    description: 'ALEXION PHARMACEUTICALS INC',
    minStartDate: '2017-01-19'
  },
  AMATUSUSD: {
    name: 'AMAT.US/USD',
    description: 'APPLIED MATERIALS INC',
    minStartDate: '2017-05-11'
  },
  AMDUSUSD: {
    name: 'AMD.US/USD',
    description: 'ADVANCED MICRO DEVICES',
    minStartDate: '2017-11-02'
  },
  AMGNUSUSD: {
    name: 'AMGN.US/USD',
    description: 'AMGEN INC',
    minStartDate: '2017-01-19'
  },
  AMSESEUR: {
    name: 'AMS.ES/EUR',
    description: 'Amadeus IT Holding SA',
    minStartDate: '2016-11-14'
  },
  AMTUSUSD: {
    name: 'AMT.US/USD',
    description: 'AMERICAN TOWER CORP',
    minStartDate: '2017-11-02'
  },
  AMZNUSUSD: {
    name: 'AMZN.US/USD',
    description: 'AMAZON.COM INC',
    minStartDate: '2017-01-19'
  },
  ANTMUSUSD: {
    name: 'ANTM.US/USD',
    description: 'ANTHEM INC',
    minStartDate: '2017-11-02'
  },
  ANTOGBGBX: {
    name: 'ANTO.GB/GBX',
    description: 'Antofagasta PLC',
    minStartDate: '2016-09-06'
  },
  APAUSUSD: {
    name: 'APA.US/USD',
    description: 'APACHE CORP',
    minStartDate: '2018-01-31'
  },
  APCUSUSD: {
    name: 'APC.US/USD',
    description: 'ANADARKO PETROLEUM CORP',
    minStartDate: '2017-11-02'
  },
  APDUSUSD: {
    name: 'APD.US/USD',
    description: 'AIR PRODUCTS &amp; CHEMICALS INC',
    minStartDate: '2017-11-02'
  },
  ASMLNLEUR: {
    name: 'ASML.NL/EUR',
    description: 'ASML Holding NV',
    minStartDate: '2016-11-14'
  },
  ATCOASESEK: {
    name: 'ATCOA.SE/SEK',
    description: 'Atlas Copco AB',
    minStartDate: '2016-11-14'
  },
  ATVIUSUSD: {
    name: 'ATVI.US/USD',
    description: 'ACTIVISION BLIZZARD INC',
    minStartDate: '2017-05-11'
  },
  AUDCAD: {
    name: 'AUD/CAD',
    description: 'Australian Dollar vs Canadian Dollar',
    minStartDate: '2005-12-26'
  },
  AUDCHF: {
    name: 'AUD/CHF',
    description: 'Australian Dollar vs Swiss Franc',
    minStartDate: '2005-12-26'
  },
  AUDJPY: {
    name: 'AUD/JPY',
    description: 'Australian Dollar vs Japanese Yen',
    minStartDate: '2003-11-29'
  },
  AUDNZD: {
    name: 'AUD/NZD',
    description: 'Australian Dollar vs New Zealand Dollar',
    minStartDate: '2006-12-08'
  },
  AUDSGD: {
    name: 'AUD/SGD',
    description: 'Australian Dollar vs Singapore Dollar',
    minStartDate: '2007-03-13'
  },
  AUDUSD: {
    name: 'AUD/USD',
    description: 'Australian Dollar vs US Dollar',
    minStartDate: '2003-08-03'
  },
  AVGBGBX: {
    name: 'AV.GB/GBX',
    description: 'Aviva PLC',
    minStartDate: '2016-09-06'
  },
  AVBUSUSD: {
    name: 'AVB.US/USD',
    description: 'AVALONBAY COMMUNITIES INC',
    minStartDate: '2018-01-31'
  },
  AVGOUSUSD: {
    name: 'AVGO.US/USD',
    description: 'Broadcom Limited',
    minStartDate: '2017-01-19'
  },
  AXPUSUSD: {
    name: 'AXP.US/USD',
    description: 'AMERICAN EXPRESS CO',
    minStartDate: '2017-11-02'
  },
  AZNGBGBX: {
    name: 'AZN.GB/GBX',
    description: 'AstraZeneca PLC',
    minStartDate: '2016-09-06'
  },
  AZNUSUSD: {
    name: 'AZN.US/USD',
    description: 'AstraZeneca PLC',
    minStartDate: '2017-01-26'
  },
  AZOUSUSD: {
    name: 'AZO.US/USD',
    description: 'AUTOZONE INC',
    minStartDate: '2017-11-02'
  },
  BAGBGBX: {
    name: 'BA.GB/GBX',
    description: 'BAE Systems PLC',
    minStartDate: '2016-09-06'
  },
  BAUSUSD: {
    name: 'BA.US/USD',
    description: 'Boeing Co',
    minStartDate: '2017-01-19'
  },
  BABGBGBX: {
    name: 'BAB.GB/GBX',
    description: 'Babcock International Group PLC',
    minStartDate: '2016-09-06'
  },
  BABAUSUSD: {
    name: 'BABA.US/USD',
    description: 'ALIBABA GROUP HOLDING-SP ADR',
    minStartDate: '2017-01-19'
  },
  BACUSUSD: {
    name: 'BAC.US/USD',
    description: 'BANK OF AMERICA CORP',
    minStartDate: '2017-01-23'
  },
  BARCGBGBX: {
    name: 'BARC.GB/GBX',
    description: 'Barclays PLC',
    minStartDate: '2016-09-06'
  },
  BASDEEUR: {
    name: 'BAS.DE/EUR',
    description: 'BASF SE',
    minStartDate: '2015-04-22'
  },
  BATSGBGBX: {
    name: 'BATS.GB/GBX',
    description: 'British American Tobacco PLC',
    minStartDate: '2016-09-06'
  },
  BAYNDEEUR: {
    name: 'BAYN.DE/EUR',
    description: 'Bayer AG',
    minStartDate: '2015-03-20'
  },
  BBDUSUSD: {
    name: 'BBD.US/USD',
    description: 'Banco Bradesco S.A.',
    minStartDate: '2017-01-26'
  },
  BBTUSUSD: {
    name: 'BBT.US/USD',
    description: 'BB&amp;T CORP',
    minStartDate: '2018-01-31'
  },
  BBVAESEUR: {
    name: 'BBVA.ES/EUR',
    description: 'Banco Bilbao Vizcaya Argentaria SA',
    minStartDate: '2016-11-14'
  },
  BBYUSUSD: {
    name: 'BBY.US/USD',
    description: 'BEST BUY CO INC',
    minStartDate: '2017-05-11'
  },
  BDXUSUSD: {
    name: 'BDX.US/USD',
    description: 'BECTON DICKINSON AND CO',
    minStartDate: '2018-01-31'
  },
  BEIDEEUR: {
    name: 'BEI.DE/EUR',
    description: 'Beiersdorf AG',
    minStartDate: '2015-04-08'
  },
  BELGBEEUR: {
    name: 'BELG.BE/EUR',
    description: 'Proximus',
    minStartDate: '2016-11-07'
  },
  BIDUUSUSD: {
    name: 'BIDU.US/USD',
    description: 'BAIDU INC',
    minStartDate: '2017-11-02'
  },
  BIIBUSUSD: {
    name: 'BIIB.US/USD',
    description: 'BIOGEN INC',
    minStartDate: '2017-05-11'
  },
  BKUSUSD: {
    name: 'BK.US/USD',
    description: 'BANK OF NEW YORK MELLON CORP',
    minStartDate: '2017-05-11'
  },
  BLNDGBGBX: {
    name: 'BLND.GB/GBX',
    description: 'British Land Co PLC',
    minStartDate: '2016-09-06'
  },
  BLTGBGBX: {
    name: 'BLT.GB/GBX',
    description: 'BHP Billiton PLC',
    minStartDate: '2016-09-06'
  },
  BMWDEEUR: {
    name: 'BMW.DE/EUR',
    description: 'Bayerische Motoren Werke AG',
    minStartDate: '2015-03-24'
  },
  BMYUSUSD: {
    name: 'BMY.US/USD',
    description: 'BRISTOL-MYERS SQUIBB CO',
    minStartDate: '2017-05-11'
  },
  BNFREUR: {
    name: 'BN.FR/EUR',
    description: 'Danone SA',
    minStartDate: '2016-09-30'
  },
  BNPFREUR: {
    name: 'BNP.FR/EUR',
    description: 'BNP Paribas SA',
    minStartDate: '2016-09-30'
  },
  BNZLGBGBX: {
    name: 'BNZL.GB/GBX',
    description: 'Bunzl PLC',
    minStartDate: '2016-09-06'
  },
  BOSSDEEUR: {
    name: 'BOSS.DE/EUR',
    description: 'HUGO BOSS AG',
    minStartDate: '2015-04-09'
  },
  BPGBGBX: {
    name: 'BP.GB/GBX',
    description: 'BP PLC',
    minStartDate: '2016-09-06'
  },
  BPUSUSD: {
    name: 'BP.US/USD',
    description: 'BP p.l.c.',
    minStartDate: '2018-01-31'
  },
  BRBYGBGBX: {
    name: 'BRBY.GB/GBX',
    description: 'Burberry Group PLC',
    minStartDate: '2016-07-08'
  },
  BRKBUSUSD: {
    name: 'BRKB.US/USD',
    description: 'BERKSHIRE HATHAWAY INC-CL B',
    minStartDate: '2017-11-06'
  },
  BSXUSUSD: {
    name: 'BSX.US/USD',
    description: 'BOSTON SCIENTIFIC CORP',
    minStartDate: '2017-05-11'
  },
  BTGBGBX: {
    name: 'BT.GB/GBX',
    description: 'BT Group PLC',
    minStartDate: '2016-07-07'
  },
  BTCUSD: {
    name: 'BTC/USD',
    description: 'Bitcoin vs US Dollar',
    minStartDate: '2017-05-07'
  },
  BUNDTREUR: {
    name: 'BUND.TR/EUR',
    description: 'Euro Bund',
    minStartDate: '2016-05-02'
  },
  CUSUSD: {
    name: 'C.US/USD',
    description: 'CITIGROUP INC',
    minStartDate: '2017-01-23'
  },
  CAFREUR: {
    name: 'CA.FR/EUR',
    description: 'Carrefour SA',
    minStartDate: '2016-09-30'
  },
  CABKESEUR: {
    name: 'CABK.ES/EUR',
    description: 'CaixaBank',
    minStartDate: '2016-11-14'
  },
  CADCHF: {
    name: 'CAD/CHF',
    description: 'Canadian Dollar vs Swiss Franc',
    minStartDate: '2005-12-26'
  },
  CADHKD: {
    name: 'CAD/HKD',
    description: 'Canadian Dollar vs Hong Kong Dollar',
    minStartDate: '2007-03-13'
  },
  CADJPY: {
    name: 'CAD/JPY',
    description: 'Canadian Dollar vs Japanese Yen',
    minStartDate: '2004-10-20'
  },
  CAGUSUSD: {
    name: 'CAG.US/USD',
    description: 'CONAGRA FOODS INC',
    minStartDate: '2018-01-31'
  },
  CAHUSUSD: {
    name: 'CAH.US/USD',
    description: 'CARDINAL HEALTH INC',
    minStartDate: '2018-01-31'
  },
  CAPFREUR: {
    name: 'CAP.FR/EUR',
    description: 'Cap Gemini SA',
    minStartDate: '2016-09-30'
  },
  CARLBDKDKK: {
    name: 'CARLB.DK/DKK',
    description: 'Carlsberg A/S',
    minStartDate: '2016-11-07'
  },
  CATUSUSD: {
    name: 'CAT.US/USD',
    description: 'CATERPILLAR INC',
    minStartDate: '2017-05-11'
  },
  CBKDEEUR: {
    name: 'CBK.DE/EUR',
    description: 'Commerzbank AG',
    minStartDate: '2015-03-26'
  },
  CBSUSUSD: {
    name: 'CBS.US/USD',
    description: 'CBS CORP-CLASS B NON VOTING',
    minStartDate: '2018-01-31'
  },
  CCLGBGBX: {
    name: 'CCL.GB/GBX',
    description: 'Carnival PLC',
    minStartDate: '2016-07-06'
  },
  CELGUSUSD: {
    name: 'CELG.US/USD',
    description: 'CELGENE CORP',
    minStartDate: '2017-05-11'
  },
  CFUSUSD: {
    name: 'CF.US/USD',
    description: 'CF INDUSTRIES HOLDINGS INC',
    minStartDate: '2018-01-31'
  },
  CHFJPY: {
    name: 'CHF/JPY',
    description: 'Swiss Franc vs Japanese Yen',
    minStartDate: '2003-08-03'
  },
  CHFSGD: {
    name: 'CHF/SGD',
    description: 'Swiss Franc vs Singapore Dollar',
    minStartDate: '2007-03-13'
  },
  CHIIDXUSD: {
    name: 'CHI.IDX/USD',
    description: 'China A50 Index',
    minStartDate: '2017-07-17'
  },
  CIUSUSD: {
    name: 'CI.US/USD',
    description: 'CIGNA CORP',
    minStartDate: '2017-05-11'
  },
  CLUSUSD: {
    name: 'CL.US/USD',
    description: 'COLGATE-PALMOLIVE CO',
    minStartDate: '2017-11-02'
  },
  CMCSAUSUSD: {
    name: 'CMCSA.US/USD',
    description: 'COMCAST CORP-CLASS A',
    minStartDate: '2017-01-19'
  },
  CMEUSUSD: {
    name: 'CME.US/USD',
    description: 'CME GROUP INC',
    minStartDate: '2017-05-11'
  },
  CMGUSUSD: {
    name: 'CMG.US/USD',
    description: 'CHIPOTLE MEXICAN GRILL INC',
    minStartDate: '2017-05-11'
  },
  CMIUSUSD: {
    name: 'CMI.US/USD',
    description: 'CUMMINS INC',
    minStartDate: '2018-02-01'
  },
  CNAGBGBX: {
    name: 'CNA.GB/GBX',
    description: 'Centrica PLC',
    minStartDate: '2016-07-07'
  },
  COCOACMDUSD: {
    name: 'COCOA.CMD/USD',
    description: 'NY Cocoa',
    minStartDate: '2017-10-20'
  },
  COFFEECMDUSX: {
    name: 'COFFEE.CMD/USX',
    description: 'Coffee Arabica',
    minStartDate: '2017-12-04'
  },
  COLUSUSD: {
    name: 'COL.US/USD',
    description: 'ROCKWELL COLLINS INC',
    minStartDate: '2017-11-02'
  },
  COLOBDKDKK: {
    name: 'COLOB.DK/DKK',
    description: 'Coloplast A/S',
    minStartDate: '2016-11-07'
  },
  CONDEEUR: {
    name: 'CON.DE/EUR',
    description: 'Continental AG',
    minStartDate: '2015-04-08'
  },
  COPUSUSD: {
    name: 'COP.US/USD',
    description: 'CONOCOPHILLIPS',
    minStartDate: '2017-11-02'
  },
  COPPERCMDUSD: {
    name: 'COPPER.CMD/USD',
    description: 'High Grade Copper',
    minStartDate: '2012-03-01'
  },
  COSTUSUSD: {
    name: 'COST.US/USD',
    description: 'COSTCO WHOLESALE CORP',
    minStartDate: '2017-11-02'
  },
  COTTONCMDUSX: {
    name: 'COTTON.CMD/USX',
    description: 'Cotton',
    minStartDate: '2017-10-20'
  },
  CPGGBGBX: {
    name: 'CPG.GB/GBX',
    description: 'Compass Group PLC',
    minStartDate: '2016-07-08'
  },
  CPIGBGBX: {
    name: 'CPI.GB/GBX',
    description: 'Capita PLC',
    minStartDate: '2016-07-07'
  },
  CRDAGBGBX: {
    name: 'CRDA.GB/GBX',
    description: 'Croda International PLC',
    minStartDate: '2016-11-01'
  },
  CRHGBGBX: {
    name: 'CRH.GB/GBX',
    description: 'CRH PLC',
    minStartDate: '2016-11-08'
  },
  CRMUSUSD: {
    name: 'CRM.US/USD',
    description: 'SALESFORCE.COM INC',
    minStartDate: '2017-05-11'
  },
  CSFREUR: {
    name: 'CS.FR/EUR',
    description: 'AXA SA',
    minStartDate: '2016-09-30'
  },
  CSUSUSD: {
    name: 'CS.US/USD',
    description: 'Credit Suisse Group AG',
    minStartDate: '2017-01-26'
  },
  CSCOUSUSD: {
    name: 'CSCO.US/USD',
    description: 'CISCO SYSTEMS INC',
    minStartDate: '2017-01-19'
  },
  CSXUSUSD: {
    name: 'CSX.US/USD',
    description: 'CSX CORP',
    minStartDate: '2017-11-02'
  },
  CTLUSUSD: {
    name: 'CTL.US/USD',
    description: 'CENTURYLINK INC',
    minStartDate: '2017-11-02'
  },
  CTSHUSUSD: {
    name: 'CTSH.US/USD',
    description: 'COGNIZANT TECH SOLUTIONS-A',
    minStartDate: '2017-11-02'
  },
  CVSUSUSD: {
    name: 'CVS.US/USD',
    description: 'CVS HEALTH CORP',
    minStartDate: '2017-11-02'
  },
  CVXUSUSD: {
    name: 'CVX.US/USD',
    description: 'CHEVRON CORP',
    minStartDate: '2017-01-19'
  },
  DUSUSD: {
    name: 'D.US/USD',
    description: 'DOMINION RESOURCES INC/VA',
    minStartDate: '2018-02-01'
  },
  DAIDEEUR: {
    name: 'DAI.DE/EUR',
    description: 'Daimler AG',
    minStartDate: '2015-03-27'
  },
  DALUSUSD: {
    name: 'DAL.US/USD',
    description: 'DELTA AIR LINES INC',
    minStartDate: '2017-11-02'
  },
  DANSKEDKDKK: {
    name: 'DANSKE.DK/DKK',
    description: 'Danske Bank A/S',
    minStartDate: '2016-11-08'
  },
  DB1DEEUR: {
    name: 'DB1.DE/EUR',
    description: 'Deutsche Boerse AG',
    minStartDate: '2015-04-14'
  },
  DBKDEEUR: {
    name: 'DBK.DE/EUR',
    description: 'Deutsche Bank AG',
    minStartDate: '2015-03-25'
  },
  DEUSUSD: {
    name: 'DE.US/USD',
    description: 'DEERE &amp; CO',
    minStartDate: '2017-05-11'
  },
  DFSUSUSD: {
    name: 'DFS.US/USD',
    description: 'DISCOVER FINANCIAL SERVICES',
    minStartDate: '2018-02-01'
  },
  DGFREUR: {
    name: 'DG.FR/EUR',
    description: 'Vinci SA',
    minStartDate: '2016-09-30'
  },
  DGUSUSD: {
    name: 'DG.US/USD',
    description: 'DOLLAR GENERAL CORP',
    minStartDate: '2017-05-11'
  },
  DGEGBGBX: {
    name: 'DGE.GB/GBX',
    description: 'Diageo PLC',
    minStartDate: '2016-07-06'
  },
  DHIUSUSD: {
    name: 'DHI.US/USD',
    description: 'DR HORTON INC',
    minStartDate: '2018-02-01'
  },
  DHRUSUSD: {
    name: 'DHR.US/USD',
    description: 'DANAHER CORP',
    minStartDate: '2017-11-02'
  },
  DIAESEUR: {
    name: 'DIA.ES/EUR',
    description: 'Distribuidora Internacional de Alimentacion SA',
    minStartDate: '2016-11-14'
  },
  DIAUSUSD: {
    name: 'DIA.US/USD',
    description: 'SPDR Dow Jones® Industrial Average ETF',
    minStartDate: '2017-05-11'
  },
  DIESELCMDUSD: {
    name: 'DIESEL.CMD/USD',
    description: 'Gas oil',
    minStartDate: '2017-10-20'
  },
  DISUSUSD: {
    name: 'DIS.US/USD',
    description: 'WALT DISNEY CO/THE',
    minStartDate: '2017-01-19'
  },
  DLTRUSUSD: {
    name: 'DLTR.US/USD',
    description: 'DOLLAR TREE INC',
    minStartDate: '2017-11-02'
  },
  DNBNONOK: {
    name: 'DNB.NO/NOK',
    description: 'DNB ASA',
    minStartDate: '2016-11-14'
  },
  DOLLARIDXUSD: {
    name: 'DOLLAR.IDX/USD',
    description: 'US Dollar Index',
    minStartDate: '2017-12-01'
  },
  DPWDEEUR: {
    name: 'DPW.DE/EUR',
    description: 'Deutsche Post AG',
    minStartDate: '2015-03-31'
  },
  DSMNLEUR: {
    name: 'DSM.NL/EUR',
    description: 'Koninklijke DSM NV',
    minStartDate: '2016-11-14'
  },
  DTEDEEUR: {
    name: 'DTE.DE/EUR',
    description: 'Deutsche Telekom AG',
    minStartDate: '2015-03-31'
  },
  DUKUSUSD: {
    name: 'DUK.US/USD',
    description: 'DUKE ENERGY CORP',
    minStartDate: '2017-05-11'
  },
  DVAUSUSD: {
    name: 'DVA.US/USD',
    description: 'DAVITA HEALTHCARE PARTNERS I',
    minStartDate: '2018-02-01'
  },
  DVNUSUSD: {
    name: 'DVN.US/USD',
    description: 'DEVON ENERGY CORP',
    minStartDate: '2018-02-01'
  },
  DVYUSUSD: {
    name: 'DVY.US/USD',
    description: 'iShares Select Dividend ETF',
    minStartDate: '2017-05-11'
  },
  EAUSUSD: {
    name: 'EA.US/USD',
    description: 'ELECTRONIC ARTS INC',
    minStartDate: '2017-05-11'
  },
  EBAYUSUSD: {
    name: 'EBAY.US/USD',
    description: 'EBAY INC',
    minStartDate: '2017-11-02'
  },
  EBSATEUR: {
    name: 'EBS.AT/EUR',
    description: 'Erste Group Bank AG',
    minStartDate: '2016-11-04'
  },
  EDFFREUR: {
    name: 'EDF.FR/EUR',
    description: 'Electricite de France SA',
    minStartDate: '2016-09-30'
  },
  EDPPTEUR: {
    name: 'EDP.PT/EUR',
    description: 'EDP - Energias de Portugal SA',
    minStartDate: '2016-11-14'
  },
  EEMUSUSD: {
    name: 'EEM.US/USD',
    description: 'iShares MSCI Emerging Markets ETF',
    minStartDate: '2017-01-23'
  },
  EFAUSUSD: {
    name: 'EFA.US/USD',
    description: 'iShares MSCI EAFE ETF',
    minStartDate: '2017-01-23'
  },
  EFXUSUSD: {
    name: 'EFX.US/USD',
    description: 'EQUIFAX INC',
    minStartDate: '2017-11-02'
  },
  EIFREUR: {
    name: 'EI.FR/EUR',
    description: 'Essilor International SA',
    minStartDate: '2016-09-30'
  },
  EIXUSUSD: {
    name: 'EIX.US/USD',
    description: 'EDISON INTERNATIONAL',
    minStartDate: '2018-02-01'
  },
  ELUSUSD: {
    name: 'EL.US/USD',
    description: 'ESTEE LAUDER COMPANIES-CL A',
    minStartDate: '2018-02-01'
  },
  ELEESEUR: {
    name: 'ELE.ES/EUR',
    description: 'Endesa SA',
    minStartDate: '2016-11-14'
  },
  ELI1VFIEUR: {
    name: 'ELI1V.FI/EUR',
    description: 'Elisa OYJ',
    minStartDate: '2016-11-03'
  },
  ELUXBSESEK: {
    name: 'ELUXB.SE/SEK',
    description: 'Electrolux AB',
    minStartDate: '2016-11-07'
  },
  EMBUSUSD: {
    name: 'EMB.US/USD',
    description: 'iShares J.P. Morgan USD Emerging Markets Bond ETF',
    minStartDate: '2017-05-11'
  },
  EMRUSUSD: {
    name: 'EMR.US/USD',
    description: 'EMERSON ELECTRIC CO',
    minStartDate: '2018-02-01'
  },
  ENFREUR: {
    name: 'EN.FR/EUR',
    description: 'Bouygues SA',
    minStartDate: '2016-09-30'
  },
  ENGESEUR: {
    name: 'ENG.ES/EUR',
    description: 'Enagas SA',
    minStartDate: '2016-11-14'
  },
  ENGIFREUR: {
    name: 'ENGI.FR/EUR',
    description: 'Engie',
    minStartDate: '2016-09-30'
  },
  EOANDEEUR: {
    name: 'EOAN.DE/EUR',
    description: 'E.ON SE',
    minStartDate: '2015-04-20'
  },
  EOGUSUSD: {
    name: 'EOG.US/USD',
    description: 'EOG RESOURCES INC',
    minStartDate: '2017-11-02'
  },
  EQTUSUSD: {
    name: 'EQT.US/USD',
    description: 'EQT CORP',
    minStartDate: '2017-11-02'
  },
  ERICBSESEK: {
    name: 'ERICB.SE/SEK',
    description: 'Telefonaktiebolaget LM Ericsson',
    minStartDate: '2016-11-14'
  },
  ESRXUSUSD: {
    name: 'ESRX.US/USD',
    description: 'EXPRESS SCRIPTS HOLDING CO',
    minStartDate: '2017-11-02'
  },
  ETHUSD: {
    name: 'ETH/USD',
    description: 'Ether vs US Dollar',
    minStartDate: '2017-12-11'
  },
  EURAUD: {
    name: 'EUR/AUD',
    description: 'Euro vs Australian Dollar',
    minStartDate: '2005-10-02'
  },
  EURCAD: {
    name: 'EUR/CAD',
    description: 'Euro vs Canadian Dollar',
    minStartDate: '2004-10-20'
  },
  EURCHF: {
    name: 'EUR/CHF',
    description: 'Euro vs Swiss Franc',
    minStartDate: '2003-08-03'
  },
  EURCZK: {
    name: 'EUR/CZK',
    description: 'Euro vs Czech Koruna',
    minStartDate: '2016-01-03'
  },
  EURDKK: {
    name: 'EUR/DKK',
    description: 'Euro vs Danish Krone',
    minStartDate: '2004-10-20'
  },
  EURGBP: {
    name: 'EUR/GBP',
    description: 'Euro vs Pound Sterling',
    minStartDate: '2003-08-03'
  },
  EURHKD: {
    name: 'EUR/HKD',
    description: 'Euro vs Hong Kong Dollar',
    minStartDate: '2007-03-13'
  },
  EURHUF: {
    name: 'EUR/HUF',
    description: 'Euro vs Hungarian Forint',
    minStartDate: '2007-03-13'
  },
  EURJPY: {
    name: 'EUR/JPY',
    description: 'Euro vs Japanese Yen',
    minStartDate: '2003-08-03'
  },
  EURNOK: {
    name: 'EUR/NOK',
    description: 'Euro vs Norwegian Krone',
    minStartDate: '2004-10-20'
  },
  EURNZD: {
    name: 'EUR/NZD',
    description: 'Euro vs New Zealand Dollar',
    minStartDate: '2005-12-26'
  },
  EURPLN: {
    name: 'EUR/PLN',
    description: 'Euro vs Polish Zloty',
    minStartDate: '2007-03-13'
  },
  EURRUB: {
    name: 'EUR/RUB',
    description: 'Euro vs Russian Rouble',
    minStartDate: '2007-03-13'
  },
  EURSEK: {
    name: 'EUR/SEK',
    description: 'Euro vs Swedish Krona',
    minStartDate: '2004-10-27'
  },
  EURSGD: {
    name: 'EUR/SGD',
    description: 'Euro vs Singapore Dollar',
    minStartDate: '2007-03-13'
  },
  EURTRY: {
    name: 'EUR/TRY',
    description: 'Euro vs Turkish Lira',
    minStartDate: '2007-03-13'
  },
  EURUSD: {
    name: 'EUR/USD',
    description: 'Euro vs US Dollar',
    minStartDate: '2003-05-04'
  },
  EWHUSUSD: {
    name: 'EWH.US/USD',
    description: 'iShares MSCI Hong Kong ETF',
    minStartDate: '2017-11-06'
  },
  EWJUSUSD: {
    name: 'EWJ.US/USD',
    description: 'iShares MSCI Japan ETF',
    minStartDate: '2017-01-23'
  },
  EWWUSUSD: {
    name: 'EWW.US/USD',
    description: 'iShares MSCI Mexico Capped',
    minStartDate: '2017-03-13'
  },
  EWZUSUSD: {
    name: 'EWZ.US/USD',
    description: 'iShares MSCI Brazil Capped',
    minStartDate: '2017-01-26'
  },
  EXCUSUSD: {
    name: 'EXC.US/USD',
    description: 'EXELON CORP',
    minStartDate: '2018-02-01'
  },
  EXPEUSUSD: {
    name: 'EXPE.US/USD',
    description: 'EXPEDIA INC',
    minStartDate: '2017-11-02'
  },
  EXPNGBGBX: {
    name: 'EXPN.GB/GBX',
    description: 'Experian PLC',
    minStartDate: '2016-07-08'
  },
  EZJGBGBX: {
    name: 'EZJ.GB/GBX',
    description: 'easyJet PLC',
    minStartDate: '2016-07-08'
  },
  EZUUSUSD: {
    name: 'EZU.US/USD',
    description: 'iShares MSCI EMU ETF',
    minStartDate: '2018-02-01'
  },
  BRENTCMDUSD: {
    name: 'BRENT.CMD/USD',
    description: 'US Brent Crude Oil',
    minStartDate: '2010-12-02'
  },
  FRAIDXEUR: {
    name: 'FRA.IDX/EUR',
    description: 'France 40 Index',
    minStartDate: '2011-09-18'
  },
  USA30IDXUSD: {
    name: 'USA30.IDX/USD',
    description: 'USA 30 Index',
    minStartDate: '2013-09-30'
  },
  DEUIDXEUR: {
    name: 'DEU.IDX/EUR',
    description: 'Germany 30 Index',
    minStartDate: '2013-09-30'
  },
  EUSIDXEUR: {
    name: 'EUS.IDX/EUR',
    description: 'Europe 50 Index',
    minStartDate: '2011-09-18'
  },
  GBRIDXGBP: {
    name: 'GBR.IDX/GBP',
    description: 'UK 100 Index',
    minStartDate: '2011-09-18'
  },
  HKGIDXHKD: {
    name: 'HKG.IDX/HKD',
    description: 'Hong Kong 40 Index',
    minStartDate: '2011-09-18'
  },
  ESPIDXEUR: {
    name: 'ESP.IDX/EUR',
    description: 'Spain 35 Index',
    minStartDate: '2012-01-02'
  },
  LIGHTCMDUSD: {
    name: 'LIGHT.CMD/USD',
    description: 'US Light Crude Oil',
    minStartDate: '2011-09-23'
  },
  JPNIDXJPY: {
    name: 'JPN.IDX/JPY',
    description: 'Japan 225',
    minStartDate: '2011-09-18'
  },
  USATECHIDXUSD: {
    name: 'USATECH.IDX/USD',
    description: 'USA 100 Technical Index',
    minStartDate: '2011-09-18'
  },
  USA500IDXUSD: {
    name: 'USA500.IDX/USD',
    description: 'USA 500 Index',
    minStartDate: '2011-09-18'
  },
  CHEIDXCHF: {
    name: 'CHE.IDX/CHF',
    description: 'Switzerland 20 Index',
    minStartDate: '2011-09-18'
  },
  AUSIDXAUD: {
    name: 'AUS.IDX/AUD',
    description: 'Australia 200 Index',
    minStartDate: '2013-01-02'
  },
  FUSUSD: {
    name: 'F.US/USD',
    description: 'FORD MOTOR CO',
    minStartDate: '2017-11-02'
  },
  FBUSUSD: {
    name: 'FB.US/USD',
    description: 'FACEBOOK INC-A',
    minStartDate: '2017-01-19'
  },
  FCXUSUSD: {
    name: 'FCX.US/USD',
    description: 'FREEPORT-MCMORAN INC',
    minStartDate: '2017-11-02'
  },
  FDXUSUSD: {
    name: 'FDX.US/USD',
    description: 'FEDEX CORP',
    minStartDate: '2017-11-02'
  },
  FEUSUSD: {
    name: 'FE.US/USD',
    description: 'FIRSTENERGY CORP',
    minStartDate: '2018-02-01'
  },
  FERESEUR: {
    name: 'FER.ES/EUR',
    description: 'Ferrovial SA',
    minStartDate: '2016-11-14'
  },
  FMEDEEUR: {
    name: 'FME.DE/EUR',
    description: 'Fresenius Medical Care AG &amp; Co KGaA',
    minStartDate: '2015-04-01'
  },
  FOXAUSUSD: {
    name: 'FOXA.US/USD',
    description: 'TWENTY-FIRST CENTURY FOX-A',
    minStartDate: '2018-01-31'
  },
  FPFREUR: {
    name: 'FP.FR/EUR',
    description: 'Total SA',
    minStartDate: '2016-09-30'
  },
  FRFREUR: {
    name: 'FR.FR/EUR',
    description: 'Valeo SA',
    minStartDate: '2016-09-30'
  },
  FREDEEUR: {
    name: 'FRE.DE/EUR',
    description: 'Fresenius SE &amp; Co KGaA',
    minStartDate: '2015-04-10'
  },
  FRESGBGBX: {
    name: 'FRES.GB/GBX',
    description: 'Fresnillo PLC',
    minStartDate: '2016-07-07'
  },
  FXIUSUSD: {
    name: 'FXI.US/USD',
    description: 'iShares China Large-Cap ETF',
    minStartDate: '2017-01-26'
  },
  GALPPTEUR: {
    name: 'GALP.PT/EUR',
    description: 'Galp Energia SGPS SA',
    minStartDate: '2016-11-14'
  },
  GAMESEUR: {
    name: 'GAM.ES/EUR',
    description: 'Gamesa Corporacion Tecnologica SA',
    minStartDate: '2016-11-14'
  },
  GASCMDUSD: {
    name: 'GAS.CMD/USD',
    description: 'Natural Gas',
    minStartDate: '2012-08-20'
  },
  GASESEUR: {
    name: 'GAS.ES/EUR',
    description: 'Gas Natural SDG SA',
    minStartDate: '2016-11-14'
  },
  GBPAUD: {
    name: 'GBP/AUD',
    description: 'Pound Sterling vs Australian Dollar',
    minStartDate: '2006-01-01'
  },
  GBPCAD: {
    name: 'GBP/CAD',
    description: 'Pound Sterling vs Canadian Dollar',
    minStartDate: '2006-01-01'
  },
  GBPCHF: {
    name: 'GBP/CHF',
    description: 'Pound Sterling vs Swiss Franc',
    minStartDate: '2003-08-03'
  },
  GBPJPY: {
    name: 'GBP/JPY',
    description: 'Pound Sterling vs Japanese Yen',
    minStartDate: '2003-08-03'
  },
  GBPNZD: {
    name: 'GBP/NZD',
    description: 'Pound Sterling vs New Zealand Dollar',
    minStartDate: '2006-01-01'
  },
  GBPUSD: {
    name: 'GBP/USD',
    description: 'Pound Sterling vs US Dollar',
    minStartDate: '2003-05-04'
  },
  GDXUSUSD: {
    name: 'GDX.US/USD',
    description: 'VanEck Vectors Gold Miners ETF',
    minStartDate: '2017-01-23'
  },
  GDXJUSUSD: {
    name: 'GDXJ.US/USD',
    description: 'VanEck Vectors Junior Gold Miners ETF',
    minStartDate: '2017-01-26'
  },
  GEUSUSD: {
    name: 'GE.US/USD',
    description: 'GENERAL ELECTRIC CO',
    minStartDate: '2017-01-19'
  },
  GETIBSESEK: {
    name: 'GETIB.SE/SEK',
    description: 'Getinge AB',
    minStartDate: '2016-11-07'
  },
  GFSGBGBX: {
    name: 'GFS.GB/GBX',
    description: 'G4S PLC',
    minStartDate: '2016-07-07'
  },
  GILDUSUSD: {
    name: 'GILD.US/USD',
    description: 'GILEAD SCIENCES INC',
    minStartDate: '2017-01-19'
  },
  GISUSUSD: {
    name: 'GIS.US/USD',
    description: 'GENERAL MILLS INC',
    minStartDate: '2018-02-01'
  },
  GLDUSUSD: {
    name: 'GLD.US/USD',
    description: 'SPDR Gold Shares ETF',
    minStartDate: '2017-01-23'
  },
  GLEFREUR: {
    name: 'GLE.FR/EUR',
    description: 'Societe Generale SA',
    minStartDate: '2016-09-30'
  },
  GLENGBGBX: {
    name: 'GLEN.GB/GBX',
    description: 'Glencore PLC',
    minStartDate: '2016-07-07'
  },
  GLWUSUSD: {
    name: 'GLW.US/USD',
    description: 'CORNING INC',
    minStartDate: '2017-05-11'
  },
  GMUSUSD: {
    name: 'GM.US/USD',
    description: 'GENERAL MOTORS CO',
    minStartDate: '2017-11-02'
  },
  GOOGUSUSD: {
    name: 'GOOG.US/USD',
    description: 'ALPHABET INC-CL C',
    minStartDate: '2017-01-19'
  },
  GOOGLUSUSD: {
    name: 'GOOGL.US/USD',
    description: 'ALPHABET INC-CL A',
    minStartDate: '2017-01-19'
  },
  GPSUSUSD: {
    name: 'GPS.US/USD',
    description: 'GAP INC/THE',
    minStartDate: '2018-02-01'
  },
  GSUSUSD: {
    name: 'GS.US/USD',
    description: 'GOLDMAN SACHS GROUP INC',
    minStartDate: '2017-01-19'
  },
  GTONLEUR: {
    name: 'GTO.NL/EUR',
    description: 'Gemalto NV',
    minStartDate: '2016-11-14'
  },
  GWWUSUSD: {
    name: 'GWW.US/USD',
    description: 'WW GRAINGER INC',
    minStartDate: '2018-02-01'
  },
  HALUSUSD: {
    name: 'HAL.US/USD',
    description: 'HALLIBURTON CO',
    minStartDate: '2017-11-02'
  },
  HCNUSUSD: {
    name: 'HCN.US/USD',
    description: 'WELLTOWER INC',
    minStartDate: '2018-02-01'
  },
  HCPUSUSD: {
    name: 'HCP.US/USD',
    description: 'HCP INC',
    minStartDate: '2018-02-01'
  },
  HDUSUSD: {
    name: 'HD.US/USD',
    description: 'HOME DEPOT INC',
    minStartDate: '2017-01-19'
  },
  HEIDEEUR: {
    name: 'HEI.DE/EUR',
    description: 'HeidelbergCement AG',
    minStartDate: '2015-04-02'
  },
  HEIANLEUR: {
    name: 'HEIA.NL/EUR',
    description: 'Heineken NV',
    minStartDate: '2016-11-14'
  },
  HEN3DEEUR: {
    name: 'HEN3.DE/EUR',
    description: 'Henkel AG &amp; Co KGaA',
    minStartDate: '2015-04-21'
  },
  HESUSUSD: {
    name: 'HES.US/USD',
    description: 'HESS CORP',
    minStartDate: '2017-11-02'
  },
  HKDJPY: {
    name: 'HKD/JPY',
    description: 'Hong Kong Dollar vs Japanese Yen',
    minStartDate: '2007-03-13'
  },
  HMBSESEK: {
    name: 'HMB.SE/SEK',
    description: 'Hennes &amp; Mauritz AB',
    minStartDate: '2016-11-07'
  },
  HMSOGBGBX: {
    name: 'HMSO.GB/GBX',
    description: 'Hammerson PLC',
    minStartDate: '2016-07-07'
  },
  HONUSUSD: {
    name: 'HON.US/USD',
    description: 'HONEYWELL INTERNATIONAL INC',
    minStartDate: '2017-11-02'
  },
  HPQUSUSD: {
    name: 'HPQ.US/USD',
    description: 'HP INC',
    minStartDate: '2018-02-01'
  },
  HSBAGBGBX: {
    name: 'HSBA.GB/GBX',
    description: 'HSBC Holdings PLC',
    minStartDate: '2016-07-07'
  },
  HUMUSUSD: {
    name: 'HUM.US/USD',
    description: 'HUMANA INC',
    minStartDate: '2017-11-02'
  },
  IAGGBGBX: {
    name: 'IAG.GB/GBX',
    description: 'International Consolidated Airlines Grou',
    minStartDate: '2016-11-08'
  },
  IBBUSUSD: {
    name: 'IBB.US/USD',
    description: 'iShares Nasdaq Biotechnology ETF',
    minStartDate: '2017-05-11'
  },
  IBEESEUR: {
    name: 'IBE.ES/EUR',
    description: 'Iberdrola SA',
    minStartDate: '2016-11-14'
  },
  IBMUSUSD: {
    name: 'IBM.US/USD',
    description: 'INTL BUSINESS MACHINES CORP',
    minStartDate: '2017-01-19'
  },
  ICEUSUSD: {
    name: 'ICE.US/USD',
    description: 'INTERCONTINENTAL EXCHANGE IN',
    minStartDate: '2017-11-06'
  },
  IEFUSUSD: {
    name: 'IEF.US/USD',
    description: 'iShares 7-10 Year Treasury Bond ETF',
    minStartDate: '2018-02-01'
  },
  IFXDEEUR: {
    name: 'IFX.DE/EUR',
    description: 'Infineon Technologies AG',
    minStartDate: '2015-04-13'
  },
  IHGGBGBX: {
    name: 'IHG.GB/GBX',
    description: 'InterContinental Hotels Group PLC',
    minStartDate: '2016-11-01'
  },
  IJHUSUSD: {
    name: 'IJH.US/USD',
    description: 'iShares Core S&amp;P Mid-Cap ETF',
    minStartDate: '2018-02-01'
  },
  IJRUSUSD: {
    name: 'IJR.US/USD',
    description: 'iShares Core S&amp;P Small-Cap ETF',
    minStartDate: '2017-05-11'
  },
  ILMNUSUSD: {
    name: 'ILMN.US/USD',
    description: 'ILLUMINA INC',
    minStartDate: '2018-02-01'
  },
  IMTGBGBX: {
    name: 'IMT.GB/GBX',
    description: 'Imperial Brands Plc',
    minStartDate: '2016-07-06'
  },
  INDIDXUSD: {
    name: 'IND.IDX/USD',
    description: 'India 50 Index',
    minStartDate: '2017-12-01'
  },
  INGANLEUR: {
    name: 'INGA.NL/EUR',
    description: 'ING Groep NV',
    minStartDate: '2016-11-14'
  },
  INTCUSUSD: {
    name: 'INTC.US/USD',
    description: 'INTEL CORP',
    minStartDate: '2017-01-19'
  },
  INTUUSUSD: {
    name: 'INTU.US/USD',
    description: 'INTUIT INC',
    minStartDate: '2018-02-01'
  },
  INVEBSESEK: {
    name: 'INVEB.SE/SEK',
    description: 'Investor AB',
    minStartDate: '2016-11-14'
  },
  IPGUSUSD: {
    name: 'IPG.US/USD',
    description: 'INTERPUBLIC GROUP OF COS INC',
    minStartDate: '2018-02-01'
  },
  ISATGBGBX: {
    name: 'ISAT.GB/GBX',
    description: 'Inmarsat PLC',
    minStartDate: '2016-07-08'
  },
  ISRGUSUSD: {
    name: 'ISRG.US/USD',
    description: 'INTUITIVE SURGICAL INC',
    minStartDate: '2018-02-01'
  },
  ITRKGBGBX: {
    name: 'ITRK.GB/GBX',
    description: 'Intertek Group PLC',
    minStartDate: '2016-07-06'
  },
  ITUBUSUSD: {
    name: 'ITUB.US/USD',
    description: 'Itau Unibanco Holding S.A.',
    minStartDate: '2017-01-26'
  },
  ITVGBGBX: {
    name: 'ITV.GB/GBX',
    description: 'ITV PLC',
    minStartDate: '2016-07-07'
  },
  ITWUSUSD: {
    name: 'ITW.US/USD',
    description: 'ILLINOIS TOOL WORKS',
    minStartDate: '2017-05-11'
  },
  ITXESEUR: {
    name: 'ITX.ES/EUR',
    description: 'Inditex SA',
    minStartDate: '2016-11-14'
  },
  IVEUSUSD: {
    name: 'IVE.US/USD',
    description: 'iShares S&amp;P 500 Value ETF',
    minStartDate: '2017-05-11'
  },
  IVWUSUSD: {
    name: 'IVW.US/USD',
    description: 'iShares S&amp;P 500 Growth ETF',
    minStartDate: '2017-05-11'
  },
  IWDUSUSD: {
    name: 'IWD.US/USD',
    description: 'iShares Russell 1000 Value ETF',
    minStartDate: '2018-02-01'
  },
  IWFUSUSD: {
    name: 'IWF.US/USD',
    description: 'iShares Russell 1000 Growth ETF',
    minStartDate: '2018-02-01'
  },
  IWMUSUSD: {
    name: 'IWM.US/USD',
    description: 'iShares Russell 2000 ETF',
    minStartDate: '2017-01-23'
  },
  IYRUSUSD: {
    name: 'IYR.US/USD',
    description: 'iShares U.S. Real Estate ETF',
    minStartDate: '2017-01-23'
  },
  JCIUSUSD: {
    name: 'JCI.US/USD',
    description: 'JOHNSON CONTROLS INC',
    minStartDate: '2017-11-02'
  },
  JNJUSUSD: {
    name: 'JNJ.US/USD',
    description: 'JOHNSON &amp; JOHNSON',
    minStartDate: '2017-01-19'
  },
  JNKUSUSD: {
    name: 'JNK.US/USD',
    description: 'SPDR Barclays Capital High Yield Bond ETF',
    minStartDate: '2017-01-23'
  },
  JPMUSUSD: {
    name: 'JPM.US/USD',
    description: 'JPMORGAN CHASE &amp; CO',
    minStartDate: '2017-01-19'
  },
  JWNUSUSD: {
    name: 'JWN.US/USD',
    description: 'NORDSTROM INC',
    minStartDate: '2017-05-11'
  },
  KUSUSD: {
    name: 'K.US/USD',
    description: 'KELLOGG CO',
    minStartDate: '2017-05-11'
  },
  KBCBEEUR: {
    name: 'KBC.BE/EUR',
    description: 'KBC Groep NV',
    minStartDate: '2016-11-07'
  },
  KERFREUR: {
    name: 'KER.FR/EUR',
    description: 'Kering',
    minStartDate: '2016-09-30'
  },
  KEYUSUSD: {
    name: 'KEY.US/USD',
    description: 'KEYCORP',
    minStartDate: '2017-11-02'
  },
  KGFGBGBX: {
    name: 'KGF.GB/GBX',
    description: 'Kingfisher PLC',
    minStartDate: '2016-07-07'
  },
  KHCUSUSD: {
    name: 'KHC.US/USD',
    description: 'KRAFT HEINZ CO/THE',
    minStartDate: '2017-05-11'
  },
  KMBUSUSD: {
    name: 'KMB.US/USD',
    description: 'KIMBERLY-CLARK CORP',
    minStartDate: '2017-05-11'
  },
  KMIUSUSD: {
    name: 'KMI.US/USD',
    description: 'KINDER MORGAN INC',
    minStartDate: '2017-11-02'
  },
  KOUSUSD: {
    name: 'KO.US/USD',
    description: 'COCA-COLA CO/THE',
    minStartDate: '2017-01-19'
  },
  KPNNLEUR: {
    name: 'KPN.NL/EUR',
    description: 'Koninklijke KPN NV',
    minStartDate: '2016-11-14'
  },
  KRUSUSD: {
    name: 'KR.US/USD',
    description: 'KROGER CO',
    minStartDate: '2017-11-02'
  },
  KSSUSUSD: {
    name: 'KSS.US/USD',
    description: 'KOHLS CORP',
    minStartDate: '2018-02-01'
  },
  LUSUSD: {
    name: 'L.US/USD',
    description: 'LOEWS CORP',
    minStartDate: '2017-05-11'
  },
  LANDGBGBX: {
    name: 'LAND.GB/GBX',
    description: 'Land Securities Group PLC',
    minStartDate: '2016-07-07'
  },
  LENUSUSD: {
    name: 'LEN.US/USD',
    description: 'LENNAR CORP-A',
    minStartDate: '2017-05-11'
  },
  LGENGBGBX: {
    name: 'LGEN.GB/GBX',
    description: 'Legal &amp; General Group PLC',
    minStartDate: '2016-07-07'
  },
  LHADEEUR: {
    name: 'LHA.DE/EUR',
    description: 'Deutsche Lufthansa AG',
    minStartDate: '2015-04-21'
  },
  LIFREUR: {
    name: 'LI.FR/EUR',
    description: 'Klepierre',
    minStartDate: '2016-08-05'
  },
  LINDEEUR: {
    name: 'LIN.DE/EUR',
    description: 'Linde AG',
    minStartDate: '2015-04-21'
  },
  LLOYGBGBX: {
    name: 'LLOY.GB/GBX',
    description: 'Lloyds Banking Group PLC',
    minStartDate: '2016-07-08'
  },
  LLYUSUSD: {
    name: 'LLY.US/USD',
    description: 'ELI LILLY &amp; CO',
    minStartDate: '2017-05-11'
  },
  LMTUSUSD: {
    name: 'LMT.US/USD',
    description: 'LOCKHEED MARTIN CORP',
    minStartDate: '2017-05-11'
  },
  LOWUSUSD: {
    name: 'LOW.US/USD',
    description: "LOWE'S COS INC",
    minStartDate: '2017-11-02'
  },
  LRFREUR: {
    name: 'LR.FR/EUR',
    description: 'Legrand SA',
    minStartDate: '2016-08-05'
  },
  LRCXUSUSD: {
    name: 'LRCX.US/USD',
    description: 'LAM RESEARCH CORP',
    minStartDate: '2017-11-02'
  },
  LSEGBGBX: {
    name: 'LSE.GB/GBX',
    description: 'London Stock Exchange Group PLC',
    minStartDate: '2016-07-06'
  },
  LUVUSUSD: {
    name: 'LUV.US/USD',
    description: 'SOUTHWEST AIRLINES CO',
    minStartDate: '2017-11-02'
  },
  LVSUSUSD: {
    name: 'LVS.US/USD',
    description: 'Las Vegas Sands Corp.',
    minStartDate: '2017-01-26'
  },
  LXSDEEUR: {
    name: 'LXS.DE/EUR',
    description: 'Lanxess AG',
    minStartDate: '2015-04-21'
  },
  MUSUSD: {
    name: 'M.US/USD',
    description: "MACY'S INC",
    minStartDate: '2017-11-02'
  },
  MAUSUSD: {
    name: 'MA.US/USD',
    description: 'MASTERCARD INC-CLASS A',
    minStartDate: '2017-05-11'
  },
  MAERSKBDKDKK: {
    name: 'MAERSKB.DK/DKK',
    description: 'AP Moeller - Maersk A/S',
    minStartDate: '2016-11-08'
  },
  MARUSUSD: {
    name: 'MAR.US/USD',
    description: 'MARRIOTT INTERNATIONAL -CL A',
    minStartDate: '2017-11-02'
  },
  MATUSUSD: {
    name: 'MAT.US/USD',
    description: 'MATTEL INC',
    minStartDate: '2018-02-01'
  },
  MCFREUR: {
    name: 'MC.FR/EUR',
    description: 'LVMH Moet Hennessy Louis Vuitton SA',
    minStartDate: '2016-08-05'
  },
  MCDUSUSD: {
    name: 'MCD.US/USD',
    description: "MCDONALD'S CORP",
    minStartDate: '2017-11-02'
  },
  MCHPUSUSD: {
    name: 'MCHP.US/USD',
    description: 'MICROCHIP TECHNOLOGY INC',
    minStartDate: '2018-02-01'
  },
  MCKUSUSD: {
    name: 'MCK.US/USD',
    description: 'MCKESSON CORP',
    minStartDate: '2017-11-02'
  },
  MDLZUSUSD: {
    name: 'MDLZ.US/USD',
    description: 'MONDELEZ INTERNATIONAL INC-A',
    minStartDate: '2017-11-02'
  },
  METUSUSD: {
    name: 'MET.US/USD',
    description: 'METLIFE INC',
    minStartDate: '2017-11-02'
  },
  MGMUSUSD: {
    name: 'MGM.US/USD',
    description: 'MGM RESORTS INTERNATIONAL',
    minStartDate: '2017-11-02'
  },
  MHGNONOK: {
    name: 'MHG.NO/NOK',
    description: 'Marine Harvest ASA',
    minStartDate: '2016-11-14'
  },
  MKSGBGBX: {
    name: 'MKS.GB/GBX',
    description: 'Marks &amp; Spencer Group PLC',
    minStartDate: '2016-07-07'
  },
  MMMUSUSD: {
    name: 'MMM.US/USD',
    description: '3M CO',
    minStartDate: '2017-05-11'
  },
  MNDIGBGBX: {
    name: 'MNDI.GB/GBX',
    description: 'Mondi PLC',
    minStartDate: '2016-07-08'
  },
  MOUSUSD: {
    name: 'MO.US/USD',
    description: 'ALTRIA GROUP INC',
    minStartDate: '2017-11-02'
  },
  MPCUSUSD: {
    name: 'MPC.US/USD',
    description: 'MARATHON PETROLEUM CORP',
    minStartDate: '2018-02-01'
  },
  MRKDEEUR: {
    name: 'MRK.DE/EUR',
    description: 'Merck KGaA',
    minStartDate: '2015-03-24'
  },
  MRKUSUSD: {
    name: 'MRK.US/USD',
    description: 'MERCK &amp; CO. INC.',
    minStartDate: '2017-11-02'
  },
  MROUSUSD: {
    name: 'MRO.US/USD',
    description: 'MARATHON OIL CORP',
    minStartDate: '2018-02-01'
  },
  MRWGBGBX: {
    name: 'MRW.GB/GBX',
    description: 'WM Morrison Supermarkets PLC',
    minStartDate: '2016-07-07'
  },
  MSUSUSD: {
    name: 'MS.US/USD',
    description: 'MORGAN STANLEY',
    minStartDate: '2017-11-02'
  },
  MSFTUSUSD: {
    name: 'MSFT.US/USD',
    description: 'MICROSOFT CORP',
    minStartDate: '2017-01-19'
  },
  MTNLEUR: {
    name: 'MT.NL/EUR',
    description: 'ArcelorMittal',
    minStartDate: '2016-11-14'
  },
  MUUSUSD: {
    name: 'MU.US/USD',
    description: 'MICRON TECHNOLOGY INC',
    minStartDate: '2017-11-02'
  },
  MUV2DEEUR: {
    name: 'MUV2.DE/EUR',
    description: 'Muenchener Rueckversicherungs AG',
    minStartDate: '2015-04-21'
  },
  NBLUSUSD: {
    name: 'NBL.US/USD',
    description: 'NOBLE ENERGY INC',
    minStartDate: '2018-02-01'
  },
  NDASESEK: {
    name: 'NDA.SE/SEK',
    description: 'Nordea Bank AB',
    minStartDate: '2016-11-07'
  },
  NEEUSUSD: {
    name: 'NEE.US/USD',
    description: 'NEXTERA ENERGY INC',
    minStartDate: '2018-02-01'
  },
  NEMUSUSD: {
    name: 'NEM.US/USD',
    description: 'NEWMONT MINING CORP',
    minStartDate: '2017-05-11'
  },
  NES1VFIEUR: {
    name: 'NES1V.FI/EUR',
    description: 'Neste OYJ',
    minStartDate: '2016-11-03'
  },
  NFLXUSUSD: {
    name: 'NFLX.US/USD',
    description: 'NETFLIX INC',
    minStartDate: '2017-01-19'
  },
  NGGBGBX: {
    name: 'NG.GB/GBX',
    description: 'National Grid PLC',
    minStartDate: '2016-07-07'
  },
  NHYNONOK: {
    name: 'NHY.NO/NOK',
    description: 'Norsk Hydro ASA',
    minStartDate: '2016-11-14'
  },
  NKEUSUSD: {
    name: 'NKE.US/USD',
    description: 'NIKE INC',
    minStartDate: '2017-11-02'
  },
  NLDIDXEUR: {
    name: 'NLD.IDX/EUR',
    description: 'Netherlands 25 Index',
    minStartDate: '2013-02-27'
  },
  NOCUSUSD: {
    name: 'NOC.US/USD',
    description: 'NORTHROP GRUMMAN CORP',
    minStartDate: '2017-05-11'
  },
  NOVOBDKDKK: {
    name: 'NOVOB.DK/DKK',
    description: 'Novo Nordisk A/S',
    minStartDate: '2016-11-07'
  },
  NRE1VFIEUR: {
    name: 'NRE1V.FI/EUR',
    description: 'Nokian Renkaat OYJ',
    minStartDate: '2016-11-03'
  },
  NRGUSUSD: {
    name: 'NRG.US/USD',
    description: 'NRG ENERGY INC',
    minStartDate: '2018-02-01'
  },
  NSCUSUSD: {
    name: 'NSC.US/USD',
    description: 'NORFOLK SOUTHERN CORP',
    minStartDate: '2018-02-01'
  },
  NVDAUSUSD: {
    name: 'NVDA.US/USD',
    description: 'NVIDIA CORP',
    minStartDate: '2017-01-19'
  },
  NWLUSUSD: {
    name: 'NWL.US/USD',
    description: 'NEWELL BRANDS INC',
    minStartDate: '2017-11-02'
  },
  NXTGBGBX: {
    name: 'NXT.GB/GBX',
    description: 'Next PLC',
    minStartDate: '2016-07-06'
  },
  NZDCAD: {
    name: 'NZD/CAD',
    description: 'New Zealand Dollar vs Canadian Dollar',
    minStartDate: '2006-01-01'
  },
  NZDCHF: {
    name: 'NZD/CHF',
    description: 'New Zealand Dollar vs Swiss Franc',
    minStartDate: '2006-01-01'
  },
  NZDJPY: {
    name: 'NZD/JPY',
    description: 'New Zealand Dollar vs Japanese Yen',
    minStartDate: '2006-01-01'
  },
  NZDUSD: {
    name: 'NZD/USD',
    description: 'New Zealand Dollar vs US Dollar',
    minStartDate: '2003-08-03'
  },
  NZYMBDKDKK: {
    name: 'NZYMB.DK/DKK',
    description: 'Novozymes A/S',
    minStartDate: '2016-11-07'
  },
  OJUICECMDUSX: {
    name: 'OJUICE.CMD/USX',
    description: 'Orange Juice',
    minStartDate: '2017-10-20'
  },
  OKEUSUSD: {
    name: 'OKE.US/USD',
    description: 'ONEOK INC',
    minStartDate: '2018-02-01'
  },
  OMCUSUSD: {
    name: 'OMC.US/USD',
    description: 'OMNICOM GROUP',
    minStartDate: '2018-02-01'
  },
  ORFREUR: {
    name: 'OR.FR/EUR',
    description: "L'Oreal SA",
    minStartDate: '2016-08-05'
  },
  ORAFREUR: {
    name: 'ORA.FR/EUR',
    description: 'Orange SA',
    minStartDate: '2016-08-05'
  },
  ORCLUSUSD: {
    name: 'ORCL.US/USD',
    description: 'ORACLE CORP',
    minStartDate: '2017-11-02'
  },
  ORKNONOK: {
    name: 'ORK.NO/NOK',
    description: 'Orkla ASA',
    minStartDate: '2016-11-14'
  },
  ORLYUSUSD: {
    name: 'ORLY.US/USD',
    description: "O'REILLY AUTOMOTIVE INC",
    minStartDate: '2017-11-02'
  },
  OTE1VFIEUR: {
    name: 'OTE1V.FI/EUR',
    description: 'Outotec OYJ',
    minStartDate: '2016-11-03'
  },
  OUT1VFIEUR: {
    name: 'OUT1V.FI/EUR',
    description: 'Outokumpu OYJ',
    minStartDate: '2016-11-03'
  },
  OXYUSUSD: {
    name: 'OXY.US/USD',
    description: 'OCCIDENTAL PETROLEUM CORP',
    minStartDate: '2017-05-11'
  },
  PAH3DEEUR: {
    name: 'PAH3.DE/EUR',
    description: 'Porsche Automobil Holding SE',
    minStartDate: '2015-04-21'
  },
  PAYXUSUSD: {
    name: 'PAYX.US/USD',
    description: 'PAYCHEX INC',
    minStartDate: '2018-02-01'
  },
  PBRUSUSD: {
    name: 'PBR.US/USD',
    description: 'Petroleo Brasileiro S.A.',
    minStartDate: '2017-01-26'
  },
  PCARUSUSD: {
    name: 'PCAR.US/USD',
    description: 'PACCAR INC',
    minStartDate: '2018-02-01'
  },
  PCGUSUSD: {
    name: 'PCG.US/USD',
    description: 'P G &amp; E CORP',
    minStartDate: '2017-11-02'
  },
  PCLNUSUSD: {
    name: 'PCLN.US/USD',
    description: 'PRICELINE GROUP INC/THE',
    minStartDate: '2017-01-19'
  },
  PEPUSUSD: {
    name: 'PEP.US/USD',
    description: 'PEPSICO INC',
    minStartDate: '2017-11-02'
  },
  PFCGBGBX: {
    name: 'PFC.GB/GBX',
    description: 'Petrofac Ltd',
    minStartDate: '2016-07-08'
  },
  PFEUSUSD: {
    name: 'PFE.US/USD',
    description: 'PFIZER INC',
    minStartDate: '2017-01-19'
  },
  PGUSUSD: {
    name: 'PG.US/USD',
    description: 'PROCTER &amp; GAMBLE CO/THE',
    minStartDate: '2017-01-19'
  },
  PGRUSUSD: {
    name: 'PGR.US/USD',
    description: 'PROGRESSIVE CORP',
    minStartDate: '2018-02-01'
  },
  PHUSUSD: {
    name: 'PH.US/USD',
    description: 'PARKER HANNIFIN CORP',
    minStartDate: '2018-02-01'
  },
  PHIANLEUR: {
    name: 'PHIA.NL/EUR',
    description: 'Koninklijke Philips NV',
    minStartDate: '2016-11-14'
  },
  PLNIDXPLN: {
    name: 'PLN.IDX/PLN',
    description: 'Poland 20 Index',
    minStartDate: '2017-12-01'
  },
  PMUSUSD: {
    name: 'PM.US/USD',
    description: 'PHILIP MORRIS INTERNATIONAL',
    minStartDate: '2017-11-02'
  },
  PNCUSUSD: {
    name: 'PNC.US/USD',
    description: 'PNC FINANCIAL SERVICES GROUP',
    minStartDate: '2017-11-02'
  },
  PNDORADKDKK: {
    name: 'PNDORA.DK/DKK',
    description: 'Pandora A/S',
    minStartDate: '2016-11-08'
  },
  PPGUSUSD: {
    name: 'PPG.US/USD',
    description: 'PPG INDUSTRIES INC',
    minStartDate: '2018-02-02'
  },
  PRUGBGBX: {
    name: 'PRU.GB/GBX',
    description: 'Prudential PLC',
    minStartDate: '2016-07-07'
  },
  PRUUSUSD: {
    name: 'PRU.US/USD',
    description: 'PRUDENTIAL FINANCIAL INC',
    minStartDate: '2018-02-01'
  },
  PSAUSUSD: {
    name: 'PSA.US/USD',
    description: 'PUBLIC STORAGE',
    minStartDate: '2018-02-01'
  },
  PSMDEEUR: {
    name: 'PSM.DE/EUR',
    description: 'ProSiebenSat.1 Media AG',
    minStartDate: '2015-04-20'
  },
  PSNGBGBX: {
    name: 'PSN.GB/GBX',
    description: 'Persimmon PLC',
    minStartDate: '2016-07-08'
  },
  PSONGBGBX: {
    name: 'PSON.GB/GBX',
    description: 'Pearson PLC',
    minStartDate: '2016-07-07'
  },
  PSXUSUSD: {
    name: 'PSX.US/USD',
    description: 'PHILLIPS 66',
    minStartDate: '2018-02-01'
  },
  PUBFREUR: {
    name: 'PUB.FR/EUR',
    description: 'Publicis Groupe SA',
    minStartDate: '2016-08-05'
  },
  PXDUSUSD: {
    name: 'PXD.US/USD',
    description: 'PIONEER NATURAL RESOURCES CO',
    minStartDate: '2017-11-02'
  },
  PYPLUSUSD: {
    name: 'PYPL.US/USD',
    description: 'PAYPAL HOLDINGS INC',
    minStartDate: '2017-11-02'
  },
  QCOMUSUSD: {
    name: 'QCOM.US/USD',
    description: 'QUALCOMM INC',
    minStartDate: '2017-11-02'
  },
  QQQUSUSD: {
    name: 'QQQ.US/USD',
    description: 'PowerShares QQQ ETF',
    minStartDate: '2017-01-23'
  },
  RANDNLEUR: {
    name: 'RAND.NL/EUR',
    description: 'Randstad Holding NV',
    minStartDate: '2016-11-14'
  },
  RBGBGBX: {
    name: 'RB.GB/GBX',
    description: 'Reckitt Benckiser Group PLC',
    minStartDate: '2016-07-06'
  },
  RBIATEUR: {
    name: 'RBI.AT/EUR',
    description: 'Raiffeisen Bank International AG',
    minStartDate: '2016-11-02'
  },
  RBSGBGBX: {
    name: 'RBS.GB/GBX',
    description: 'Royal Bank of Scotland Group PLC',
    minStartDate: '2016-07-08'
  },
  RDSANLEUR: {
    name: 'RDSA.NL/EUR',
    description: 'Royal Dutch Shell PLC',
    minStartDate: '2016-11-14'
  },
  RDSBGBGBX: {
    name: 'RDSB.GB/GBX',
    description: 'Royal Dutch Shell PLC',
    minStartDate: '2016-11-01'
  },
  REEESEUR: {
    name: 'REE.ES/EUR',
    description: 'Red Electrica Corp SA',
    minStartDate: '2016-11-14'
  },
  REGNUSUSD: {
    name: 'REGN.US/USD',
    description: 'REGENERON PHARMACEUTICALS',
    minStartDate: '2017-11-02'
  },
  RELGBGBX: {
    name: 'REL.GB/GBX',
    description: 'Reed Elsevier PLC',
    minStartDate: '2016-07-08'
  },
  RENNLEUR: {
    name: 'REN.NL/EUR',
    description: 'RELX NV',
    minStartDate: '2016-11-14'
  },
  REPESEUR: {
    name: 'REP.ES/EUR',
    description: 'Repsol SA',
    minStartDate: '2016-11-14'
  },
  RFUSUSD: {
    name: 'RF.US/USD',
    description: 'REGIONS FINANCIAL CORP',
    minStartDate: '2018-02-01'
  },
  RHTUSUSD: {
    name: 'RHT.US/USD',
    description: 'RED HAT INC',
    minStartDate: '2018-02-01'
  },
  RIFREUR: {
    name: 'RI.FR/EUR',
    description: 'Pernod-Ricard SA',
    minStartDate: '2016-08-05'
  },
  RIOGBGBX: {
    name: 'RIO.GB/GBX',
    description: 'Rio Tinto PLC',
    minStartDate: '2016-07-06'
  },
  RMGGBGBX: {
    name: 'RMG.GB/GBX',
    description: 'Royal Mail PLC',
    minStartDate: '2016-07-07'
  },
  RNOFREUR: {
    name: 'RNO.FR/EUR',
    description: 'Renault SA',
    minStartDate: '2016-08-05'
  },
  ROSTUSUSD: {
    name: 'ROST.US/USD',
    description: 'ROSS STORES INC',
    minStartDate: '2018-02-01'
  },
  RRGBGBX: {
    name: 'RR.GB/GBX',
    description: 'Rolls-Royce Holdings PLC',
    minStartDate: '2016-07-08'
  },
  RRCUSUSD: {
    name: 'RRC.US/USD',
    description: 'RANGE RESOURCES CORP',
    minStartDate: '2018-02-01'
  },
  RRSGBGBX: {
    name: 'RRS.GB/GBX',
    description: 'Randgold Resources Ltd',
    minStartDate: '2016-07-06'
  },
  RSAGBGBX: {
    name: 'RSA.GB/GBX',
    description: 'RSA Insurance Group PLC',
    minStartDate: '2016-07-07'
  },
  RTNUSUSD: {
    name: 'RTN.US/USD',
    description: 'RAYTHEON COMPANY',
    minStartDate: '2018-02-01'
  },
  RWEDEEUR: {
    name: 'RWE.DE/EUR',
    description: 'RWE AG',
    minStartDate: '2015-04-16'
  },
  SAFFREUR: {
    name: 'SAF.FR/EUR',
    description: 'Safran SA',
    minStartDate: '2016-08-05'
  },
  SANESEUR: {
    name: 'SAN.ES/EUR',
    description: 'Banco Santander SA',
    minStartDate: '2016-11-14'
  },
  SANFREUR: {
    name: 'SAN.FR/EUR',
    description: 'Sanofi',
    minStartDate: '2016-08-05'
  },
  SANDSESEK: {
    name: 'SAND.SE/SEK',
    description: 'Sandvik AB',
    minStartDate: '2016-11-08'
  },
  SAPDEEUR: {
    name: 'SAP.DE/EUR',
    description: 'SAP AG',
    minStartDate: '2015-04-16'
  },
  SBRYGBGBX: {
    name: 'SBRY.GB/GBX',
    description: 'J Sainsbury PLC',
    minStartDate: '2016-07-07'
  },
  SBUXUSUSD: {
    name: 'SBUX.US/USD',
    description: 'STARBUCKS CORP',
    minStartDate: '2017-11-02'
  },
  SCABSESEK: {
    name: 'SCAB.SE/SEK',
    description: 'Svenska Cellulosa AB',
    minStartDate: '2016-11-07'
  },
  SCHWUSUSD: {
    name: 'SCHW.US/USD',
    description: 'SCHWAB (CHARLES) CORP',
    minStartDate: '2017-11-02'
  },
  SDFDEEUR: {
    name: 'SDF.DE/EUR',
    description: 'K+S AG',
    minStartDate: '2015-04-15'
  },
  SEBASESEK: {
    name: 'SEBA.SE/SEK',
    description: 'Skandinaviska Enskilda Banken AB',
    minStartDate: '2016-11-14'
  },
  SECUBSESEK: {
    name: 'SECUB.SE/SEK',
    description: 'Securitas AB',
    minStartDate: '2016-11-07'
  },
  SGDIDXSGD: {
    name: 'SGD.IDX/SGD',
    description: 'Singapore Blue Chip Cash Index',
    minStartDate: '2017-12-01'
  },
  SGDJPY: {
    name: 'SGD/JPY',
    description: 'Singapore Dollar vs Japanese Yen',
    minStartDate: '2007-03-13'
  },
  SGEGBGBX: {
    name: 'SGE.GB/GBX',
    description: 'Sage Group PLC/The',
    minStartDate: '2016-07-08'
  },
  SGOFREUR: {
    name: 'SGO.FR/EUR',
    description: 'Cie de St-Gobain',
    minStartDate: '2016-10-31'
  },
  SHPGBGBX: {
    name: 'SHP.GB/GBX',
    description: 'Shire PLC',
    minStartDate: '2016-07-06'
  },
  SHWUSUSD: {
    name: 'SHW.US/USD',
    description: 'SHERWIN-WILLIAMS COMPANY',
    minStartDate: '2018-02-01'
  },
  SIEDEEUR: {
    name: 'SIE.DE/EUR',
    description: 'Siemens AG',
    minStartDate: '2015-04-20'
  },
  SJMUSUSD: {
    name: 'SJM.US/USD',
    description: 'JM SMUCKER COMPANY',
    minStartDate: '2018-02-01'
  },
  SKABSESEK: {
    name: 'SKAB.SE/SEK',
    description: 'Skanska AB',
    minStartDate: '2016-11-07'
  },
  SKFBSESEK: {
    name: 'SKFB.SE/SEK',
    description: 'SKF AB',
    minStartDate: '2016-11-07'
  },
  SKYGBGBX: {
    name: 'SKY.GB/GBX',
    description: 'Sky Plc',
    minStartDate: '2016-07-07'
  },
  SLVUSUSD: {
    name: 'SLV.US/USD',
    description: 'iShares Silver Trust ETF',
    minStartDate: '2018-02-01'
  },
  SMINGBGBX: {
    name: 'SMIN.GB/GBX',
    description: 'Smiths Group PLC',
    minStartDate: '2016-07-08'
  },
  SNGBGBX: {
    name: 'SN.GB/GBX',
    description: 'Smith &amp; Nephew PLC',
    minStartDate: '2016-07-08'
  },
  SNAPUSUSD: {
    name: 'SNAP.US/USD',
    description: 'SNAP Inc',
    minStartDate: '2017-11-02'
  },
  SOUSUSD: {
    name: 'SO.US/USD',
    description: 'SOUTHERN CO/THE',
    minStartDate: '2017-11-02'
  },
  SOLBBEEUR: {
    name: 'SOLB.BE/EUR',
    description: 'Solvay SA',
    minStartDate: '2016-11-07'
  },
  SPGUSUSD: {
    name: 'SPG.US/USD',
    description: 'SIMON PROPERTY GROUP INC',
    minStartDate: '2017-11-02'
  },
  SPYUSUSD: {
    name: 'SPY.US/USD',
    description: 'SPDR S&amp;P 500 ETF',
    minStartDate: '2017-02-16'
  },
  SSEGBGBX: {
    name: 'SSE.GB/GBX',
    description: 'SSE PLC',
    minStartDate: '2016-07-08'
  },
  STANGBGBX: {
    name: 'STAN.GB/GBX',
    description: 'Standard Chartered PLC',
    minStartDate: '2016-07-07'
  },
  STERVFIEUR: {
    name: 'STERV.FI/EUR',
    description: 'Stora Enso OYJ',
    minStartDate: '2016-11-03'
  },
  STIUSUSD: {
    name: 'STI.US/USD',
    description: 'SUNTRUST BANKS INC',
    minStartDate: '2018-02-01'
  },
  STLNONOK: {
    name: 'STL.NO/NOK',
    description: 'Statoil ASA',
    minStartDate: '2016-11-14'
  },
  STTUSUSD: {
    name: 'STT.US/USD',
    description: 'STATE STREET CORP',
    minStartDate: '2018-02-01'
  },
  STZUSUSD: {
    name: 'STZ.US/USD',
    description: 'CONSTELLATION BRANDS INC-A',
    minStartDate: '2018-02-01'
  },
  SUFREUR: {
    name: 'SU.FR/EUR',
    description: 'Schneider Electric SA',
    minStartDate: '2016-08-05'
  },
  SUGARCMDUSD: {
    name: 'SUGAR.CMD/USD',
    description: 'London Sugar No.5',
    minStartDate: '2017-10-02'
  },
  SVTGBGBX: {
    name: 'SVT.GB/GBX',
    description: 'Severn Trent PLC',
    minStartDate: '2016-07-06'
  },
  SWEDASESEK: {
    name: 'SWEDA.SE/SEK',
    description: 'Swedbank AB',
    minStartDate: '2016-11-07'
  },
  SWKUSUSD: {
    name: 'SWK.US/USD',
    description: 'STANLEY BLACK &amp; DECKER INC',
    minStartDate: '2018-02-01'
  },
  SWMASESEK: {
    name: 'SWMA.SE/SEK',
    description: 'Swedish Match AB',
    minStartDate: '2016-11-07'
  },
  SYKUSUSD: {
    name: 'SYK.US/USD',
    description: 'STRYKER CORP',
    minStartDate: '2018-02-01'
  },
  SYMCUSUSD: {
    name: 'SYMC.US/USD',
    description: 'SYMANTEC CORP',
    minStartDate: '2018-02-01'
  },
  SYYUSUSD: {
    name: 'SYY.US/USD',
    description: 'SYSCO CORP',
    minStartDate: '2018-02-01'
  },
  TUSUSD: {
    name: 'T.US/USD',
    description: 'AT&amp;T INC',
    minStartDate: '2017-01-19'
  },
  TAPUSUSD: {
    name: 'TAP.US/USD',
    description: 'MOLSON COORS BREWING CO -B',
    minStartDate: '2018-02-01'
  },
  TATEGBGBX: {
    name: 'TATE.GB/GBX',
    description: 'Tate &amp; Lyle PLC',
    minStartDate: '2016-07-08'
  },
  TEFESEUR: {
    name: 'TEF.ES/EUR',
    description: 'Telefonica SA',
    minStartDate: '2016-11-14'
  },
  TELNONOK: {
    name: 'TEL.NO/NOK',
    description: 'Telenor ASA',
    minStartDate: '2016-11-14'
  },
  TEL2BSESEK: {
    name: 'TEL2B.SE/SEK',
    description: 'Tele2 AB',
    minStartDate: '2016-11-08'
  },
  TEVAUSUSD: {
    name: 'TEVA.US/USD',
    description: 'TEVA PHARMACEUTICAL-SP ADR',
    minStartDate: '2017-11-02'
  },
  TGTUSUSD: {
    name: 'TGT.US/USD',
    description: 'TARGET CORP',
    minStartDate: '2017-11-02'
  },
  TIFUSUSD: {
    name: 'TIF.US/USD',
    description: 'TIFFANY &amp; CO',
    minStartDate: '2018-02-01'
  },
  TJXUSUSD: {
    name: 'TJX.US/USD',
    description: 'TJX COMPANIES INC',
    minStartDate: '2017-11-02'
  },
  TKADEEUR: {
    name: 'TKA.DE/EUR',
    description: 'ThyssenKrupp AG',
    minStartDate: '2015-04-14'
  },
  TLS1VFIEUR: {
    name: 'TLS1V.FI/EUR',
    description: 'Telia Company AB',
    minStartDate: '2016-11-09'
  },
  TLSNSESEK: {
    name: 'TLSN.SE/SEK',
    description: 'Telia Company AB',
    minStartDate: '2016-11-14'
  },
  TLTUSUSD: {
    name: 'TLT.US/USD',
    description: 'iShares 20+ Year Treasury Bond ETF',
    minStartDate: '2017-01-23'
  },
  TLWGBGBX: {
    name: 'TLW.GB/GBX',
    description: 'Tullow Oil PLC',
    minStartDate: '2016-07-07'
  },
  TMOUSUSD: {
    name: 'TMO.US/USD',
    description: 'THERMO FISHER SCIENTIFIC INC',
    minStartDate: '2017-11-02'
  },
  TPKGBGBX: {
    name: 'TPK.GB/GBX',
    description: 'Travis Perkins PLC',
    minStartDate: '2016-07-08'
  },
  TROWUSUSD: {
    name: 'TROW.US/USD',
    description: 'T ROWE PRICE GROUP INC',
    minStartDate: '2018-02-01'
  },
  TRVUSUSD: {
    name: 'TRV.US/USD',
    description: 'TRAVELERS COS INC/THE',
    minStartDate: '2017-11-02'
  },
  TRYJPY: {
    name: 'TRY/JPY',
    description: 'Turkish Lira vs Japanese Yen',
    minStartDate: '2010-05-09'
  },
  TSCOGBGBX: {
    name: 'TSCO.GB/GBX',
    description: 'Tesco PLC',
    minStartDate: '2016-07-08'
  },
  TSLAUSUSD: {
    name: 'TSLA.US/USD',
    description: 'TESLA MOTORS INC',
    minStartDate: '2017-01-19'
  },
  TSMUSUSD: {
    name: 'TSM.US/USD',
    description: 'Taiwan Semiconductor Manufacturing Company Limited',
    minStartDate: '2018-02-01'
  },
  TSNUSUSD: {
    name: 'TSN.US/USD',
    description: 'TYSON FOODS INC-CL A',
    minStartDate: '2018-02-01'
  },
  TUI1DEEUR: {
    name: 'TUI1.DE/EUR',
    description: 'TUI AG',
    minStartDate: '2015-04-15'
  },
  TWTRUSUSD: {
    name: 'TWTR.US/USD',
    description: 'TWITTER INC',
    minStartDate: '2017-11-02'
  },
  TXNUSUSD: {
    name: 'TXN.US/USD',
    description: 'TEXAS INSTRUMENTS INC',
    minStartDate: '2017-11-02'
  },
  UCBBEEUR: {
    name: 'UCB.BE/EUR',
    description: 'UCB SA',
    minStartDate: '2016-11-07'
  },
  UGFREUR: {
    name: 'UG.FR/EUR',
    description: 'Peugeot SA',
    minStartDate: '2016-08-05'
  },
  UKGILTTRGBP: {
    name: 'UKGILT.TR/GBP',
    description: 'UK Long Gilt',
    minStartDate: '2017-12-26'
  },
  ULTAUSUSD: {
    name: 'ULTA.US/USD',
    description: 'ULTA SALON COSMETICS &amp; FRAGR',
    minStartDate: '2017-11-02'
  },
  ULVRGBGBX: {
    name: 'ULVR.GB/GBX',
    description: 'Unilever PLC',
    minStartDate: '2016-07-06'
  },
  UMIBEEUR: {
    name: 'UMI.BE/EUR',
    description: 'Umicore SA',
    minStartDate: '2016-11-07'
  },
  UNANLEUR: {
    name: 'UNA.NL/EUR',
    description: 'Unilever NV',
    minStartDate: '2016-11-14'
  },
  UNHUSUSD: {
    name: 'UNH.US/USD',
    description: 'UNITEDHEALTH GROUP INC',
    minStartDate: '2017-11-02'
  },
  UNPUSUSD: {
    name: 'UNP.US/USD',
    description: 'UNION PACIFIC CORP',
    minStartDate: '2017-11-15'
  },
  UPSUSUSD: {
    name: 'UPS.US/USD',
    description: 'UNITED PARCEL SERVICE-CL B',
    minStartDate: '2017-11-15'
  },
  USBUSUSD: {
    name: 'USB.US/USD',
    description: 'US BANCORP',
    minStartDate: '2017-11-15'
  },
  USDCAD: {
    name: 'USD/CAD',
    description: 'US Dollar vs Canadian Dollar',
    minStartDate: '2003-08-03'
  },
  USDCHF: {
    name: 'USD/CHF',
    description: 'US Dollar vs Swiss Franc',
    minStartDate: '2003-05-04'
  },
  USDCNH: {
    name: 'USD/CNH',
    description: 'US Dollar vs Offshore Chinese Renminbi',
    minStartDate: '2012-06-27'
  },
  USDCZK: {
    name: 'USD/CZK',
    description: 'US Dollar vs Czech Koruna',
    minStartDate: '2016-01-03'
  },
  USDDKK: {
    name: 'USD/DKK',
    description: 'US Dollar vs Danish Krone',
    minStartDate: '2003-08-04'
  },
  USDHKD: {
    name: 'USD/HKD',
    description: 'US Dollar vs Hong Kong Dollar',
    minStartDate: '2007-03-13'
  },
  USDHUF: {
    name: 'USD/HUF',
    description: 'US Dollar vs Hungarian Forint',
    minStartDate: '2007-03-13'
  },
  USDILS: {
    name: 'USD/ILS',
    description: 'US Dollar vs Israeli Shekel',
    minStartDate: '2016-12-15'
  },
  USDJPY: {
    name: 'USD/JPY',
    description: 'US Dollar vs Japanese Yen',
    minStartDate: '2003-05-04'
  },
  USDMXN: {
    name: 'USD/MXN',
    description: 'US Dollar vs Mexican Peso',
    minStartDate: '2007-03-13'
  },
  USDNOK: {
    name: 'USD/NOK',
    description: 'US Dollar vs Norwegian Krone',
    minStartDate: '2003-08-04'
  },
  USDPLN: {
    name: 'USD/PLN',
    description: 'US Dollar vs Polish Zloty',
    minStartDate: '2007-03-13'
  },
  USDRON: {
    name: 'USD/RON',
    description: 'US Dollar vs Romanian Leu',
    minStartDate: '2016-12-18'
  },
  USDRUB: {
    name: 'USD/RUB',
    description: 'US Dollar vs Russian Ruble',
    minStartDate: '2007-03-13'
  },
  USDSEK: {
    name: 'USD/SEK',
    description: 'US Dollar vs Swedish Krona',
    minStartDate: '2003-08-04'
  },
  USDSGD: {
    name: 'USD/SGD',
    description: 'US Dollar vs Singapore Dollar',
    minStartDate: '2004-11-16'
  },
  USDTHB: {
    name: 'USD/THB',
    description: 'US Dollar vs Thai Baht',
    minStartDate: '2017-02-13'
  },
  USDTRY: {
    name: 'USD/TRY',
    description: 'US Dollar vs Turkish Lira',
    minStartDate: '2007-03-13'
  },
  USDZAR: {
    name: 'USD/ZAR',
    description: 'US Dollar vs South African Rand',
    minStartDate: '1997-10-13'
  },
  USOUSUSD: {
    name: 'USO.US/USD',
    description: 'United States Oil',
    minStartDate: '2017-01-26'
  },
  UTXUSUSD: {
    name: 'UTX.US/USD',
    description: 'UNITED TECHNOLOGIES CORP',
    minStartDate: '2017-11-15'
  },
  UUGBGBX: {
    name: 'UU.GB/GBX',
    description: 'United Utilities Group PLC',
    minStartDate: '2016-07-08'
  },
  VUSUSD: {
    name: 'V.US/USD',
    description: 'VISA INC-CLASS A SHARES',
    minStartDate: '2017-01-19'
  },
  VALEUSUSD: {
    name: 'VALE.US/USD',
    description: 'Vale S.A.',
    minStartDate: '2017-01-26'
  },
  VEAUSUSD: {
    name: 'VEA.US/USD',
    description: 'Vanguard FTSE Developed Markets ETF',
    minStartDate: '2017-11-15'
  },
  VFCUSUSD: {
    name: 'VFC.US/USD',
    description: 'VF CORP',
    minStartDate: '2018-02-01'
  },
  VGKUSUSD: {
    name: 'VGK.US/USD',
    description: 'Vanguard FTSE Europe ETF',
    minStartDate: '2018-02-01'
  },
  VIABUSUSD: {
    name: 'VIAB.US/USD',
    description: 'VIACOM INC-CLASS B',
    minStartDate: '2018-02-01'
  },
  VIEFREUR: {
    name: 'VIE.FR/EUR',
    description: 'Veolia Environnement SA',
    minStartDate: '2016-08-05'
  },
  VIVFREUR: {
    name: 'VIV.FR/EUR',
    description: 'Vivendi SA',
    minStartDate: '2016-08-05'
  },
  VKFREUR: {
    name: 'VK.FR/EUR',
    description: 'Vallourec SA',
    minStartDate: '2016-08-05'
  },
  VLOUSUSD: {
    name: 'VLO.US/USD',
    description: 'VALERO ENERGY CORP',
    minStartDate: '2017-11-15'
  },
  VMCUSUSD: {
    name: 'VMC.US/USD',
    description: 'VULCAN MATERIALS CO',
    minStartDate: '2018-02-01'
  },
  VNADEEUR: {
    name: 'VNA.DE/EUR',
    description: 'Vonovia SE',
    minStartDate: '2015-04-14'
  },
  VNQUSUSD: {
    name: 'VNQ.US/USD',
    description: 'Vanguard REIT ETF',
    minStartDate: '2017-11-15'
  },
  VODGBGBX: {
    name: 'VOD.GB/GBX',
    description: 'Vodafone Group PLC',
    minStartDate: '2016-07-07'
  },
  VOEATEUR: {
    name: 'VOE.AT/EUR',
    description: 'Voestalpine AG',
    minStartDate: '2016-11-04'
  },
  VOLVBSESEK: {
    name: 'VOLVB.SE/SEK',
    description: 'Volvo AB',
    minStartDate: '2016-11-07'
  },
  VOW3DEEUR: {
    name: 'VOW3.DE/EUR',
    description: 'Volkswagen AG',
    minStartDate: '2015-04-14'
  },
  VPKNLEUR: {
    name: 'VPK.NL/EUR',
    description: 'Koninklijke Vopak NV',
    minStartDate: '2016-11-14'
  },
  VRTXUSUSD: {
    name: 'VRTX.US/USD',
    description: 'VERTEX PHARMACEUTICALS INC',
    minStartDate: '2017-11-15'
  },
  VWSDKDKK: {
    name: 'VWS.DK/DKK',
    description: 'Vestas Wind Systems A/S',
    minStartDate: '2016-11-07'
  },
  VXXUSUSD: {
    name: 'VXX.US/USD',
    description: 'iPath S&amp;P 500 VIX ST Futures ETN',
    minStartDate: '2017-01-26'
  },
  VZUSUSD: {
    name: 'VZ.US/USD',
    description: 'VERIZON COMMUNICATIONS INC',
    minStartDate: '2017-11-15'
  },
  WBAUSUSD: {
    name: 'WBA.US/USD',
    description: 'WALGREENS BOOTS ALLIANCE INC',
    minStartDate: '2017-11-15'
  },
  WDCUSUSD: {
    name: 'WDC.US/USD',
    description: 'WESTERN DIGITAL CORP',
    minStartDate: '2017-11-15'
  },
  WEIRGBGBX: {
    name: 'WEIR.GB/GBX',
    description: 'Weir Group PLC/The',
    minStartDate: '2016-07-08'
  },
  WFCUSUSD: {
    name: 'WFC.US/USD',
    description: 'WELLS FARGO &amp; CO',
    minStartDate: '2017-01-23'
  },
  WHRUSUSD: {
    name: 'WHR.US/USD',
    description: 'WHIRLPOOL CORP',
    minStartDate: '2018-02-01'
  },
  WKLNLEUR: {
    name: 'WKL.NL/EUR',
    description: 'Wolters Kluwer NV',
    minStartDate: '2016-11-14'
  },
  WMTUSUSD: {
    name: 'WMT.US/USD',
    description: 'WAL-MART STORES INC',
    minStartDate: '2017-11-15'
  },
  WOSGBGBX: {
    name: 'WOS.GB/GBX',
    description: 'Wolseley PLC',
    minStartDate: '2016-07-06'
  },
  WPPGBGBX: {
    name: 'WPP.GB/GBX',
    description: 'WPP PLC',
    minStartDate: '2016-07-08'
  },
  WTBGBGBX: {
    name: 'WTB.GB/GBX',
    description: 'Whitbread PLC',
    minStartDate: '2016-07-06'
  },
  WYNNUSUSD: {
    name: 'WYNN.US/USD',
    description: 'WYNN RESORTS LTD',
    minStartDate: '2017-11-15'
  },
  XUSUSD: {
    name: 'X.US/USD',
    description: 'UNITED STATES STEEL CORP',
    minStartDate: '2017-11-15'
  },
  XAGUSD: {
    name: 'XAG/USD',
    description: 'Spot silver',
    minStartDate: '1997-08-13'
  },
  XAUUSD: {
    name: 'XAU/USD',
    description: 'Spot gold',
    minStartDate: '1999-09-01'
  },
  XLEUSUSD: {
    name: 'XLE.US/USD',
    description: 'Energy Select Sector SPDR Fund',
    minStartDate: '2017-11-15'
  },
  XLFUSUSD: {
    name: 'XLF.US/USD',
    description: 'Financial Select Sector SPDR Fund',
    minStartDate: '2017-01-23'
  },
  XLIUSUSD: {
    name: 'XLI.US/USD',
    description: 'Industrial Select Sector SPDR Fund',
    minStartDate: '2017-01-23'
  },
  XLKUSUSD: {
    name: 'XLK.US/USD',
    description: 'Technology Select Sector SPDR Fund',
    minStartDate: '2017-11-15'
  },
  XLNXUSUSD: {
    name: 'XLNX.US/USD',
    description: 'XILINX INC',
    minStartDate: '2018-02-01'
  },
  XLPUSUSD: {
    name: 'XLP.US/USD',
    description: 'Consumer Staples Select Sector SPDR Fund',
    minStartDate: '2017-01-23'
  },
  XLUUSUSD: {
    name: 'XLU.US/USD',
    description: 'Utilities Select Sector SPDR Fund',
    minStartDate: '2017-11-15'
  },
  XLVUSUSD: {
    name: 'XLV.US/USD',
    description: 'Health Care Select Sector SPDR Fund',
    minStartDate: '2017-11-15'
  },
  XLYUSUSD: {
    name: 'XLY.US/USD',
    description: 'Consumer Discretionary Select Sector SPDR Fund',
    minStartDate: '2017-11-15'
  },
  XOMUSUSD: {
    name: 'XOM.US/USD',
    description: 'EXXON MOBIL CORP',
    minStartDate: '2017-01-19'
  },
  XOPUSUSD: {
    name: 'XOP.US/USD',
    description: 'SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF',
    minStartDate: '2017-01-26'
  },
  YUMUSUSD: {
    name: 'YUM.US/USD',
    description: 'YUM! BRANDS INC',
    minStartDate: '2018-02-01'
  },
  ZARJPY: {
    name: 'ZAR/JPY',
    description: 'South African Rand vs Japanese Yen',
    minStartDate: '1999-03-03'
  },
  ZBHUSUSD: {
    name: 'ZBH.US/USD',
    description: 'ZIMMER BIOMET HOLDINGS INC',
    minStartDate: '2018-02-01'
  }
};

export { symbols };
