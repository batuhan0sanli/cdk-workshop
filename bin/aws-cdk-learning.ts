#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkLearningStack } from '../lib/stacks/aws-cdk-learning-stack';

const app = new cdk.App();
new AwsCdkLearningStack(app, 'AwsCdkLearningStack');
