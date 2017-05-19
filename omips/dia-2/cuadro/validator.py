#!/usr/bin/python
# -*- coding: utf-8 -*-

# Los mundos se tienen que llamar N.in
# donde N es la fila donde se apaga karel

import libkarel
import sys
import math
import traceback

score = 0
dx = [0,1,0,-1]
dy = [1,0,-1,0]

def checkN(k_in):
    res = 0
    if k_in.zumbadores(7,1)>0:
        res = 7
    elif k_in.zumbadores(5,1)>0:
        res = 5
    else:
        res = 3
    return res

def getA(x,y,size,zum):
    res = []
    for i in range(4):
        for j in range(size-1):
            x += dx[i]
            y += dy[i]
            res.append(zum(x,y))
    return res

def compare(a,b):
    for i in range(len(a)):
        a = a[1:] + a[0:1]
        if cmp(a,b)==0:
            return True
    return False

def checkRotation(n,inZum,outZum):
    x = 1
    y = 1
    while n>1:
        a = getA(x,y,n,inZum)
        b = getA(x,y,n,outZum)
        if compare(a,b) == False:
            return False
        x += 1
        y += 1
        n -= 2
    return True

def checkSum(n,outZum):
    rsum = 0
    for y in range(n):
        rsum += outZum(1,y+1)

    for x in range(n):
        sum = 0
        for y in range(n):
            sum += outZum(x+1,y+1)
        if sum!=rsum:
            return False
    for y in range(n):
        sum = 0
        for x in range(n):
            sum += outZum(x+1,y+1)
        if sum!=rsum:
            return False
    
    sum = 0
    for i in range(n):
        sum += outZum(i+1,i+1)
    if sum!=rsum:
        return False
    sum = 0
    for i in range(n):
        sum += outZum(i+1,n-i)
    if sum!=rsum:
        return False
    return True
    
try:
    k_in, k_out, test_case = libkarel.load()

    if k_out.resultado != 'FIN PROGRAMA':
        raise Exception('EXECUTION FAILURE')
    
    n = checkN(k_in)
   
    #print checkRotation(n,k_in.zumbadores,k_out.zumbadores)
    #print checkSum(n,k_out.zumbadores)
    if checkRotation(n,k_in.zumbadores,k_out.zumbadores) and checkSum(n,k_out.zumbadores):
        score = 1

    #sys.stderr.write("instrucciones {}\tratio {}\tscore {} ".format(count, ratio, score))
except Exception as e:
    sys.stderr.write(traceback.format_exc())
finally:
    print score