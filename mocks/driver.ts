import { type DriverData } from '~/constants/driver-data';

export const drivers: Omit<DriverData, 'checkin'>[] = [
  {
    id: '634e959f7a14ca00190abb08',
    service_area: ['พระโขนง', 'บางนา'],
    service_area_id: [13, 12],
    address: {
      subdistrict: 'บางนา',
      address1: '55 บุญแจ่ม1 สรรพาวุธ แขวงบางนาใต้ เขตบางนา กทม. 10260',
      lat: '13.674367,',
      lon: ' 100.589985',
      district: 'บางนา',
      province: 'กรุงเทพมหานคร',
      postcode: '10260',
    },
    name: 'John Wick',
    surname: 'Wick',
    nickname: 'Baba Yaga',
    dob: '2000-01-01T00:00:00.000Z',
    phone: '0000000000',
    email: 'johnwick@baba.yaga',
    gender: 'Male',
    id_card: '1000000666000',
    driver_license_no: '60024444',
    driver_license_exp: '2025-10-23T00:00:00.000Z',
    model: 'honda',
    vehicle_type: 'Car',
    license_plate: '1ขง9999',
    bank_acc_name: 'John Wick',
    bank_acc_no: '12345665433',
    bank_name: 'ธนาคารไทยพาณิชย์',
    security_deposit: 0,
    picture_profile:
      'https://drivers-storage.makesend.ninja/images/2022-10-18T12:01:33.912Z_1215999234 - 123 456.jpg',
    vehicle_image:
      'https://drivers-storage.makesend.ninja/images/2022-10-18T12:01:34.473Z_1665848363621 - 123 456.jpg',
    register_date: '2022-10-18T12:01:34.731Z',
    status: 'test drive',
    type: 'fulltime',
    address_id: {
      district: 12,
      subdistrict: 85,
      postcode: 14,
      province: 1,
    },
    vehicle_type_id: 2,
    hub_id: 2,
    distance: 0,
    driver_id: 'MS-D-0AAA08',
    total_parcel: 0,
    valocity: 0,
    volume: 0,
  },
  {
    id: '1a2417a758ea29e6022d7531',
    service_area: ['พระโขนง', 'บางนา'],
    service_area_id: [13, 12],
    address: {
      subdistrict: 'บางนา',
      address1: '55 บุญแจ่ม1 สรรพาวุธ แขวงบางนาใต้ เขตบางนา กทม. 10260',
      lat: '13.674367,',
      lon: ' 100.589985',
      district: 'บางนา',
      province: 'กรุงเทพมหานคร',
      postcode: '10260',
    },
    name: 'Bruce Wayne',
    surname: 'Wayne',
    nickname: 'Bat Man',
    dob: '2000-01-01T00:00:00.000Z',
    phone: '0999999999',
    email: 'bruce@wayne.com',
    gender: 'Male',
    id_card: '1000000666000',
    driver_license_no: '60024444',
    driver_license_exp: '2025-10-23T00:00:00.000Z',
    model: 'honda',
    vehicle_type: 'Car',
    license_plate: '1ขง8888',
    bank_acc_name: 'Bruce Wayne',
    bank_acc_no: '12345665499',
    bank_name: 'ธนาคารไทยพาณิชย์',
    security_deposit: 0,
    picture_profile:
      'https://drivers-storage.makesend.ninja/images/2022-10-18T12:01:33.912Z_1215999234 - 123 456.jpg',
    vehicle_image:
      'https://drivers-storage.makesend.ninja/images/2022-10-18T12:01:34.473Z_1665848363621 - 123 456.jpg',
    register_date: '2022-10-18T12:01:34.731Z',
    status: 'test drive',
    type: 'fulltime',
    address_id: {
      district: 11,
      subdistrict: 84,
      postcode: 13,
      province: 1,
    },
    vehicle_type_id: 2,
    hub_id: 1,
    distance: 0,
    driver_id: 'MS-D-0AAA08',
    total_parcel: 0,
    valocity: 0,
    volume: 0,
  },
];
