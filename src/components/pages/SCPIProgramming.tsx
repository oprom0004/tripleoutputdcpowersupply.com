import React from 'react';
import { ArrowRight, Terminal, Code, Cpu, HelpCircle } from 'lucide-react';
export default function SCPIProgramming() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          TUTORIAL
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          SCPI Programming for Triple Output DC Power Supplies
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          Unlock the full potential of your lab equipment. Learn how to control your programmable triple output DC power supply using Python, SCPI commands, and PyVISA for Automated Test Equipment (ATE) integration.
        </p>
      </div>
      <div className="max-w-none text-lg space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">What is SCPI?</h2>
          <p className="text-lab-muted mb-4">
            SCPI (Standard Commands for Programmable Instruments) is the industry-standard, text-based language used to control test and measurement equipment. Whether you are using an oscilloscope, a digital multimeter, or a programmable triple output DC power supply, SCPI provides a unified syntax for automation.
          </p>
          <p className="text-lab-muted mb-4">
            Premium bench power supplies feature communication interfaces such as USB, LAN (LXI compliant), or legacy GPIB. By sending SCPI strings over these interfaces, engineers can automate repetitive testing, log data over long periods, and simulate complex power environments without touching the front panel.
          </p>
          <div className="bg-lab-surface border-l-4 border-lab-accent p-4 rounded-r-sm mb-8">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-lab-accent" />
              Migrating from Legacy Equipment?
            </h4>
            <p className="text-sm text-lab-muted">
              If you are searching for the <strong>E3631A triple output dc power supply user's guide</strong> to understand its SCPI commands, you'll be pleased to know that modern programmable supplies (like the eTM-DM series) often maintain high compatibility with legacy Agilent/Keysight command sets. This allows you to upgrade your hardware without rewriting thousands of lines of legacy ATE code.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
            <Terminal className="w-6 h-6 text-lab-accent" />
            Python Automation Example (Using PyVISA)
          </h2>
          <p className="text-lab-muted mb-4">
            Python has become the dominant language for hardware automation. Using the <code>PyVISA</code> library, you can easily establish a connection to your triple output DC power supply and script complex test sequences, such as voltage sweeps, margin testing, or battery discharge simulations.
          </p>
          <div className="bg-[#0a0c10] border border-lab-border p-6 rounded-sm font-mono text-sm mb-6 overflow-x-auto shadow-lg">
            <div className="text-lab-muted mb-2 border-b border-lab-border/50 pb-2 flex items-center gap-2">
              <Code className="w-4 h-4" /> <span>automate_power_supply.py</span>
            </div>
            <pre className="text-lab-muted mt-4">
<span className="text-emerald-400">import</span> pyvisa
<span className="text-emerald-400">import</span> time
<span className="text-lab-border"># 1. Initialize the Resource Manager and connect to the power supply</span>
<span className="text-lab-border"># Replace with your instrument's actual IP address or USB VISA resource string</span>
rm = pyvisa.ResourceManager()
psu = rm.open_resource(<span className="text-amber-400">'TCPIP0::192.168.1.100::INSTR'</span>)
<span className="text-lab-border"># 2. Identify the instrument to ensure connection</span>
idn = psu.query(<span className="text-amber-400">'*IDN?'</span>)
print(<span className="text-amber-400">f"Connected to: {'{idn}'}"</span>)
<span className="text-lab-border"># 3. Configure Channel 1 (e.g., 12V output, 2A current limit)</span>
psu.write(<span className="text-amber-400">'INSTrument CH1'</span>)
psu.write(<span className="text-amber-400">'VOLTage 12.0'</span>)
psu.write(<span className="text-amber-400">'CURRent 2.0'</span>)
<span className="text-lab-border"># 4. Turn on the output</span>
psu.write(<span className="text-amber-400">'OUTPut ON'</span>)
print(<span className="text-amber-400">"Power supply output enabled."</span>)
<span className="text-lab-border"># 5. Wait for the circuit to stabilize, then measure actual current draw</span>
time.sleep(2)
actual_current = psu.query(<span className="text-amber-400">'MEASure:CURRent?'</span>)
print(<span className="text-amber-400">f"Actual Current draw: {'{actual_current}'} A"</span>)
<span className="text-lab-border"># 6. Safely turn off the output and close the connection</span>
psu.write(<span className="text-amber-400">'OUTPut OFF'</span>)
psu.close()
            </pre>
          </div>
        </section>
        <section className="bg-lab-surface border border-lab-border p-8 rounded-sm">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Cpu className="w-6 h-6 text-lab-accent" />
            Essential SCPI Commands for Triple Output Supplies
          </h2>
          <p className="text-lab-muted mb-6">While exact syntax can vary slightly between manufacturers (always consult your specific programming manual), these are the most common SCPI commands used for multi-channel power supplies:</p>
          <ul className="space-y-4 text-lab-muted font-mono text-sm">
            <li className="border-b border-lab-border/50 pb-4">
              <strong className="text-emerald-400 text-base block mb-1">OUTPut:TRACking &lt;mode&gt;</strong>
              <span className="font-sans">Configures the internal relays to set the power supply to INDEPendent, SERIES, or PARALLEL mode. Crucial for automated bipolar or high-current testing.</span>
            </li>
            <li className="border-b border-lab-border/50 pb-4">
              <strong className="text-emerald-400 text-base block mb-1">VOLTage:PROTection &lt;value&gt;</strong>
              <span className="font-sans">Sets the hardware Over-Voltage Protection (OVP) trip level. Always script this before turning the output ON to protect your Device Under Test (DUT).</span>
            </li>
            <li className="border-b border-lab-border/50 pb-4">
              <strong className="text-emerald-400 text-base block mb-1">MEASure:VOLTage:ALL?</strong>
              <span className="font-sans">A highly efficient command that reads back the actual measured voltage of all 3 channels simultaneously, reducing communication latency over the bus.</span>
            </li>
            <li>
              <strong className="text-emerald-400 text-base block mb-1">APPLy CH2, 5.0, 1.0</strong>
              <span className="font-sans">A shorthand command to simultaneously select a channel, set the voltage (5.0V), and set the current limit (1.0A) in a single string.</span>
            </li>
          </ul>
        </section>
        <section className="border-t border-lab-border pt-8 mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            <HelpCircle className="w-6 h-6 text-lab-accent" />
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Do I need special drivers to use SCPI via USB?</h3>
              <p className="text-lab-muted">Most modern programmable triple output DC power supplies support USBTMC (USB Test and Measurement Class). If you install NI-VISA or Keysight IO Libraries, the USBTMC driver is usually included, allowing PyVISA to communicate with the instrument seamlessly without custom serial drivers.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">What is LXI and why is it important for LAN connections?</h3>
              <p className="text-lab-muted">LXI (LAN eXtensions for Instrumentation) is a standard that ensures test equipment behaves predictably over Ethernet. An LXI-compliant power supply will have a built-in web interface and support standard discovery protocols (mDNS/VXI-11), making it much easier to connect to via Python compared to raw raw TCP sockets.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Can I log data directly from the power supply?</h3>
              <p className="text-lab-muted">Yes. By placing the <code>MEASure:VOLTage?</code> and <code>MEASure:CURRent?</code> commands inside a Python <code>while</code> loop with a time delay, you can easily create a custom data logger that saves the power consumption profile of your device to a CSV file over hours or days.</p>
            </div>
          </div>
        </section>
        <div className="mt-12 p-8 border border-lab-accent/30 bg-lab-accent/5 rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Build Your Automated Test Rack</h3>
          <p className="text-lab-muted mb-8">
            Our programmable power supplies come standard with USB and LAN interfaces, fully compliant with SCPI and LXI standards for seamless ATE integration.
          </p>
          <a
            href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-sm font-medium transition-colors inline-flex items-center gap-2"
          >
            Check Online Stock & Pricing <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
