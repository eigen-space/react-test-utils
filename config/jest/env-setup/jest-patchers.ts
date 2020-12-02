import { MatchImagePatcher } from '@eigenspace/jest-screenshot-testing';
import { environment } from '../../../src/environments';

const matchImagePatcher = new MatchImagePatcher();

matchImagePatcher.do({
    screenshoterUrl: environment.apiUrls.screenshoter.base
});
