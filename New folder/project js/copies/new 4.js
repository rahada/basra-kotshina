
int sum=0
// Prints sums of all subsets of arr[l..r]
function subsetSums(var =  deckCards[], var index, var deckCards.length)
{
    // Print current subset
    if (index==size1)
    {
 //       printf(" ((1)) %d %d %d \n\n",l,r,sum);
        cout << sum << " ";
        return;
    }
 //   cout<<"hiiii"<<endl;
    sum+=arr[index];
    // Subset including arr[l]
    subsetSums(arr, index+1, size1, sum );
//printf(" ((2)) %d %d %d \n\n",l,r,sum);
sum-=arr[index];
    // Subset excluding arr[l]
    subsetSums(arr, index+1, size1, sum);
//printf(" ((3)) %d %d %d \n\n",l,r,sum);
}

// Driver code
int main()
{
    int arr[] = {5, 4, 3};
    int n = sizeof(arr)/sizeof(arr[0]);
    subsetSums(arr, 0, n);
    return 0;
}

