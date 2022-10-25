import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from "constructs";

export interface HitCounterProps {
    downstream: lambda.IFunction;
}

export class HitCounter extends Construct {
    constructor(scope: Construct, id: string, props: HitCounterProps) {
        super(scope, id);

        // TODO
    }
}