import type { Parcel } from '~/types';
import type { ParcelStatus } from '~/constants/parcel';
import { Hubs, DeliveryStatus } from '~/constants/logistics';
import { ParcelSizes } from '~/constants/parcel';

// TODO: redefine Parcel type
export const parcelsToSort: (Parcel & any)[] = [
  {
    orderID: 'MS2209051141438',
    trackingID: 'EX2209051141578',
    parcelSize: ParcelSizes.S60,
    pickupRound: 8,
    dropRound: 0,
    cod: 0,
    temp: 1,
    orderDate: '05/09/2022',
    pickupType: 'drop_branch',
    userID: '560',
    parcelChanged: false,
    parcelCreatedAt: '2022-09-05 11:41:38',
    parcelUpdatedAt: '2022-09-05 11:41:38',
    parcelType: 'food',
    PODStatus: 'NOTHING',
    senderName: 'Jane Doe',
    senderNo: '0824691000',
    pickupAddress:
      '[MAKESEND GO สาขาเมืองนนทบุรี 01 (ท่าอิฐ) (ปิดบริการรับฝากส่งที่สาขาชั่วคราว)] 79/53หมู่3ต.บางรักน้อย อ.เมือง จ.นนทบุรี  11000',
    pickupProvince: 'นนทบุรี',
    pickupDistrict: 'เมืองนนทบุรี',
    pickupPostcode: '11000',
    receiverName: 'John Doe',
    receiverNo: '0656156000',
    dropAddress:
      'ศูนย์อาหารทวีวงศ์ถวัลยศักดิ์ รพ.จุฬาลงกรณ์ เลขที่ 0000 แขวงปทุมวัน',
    dropProvince: 'กรุงเทพ',
    dropDistrict: 'ปทุมวัน',
    dropPostcode: '10330',
    status: DeliveryStatus.InHub,
    plannerRound: 1,
    plannerHub: Hubs.DMK,
    sequence: 5,
    id: '62f1e04321a22e001b002b88',
    name: 'rachata ',
    nickname: 'Tang01 ',
    phone: '0934488404',
    vehicle_type: 'Bike',
    vehicle_type_id: 1,
    service_area: ['สาทร', 'ปทุมวัน'],
    service_area_id: [33, 31],
    round: 1,
    hub: Hubs.DMK,
    rack: 'B2',
    volume: 0,
    address_id: { district: 25, subdistrict: 157, postcode: 25, province: 1 },
  },
  {
    orderID: 'MS2209051141438',
    trackingID: 'EX2209051141875',
    parcelSize: ParcelSizes.S60,
    pickupRound: 8,
    dropRound: 0,
    cod: 0,
    temp: 1,
    orderDate: '05/09/2022',
    pickupType: 'drop_branch',
    userID: '560',
    parcelChanged: false,
    parcelCreatedAt: '2022-09-05 11:41:38',
    parcelUpdatedAt: '2022-09-05 11:41:38',
    parcelType: 'food',
    PODStatus: 'NOTHING',
    senderName: 'John Smith',
    senderNo: '0824691000',
    pickupAddress:
      '[MAKESEND GO สาขาเมืองนนทบุรี 01 (ท่าอิฐ) (ปิดบริการรับฝากส่งที่สาขาชั่วคราว)] 79/53หมู่3ต.บางรักน้อย อ.เมือง จ.นนทบุรี  11000',
    pickupProvince: 'นนทบุรี',
    pickupDistrict: 'เมืองนนทบุรี',
    pickupPostcode: '11000',
    receiverName: 'Jane Smith',
    receiverNo: '0656156000',
    dropAddress:
      'ศูนย์อาหารทวีวงศ์ถวัลยศักดิ์ รพ.จุฬาลงกรณ์ เลขที่ 1873 แขวงปทุมวัน',
    dropProvince: 'กรุงเทพ',
    dropDistrict: 'ปทุมวัน',
    dropPostcode: '10330',
    status: DeliveryStatus.FailedDelivery,
    plannerRound: 1,
    plannerHub: Hubs.DMK,
    sequence: 5,
    id: '62f1e04321a22e001b002b88',
    name: 'rachata ',
    nickname: 'Tang01 ',
    phone: '0934488404',
    vehicle_type: 'Bike',
    vehicle_type_id: 1,
    service_area: ['สาทร', 'ปทุมวัน'],
    service_area_id: [33, 31],
    round: 2,
    hub: Hubs.DMK,
    rack: 'B2',
    volume: 0,
    address_id: { district: 25, subdistrict: 157, postcode: 25, province: 1 },
  },
];

export const parcelsByOrderId = [
  {
    shipment_id: 302367,
    shipmentID: 'EX2302080835468',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332846,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T14:45:35.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T14:45:35.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's60',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณสุเอ็บ พันดวง',
    receiver_no: '0800892877',
    dropoff_address:
      '50/535 หมู่5 ซ.นวมิทร์26แยก3\nถ.นวมิทร์ แขวงคลองกุ่ม\nเขตบึงกุ่ม  กทม 10240',
    dropoff_district: 'บึงกุ่ม',
    dropoff_province: 'กรุงเทพ',
    dropoff_postcode: '10240',
  },
  {
    shipment_id: 302368,
    shipmentID: 'EX2305121740126',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332847,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T13:55:07.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T13:55:07.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's60',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'ส.ต.อ.ศิริวัฒน์ ศรีประทุม',
    receiver_no: '0922803405',
    dropoff_address:
      '51/26 ม.4 ซ.กวีวัฒนา ( คลองหลวง 23 ) ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120',
    dropoff_district: 'คลองหลวง',
    dropoff_province: 'ปทุมธานี',
    dropoff_postcode: '12120',
  },
  {
    shipment_id: 302369,
    shipmentID: 'EX2209131729539',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332848,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T15:08:52.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T15:08:52.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's60',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'บริษัท บางกอกแพลนท์ จำกัด',
    receiver_no: '0992544154',
    dropoff_address:
      '9/20 ถนนปัญญาอินทรา แขวงคันนายาว เขตคันนายาว กรุงเทพมหานคร 10230',
    dropoff_district: 'คันนายาว',
    dropoff_province: 'กรุงเทพ',
    dropoff_postcode: '10230',
  },
  {
    shipment_id: 302370,
    shipmentID: 'EX2209131729476',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332849,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T14:51:21.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T14:51:21.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's80',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณมนต์ชัย วงศ์ราช',
    receiver_no: '0836529696',
    dropoff_address:
      'พลีโน่​ ราชพฤกษ์ 88/279 ซอยบางกร่าง45/4 ต.บางกร่าง​ อ.เมือง​นนทบุรี​ จ.นนทบุรี 11000',
    dropoff_district: 'เมืองนนทบุรี',
    dropoff_province: 'นนทบุรี',
    dropoff_postcode: '11000',
  },
  {
    shipment_id: 302371,
    shipmentID: 'EX2209131729272',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332850,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T16:52:36.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T16:52:36.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's60',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณนพมาศ  ธรรมปรีชา',
    receiver_no: '0814259583',
    dropoff_address:
      '88/34. ม.7\nหมู่บ้านเพ็ญศิริ เพลส\nแขวงลำต้อยติ่ง\nเขตหนองจอก\nกทม.\n10530',
    dropoff_district: 'หนองจอก',
    dropoff_province: 'กรุงเทพ',
    dropoff_postcode: '10530',
  },
  {
    shipment_id: 302372,
    shipmentID: 'EX2209131729770',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332851,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T16:49:52.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T16:49:52.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's60',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณครองทรัพย์ แสงทอง',
    receiver_no: '0891502569',
    dropoff_address:
      '118 อาคารไนน์ทีน การ์เด้น\nถ.หทัยราษฎร์ ซ.ไทรามัญ\nแขวงสามวาตะวันตก\nเขตคลองสามวา กทม. 10510',
    dropoff_district: 'คลองสามวา',
    dropoff_province: 'กรุงเทพ',
    dropoff_postcode: '10510',
  },
  {
    shipment_id: 302373,
    shipmentID: 'EX2209131729281',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332852,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T17:19:11.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T17:19:11.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's80',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณกานต์',
    receiver_no: '0629564696',
    dropoff_address:
      '71/45 หมู่บ้านโนเบิ้ล อุทยานซอย 7 ทวีวัฒนา  ทวีวัฒนา  กทม  10170',
    dropoff_district: 'ทวีวัฒนา',
    dropoff_province: 'กรุงเทพ',
    dropoff_postcode: '10170',
  },
  {
    shipment_id: 302374,
    shipmentID: 'EX2209131729431',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332853,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T14:23:59.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T14:23:59.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's160',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณโชติภัค ภักดีสว่าง',
    receiver_no: '0996246416',
    dropoff_address:
      '69/15 ม.3 \nปากซอยพ่อปู่ดอนจิก\nต.ศาลากลาง อ.บางกรวย\nจ. นนทบุรี  11130',
    dropoff_district: 'บางกรวย',
    dropoff_province: 'นนทบุรี',
    dropoff_postcode: '11130',
  },
  {
    shipment_id: 302375,
    shipmentID: 'EX2209131729600',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332854,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T14:24:37.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T14:24:37.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's160',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณโชติภัค ภักดีสว่าง',
    receiver_no: '0996246416',
    dropoff_address:
      '69/15 ม.3 \nปากซอยพ่อปู่ดอนจิก\nต.ศาลากลาง อ.บางกรวย\nจ. นนทบุรี  11130',
    dropoff_district: 'บางกรวย',
    dropoff_province: 'นนทบุรี',
    dropoff_postcode: '11130',
  },
  {
    shipment_id: 302376,
    shipmentID: 'EX2209131729735',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด\n***กล่องใหญ่***',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332855,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T14:25:07.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T14:25:07.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's160',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณโชติภัค ภักดีสว่าง',
    receiver_no: '0996246416',
    dropoff_address:
      '69/15 ม.3 \nปากซอยพ่อปู่ดอนจิก\nต.ศาลากลาง อ.บางกรวย\nจ. นนทบุรี  11130',
    dropoff_district: 'บางกรวย',
    dropoff_province: 'นนทบุรี',
    dropoff_postcode: '11130',
  },
  {
    shipment_id: 302377,
    shipmentID: 'EX2209131729862',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด\n***กล่องใหญ่***',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332856,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T14:25:43.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T14:25:43.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's160',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณโชติภัค ภักดีสว่าง',
    receiver_no: '0996246416',
    dropoff_address:
      '69/15 ม.3 \nปากซอยพ่อปู่ดอนจิก\nต.ศาลากลาง อ.บางกรวย\nจ. นนทบุรี  11130',
    dropoff_district: 'บางกรวย',
    dropoff_province: 'นนทบุรี',
    dropoff_postcode: '11130',
  },
  {
    shipment_id: 302378,
    shipmentID: 'EX2209131729960',
    cod: 0,
    pickup_round: 1,
    pickup_type: 'pickup',
    drop_round: 0,
    branch_id: null,
    temp: 0,
    note: 'ต้นไม้ในขวดแก้ว ห้ามโยน ห้ามตากแดด ระวังแตก วางกล่องเบาๆ\nต้นไม้ ห้ามโยน ห้ามซ้อนกล่อง ห้ามตากแดด\n***กล่องใหญ่***',
    parcel_type: 'tree',
    pickup_id: 163225,
    drop_id: 332857,
    service_date: '2022-09-14T00:00:00.000Z',
    created_at: '2022-09-14T14:26:20.000Z',
    status: 'Delivered' as ParcelStatus,
    updated_at: '2022-09-14T14:26:20.000Z',
    invoiceID: 'INV2209131729951',
    user_id: 4070,
    size: 's160',
    sender_name: 'หจก.ประยูรออคิดส์',
    sender_no: '0891713131',
    pickup_address: '9 หมู่ 11 ต.หนองสามวัง อ.หนองเสือ จ.ปทุมธานี 12170',
    pickup_district: 'หนองเสือ',
    pickup_province: 'ปทุมธานี',
    pickup_postcode: '12170',
    receiver_name: 'คุณโชติภัค ภักดีสว่าง',
    receiver_no: '0996246416',
    dropoff_address:
      '69/15 ม.3 \nปากซอยพ่อปู่ดอนจิก\nต.ศาลากลาง อ.บางกรวย\nจ. นนทบุรี  11130',
    dropoff_district: 'บางกรวย',
    dropoff_province: 'นนทบุรี',
    dropoff_postcode: '11130',
  },
];