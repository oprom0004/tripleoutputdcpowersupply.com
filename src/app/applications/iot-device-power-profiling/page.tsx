import type { Metadata } from 'next';
import IoTDevice from '@/components/pages/IoTDevice';
export const metadata: Metadata = {
  alternates: { canonical: '/applications/iot-device-power-profiling' },
  openGraph: {
    url: '/applications/iot-device-power-profiling',
  },
  title: 'Precision IoT Power Profiling with Triple Output Supplies',
  // description: 'Individual description here...',
};
export default function Page() {
  return <IoTDevice />;
}
