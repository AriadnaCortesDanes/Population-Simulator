C=[1:100];
B=[    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    3,
    3,
    3,
    3,
    3,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    3,
    4,
    4,
    4,
    4,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6,
    5,
    5,
    5,
    5,
    5,
    5,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    3,
    3,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2];

A=[5,
    4,
    4,
    5,
    7,
    9,
    9,
    12,
    14,
    16,
    17,
    18,
    18,
    18,
    16,
    15,
    13,
    14,
    10,
    11,
    9,
    7,
    5,
    5,
    4,
    4,
    4,
    3,
    4,
    5,
    5,
    6,
    8,
    10,
    10,
    12,
    13,
    14,
    14,
    16,
    14,
    14,
    13,
    13,
    13,
    11,
    9,
    8,
    9,
    6,
    6,
    5,
    4,
    5,
    4,
    4,
    3,
    3,
    4,
    5,
    4,
    4,
    4,
    4,
    3,
    3,
    3,
    3,
    1,
    2,
    3,
    4,
    4,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    4,
    5,
    7,
    10,
    13,
    17,
    20,
    24,
    26,
    26,
    25,
    24,
    22,
    20,
    19]
figure(1)
plot(C,B,'b','linewidth',1.2)
title(' Relación entre conejos y lobos','fontsize',18)
xlabel('Día','fontsize',14)
ylabel('Número', 'fontsize',14)
grid on
hold on
plot(C,A,'c','linewidth',1.2)
legend('lobo','conejos')