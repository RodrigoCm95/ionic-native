import { Cordova, Plugin } from './plugin';

export interface AndroidFingerprintAuthOptions {

  /**
   * Used as the alias for your key in the Android Key Store.
   */
  clientId: string;

  /**
   * Used to encrypt the token returned upon successful fingerprint authentication.
   */
  clientSecret: string;

  /**
   * Set to true to remove the "USE BACKUP" button
   */
  disableBackup?: boolean;

  /**
   * Change the language. (en_US or es)
   */
  locale?: string;

}

/**
 * @name Android Fingerprint Auth
 * @description
 * This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.
 * @usage
 * ```typescript
 * import { AndroidFingerprintAuth } from 'ionic-native';
 *
 * AndroidFingerprintAuth.isAvailable()
 *   .then((result)=> {
 *     if(result.isAvailable){
 *       // it is available
 *
 *       AndroidFingerprintAuth.show({ clientId: "myAppName", clientSecret: "so_encrypted_much_secure_very_secret" })
 *         .then(result => {
 *            if(result.withFingerprint) {
 *              console.log('Successfully authenticated with fingerprint!');
 *            } else if(result.withPassword) {
 *              console.log('Successfully authenticated with backup password!');
 *            } else console.log('Didn\'t authenticate!');
 *         })
 *         .catch(error => console.error(error));
 *
 *     } else {
 *       // fingerprint auth isn't available
 *     }
 *   })
 *   .catch(error => console.error(error));
 * ```
 * @interfaces
 * AndroidFingerprintAuthOptions
 */
@Plugin({
  pluginName: 'AndroidFingerprintAuth',
  plugin: 'cordova-plugin-android-fingerprint-auth',
  pluginRef: 'FingerprintAuth',
  repo: 'https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth'
})
export class AndroidFingerprintAuth {

  /**
   * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
   * @param options {AndroidFingerprintAuthOptions} Options
   * @returns {Promise<any>}
   */
  @Cordova()
  static show(options: AndroidFingerprintAuthOptions): Promise<{
    /**
     * Base64 encoded string
     */
    withFingerprint: string;
    /**
     *
     */
    withPassword: boolean;
  }> {return; }

  /**
   * Check if service is available
   * @returns {Promise<any>} Returns a Promise that resolves if fingerprint auth is available on the device
   */
  @Cordova()
  static isAvailable(): Promise<{isAvailable: boolean}> {return; }

}
