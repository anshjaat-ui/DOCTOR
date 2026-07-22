import { Stethoscope, Users, Truck } from 'lucide-react'

const stats = [
  { icon: Stethoscope, label: 'Doctor Formulated', value: 'Clinically Reviewed' },
  { icon: Users, label: '50,000+', value: 'Patients Served' },
  { icon: Truck, label: 'Fast Delivery', value: 'Pan-India, COD Available' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-xl grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4 py-8 px-2 sm:px-8">
            <div className="w-12 h-12 rounded-xl bg-brand-soft flex items-center justify-center shrink-0">
              <Icon size={20} className="text-brand" />
            </div>
            <div>
              <p className="font-display font-bold text-lg leading-tight">{label}</p>
              <p className="text-sm text-muted">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
