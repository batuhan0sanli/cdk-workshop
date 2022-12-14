import { Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigw from 'aws-cdk-lib/aws-apigateway';

import { Construct } from 'constructs';
import { HitCounter } from "../constructs/hitcounter";

export class AwsCdkLearningStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandlerJs', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello_js.handler'
    })

    // define HelloHandlerJs function with hit counter
    const helloWithCounter = new HitCounter(this, "HitCounter", {
      downstream: hello
    })

    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, 'LearningStackApi', {
      handler: helloWithCounter.handler
    })
  }
}
