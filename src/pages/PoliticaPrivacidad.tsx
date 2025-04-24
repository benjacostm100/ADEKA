const PoliticaPrivacidad = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold mt-6 mb-4"><u>¿CÓMO TRATAMOS SUS DATOS PERSONALES?</u></h2>
        <p>
          En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, le informamos que los datos personales que nos facilite serán tratados por <strong><u>ADEKACONTROL S.L.U.</u></strong>.
        </p>
        
        <p className="mt-4">
          Los datos recabados serán utilizados para la gestión administrativa derivada del servicio solicitado, así como el envío de información comercial sobre nuestros productos y servicios.
        </p>
        
        <p className="mt-4">
          Los servicios prestados a través de este sitio web están reservados a personas que tengan al menos <strong>18 años</strong>. Por lo tanto, estos servicios sólo están disponibles para <strong>mayores de edad</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4"><u>¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO DE SUS DATOS?</u></h2>
        <p>
          El responsable del tratamiento de sus datos personales es <strong><u>ADEKACONTROL S.L.U.</u></strong>, cuyo domicilio se encuentra en <strong>C/Garrotín Nº-3 Bj, Coria del Río, (Sevilla)</strong>. 
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4"><u>¿CON QUÉ FINALIDAD TRATAMOS SUS DATOS PERSONALES?</u></h2>
        <ul className="list-disc pl-6">
          <li><strong>Atender sus solicitudes:</strong> Respondemos a sus preguntas o peticiones realizadas a través de nuestro formulario de contacto.</li>
          <li><strong>Envío de información comercial:</strong> Si nos da su consentimiento, podemos enviarle comunicaciones relacionadas con nuestros productos y servicios que podrían ser de su interés.</li>
          <li><strong>Gestión de la relación comercial:</strong> Tratamos sus datos para gestionar la relación contractual y administrativa.</li>
          <li><strong>Mantenimiento de espacios verdes:</strong> Recopilamos y gestionamos los datos necesarios para ofrecer servicios de jardinería y mantenimiento de espacios exteriores.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4"><u>¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE SUS DATOS?</u></h2>
        <p>
          La base legal para el tratamiento de sus datos personales se encuentra en su <strong>consentimiento explícito</strong>, el cual nos proporciona al completar los formularios de contacto o solicitud de información en nuestro sitio web. En caso de que tengamos una relación contractual, el tratamiento de sus datos estará basado en la ejecución de dicho contrato.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4"><u>¿DURANTE CUÁNTO TIEMPO CONSERVAMOS SUS DATOS?</u></h2>
        <p>
          Los datos personales se conservarán el tiempo necesario para cumplir con las finalidades para las cuales fueron recabados. En el caso de los datos de clientes y proveedores, se conservarán mientras dure la relación contractual y en cumplimiento de nuestras obligaciones legales.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4"><u>¿CUÁLES SON SUS DERECHOS?</u></h2>
        <ul className="list-disc pl-6">
          <li><strong>Acceder:</strong> A los datos personales que tenemos sobre usted.</li>
          <li><strong>Rectificar:</strong> Datos inexactos o incompletos.</li>
          <li><strong>Suprimir:</strong> Sus datos personales cuando no sean necesarios para los fines para los que fueron recabados.</li>
          <li><strong>Limitar:</strong> El tratamiento de sus datos personales.</li>
          <li><strong>Oponerse:</strong> Al tratamiento de sus datos personales en determinadas circunstancias.</li>
          <li><strong>Solicitar la portabilidad:</strong> De sus datos, es decir, que le proporcionemos sus datos personales en un formato estructurado y de uso común.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4"><u>CONTACTO</u></h2>
        <p>
          Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo tratamos sus datos, no dude en contactarnos en <strong><u>informacionadeka@gmail.com</u></strong>.
        </p>

        <p className="mt-4">
          Esta Política de Privacidad está vigente desde su publicación y es de aplicación para todos los servicios ofrecidos por <strong><u>ADEKACONTROL S.L.U.</u></strong>.
        </p>

        <div className="mt-8 flex items-center">
          <div className="mr-4">
            <img src="/imagenes/sello.png" alt="Sello de ADEKACONTROL S.L.U." className="h-24" />
          </div>
          <div>
            <p className="text-sm">En <strong>Coria del Río (Sevilla)</strong>, a <strong>{new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</strong></p>
            <p className="mt-2">Fdo: <strong>ADEKACONTROL S.L.U.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;