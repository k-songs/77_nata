import React from 'react';
import { View, Text, Button } from 'react-native';

interface User {
  name: string;
  age: number;
  isStudent: boolean;
  hobbies: string[];
  profileId: number;
}

interface UserProfileProps {
  user: User;
  showDetails: boolean;
  onPressProfile: () => void;
}

function UserProfile({ user, showDetails, onPressProfile }: UserProfileProps) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        이름: {user.name}
      </Text>
      {showDetails && (
        <>
          <Text>나이: {user.age}</Text>
          <Text>학생 여부: {user.isStudent ? '예' : '아니오'}</Text>
          <Text>취미: {user.hobbies.join(', ')}</Text>
          <Text>ID: {user.profileId}</Text>
        </>
      )}
      <Button
        title="프로필 보기"
        onPress={onPressProfile}
      />
    </View>
  );
}
export default UserProfile;