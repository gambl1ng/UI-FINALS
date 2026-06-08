import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface AvailabilitySchedulerProps {
  value?: AvailabilityData;
  onChange?: (value: AvailabilityData) => void;
}

export interface AvailabilityData {
  monday: { enabled: boolean; from: string; to: string };
  tuesday: { enabled: boolean; from: string; to: string };
  wednesday: { enabled: boolean; from: string; to: string };
  thursday: { enabled: boolean; from: string; to: string };
  friday: { enabled: boolean; from: string; to: string };
  saturday: { enabled: boolean; from: string; to: string };
}

export function AvailabilityScheduler({ value, onChange }: AvailabilitySchedulerProps) {
  const defaultValue: AvailabilityData = {
    monday: { enabled: false, from: '7:00 AM', to: '5:00 PM' },
    tuesday: { enabled: false, from: '7:00 AM', to: '5:00 PM' },
    wednesday: { enabled: false, from: '7:00 AM', to: '5:00 PM' },
    thursday: { enabled: false, from: '7:00 AM', to: '5:00 PM' },
    friday: { enabled: false, from: '7:00 AM', to: '5:00 PM' },
    saturday: { enabled: false, from: '7:00 AM', to: '5:00 PM' },
  };

  const availability = value || defaultValue;

  const handleDayToggle = (day: keyof AvailabilityData, checked: boolean) => {
    if (onChange) {
      onChange({
        ...availability,
        [day]: { ...availability[day], enabled: checked }
      });
    }
  };

  const handleTimeChange = (day: keyof AvailabilityData, field: 'from' | 'to', value: string) => {
    if (onChange) {
      onChange({
        ...availability,
        [day]: { ...availability[day], [field]: value }
      });
    }
  };

  const days: { key: keyof AvailabilityData; label: string }[] = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-base mb-4" style={{ color: '#002B7F', fontWeight: 700 }}>
        Availability Scheduler
      </h3>
      {days.map(({ key, label }) => (
        <div key={key} className="flex items-center gap-4">
          <div className="flex items-center gap-2 w-32">
            <Checkbox
              checked={availability[key].enabled}
              onCheckedChange={(checked) => handleDayToggle(key, checked as boolean)}
            />
            <Label className="text-sm" style={{ color: '#333333', fontWeight: 500 }}>
              {label}
            </Label>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Input
              type="time"
              value={availability[key].from}
              onChange={(e) => handleTimeChange(key, 'from', e.target.value)}
              disabled={!availability[key].enabled}
              className="w-32"
            />
            <span style={{ color: '#666666' }}>to</span>
            <Input
              type="time"
              value={availability[key].to}
              onChange={(e) => handleTimeChange(key, 'to', e.target.value)}
              disabled={!availability[key].enabled}
              className="w-32"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
