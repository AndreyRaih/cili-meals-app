import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export async function useCheckPermissions(permissionName) {
  if (Constants.platform.ios) {
    const {status} = await Permissions.askAsync(Permissions[permissionName]);
    if (status !== 'granted') alert('Sorry, we need camera roll permissions to make this work!')
    return status !== 'granted';
  } else {
    return null;
  }
}