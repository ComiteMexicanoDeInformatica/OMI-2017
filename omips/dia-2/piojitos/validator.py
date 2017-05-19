#!/usr/bin/python
# -*- coding: utf-8 -*-

# Los mundos se tienen que llamar N.in
# donde N es la fila donde se apaga karel

import libkarel
import sys
import math
import traceback

ans = {
    13: [160,13, 6],
    15: [330,15, 15],
    18: [360,18, 15],
    19: [330,19, 15],
    21: [260,21, 10],
    22: [360,22, 15],
    24: [280,24, 10],
    31: [270,31, 10],
    32: [290,32, 10],
    34: [360,34, 15],
    40: [290,40, 10],
    41: [330,41, 15],
    53: [280,53, 15],
    65: [260,65, 10],
    74: [230,74, 10],
}

score = 0

try:
    _, k_out, test_case = libkarel.load()

    if k_out.error:
        raise Exception('EXECUTION FAILURE')

    Ns, _, _e = test_case.partition('.')
    N = int(Ns)

    answer = ans[N]
    ins_count = 0

    if k_out.x != answer[1] or k_out.y != answer[2]:
        sys.stderr.write("wrong answer: {} {}".format(k_out.x, k_out.y))
    else:
        ins_count = (k_out.instrucciones['avanza'] +
                     k_out.instrucciones['gira_izquierda'] +
                     k_out.instrucciones['coge_zumbador'] +
                     k_out.instrucciones['deja_zumbador'])
        ratio = float(answer[0]) / ins_count
        score = min(ratio, 1.0)
        if ratio < 0.25:
            score = ratio ** 2
        elif ratio >= 0.5:
            score = ratio ** 0.5
        elif ratio >= 0.75:
            score = ratio ** 0.2
        score = max(min(score, 1.0), 0.1);

        sys.stderr.write("instrucciones {}\tratio {}\tscore {} ".format(ins_count, ratio, score))
except Exception as e:
    sys.stderr.write(traceback.format_exc())
finally:
    print score
