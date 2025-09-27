import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function GeneralSettingsSection() {
  const { userId } = useAuth();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [changePasswordData, setChangePasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (changePasswordData.newPassword !== changePasswordData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    try {
      const response = await fetch('/api/auth/changePassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userType: 'student',
          userId,
          ...changePasswordData,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setShowChangePassword(false);
        setChangePasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Change password error:', error);
      toast.error('Change password failed');
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" defaultChecked />
                <span>Email notifications for new opportunities</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" defaultChecked />
                <span>Email notifications for discussion updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span>SMS notifications for urgent updates</span>
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Privacy</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" defaultChecked />
                <span>Make profile visible to investors</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" defaultChecked />
                <span>Show projects in public listings</span>
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Account</h4>
            <div className="space-y-3">
              <button
                onClick={() => setShowChangePassword(!showChangePassword)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {showChangePassword ? 'Cancel' : 'Change Password'}
              </button>
              {showChangePassword && (
                <form onSubmit={handleChangePassword} className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={changePasswordData.currentPassword}
                      onChange={(e) => setChangePasswordData({...changePasswordData, currentPassword: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={changePasswordData.newPassword}
                      onChange={(e) => setChangePasswordData({...changePasswordData, newPassword: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={changePasswordData.confirmPassword}
                      onChange={(e) => setChangePasswordData({...changePasswordData, confirmPassword: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Update Password
                  </button>
                </form>
              )}
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
