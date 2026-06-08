import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Checkbox } from './ui/checkbox';

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
            Settings and Configurations
          </h1>
          <p style={{ color: '#666666', fontWeight: 400 }}>
            Configure system preferences, scheduling rules, and operational settings
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" style={{ fontWeight: 600 }}>
            Audit Log
          </Button>
          <Button style={{ backgroundColor: '#FFD400', color: '#002B7F', fontWeight: 600 }}>
            Save All Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid grid-cols-7 w-full">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="academic">Academic Settings</TabsTrigger>
          <TabsTrigger value="scheduling">Scheduling Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="backup">Backup & Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 border border-gray-200">
                <h3 className="text-lg mb-4" style={{ color: '#002B7F', fontWeight: 600 }}>
                  Institution Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>INSTITUTION NAME</Label>
                    <Input defaultValue="STI College Balagtas" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>SHORT NAME</Label>
                    <Input defaultValue="STI Balagtas" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>ADDRESS</Label>
                    <Input defaultValue="Brgy 101, Balagtas, Bulacan" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>EMAIL</Label>
                    <Input defaultValue="info@balagtas.sti.edu.ph" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>PHONE</Label>
                    <Input defaultValue="0044 7891-2881" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>ID/CHED CODE</Label>
                    <Input defaultValue="ID547+089 AquMania" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200">
                <h3 className="text-lg mb-4" style={{ color: '#002B7F', fontWeight: 600 }}>
                  System Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p style={{ color: '#333333', fontWeight: 600 }}>Enable AI Recommendations</p>
                      <p className="text-sm" style={{ color: '#666666' }}>Allow the system to generate smart scheduling suggestions.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p style={{ color: '#333333', fontWeight: 600 }}>Auto Backup</p>
                      <p className="text-sm" style={{ color: '#666666' }}>Automatically back up system data at regular intervals.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p style={{ color: '#333333', fontWeight: 600 }}>Email Notifications</p>
                      <p className="text-sm" style={{ color: '#666666' }}>Send email notifications for system events.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p style={{ color: '#333333', fontWeight: 600 }}>Maintenance Mode</p>
                      <p className="text-sm" style={{ color: '#666666' }}>Temporarily disable system access for maintenance.</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p style={{ color: '#333333', fontWeight: 600 }}>Dark Mode</p>
                      <p className="text-sm" style={{ color: '#666666' }}>Reduce eye strain using dark mode interface.</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200">
                <h3 className="text-lg mb-4" style={{ color: '#002B7F', fontWeight: 600 }}>
                  Session Settings
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm mb-2 block" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>Session Timeout (minutes)</Label>
                    <Input type="number" defaultValue="60" className="w-32" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm mb-2 block" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>Password Policy</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox defaultChecked />
                        <span className="text-sm" style={{ color: '#666666' }}>Minimum 8 characters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox defaultChecked />
                        <span className="text-sm" style={{ color: '#666666' }}>Require uppercase letters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox defaultChecked />
                        <span className="text-sm" style={{ color: '#666666' }}>Require numbers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox />
                        <span className="text-sm" style={{ color: '#666666' }}>Require special characters</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200">
                <h3 className="text-lg mb-4" style={{ color: '#002B7F', fontWeight: 600 }}>
                  System Language
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm mb-2 block" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>Default Language</Label>
                    <Select defaultValue="english">
                      <SelectTrigger className="w-64">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="filipino">Filipino</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs mt-1" style={{ color: '#666666' }}>Sets the preferred language for the system.</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border border-gray-200">
                <h3 className="text-lg mb-4" style={{ color: '#002B7F', fontWeight: 600 }}>
                  System Logo
                </h3>
                <div className="mb-4">
                  <p className="text-xs mb-2" style={{ color: '#666666' }}>Upload or change the system logo</p>
                  <div className="w-full h-32 border-2 border-dashed rounded-lg flex items-center justify-center" style={{ borderColor: '#E5E7EB' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded" style={{ backgroundColor: '#002B7F' }}></div>
                      <p className="text-sm" style={{ color: '#002B7F', fontWeight: 600 }}>ScheduLogic</p>
                      <p className="text-xs" style={{ color: '#666666' }}>SYSTEM</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full" style={{ backgroundColor: '#002B7F', color: 'white' }}>
                  Change Logo
                </Button>
                <p className="text-xs mt-2 text-center" style={{ color: '#999999' }}>PNG, JPG up to 2MB</p>
              </Card>

              <Card className="p-6 border border-gray-200">
                <h3 className="text-lg mb-4" style={{ color: '#002B7F', fontWeight: 600 }}>
                  Theme Color
                </h3>
                <p className="text-xs mb-3" style={{ color: '#666666' }}>Choose the primary theme color:</p>
                <div className="grid grid-cols-4 gap-2">
                  {['#002B7F', '#3B82F6', '#8B5CF6', '#EC4899', '#EF4444', '#F59E0B', '#10B981', '#6B7280'].map((color) => (
                    <button
                      key={color}
                      className="w-full h-10 rounded border-2"
                      style={{
                        backgroundColor: color,
                        borderColor: color === '#002B7F' ? 'white' : color
                      }}
                    />
                  ))}
                </div>
              </Card>

              <Card className="p-6 border border-gray-200">
                <h3 className="text-lg mb-4" style={{ color: '#002B7F', fontWeight: 600 }}>
                  Date & Time
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs mb-2 block" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>DATE FORMAT</Label>
                    <Select defaultValue="mmddyyyy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mmddyyyy">MM/DD/YYYY (06/07/2026)</SelectItem>
                        <SelectItem value="ddmmyyyy">DD/MM/YYYY (07/06/2026)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs mb-2 block" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>TIME FORMAT</Label>
                    <Select defaultValue="12h">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12h">12-hour (with AM/PM)</SelectItem>
                        <SelectItem value="24h">24-hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs mb-2 block" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>ITEMS PER PAGE</Label>
                    <Select defaultValue="25">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="academic" className="mt-6">
          <Card className="p-6 border border-gray-200">
            <p style={{ color: '#666666' }}>Academic settings configuration will be displayed here</p>
          </Card>
        </TabsContent>

        <TabsContent value="scheduling" className="mt-6">
          <Card className="p-6 border border-gray-200">
            <p style={{ color: '#666666' }}>Scheduling settings configuration will be displayed here</p>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card className="p-6 border border-gray-200">
            <p style={{ color: '#666666' }}>Notification settings will be displayed here</p>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6">
          <Card className="p-6 border border-gray-200">
            <p style={{ color: '#666666' }}>Integration settings will be displayed here</p>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card className="p-6 border border-gray-200">
            <p style={{ color: '#666666' }}>Security settings will be displayed here</p>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="mt-6">
          <Card className="p-6 border border-gray-200">
            <p style={{ color: '#666666' }}>Backup and maintenance settings will be displayed here</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
