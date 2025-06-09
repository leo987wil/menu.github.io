// Datos de ejemplo para los productos
const menuData = [
 { group: 'main', category: 'Pastas', title: 'PENNE AL VODKA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$14.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=80' },
  { group: 'main', category: 'Pastas', title: 'ESPAGUETIS CON CAMARONES', desc: 'Plato con camarones preparados al gusto de la casa.', price: '$18.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=81' },
  { group: 'kids', category: '', title: 'SALCHIPAPAS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$14.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=82' },
  { group: 'kids', category: '', title: 'CHICKEN NUGGETS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$13', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=83' },
  { group: 'kids', category: '', title: 'ALITAS DE POLLO', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$12.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=84' },
  { group: 'kids', category: '', title: 'DEDITOS DE POLLO', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$10.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=85' },
  { group: 'sides', category: '', title: 'PAPA CRIOLLA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$10.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=86' },
  { group: 'sides', category: '', title: 'MOTE LIMPIO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=87' },
  { group: 'sides', category: '', title: 'GUACAMOLE', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=88' },
  { group: 'sides', category: '', title: 'CHIFLES', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=89' },
  { group: 'sides', category: '', title: 'PAPAS FRITAS', desc: 'Acompañamiento tradicional perfecto para compartir.', price: '$7.3', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=90' },
  { group: 'sides', category: '', title: 'YUCA FRITA', desc: 'Acompañamiento tradicional perfecto para compartir.', price: '$7.3', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=91' },
  { group: 'sides', category: '', title: 'ENCURTIDO DE CEBOLLA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$7.3', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=92' },
  { group: 'sides', category: '', title: 'ENSALADA DE PAPAS', desc: 'Ensalada fresca, ligera y saludable.', price: '$7.3', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=93' },
  { group: 'sides', category: '', title: 'ENSALADA DE ZANAHORIA', desc: 'Ensalada fresca, ligera y saludable.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=94' },
  { group: 'sides', category: '', title: 'ENSALADA VERDE DE', desc: 'Ensalada fresca, ligera y saludable.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=95' },
  { group: 'sides', category: '', title: 'TOSTONES', desc: 'Acompañamiento tradicional perfecto para compartir.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=96' },
  { group: 'sides', category: '', title: 'PLATANO MADURO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=97' },
  { group: 'sides', category: '', title: 'FRIJOLES', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$6.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=98' },
  { group: 'sides', category: '', title: 'TOSTADO (MAÍZ)', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$6.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=99' },
  { group: 'sides', category: '', title: 'LENTEJAS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$5.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=100' },
  { group: 'sides', category: '', title: 'GAPINGACHO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$6.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=101' },
  { group: 'sides', category: '', title: 'AGUACATE', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$4.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=102' },
  { group: 'sides', category: '', title: 'HUEVO DURO', desc: 'Desayuno completo ideal para comenzar bien el día.', price: '$3', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=103' },
  { group: 'sides', category: '', title: 'CEBOLLA/ TOMATE', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$3.15', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=104' },
  { group: 'sides', category: '', title: 'CEBOLLA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$1', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=105' },
  { group: 'sides', category: '', title: 'TOMATE', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$0.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=106' },
  { group: 'sides', category: '', title: 'ARROZ', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$0.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=107' },
  { group: 'soups', category: '', title: 'SOPA DE MARISCOS', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$26', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=108' },
  { group: 'soups', category: '', title: 'CALDO DE BAGRE', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=109' },
  { group: 'soups', category: '', title: 'CALDO DE PATAS', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=110' },
  { group: 'soups', category: '', title: 'CALDO DE SALCHICHA', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=111' },
  { group: 'soups', category: '', title: 'CALDO DE GALLINA', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=112' },
  { group: 'soups', category: '', title: 'ESPECIAL DEL DIA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=113' },
  { group: 'soups', category: '', title: 'CALDO DE BOLAS', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=114' },
  { group: 'soups', category: '', title: 'CALDO DE RES', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=115' },
  { group: 'soups', category: '', title: 'SOPA DE MONDONGO', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=116' },
  { group: 'soups', category: '', title: 'SOPA DE FIDEOS', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$14', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=117' },
  { group: 'soups', category: '', title: 'SANCOCHO DE COSTILLA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$18.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=118' },
  { group: 'soups', category: '', title: 'SOPA DE LENTEJA', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$14', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=119' },
  { group: 'soups', category: '', title: 'CONSOME DE POLLO', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$12.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=120' },
  { group: 'appetizers', category: '', title: 'COSTILLAS DE CERDO DORADAS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$13.55', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=121' },
  { group: 'appetizers', category: '', title: 'ALITAS CON PAPAS FRITAS', desc: 'Acompañamiento tradicional perfecto para compartir.', price: '$12.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=122' },
  { group: 'appetizers', category: '', title: 'TOSTIRRON', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$18.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=123' },
  { group: 'appetizers', category: '', title: 'CALAMARES FRITOS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$15.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=124' },
  { group: 'appetizers', category: '', title: 'TOSTONES CON GUACAMOLE', desc: 'Acompañamiento tradicional perfecto para compartir.', price: '$10.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=125' },
  { group: 'appetizers', category: '', title: 'CHORIZO CON AREPA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$10.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=126' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'ARROZ CON MARISCOS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$26', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=127' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'SOPA DE MARISCOS', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=128' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'ENCEBOLLADO MIXTO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=129' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'CEVICHE MIXTO', desc: 'Ceviche preparado con mariscos frescos y cítricos.', price: '$22.9', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=130' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'CAMARONES AL AJILLO', desc: 'Plato con camarones preparados al gusto de la casa.', price: '$22.9', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=131' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'CAMARONES EMPANIZADOS', desc: 'Plato con camarones preparados al gusto de la casa.', price: '$22.9', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=132' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'CEVICHE DE CAMARÓN', desc: 'Ceviche preparado con mariscos frescos y cítricos.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=133' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'TILAPIA FRITA ENTERA', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$22.9', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=134' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'CHAULAFAN', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=135' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'ARROZ CON CAMARONES', desc: 'Plato con camarones preparados al gusto de la casa.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=136' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'BANDERA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$36.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=137' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'FILETE DE PESCADO', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$18.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=138' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'PARGO ROJO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$31.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=139' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'SALMON', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$22.9', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=140' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'CALDO DE BAGRE', desc: 'Sopa tradicional con ingredientes frescos y acompañada de arroz.', price: '$18', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=141' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'ENCEBOLLADO REGULAR', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=142' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'BANDERA ECUATORIANA BAHIA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$36.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=143' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'FRITADA DE CERDO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=144' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'ENCEBOLLADO DE PESCADO', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$22', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=145' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'GUATITA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=146' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'SECO DE CARNE DE RES', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$19.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=147' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'HORNADO DE CERDO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=148' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'PAPAS CON CUERO DE CERDO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=149' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'COSTILLAS DE CERDO AL HORNO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$18.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=150' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'POLLO AL HORNO', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=151' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'SECO DE POLLO', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=152' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'ENCEBOLLADO DE PESCADO MIXTO', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=153' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'SANCOCHO GUISADO DE CERDO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=154' },
  { group: 'main', category: 'Tipicos Ecuatorianos', title: 'SANCOCHO DORADO DE CERDO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=155' },
  { group: 'main', category: '', title: 'NY STEAK', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$51', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=156' },
  { group: 'main', category: '', title: 'T-BONE STEAK', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$41.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=157' },
  { group: 'main', category: '', title: 'RIBEYE STEAK', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$41.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=158' },
  { group: 'main', category: '', title: 'PUNTA DE ANCA STEAK', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$36.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=159' },
  { group: 'main', category: '', title: 'MANSAS STEAK', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$36.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=160' },
  { group: 'main', category: '', title: 'ENTRAÑA AL GRILL', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$31.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=161' },
  { group: 'main', category: '', title: 'CHURRASCO COLOMBIANO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$29.15', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=162' },
  { group: 'main', category: '', title: 'CHURRASCO ARGENTINO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$29.15', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=163' },
  { group: 'main', category: '', title: 'SALMON EN SALSA DE MARACUYÁ', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$31.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=164' },
  { group: 'main', category: '', title: 'MARISCOS PARCO ROJO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$32', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=165' },
  { group: 'main', category: '', title: 'SALMON EN SALSA BLANCA', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$31.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=166' },
  { group: 'main', category: '', title: 'SALMON EN SALSA DE AJO', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$31.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=167' },
  { group: 'main', category: '', title: 'MOJARRA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=168' },
  { group: 'main', category: '', title: 'FILETE DE TILAPIA EN SALSA DE AJO', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$23', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=169' },
  { group: 'main', category: '', title: 'SALMON AL GRILL', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$23.95', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=170' },
  { group: 'main', category: '', title: 'FILETE DE TILAPIA AL GRILL', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$23', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=171' },
  { group: 'main', category: '', title: 'FILETE DE TILAPIA EMPANIZADO', desc: 'Delicioso filete de pescado, preparado al estilo de la casa.', price: '$23', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=172' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'PICADA BAHIA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$36.4', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=173' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'BISTEC EN CHAMPIÑONES', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$27.05', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=174' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'LOMO EN CHAMPIÑONES', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$27.05', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=175' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'LOMO DE RES SALTEADO', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$27.05', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=176' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'BANDEJA PAISA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$26', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=177' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'ENCOCADO DE MARISCOS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$26', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=178' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'BISTEC A LA PLANCHA', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=179' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'PECHUGA EN CHAMPIÑONES', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$22.9', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=180' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'LOMO HAWAIANO', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=181' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'LOMO AL GRILL', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=182' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'CHULETA CALEÑA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$27.05', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=183' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'PECHUGA AL GRILL', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=184' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'BISTEC A CABALLO', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$27.05', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=185' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'LOMO DE CERDO A LA PLANCHA', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$26', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=186' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'BANDEJA MONTAÑERA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$26', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=187' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'LOMO ENCEBOLLADO', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$26', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=188' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'HAMBURGUESA BAHIA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=189' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'PECHUGA A LA HAWAIANA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=190' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'SANCOCHO COLOMBIANO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=191' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'PECHUGA ENCEBOLLADO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$20.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=192' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'LOMO EMPANIZADO', desc: 'Corte de carne jugoso y bien sazonado, ideal para los amantes de la carne.', price: '$20', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=193' },
  { group: 'main', category: 'Tipicos Colombianos', title: 'POLLO A LA PARRILLA', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$20', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=194' },
  { group: 'salads', category: '', title: 'ENSALADA MIXTA DE CARNE', desc: 'Ensalada fresca, ligera y saludable.', price: '$23', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=195' },
  { group: 'salads', category: '', title: 'ENSALADA MIXTA DE POLLO', desc: 'Ensalada fresca, ligera y saludable.', price: '$18', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=196' },
  { group: 'salads', category: '', title: 'ENSALADA MIXTA DE AGUACATE', desc: 'Ensalada fresca, ligera y saludable.', price: '$13', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=197' },
  { group: 'dessert', category: '', title: 'VOLCAN DE CHOCOLATE', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$10', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=198' },
  { group: 'dessert', category: '', title: 'GELATINA', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$10', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=199' },
  { group: 'dessert', category: '', title: 'ARROZ DE LECHE', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$10', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=200' },
  { group: 'dessert', category: '', title: 'FLAN', desc: 'Postre casero ideal para cerrar con broche de oro.', price: '$10', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=201' },
  { group: 'dessert', category: '', title: 'TRES LECHES', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$10', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=202' },
  { group: 'breakfast', category: 'Desayuno americano', title: 'PANCAKES DE FRUTAS', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=203' },
  { group: 'breakfast', category: 'Desayuno colombiano', title: 'OMELETTES, CARNE Y POLLO', desc: 'Preparación especial de pollo acompañada de guarniciones al gusto.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=204' },
  { group: 'breakfast', category: 'Desayuno ecuatoriano', title: 'OMLETTES, SALCHICHA Y QUESO', desc: 'Delicioso plato típico, preparado con ingredientes de calidad.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=205' },
  { group: 'breakfast', category: 'Desayuno ecuatoriano', title: 'OMELETTES, JAMÓN Y QUESO', desc: 'Desayuno completo ideal para comenzar bien el día.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=206' },
  { group: 'breakfast', category: 'Desayuno ecuatoriano', title: 'HUEVOS FRITOS O REVUELTOS', desc: 'Desayuno completo ideal para comenzar bien el día.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=207' },
  { group: 'breakfast', category: 'Desayuno ecuatoriano', title: 'SANDWICH CON SALCHICHA, HUEVO Y QUESO', desc: 'Desayuno completo ideal para comenzar bien el día.', price: '$17.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=208' },
  { group: 'drinks', category: 'Cocteles', title: 'SUPER MARGARITA BAHIA', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$29', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=209' },
  { group: 'drinks', category: 'Cocteles', title: 'OLD FASHION', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$17', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=210' },
  { group: 'drinks', category: 'Cocteles', title: 'MOSCOW MULE', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$17', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=211' },
  { group: 'drinks', category: 'Cocteles', title: 'MARTINI', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$16', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=212' },
  { group: 'drinks', category: 'Cocteles', title: 'WHISKEY SOUR', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$15', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=213' },
  { group: 'drinks', category: 'Cocteles', title: 'ESPRESSO MARTINI', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$16', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=214' },
  { group: 'drinks', category: 'Cocteles', title: 'DAIQUIRI', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$15', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=215' },
  { group: 'drinks', category: 'Cocteles', title: 'SEX ON THE BEACH', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$15', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=216' },
  { group: 'drinks', category: 'Cocteles', title: 'TEQUILA SUNRISE', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$14', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=217' },
  { group: 'drinks', category: 'Cocteles', title: 'CAIPIRINHA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$15', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=218' },
  { group: 'drinks', category: 'Cocteles', title: 'MARGARITA', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$14', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=219' },
  { group: 'drinks', category: 'Cocteles', title: 'SCREWDRIVER', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$14', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=220' },
  { group: 'drinks', category: 'Cocteles', title: 'MANHATTAN', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$14', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=221' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'BENZINGER CABERNET', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=222' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'DASTI MOSCATO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=223' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'BENZIGER MERLOT', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=224' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'TERRAZAS MALBEC', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=225' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'SIMI CABERNET', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=226' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'GI. H WHITE ZINFANDEL', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=227' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'CHARDONNAY', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=228' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'PINOT GRIGIO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=229' },
  { group: 'drinks', category: 'Vinos y Sangrias', title: 'WHITE ZINFANDEL', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$12', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=230' },
  { group: 'drinks', category: 'Cognac', title: 'HENNESSY XO 750 ML', desc: 'Cognac elegante y sofisticado para paladares exigentes.', price: '$378.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=231' },
  { group: 'drinks', category: 'Cognac', title: 'DUSSE 750ML', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=232' },
  { group: 'drinks', category: 'Wiskey', title: 'BRUGAL 1888', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$216.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=233' },
  { group: 'drinks', category: 'Wiskey', title: 'BUCHANANS 12YR 750ML', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=234' },
  { group: 'drinks', category: 'Wiskey', title: 'BUCHANANS 18', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$216.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=235' },
  { group: 'drinks', category: 'Wiskey', title: 'BUCHANANS 12', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=236' },
  { group: 'drinks', category: 'Ron', title: 'RON VIEJO DE CALDAS 15 AÑOS', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$200', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=237' },
  { group: 'drinks', category: 'Ron', title: 'RON VIEJO DE CALDAS 8 AÑOS', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$200', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=238' },
  { group: 'drinks', category: 'Ron', title: 'RON VIEJO DE CALDAS 5 AÑOS', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$200', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=239' },
  { group: 'drinks', category: 'Ron', title: 'MALIBU L', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$162.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=240' },
  { group: 'drinks', category: 'Sangria', title: 'SANGRIA JARRA', desc: 'Bebida afrutada a base de vino, ideal para compartir.', price: '$41.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=241' },
  { group: 'drinks', category: 'Sangria', title: 'SANGRIA COPA', desc: 'Bebida afrutada a base de vino, ideal para compartir.', price: '$14.8', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=242' },
  { group: 'drinks', category: 'Gin', title: 'BOTANIC GIN', desc: 'Ginebra premium ideal para cócteles refrescantes.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=243' },
  { group: 'drinks', category: 'Gin', title: 'TANQUERAY 750ML', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=244' },
  { group: 'drinks', category: 'Gin', title: 'HENDRICKS 750ML', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=245' },
  { group: 'drinks', category: 'Champan', title: 'MOET ROSE', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$160', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=246' },
  { group: 'drinks', category: 'Champan', title: 'DOM PERIGNON', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$160', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=247' },
  { group: 'drinks', category: 'Tequila', title: 'CLASE AZUL REPOSADO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$378.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=248' },
  { group: 'drinks', category: 'Tequila', title: 'DON JULIO AÑEJO', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$324.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=249' },
  { group: 'drinks', category: 'Tequila', title: 'DON JULIO 1942', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$378.75', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=250' },
  { group: 'drinks', category: 'Tequila', title: 'HERRADURA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$250', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=251' },
  { group: 'drinks', category: 'Tequila', title: '1800 TEQUILA REPOSADO', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$250', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=252' },
  { group: 'drinks', category: 'Tequila', title: 'JOSE CUERVO BLANCO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$250', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=253' },
  { group: 'drinks', category: 'Tequila', title: 'JOSE CUERVO AMARILLO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$250', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=254' },
  { group: 'drinks', category: 'Tequila', title: 'TRES GENERACIONES AÑEJO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$250', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=255' },
  { group: 'drinks', category: 'Tequila', title: '1800 TEQUILA SILVER', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$220', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=256' },
  { group: 'drinks', category: 'Tequila', title: 'DON JULIO AÑEJO 70', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$216.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=257' },
  { group: 'drinks', category: 'Tequila', title: 'CASAMIGOS REPOSADO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$216.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=258' },
  { group: 'drinks', category: 'Tequila', title: 'DON JULIO REPOSADO', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$216.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=259' },
  { group: 'drinks', category: 'Cognac', title: 'HENNESSY VSOP 750ML', desc: 'Cognac elegante y sofisticado para paladares exigentes.', price: '$216.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=260' },
  { group: 'drinks', category: 'Tequila', title: 'PATRON REPOSADO', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$216.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=261' },
  { group: 'drinks', category: 'Tequila', title: 'PATRON AÑEJO 750ML', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$216.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=262' },
  { group: 'drinks', category: 'Cognac', title: 'HENNESSY VS', desc: 'Cognac elegante y sofisticado para paladares exigentes.', price: '$165.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=263' },
  { group: 'drinks', category: 'Tequila', title: 'DON JULIO REPOSADO 375ML', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$140', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=264' },
  { group: 'drinks', category: 'Tequila', title: 'PATRON REPOSADO 375ML', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$140', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=265' },
  { group: 'drinks', category: 'Tequila', title: 'DON JULIO BLANCO', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=266' },
  { group: 'drinks', category: 'Tequila', title: 'CASA AMIGOS BLANCO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=267' },
  { group: 'drinks', category: 'Cognac', title: 'HENNESSY VS 750ML', desc: 'Cognac elegante y sofisticado para paladares exigentes.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=268' },
  { group: 'drinks', category: 'Tequila', title: 'PATRON SILVER', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=269' },
  { group: 'drinks', category: 'Tequila', title: 'PATRON SILVER 375ML', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$80', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=270' },
  { group: 'drinks', category: 'Tequila', title: 'DON JULIO BLANCO 375ML', desc: 'Tequila de alta gama con sabor auténtico y suave.', price: '$80', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=271' },
  { group: 'drinks', category: 'Cerveza', title: 'POKER', desc: 'Cerveza bien fría, perfecta para cualquier ocasión.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=272' },
  { group: 'drinks', category: 'Cerveza', title: 'STELLA ARTOIS', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=273' },
  { group: 'drinks', category: 'Cerveza', title: 'CLUB ECUATORIANA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=274' },
  { group: 'drinks', category: 'Cerveza', title: 'MODELO ESPECIAL', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=275' },
  { group: 'drinks', category: 'Cerveza', title: 'PRESIDENTE', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=276' },
  { group: 'drinks', category: 'Cerveza', title: 'HEINEKEN', desc: 'Cerveza bien fría, perfecta para cualquier ocasión.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=277' },
  { group: 'drinks', category: 'Cerveza', title: 'MODELO NEGRA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=278' },
  { group: 'drinks', category: 'Cerveza', title: 'CORONITA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=279' },
  { group: 'drinks', category: 'Cerveza', title: 'CORONA', desc: 'Cerveza bien fría, perfecta para cualquier ocasión.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=280' },
  { group: 'drinks', category: 'Cerveza', title: 'CLUB COLOMBIA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=281' },
  { group: 'drinks', category: 'Cerveza', title: 'COORS LIGHT', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=282' },
  { group: 'drinks', category: 'Cerveza', title: 'AGUILA', desc: 'Cerveza bien fría, perfecta para cualquier ocasión.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=283' },
  { group: 'drinks', category: 'Cerveza', title: 'BLUE MOON', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=284' },
  { group: 'drinks', category: 'Vodka', title: 'GREY GOOSE', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$312', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=285' },
  { group: 'drinks', category: 'Vodka', title: 'ABSOLUT', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$10', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=286' },
  { group: 'drinks', category: 'Vodka', title: 'TITO´S 750ML', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=287' },
  { group: 'drinks', category: 'Vodka', title: 'KETEK ONE', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$135.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=288' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE LULO', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.85', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=289' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE NARANJA', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=290' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE COCO', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=291' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE MANGO', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=292' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'RED BULL', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=293' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE MANZANA', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$10', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=294' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'LIMONADA', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=295' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'SNAPPLE', desc: 'Bebida fría lista para refrescarte en cualquier momento.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=296' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE MORA', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=297' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE FRESA', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=298' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE BANANO', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=299' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO DE MARACUYA', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=300' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'HORCHATA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=301' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'AVENA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=302' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'MILO FRIO', desc: 'Bebida fría lista para refrescarte en cualquier momento.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=303' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'PONY MALTA', desc: 'Bebida fría lista para refrescarte en cualquier momento.', price: '$5.45', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=304' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'SODA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$4.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=305' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'AGUAPANELA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$4.7', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=306' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'AGUA BOTELLA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$4.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=307' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'MOROCHO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$2.1', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=308' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'AVENA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$6.25', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=309' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'MILO', desc: 'Bebida fría lista para refrescarte en cualquier momento.', price: '$8.35', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=310' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'ESPRESSO GRANDE', desc: 'Bebida caliente reconfortante ideal para cualquier hora.', price: '$5.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=311' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'CHOCOLATE', desc: 'Bebida caliente reconfortante ideal para cualquier hora.', price: '$5.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=312' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'CAFE DESCAFEINADO', desc: 'Bebida caliente reconfortante ideal para cualquier hora.', price: '$5.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=313' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'CAFE EN LECHE', desc: 'Bebida caliente reconfortante ideal para cualquier hora.', price: '$4.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=314' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'AGUAPANELA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$4.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=315' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'CAFE NEGRO', desc: 'Bebida caliente reconfortante ideal para cualquier hora.', price: '$4.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=316' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'ESPRESSO PEQUEÑO', desc: 'Bebida caliente reconfortante ideal para cualquier hora.', price: '$4.5', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=317' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'TE', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$4.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=318' },
  { group: 'drinks', category: 'Bebidas Calientes', title: 'TINTO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$4.2', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=319' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'JUGO EN LECHE', desc: 'Jugo natural y refrescante, ideal para acompañar tus comidas.', price: '$2.6', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=320' },
  { group: 'drinks', category: 'Cocteles', title: 'LYCHEE MARTINI', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=321' },
  { group: 'drinks', category: 'Cocteles', title: 'TENTACION BAY', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=322' },
  { group: 'drinks', category: 'Cocteles', title: 'SENOR BAHIA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=323' },
  { group: 'drinks', category: 'Cocteles', title: 'SLIP BAY', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=324' },
  { group: 'drinks', category: 'Cocteles', title: 'BACARDI TWIST', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=325' },
  { group: 'drinks', category: 'Cocteles', title: 'DIRTY MARTINI', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=326' },
  { group: 'drinks', category: 'Cocteles', title: 'DRY MARTINI', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=327' },
  { group: 'drinks', category: 'Cocteles', title: 'BAHIA NICE', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=328' },
  { group: 'drinks', category: 'Cocteles', title: 'COSMOPOLITAN', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=329' },
  { group: 'drinks', category: 'Cocteles', title: 'RUSSIAN BAHIA', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=330' },
  { group: 'drinks', category: 'Cocteles', title: 'EL CALIDOSO', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=331' },
  { group: 'drinks', category: 'Cocteles', title: 'APEROL SPIRITZ', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=332' },
  { group: 'drinks', category: 'Cocteles', title: 'MARGARITA TAJIN', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=333' },
  { group: 'drinks', category: 'Cocteles', title: 'MOJITO', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=334' },
  { group: 'drinks', category: 'Cocteles', title: 'SUPER MOJITO', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=335' },
  { group: 'drinks', category: 'Cocteles', title: 'GRAND MARGARITA', desc: 'Cóctel clásico preparado con los mejores licores y sabores frutales.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=336' },
  { group: 'drinks', category: 'Wiskey', title: 'JACK DANIELS', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=338' },
  { group: 'drinks', category: 'Wiskey', title: 'JAMESON 750ML', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=338' },
  { group: 'drinks', category: 'Wiskey', title: 'JAMESON L', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=339' },
  { group: 'drinks', category: 'Wiskey', title: 'JOHNNIE WALKER BLACK', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=340' },
  { group: 'drinks', category: 'Wiskey', title: 'JOHNNIE WALKER 18', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=341' },
  { group: 'drinks', category: 'Wiskey', title: 'JOHNNIE WALKER BLUE', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=342' },
  { group: 'drinks', category: 'Wiskey', title: 'JOHNNIE WALKER GOLD', desc: 'Whisky de alta calidad, perfecto para los conocedores.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=343' },
  { group: 'drinks', category: 'Wiskey', title: 'THE MACALLAN 18 YR', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=344' },
  { group: 'drinks', category: 'Wiskey', title: 'THE MACALLAN 15YR', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=345' },
  { group: 'drinks', category: 'Wiskey', title: 'THE MACALLAN 12YR', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=346' },
  { group: 'drinks', category: 'Wiskey', title: 'OLD PARR', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=347' },
  { group: 'drinks', category: 'Bebidas frias y jugos', title: 'CORONA NON ALCOHOLIC', desc: 'Deliciosa bebida servida con los más altos estándares de calidad.', price: '$nan', img: 'https://images.unsplash.com/photo-1516684669134-de6f27e8b44b?auto=format&fit=facearea&w=256&q=348' },
];

// Subcategorías por grupo (adapta según tus grupos actuales)
const groupSubcategories = {
  main: [
    { key: 'Pastas', label: 'Pastas' },
    { key: 'Tipicos Ecuatorianos', label: 'Típicos Ecuatorianos' },
    { key: 'Tipicos Colombianos', label: 'Típicos Colombianos' },
    { key: '', label: 'Otros' }
  ],
  kids: [
    { key: '', label: 'Menú Infantil' }
  ],
  sides: [
    { key: '', label: 'Acompañamientos' }
  ],
  soups: [
    { key: '', label: 'Sopas' }
  ],
  appetizers: [
    { key: '', label: 'Entradas' }
  ],
  salads: [
    { key: '', label: 'Ensaladas' },
  ],
  dessert: [
    { key: '', label: 'Postres' }
  ],
  breakfast: [
    { key: 'Desayuno americano', label: 'Desayuno Americano' },
    { key: 'Desayuno colombiano', label: 'Desayuno Colombiano' },
    { key: 'Desayuno ecuatoriano', label: 'Desayuno Ecuatoriano' }
  ],
  drinks: [
    { key: 'cocteles', label: 'cocteles' },
    { key: 'Vinos y Sangrias', label: 'Vinos y Sangrias' },
    { key: 'Cognac', label: 'Cognac' },
    { key: 'Wiskey', label: 'Wiskey' },
    { key: 'Ron', label: 'Ron' },
    { key: 'Sangria', label: 'Sangria' },
    { key: 'Gin', label: 'Gin' },
    { key: 'Champan', label: 'Champan' },
    { key: 'Tequila', label: 'Tequila' },
    { key: 'Cerveza', label: 'Cerveza' },
    { key: 'Vodka', label: 'Vodka' },
    { key: 'Bebidas frias y jugos', label: 'Frias y Jugos' },
    { key: 'Cerveza', label: 'Cerveza' }
  ]
};

let currentGroup = 'main';
let currentCategory = groupSubcategories['main'][0].key;

// Renderiza las subcategorías en la barra horizontal
function renderCategories(group) {
  const catList = document.getElementById("menu-categories-list");
  catList.innerHTML = '';
  const subcats = groupSubcategories[group] || [];
  subcats.forEach((subcat, idx) => {
    const li = document.createElement('li');
    li.setAttribute('data-category', subcat.key);
    li.innerHTML = subcat.label;
    if (idx === 0) li.classList.add('active');
    catList.appendChild(li);
  });
}

// Renderiza la lista de productos filtrados
function renderMenu(group = 'main', category) {
  const menuList = document.getElementById("menu-list");
  if (!menuList) return;
  const filtered = menuData.filter(item => item.group === group && (!category || item.category === category));
  let col1 = [], col2 = [];
  filtered.forEach((item, idx) => (idx % 2 === 0 ? col1 : col2).push(item));
  const isMobile = window.innerWidth <= 650;
  let html = "";
  if (isMobile) {
    filtered.forEach(item => {
      html += menuItemHTML(item);
    });
  } else {
    html += `
      <div class="menu-list-col">
        ${col1.map(menuItemHTML).join("")}
      </div>
      <div class="menu-list-col">
        ${col2.map(menuItemHTML).join("")}
      </div>
    `;
  }
  menuList.innerHTML = html;
}
function menuItemHTML(item) {
  return `
    <div class="menu-item">
      <img class="menu-item-img" src="${item.img}" alt="${item.title}">
      <div class="menu-item-info">
        <div class="menu-item-title">${item.title}</div>
        <div class="menu-item-desc">${item.desc}</div>
      </div>
      <div class="menu-item-price">${item.price}</div>
    </div>
  `;
}

// Maneja la selección de categorías horizontales
function setupMenuFilters() {
  const catList = document.getElementById("menu-categories-list");
  catList.addEventListener("click", e => {
    const li = e.target.closest("li[data-category]");
    if (!li) return;
    catList.querySelectorAll("li").forEach(el => el.classList.remove("active"));
    li.classList.add("active");
    currentCategory = li.getAttribute("data-category");
    renderMenu(currentGroup, currentCategory);
  });
}

// Maneja la selección de familias en el sidebar
function setupSidebarFilters() {
  const sidebarCats = document.getElementById("sidebar-categories");
  sidebarCats.addEventListener("click", e => {
    const li = e.target.closest("li[data-group]");
    if (!li) return;
    sidebarCats.querySelectorAll("li").forEach(el => el.classList.remove("active"));
    li.classList.add("active");
    currentGroup = li.getAttribute("data-group");
    // Selecciona la primera subcategoría de ese grupo
    const subcats = groupSubcategories[currentGroup];
    currentCategory = subcats && subcats.length ? subcats[0].key : null;
    renderCategories(currentGroup);
    renderMenu(currentGroup, currentCategory);
    setupMenuFilters(); // Vuelve a enlazar eventos
    closeSidebar();
  });
}

// Responsive: vuelve a renderizar cuando cambia el tamaño (para columnas)
window.addEventListener("resize", () => {
  renderMenu(currentGroup, currentCategory);
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  // Marca activo el grupo inicial (main)
  const sidebarCats = document.getElementById("sidebar-categories");
  sidebarCats.querySelectorAll("li").forEach(el => el.classList.remove("active"));
  sidebarCats.querySelector('li[data-group="main"]').classList.add("active");
  // Renderiza subcategorías y menú
  renderCategories(currentGroup);
  renderMenu(currentGroup, currentCategory);
  setupMenuFilters();
  setupSidebarFilters();
});