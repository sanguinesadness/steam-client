import VictimIcon from '../icons/victim.svg';
import FakeIcon from '../icons/fake.svg';
import { v4 as uuidv4 } from 'uuid';
import { IVictim } from "../types/victim";
import { IFake } from "../types/fake";
import { UserTypes } from '../types/user';

export const victim: IVictim = {
    id: uuidv4(),
    type: UserTypes.VICTIM,
    name: "Victim",
    icon: VictimIcon,
    steamUser: null
};

export const fake: IFake = {
    id: uuidv4(),
    type: UserTypes.FAKE,
    name: "Fake",
    icon: FakeIcon,
    steamUser: null
};