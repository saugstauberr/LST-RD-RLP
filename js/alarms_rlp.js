var alarms_rlp = {
    0: "KF Rollstuhl",
    1: "KF Tragestuhl",
    2: "KF liegend",
    3: "KTW sitzend (Tragestuhl)",
    4: "KTW liegend",
    5: "KTW dringend / sofort",
    6: "RTW ohne Sondersignal",
    7: "RTW mit Sondersignal",
    8: "Notarzt",
    9: "NA-Nachforderung",
    10: "Bewusstlosigkeit",
    11: "ICB / SAB",
    12: "Kopfschmerzen",
    13: "Krampfanfall (anhaltend / Status epilepticus)",
    14: "Krampfanfall, Zustand nach",
    15: "Neurologie, sonstiges",
    16: "Schlaganfall, >24h Symptombeginn",
    17: "Schlaganfall, <24h Symptombeginn",
    19: "Schwindel",
    20: "Aspiration",
    21: "Asthma / COPD",
    22: "Atemnot, akute",
    23: "Atmung, sonstiges",
    24: "Bronchitis / Pneumonie (o. nähere Angabe)",
    25: "Pneumothorax",
    30: "Akutes Koronarsyndrom",
    32: "Akuter Thoraxschmerz",
    33: "Aortenaneurysma",
    34: "Arrhythmie",
    35: "Arterieller Verschluss",
    36: "Herzinsuffizienz",
    37: "Herz-Kreislauf, sonstiges",
    38: "Hypertensive Entgleisung (mit Sympt.)",
    39: "Hypertensive Entgleisung (ohne Sympt.)",
    40: "Hypotonie",
    41: "Kreislaufstillstand",
    42: "Lungenembolie",
    43: "Lungenödem, kardiales",
    44: "Orthostase",
    45: "Schock, unklar",
    46: "Synkope",
    47: "Thrombose",
    48: "Implantierter Defi ausgelöst",
    50: "Abdomen, akut",
    51: "Abdomen, sonstiges",
    52: "Appendizitis",
    53: "Erbrechen",
    54: "Gastrointestinale Blutung / GI-Blutung",
    55: "Ileus",
    56: "Kolik",
    58: "Blutung, sonstiges",
    59: "Blutung, stark",
    60: "Allgemeinzustand, schlechter",
    61: "Anaphylaxie",
    62: "Bandscheibenbeschwerden / Lumbago",
    64: "Glaukom",
    65: "Hilflose Person",
    66: "Multiorganversagen",
    67: "Schmerzsyndrom, akutes",
    68: "Sepsis",
    69: "Trunkenheit (ohne Intoxikation!)",
    70: "Abort - Fehlgeburt",
    71: "Blutung, vaginale",
    72: "Eklampsie",
    73: "Geburt, beginnend (+ / - Wehentätigkeit)",
    74: "Geburt, vollendet",
    75: "Gestose",
    76: "Gynäkologie, sonstiges",
    80: "Fremdkörper untere Atemwege / Ösophagus",
    81: "HNO, sonstiges",
    82: "Hörsturz",
    83: "Kieferfraktur",
    84: "Nachblutung, nach HNO-OP",
    85: "Nasenbluten",
    86: "Tracheostoma- Blutung",
    87: "Tracheostoma-Sekretverhalt",
    88: "ZMK / MKG, o. nähere Angaben",
    100: "Hepatitis B, ohne Erregerfreisetzung",
    101: "Hepatitis C, ohne Erregerfreisetzung",
    102: "HIV, ohne Erregerfreisetzung",
    103: "Legionellose",
    104: "geschlossene Tuberkulose",
    105: "Fieberhafter Infekt, ohne Tröpfchenfreisetzung",
    106: "Herpes zoster (Gürtelrose) mit abgedeckten Hautläsionen",
    110: "ESBL-Infektion",
    112: "Hepatitis A oder E",
    113: "MRSA, ohne äußere Besiedlung/ Infektion bzw. abgedeckt",
    114: "Pfeiffer Drüsenfieber (Mononucl.), ohne Kontamination",
    115: "Salmonelleninfektion",
    116: "VRE-/VSE-Infektion",
    117: "3MRGN, Multires. gramneg. Stäbchen, z. B. Acinetobacter",
    118: "Hepatitis B, mit Erregerfreisetzung",
    119: "Hepatitis C, mit Erregerfreisetzung",
    120: "HIV, mit Erregerfreisetzung",
    121: "Clostridium difficile-Infektion",
    122: "Diphtherie",
    123: "Diarrhoe, unklare Ursache",
    124: "Hautausschlag, mit Fieber, unklarer Ursache",
    125: "Herpes zoster (Gürtel.), od. Windpocken, offene Hautläsion",
    126: "Influenza, mit Erregerfreisetzung",
    127: "Masern",
    128: "Meningitis, bakteriell",
    129: "MRSA, m. äußerer Besiedlung/Infekt. bzw. nicht abgedeckt",
    130: "Norovirus-Infektion",
    131: "Pertussis (Keuchhusten)",
    132: "Pneumokokken-Infektion",
    133: "Rotavirus-Infektion",
    134: "Scharlach",
    135: "Tuberkulose, offen",
    136: "Infektion, sonstiges (z. B. Fieber mit Tröpfchenfreisetzung)",
    137: "Legionellose, mit Erregerfreisetzung",
    138: "Clostridium botulinum Septii-Meningitis",
    139: "Pseudomonas mit Erregerfreisetzung",
    140: "4MRGN, Multires. gramneg. Stäbchen, z. B. Acinetobacter",
    141: "Cholera",
    142: "Hämorrhagisches Fieber (auch Verdacht)",
    143: "Polio, akute",
    144: "Respiratorische Infektion nach Tropenaufenthalt",
    145: "Clostridium difficile-Infektion mit massiver Kontamination",
    150: "Influenza, ohne Erregerfreisetzung",
    151: "Krätzmilben",
    152: "Läuse",
    153: "Flöhe",
    154: "Pfeiffer Drüsenfieber (Mononucl.) mit Kontamination",
    155: "Coronavirus SARS-CoV-2 (incl. Verdachtsfälle)",
    200: "Intoxikation, Alkohol",
    201: "Intoxikation, Drogen",
    202: "Intoxikation, Giftpflanzen",
    203: "Intoxikation, Lebensmittel",
    204: "Intoxikation, Medikamente",
    205: "Intoxikation, Pflanzenschutzmittel",
    206: "Intoxikation, Rauchgas",
    207: "Intoxikation, sonstige",
    208: "Intoxikation, tierische Gifte",
    300: "ambulant",
    301: "Dialyse",
    302: "Einweisung",
    303: "Entlassung",
    304: "KTP sonstige",
    305: "Röntgen / CT / MRT / NMR / Bestrahlung",
    310: "Fernfahrt (> 150 km Transportstrecke)",
    333: "Rücktransport",
    340: "Krankenfahrt",
    399: "KTW-Pause",
    421: "Delir",
    422: "Depression",
    423: "Erregungszustand",
    424: "Psychiatrie, sonstiges",
    425: "Psychose",
    426: "Suizidalität",
    427: "Zustand fremd-/eigengefährdet",
    428: "Verwirrtheit",
    429: "Zwangseinweisung",
    500: "Inkubatortransport",
    501: "Sekundärtransport, ITH",
    502: "Sekundärtransport, ITW",
    503: "Sekundärtransport, KTW",
    504: "Sekundärtransport, mit Klinikarzt",
    505: "Sekundärtransport, mit NEF-Arzt",
    506: "Sekundärtransport, RTH",
    507: "Sekundärtransport, RTW",
    508: "ZKS-Anfrage",
    600: "Bereitstellungseinsatz für Feuerwehr",
    601: "Bereitstellungseinsatz für Polizei",
    602: "Blut- / Organtransport",
    603: "Routinedesinfektion",
    604: "Dienstfahrt",
    605: "Doppeltransport",
    606: "Hausnotruf",
    607: "Hausnotruf, 24 Std. Alarm",
    608: "Hilfestellung",
    609: "Notfallseelsorger / KID",
    611: "OrgL + LNA + SEG",
    612: "Präfinaler Zustand",
    613: "RTH-Landeplatztransfer",
    614: "Sanitätsdienst",
    615: "Schwergewichtigentransport",
    616: "Soziale Krise",
    617: "Tragehilfe",
    618: "Türöffnung",
    619: "SEG",
    620: "LNA+OrgL",
    621: "Telefon. CPR-Anleitung",
    622: "sonstige telefon. Anleitung",
    623: "Telefon. Anleitung nicht möglich",
    624: "Telefon. Beratung COVID-19",
    630: "Desi hellgrün",
    631: "Desi gelb lang",
    632: "Desi rot",
    633: "Übung",
    634: "Desi gelb kurz",
    635: "med. Zubringertransport (Notfall)",
    640: "kein Abfrageergebnis / unklare Lage",
    641: "Abfrage läuft noch - Details folgen",
    666: "Amoktat",
    696: "Lebensbedrohl. Einsatzlage eig. Bereich",
    697: "Lebensbedrohl. Einsatzlage ext. Ab-Raum",
    698: "Lebensbedrohl. Einsatzlage ext. Unterkunft",
    699: "Terroristischer Hintergrund",
    700: "Hyperglykämie",
    701: "Hypoglykämie",
    702: "Stoffwechsel, sonstiges",
    703: "Exsikkose",
    710: "Erfrierung",
    711: "Hitzeerschöpfung",
    712: "Hitzschlag",
    713: "Sonnenstich / Insolationssyndrom",
    714: "Unterkühlung",
    715: "Verbrennung / Verbrühung",
    800: "Polytrauma",
    801: "SHT schwer",
    802: "SHT leicht",
    803: "Kopfplatzwunde",
    804: "Gesichts-/Halsverletzung, schwer",
    805: "Gesichts-/Halsverletzung, leicht",
    806: "Augenverletzung/-verätzung",
    810: "Thoraxtrauma schwer",
    811: "Thoraxtrauma leicht",
    815: "Abdominaltrauma schwer",
    816: "Abdominaltrauma leicht",
    820: "Beckentrauma, schwer",
    821: "Beckentrauma, leicht",
    825: "Wirbelsäulentrauma, neurol. Ausfälle / schwer",
    826: "Wirbelsäulentrauma, leicht",
    830: "Amputationsverletzung, stammnah",
    831: "Amputationsverletzung, peripher",
    832: "Fraktur offen, Arm / Hand",
    833: "Fraktur geschlossen Arm / Hand",
    834: "Luxation, Schulter /Arm / Hand",
    835: "Fraktur, Oberschenkelhals",
    836: "Fraktur offen Bein / Fuß",
    837: "Fraktur geschlossen Bein / Fuß",
    838: "Luxation, Bein / Fuß",
    839: "Handverletzung schwer",
    840: "Handverletzung leicht",
    841: "Extremitätenverletzung, sonstige",
    850: "Erhängen",
    851: "MANV",
    852: "Schnittverletzung",
    853: "Schuss/Stichverletzung",
    854: "Gefäß-, Nervenverletzung",
    855: "Schlägerei",
    860: "Arbeitsunfall",
    861: "Ertrinkungsunfall, Pat. noch im Wasser",
    862: "Ertrinkungsunfall, Pat. bereits gerettet",
    863: "Eisunfall",
    864: "Elektrounfall",
    865: "Flugzeug-Unfall",
    866: "Gleit- / Fallschirm- / Drachenflieger - Unfall",
    867: "Häuslicher Unfall",
    868: "Reitunfall",
    869: "Schiffs- / Bootsunfall",
    870: "Schulunfall",
    871: "Silounfall",
    872: "Sportunfall",
    873: "Strahlenunfall",
    874: "Sturz aus großer Höhe",
    875: "Tauch- / Dekompressionsunfall",
    876: "Tierbiss",
    877: "Unfall im Forst",
    878: "Unfall - Person eingeklemmt",
    879: "Unfall, sonstiger",
    880: "Verätzung",
    881: "VU - Bus",
    882: "VU - Fahrrad",
    883: "VU - Fußgänger",
    884: "VU - LKW",
    885: "VU - Motorrad",
    886: "VU - PKW",
    887: "VU - Schiene (Bahn/Straßenbahn)",
    888: "VU - sonstiges",
    889: "Gestürzte Person",
    890: "Blutung, Harnwege",
    891: "Harnverhalt",
    892: "Katheterwechsel",
    894: "Urologie, sonstiges",
    900: "HA / ABD vor Ort",
    901: "Notarztanforderung",
    902: "mit Beatmungsgerät + Monitor",
    903: "mit Monitor",
    904: "mit Sauerstoff",
    905: "mit Sauerstoff + Monitor",
    906: "mit Vakuummatratze",
    907: "Kind < 1 Jahr",
    908: "Kind 1 - 6 Jahre",
    909: "Kind 7-12 Jahre",
    910: "Kind > 12 Jahre",
    911: "Eigenschutz",
    912: "Heimbeatmung",
    913: "RTH-Anforderung",
    914: "Kombi-Einsatz Polizei",
    915: "Kombi-Einsatz Feuerwehr",
    916: "Geiselnahme",
    920: "Notarztnachforderung, Mitfahrtenverweig.",
    921: "Windenrettung",
    929: "mit ECMO",
    930: "mit Perfusor",
    931: "Rücksp.m. verleg. Station wg. Medizingeräte",
    932: "Begleitung durch externes Fachpersonal",
    940: "Alarm über Notrufeinrichtung (eCall, sonstige)",
    941: "Alarm über Notruf-App Nora"
};