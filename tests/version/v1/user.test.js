import { user } from "../../../version/v1/user";
import { describe, test, expect } from "@jest/globals";

describe("Se espera un saludo 'Hola mundo'", () => {
    test('Se esperaba un "Hola Mundo', () => {
        expect(user()).toBe("Hola mundo");
    });
    test('Se esperaba un "String"', () => {
        expect(typeof user()).toBe("string");
    });
    });
