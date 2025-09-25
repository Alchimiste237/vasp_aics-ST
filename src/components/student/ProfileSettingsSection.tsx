import React from 'react';

interface ProfileData {
  studentId: string;
  name: string;
  schoolName: string;
  fieldOfStudy: string;
  email: string;
  phone: string;
  bio: string;
  skills: string[];
  graduationYear: string;
}

interface ProfileSettingsSectionProps {
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  isEditingProfile: boolean;
  setIsEditingProfile: React.Dispatch<React.SetStateAction<boolean>>;
  handleProfileUpdate: (e: React.FormEvent) => void;
}

export default function ProfileSettingsSection({
  profileData,
  setProfileData,
  isEditingProfile,
  setIsEditingProfile,
  handleProfileUpdate
}: ProfileSettingsSectionProps) {
  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Profile Settings</h3>
          <button
            onClick={() => setIsEditingProfile(!isEditingProfile)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {isEditingProfile ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {isEditingProfile ? (
          // Edit Profile Form
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student ID
                </label>
                <input
                  type="text"
                  value={profileData.studentId}
                  onChange={(e) => setProfileData({...profileData, studentId: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Name
                </label>
                <input
                  type="text"
                  value={profileData.schoolName}
                  onChange={(e) => setProfileData({...profileData, schoolName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Field of Study
                </label>
                <input
                  type="text"
                  value={profileData.fieldOfStudy}
                  onChange={(e) => setProfileData({...profileData, fieldOfStudy: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Graduation Year
                </label>
                <input
                  type="number"
                  value={profileData.graduationYear}
                  onChange={(e) => setProfileData({...profileData, graduationYear: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills (comma-separated)
              </label>
              <input
                type="text"
                value={profileData.skills.join(', ')}
                onChange={(e) => setProfileData({...profileData, skills: e.target.value.split(', ').filter(s => s.trim())})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="JavaScript, Python, React, Node.js"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Save Changes
            </button>
          </form>
        ) : (
          // View Profile
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500">Student ID</label>
                <p className="text-lg text-gray-900">{profileData.studentId}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Full Name</label>
                <p className="text-lg text-gray-900">{profileData.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">School Name</label>
                <p className="text-lg text-gray-900">{profileData.schoolName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Field of Study</label>
                <p className="text-lg text-gray-900">{profileData.fieldOfStudy}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Email</label>
                <p className="text-lg text-gray-900">{profileData.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Phone</label>
                <p className="text-lg text-gray-900">{profileData.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Graduation Year</label>
                <p className="text-lg text-gray-900">{profileData.graduationYear}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Bio</label>
              <p className="text-lg text-gray-900">{profileData.bio}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Skills</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.skills.map((skill, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
