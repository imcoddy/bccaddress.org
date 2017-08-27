﻿(function (translator) {
	translator.translations["es"] = {
		// javascript alerts or messages
		"testneteditionactivated": "Testnet activada",
		"paperlabelbitcoinaddress": "Dirección Bitcoin:",
		"paperlabelprivatekey": "Clave privada:",
		"paperlabelencryptedkey": "Clave privada cifrada (contraseña necesaria)",
		"bulkgeneratingaddresses": "Generación de direcciones... ",
		"brainalertpassphrasetooshort": "La contraseña introducida es demasiado corta.\n\n",
		"brainalertpassphrasewarning": "Aviso: Es importante escoger una contraseña robusta para evitar ataques de fuerza bruta que buscan descifrarla y robar sus bitcoins.",
		"brainalertpassphrasedoesnotmatch": "Las contraseñas no coinciden.",
		"detailalertnotvalidprivatekey": "El texto introducido no es una clave privada válida",
		"detailconfirmsha256": "El texto introducido no es una clave privada válida\n\n¿Quiere usar ese texto como si fuera una contraseña y generar una clave privada usando un hash SHA256 de esa contraseña?\n\nAviso: Es importante escoger una contraseña robusta para evitar ataques de fuerza bruta que buscan descifrarla y robar sus bitcoins.",
		"bip38alertincorrectpassphrase": "Contraseña incorrecta para esta clave privada encriptada.",
		"bip38alertpassphraserequired": "Contraseña requerida para la Clave BIP38", // Could you give me some context for this phrase? I feel that it isn't quite right yet.
		"vanityinvalidinputcouldnotcombinekeys": "Entrada no válida. No se puede combinar Claves.",
		"vanityalertinvalidinputpublickeysmatch": "Entrada no válida. La clave pública de ambos coincidan entradas. Debe introducir dos claves diferentes.", // Could you give me the whole phrase in English, so to convey its meaning properly?
		"vanityalertinvalidinputcannotmultiple": "Entrada no válida. No se puede multiplicar dos claves públicas. Seleccione 'Añadir' para agregar dos claves públicas para obtener una dirección bitcoin.",
		"vanityprivatekeyonlyavailable": "Sólo está disponible cuando se combinan dos claves privadas",
		"vanityalertinvalidinputprivatekeysmatch": "Entrada no válida. La clave privada de ambos coincidan entradas. Debe introducir dos claves diferentes.",

		// header and menu html
		"tagline": "Generador de carteras Bitcoin de código abierto en lado de cliente con Javascript", // Could you give me the whole phrase in English, so to convey its meaning properly?
		"generatelabelbitcoinaddress": "Generando dirección Bitcoin...",
		"generatelabelmovemouse": "Mueve un poco el ratón para crear información al azar...",
		"generatelabelkeypress": "O BIEN escriba algunos caracteres al azar en este recuadro.",
		"singlewallet": "Cartera individual", // Are you thinking of Spanish clients or Latin American clients? I ask because for spanish wallet=cartera and for LATAM wallet=billetera.
		"paperwallet": "Cartera en papel",
		"bulkwallet": "Cartera con múltiples direcciones", // I have a feeling this name speaks more of its concept... I don't know if BULK translates as accurately to Spanish
		"brainwallet": "Cartera mental",
		"vanitywallet": "Cartera personalizada",
		"splitwallet": "Cartera separada",
		"splitlabelthreshold": "Umbral de divisiones mínimas necesarias para combinar",
		"splitlabelshares": "Número de divisiones",
		"splitview": "Vista de divisiones",
		"detailwallet": "Detalles de la cartera",

		// footer html
		"footerlabeldonations": "Donaciones:",
		"footerlabeltranslatedby": "Traducción: <b>12345</b>Vypv2QSmuRXcciT5oEB27mPbWGeva",
		"footerlabeltranslatedby": "Traducción: <b>Francisco Salvado </b>34asTQaYjY1wViisS7ydueY3Kx3Cw5dVLW",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Histórico de versiones",
		"footerlabelgithub": "Repositorio GitHub",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Copyright del código JavaScript: en el fuente.", // Could you give me the original phrase here?
		"footerlabelnowarranty": "Sin garantías.",

		// status html
		"statuslabelcryptogood": "&#10004; ¡Bien!", 
		"statuslabelcryptogood1": "Su navegador puede generar claves criptográficas aleatorias usando window.crypto.getRandomValues",
		"statusokcryptogood": "OK", 
		"statuslabelcryptobad": "&times; ¡Oh no!",
		"statuslabelcryptobad1": "Su navegador NO soporta window.crypto.getRandomValues. Debe usar un navegador actualizado con este generador para incrementar la seguridad de las claves generadas.",
		"statusokcryptobad": "OK",
		"statuslabelunittestsgood": "&#10004; ¡Bien!",
		"statuslabelunittestsgood1": "Todas las pruebas sincrónicas han sido superadas.",
		"statusokunittestsgood": "OK",
		"statuslabelunittestsbad": "&times; ¡Oh no!",
		"statuslabelunittestsbad1": "Algunas unidades de las pruebas sincrónicas NO fueron superadas. Debe usar un navegador actualizado con este generador.",
		"statusokunittestsbad": "OK",
		"statuslabelprotocolgood": "&#10004; ¡Bien!",
		"statuslabelprotocolgood1": "Está ejecutando este generador desde su computador local. <br />Pista: Asegúrese de que esta offine al intentarlo.", // DONE. Even though I get the feeling that this phrase is missing something. Could you give me some more context to it?
		"statusokprotocolgood": "OK",
		"statuslabelprotocolbad": "&#9888; ¡Piénselo dos veces!",
		"statuslabelprotocolbad1": "Al parecer está ejecutando este generador en línea desde un sitio en vivo. Para las carteras valiosas se recomienda", 
		"statuslabelprotocolbad2": "descargar",
		"statuslabelprotocolbad3": "el archivo zip desde GitHub y ejecutar este generador offline como un archivo html local.",
		"statusokprotocolbad": "OK",
		"statuslabelkeypool1": "Este es un registro de todas las direcciones Bitcoin y claves privadas que usted ha generado durante su sesión actual. Si actualiza la página, esto creará una nueva sesión.",
		"statuskeypoolrefresh": "Actualizar",
		"statusokkeypool": "OK",

		// single wallet html
		"newaddress": "Generar dirección",
		"singleprint": "Imprimir",
		"singlelabelbitcoinaddress": "Dirección Bitcoin",
		"singlelabelprivatekey": "Clave privada (formato para importar):",
		"singletip1": "<b>Una cartera Bitcoin</b> es algo tan sencillo como la unión de una dirección Bitcoin con su Clave privada Bitcoin correspondiente. Una cartera de este tipo ha sido generada para ud. en su navegador web y se muestra en la parte superior.",
		"singletip2": "<b>Para salvaguardar esta cartera</b> usted debe imprimir o guardar dirección Bitcoin y su clave privada. Es importante hacer un respaldo de la clave privada y guardarla en un lugar seguro. Este sitio no tiene ni guarda conocimiento de su clave privada. Si usted esta familiarizado con PGP puede descargar esta página HTML todo en uno y asegurarse de que tiene tiene una versión auténtica del autor de este sitio emparejando el hash SHA256 de esta HTML con el SHA256 disponible en la versión del documento historial firmado cuyo link puede encontrar en el pie de página de este sitio. Si usted abandona/actualiza esta página o presiona el botón para generar una nueva dirección, una nueva clave privada será generada y la clave privada anterior no será recuperable. Su clave privada Bitcoin debe ser mantenida en secreto. Con quien usted decida compartirla tendrá acceso a gastar todas las Bitcoin asociadas con esa dirección. Si imprime su cartera, le recomendamos guardarla en una bolsa zip lock para mantenerla a salvo de la humedad o el agua. Trate la cartera de papel como si fuese dinero en efectivo.",
		"singletip3": "<b>Añada fondos</b> a esta cartera indicándole a otros a enviar Bitcoins a su dirección Bitcoin.",
		"singletip4": "<b>Puede revisar su balance</b> visitando las páginas blockchain.info o blockexplorer.com e ingresando su dirección Bitcoin.",
		"singletip5": "<b>Puede gastar sus Bitcoins</b> visitando la página blockchain.info y desde ahí retirar todos los fondos asociados a su clave privada y enviarlos a su cuenta en su sitio web. También puede utilizar sus fondos descargando alguno de los populares clientes Bitcoin p2p e importando su clave privada a la cartera de cliente p2p. Tenga en cuenta cuando importe su clave única a un cliente Bitcoin p2p y realice gastos su clave será agrupada y empaquetada con otras claves privadas en la cartera de cliente p2p. Cuando realice una transacción su cambio será enviado a otra dirección Bitcoin ubicada dentro de la cartera de cliente p2p. Usted deberá realizar un respaldo de la cartera de cliente p2p y mantenerla a salvo ya que sus Bitcoin restantes serán almacenadas ahí. Satoshi recomendó que uno nunca debiese borrar una cartera.",
		"singleshare": "COMPARTIR",
		"singlesecret": "SECRETO",
		"combinelabelentershares": "Introduzca las acciones disponibles (espacios en blanco separados)",

		// paper wallet html
		"paperlabelhideart": "Ocultar diseño",
		"paperlabeladdressesperpage": "Direcciones por página:",
		"paperlabeladdressestogenerate": "Direcciones en total:",
		"papergenerate": "Generar",
		"paperprint": "Imprimir",
		"paperlabelBIPpassphrase": "Contraseña:",
		"paperlabelencrypt": "Encriptar con BIP38?",

		// bulk wallet html
		"bulklabelstartindex": "Empezar en:",
		"bulklabelrowstogenerate": "Filas a generar:",
		"bulklabelcompressed": "Direcciones comprimidas?",
		"bulkgenerate": "Generar",
		"bulkprint": "Imprimir",
		"bulklabelcsv": "Valores separados por coma:",
		"bulklabelformat": "Índice, Dirección, Clave privada (formato para importar)",
		"bulklabelq1": "¿Por qué debo usar una \"Cartera con múltiples direcciones\" para aceptar Bitcoins en mi web?",
		"bulka1": "La forma tradicional de aceptar Bitcoins en su web requiere tener instalado el cliente oficial de bitcoin (\"bitcoind\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. Además, ejecutar el cliente en su servidor supone que las claves privadas están también en el servidor y podrían ser comprometidas en caso de intrusión. Al usar este mecanismo, puede subir al servidor sólo las dirección de Bitcoin y no las claves privadas. De esta forma no tiene que preocuparse de que alguien robe la cartera si ingresan indebidamente en el servidor.",
		"bulklabelq2": "¿Cómo uso una \"Cartera con múltiples direcciones\" para aceptar Bitcoins en mi web?",
		"bulklabela2li1": "Use el tab \"Cartera con múltiples direcciones\" para generar por anticipado muchas direcciones (más de 10000). Copie y pegue la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en su ordenador. Guarde una copia de seguridad en un lugar seguro.",
		"bulklabela2li2": "Importe las direcciones en la base de datos de su servidor. No suba la cartera ni las claves públicas, o de lo contrario estas pueden ser robadas. Suba sólo las direcciones, ya que es lo que se muestra a los clientes.",
		"bulklabela2li3": "Ofrezca una alternativa en el carro de compra de su sitio web para que sus clientes paguen con Bitcoin. Cuando un cliente elija pagar con Bitcoin, se le entregará una de las direcciones de la base de datos como su \"dirección de pago\" y guarda esto junto con el pedido.",
		"bulklabela2li4": "Ahora sólo falta recibir una notificación del pago. Busque en google \"notificación de pagos Bitcoin\" (o \"Bitcoin payment notification\" en inglés) y suscribase a alguno de los servicios que aparezcan. Hay varios de ellos, que le pueden notificar vía Web services, API, SMS, email, etc. Una vez le llegue la notificación, lo cual puede ser automatizado, entonces puede ya procesar el pedido. Para comprobar a mano si ha recibido un pago, puede usar Block Explorer: reemplaza DIRECCION a continuación por la dirección que esté comprobando. La transacción puede tardar entre 10 minutos a una hora en ser confirmada. <br />http://www.blockexplorer.com/address/DIRECCION<br /><br />Puede ver las transacciones sin confirmar en: http://blockchain.info/ <br />Las transacciones sin confirmar suelen aparecer ahí en unos 30 segundos.",
		"bulklabela2li5": "Las Bitcoin que reciba se almacenarán de forma segura en la cadena de bloques. Use la cartera original que generó en el paso 1 para utilizarlas.",

		// brain wallet html
		"brainlabelenterpassphrase": "Contraseña:",
		"brainlabelshow": "Mostrar",
		"brainprint": "Imprimir",
		"brainlabelconfirm": "Confirmar contraseña:",
		"brainview": "Ver",
		"brainalgorithm": "Algoritmo: SHA256(contraseña)",
		"brainlabelbitcoinaddress": "Dirección Bitcoin:",
		"brainlabelprivatekey": "Clave privada (formato para importar):",

		// vanity wallet html
		"vanitylabelstep1": "Paso 1 - Genere su par de claves",
		"vanitynewkeypair": "Generar",
		"vanitylabelstep1publickey": "Clave pública:",
		"vanitylabelstep1pubnotes": "Copie y pegue la línea de arriba en el campo \"Your-Part-Public-Key\" de la web de Vanity Pool.",
		"vanitylabelstep1privatekey": "Clave privada:",
		"vanitylabelstep1privnotes": "Copie y pegue la clave privada de arriba en un archivo de texto. Es mejor almacenarla en un volumen cifrado. Lo necesitará para recuperar la clave privada una vez Vanity Pool haya encontrado su prefijo.",
		"vanitylabelstep2calculateyourvanitywallet": "Paso 2 - Calcule su cartera personalizada",
		"vanitylabelenteryourpart": "Introduzca la clave privada generada en el paso 1, que ya ha guardado:",
		"vanitylabelenteryourpoolpart": "Introduzca la clave privada obtenida de la Vanity Pool:",
		"vanitylabelnote1": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
		"vanitylabelnote2": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
		"vanitylabelradioadd": "Añadir",
		"vanitylabelradiomultiply": "Multiplicar",
		"vanitycalc": "Calcular cartera personalizada",
		"vanitylabelbitcoinaddress": "Dirección Bitcoin personalizada:",
		"vanitylabelnotesbitcoinaddress": "Esta es su nueva dirección, que debería tener el prefijo deseado.",
		"vanitylabelpublickeyhex": "Clave pública personalizada (HEX):",
		"vanitylabelnotespublickeyhex": "Lo anterior es la clave pública en formato hexadecimal.",
		"vanitylabelprivatekey": "Clave privada personalizada (formato para importar):",
		"vanitylabelnotesprivatekey": "Esto es la clave privada para introducir en tu cartera.",

		// detail wallet html
		"detaillabelenterprivatekey": "Introduzca la clave privada",
		"detailkeyformats": "Formatos clave: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Ver detalles",
		"detailprint": "Imprimir",
		"detaillabelnote1": "Su clave privada es un número secreto, único, que sólo usted conoce. Se puede expresar en varios formatos. Aquí abajo le mostramos la dirección y la clave pública que se corresponden con su clave privada, así como la clave privada en los formatos más conocidos (para importar, hex, base64 y mini).",
		"detaillabelnote2": "Bitcoin v0.6+ almacena las claves públicas comprimidas. El cliente también soporta importar/exportar claves privadas usando importprivkey/dumpprivkey. El formato de las claves privadas exportadas depende de si la dirección se generó en una cartera antigua o nueva.",
		"detaillabelbitcoinaddress": "Dirección Bitcoin:",
		"detaillabelbitcoinaddresscomp": "Dirección Bitcoin (comprimida):",
		"detaillabelpublickey": "Clave pública (130 caracteres [0-9A-F]):",
		"detaillabelpublickeycomp": "Clave pública (comprimida, 66 caracteres [0-9A-F]):",
		"detaillabelprivwif": "Clave privada para importar (51 caracteres en base58, empieza con un",
		"detaillabelprivwifcomp": "Clave privada para importar (comprimida, 52 caracteres en base58, empieza con",
		"detailcompwifprefix": "'K' o 'L'",
		"detaillabelprivhex": "Clave privada en formato hexadecimal (64 caracteres [0-9A-F]):",
		"detaillabelprivb64": "Clave privada en base64 (44 caracteres):",
		"detaillabelprivmini": "Clave privada en formato mini (22, 26 o 30 caracteres, empieza por 'S'):",
		"detaillabelpassphrase": "Contraseña BIP38",
		"detailbip38decryptbutton": "Descifrar BIP38",
		"detailbip38encryptbutton": "Encriptar BIP38",
		"detaillabelq1": "¿Como realizo una cartera utilizando un dado? ¿Qué es B6?",
		"detaila1": "Una parte importante de crear una cartera Bitcoin es asegurarse de que los números aleatorios utilizados para crear la cartera son verdaderamente aleatorios. El azar físico es mucho mejor que el pseudo azar generado por computadora. La forma más fácil de generar azar físico es con un dado. Para crear una Clave privada Bitcoin sólo necesita un dado de seis lados que sea lanzado 99 veces. Debe detenerse cada vez para registrar el valor entregado por el dado. Cuando registre valores siga estas reglas: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Al hacer esto usted está registrando un gran número al azar, que es su Clave privada, en B6 o formato en base 6. Usted puede ingresar la Clave privada de 99 dígitos en base 6 en el recuadro de texto en la parte superior y hacer click en Ver detalles. Usted verá entonces la dirección Bitcoin asociada con su clave privada. Usted también debería tomar nota de su Clave privada en formato WIF ya que es utilizada más comúnmente."
	};
})(ninja.translator);
