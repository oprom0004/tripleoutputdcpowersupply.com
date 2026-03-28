import type { Metadata } from 'next';
import IoTDevice from '@/components/pages/IoTDevice';
export const metadata: Metadata = {
  alternates: { canonical: '/applications/iot-device-power-profiling' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/applications/iot-device-power-profiling',
  },
  title: 'IoT Device Power Profiling',
  // description: 'Individual description here...',
};
export default function Page() {
  return <IoTDevice />;
}
