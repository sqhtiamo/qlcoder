function f(m,n)
{
    if(m==0)return n+1;
    if(n==0)return f(m-1,1);
    return f(m-1,f(m,n-1));
}


