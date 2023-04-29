"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_1 = require("@prisma/client");
let PrismaClientExceptionFilter = class PrismaClientExceptionFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const message = exception.message.replace(/\n/g, '');
        const regex = /Unique constraint failed on the fields: \(`(.*)`\)/;
        const matches = regex.exec(message);
        let field = '';
        if (matches) {
            field = matches[1];
        }
        let status;
        switch (exception.code) {
            case 'P2000':
                status = common_1.HttpStatus.BAD_REQUEST;
                console.log({
                    statusCode: status,
                    message: `The provided value for the field is too long for the field's type. field: ${field}`,
                });
                break;
            case 'P2002':
                status = common_1.HttpStatus.CONFLICT;
                return {
                    statusCode: status,
                    error: [`The product name is already exists.`],
                };
            case 'P2025':
                status = common_1.HttpStatus.BAD_REQUEST;
                console.log({
                    statusCode: status,
                    message,
                });
                break;
            default:
                super.catch(exception, host);
                break;
        }
    }
};
PrismaClientExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaClientExceptionFilter);
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter;
//# sourceMappingURL=prisma-client-exception.filter.js.map